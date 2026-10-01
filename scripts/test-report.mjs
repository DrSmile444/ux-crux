#!/usr/bin/env node
// Renders every evals/report/fixtures/*.findings.json into a report page and
// checks it in headless Chromium: structure, labels, triage round trip,
// offline loading, phone width, and dark mode. Costs no model credits.
//   npm run test:report               run the checks
//   npm run test:report -- --preview  also write ux-crux-reports/report-preview.png
// Needs the playwright dev dependency and its Chromium (`npx playwright install chromium`).
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { ROOT } from "./lib.mjs";
import { validateFindings, embedImages, renderHtml } from "../src/shared/render-report.mjs";

let chromium;
try {
  ({ chromium } = await import("playwright"));
} catch {
  console.error("test:report: playwright is not installed — run `npm install` and `npx playwright install chromium`.");
  process.exit(1);
}

const preview = process.argv.includes("--preview");
const fixturesDir = path.join(ROOT, "evals", "report", "fixtures");
const outDir = fs.mkdtempSync(path.join(os.tmpdir(), "ux-crux-report-"));
const failures = [];
const short = (id) => {
  const [file, rule] = id.split("#");
  return `${file.split("/")[0]} · ${rule}`;
};

const browser = await chromium.launch();
for (const name of fs.readdirSync(fixturesDir).filter((f) => f.endsWith(".findings.json"))) {
  const tag = name.replace(".findings.json", "");
  const fail = (m) => failures.push(`${tag}: ${m}`);
  const d = JSON.parse(fs.readFileSync(path.join(fixturesDir, name), "utf8"));
  const errors = validateFindings(d);
  if (errors.length) {
    errors.forEach(fail);
    continue;
  }
  const file = path.join(outDir, `${tag}.html`);
  fs.writeFileSync(file, renderHtml(embedImages(structuredClone(d), fixturesDir)));
  const url = pathToFileURL(file).href;

  const context = await browser.newContext({ viewport: { width: 1100, height: 900 } });
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  const page = await context.newPage();
  const requests = [];
  page.on("request", (r) => {
    if (r.url() !== url && !r.url().startsWith("data:")) requests.push(r.url());
  });
  page.on("console", (m) => m.type() === "error" && fail(`console error: ${m.text()}`));
  page.on("pageerror", (e) => fail(`page error: ${e.message}`));
  await page.goto(url);

  if (requests.length) fail(`network requests: ${requests.join(", ")}`);
  if ((await page.getAttribute("html", "lang")) !== d.language) fail("html lang does not match the findings language");
  if (d.strings?.copy && (await page.textContent("#copy")) !== d.strings.copy) fail("UI strings are not translated");

  if (!(await page.locator("#brand svg").count()) || !(await page.locator("footer.sig svg").count())) fail("UX Crux mark missing from the header or the footer");
  if (!(await page.locator('link[rel="icon"][href^="data:image/svg+xml"]').count())) fail("favicon missing");

  const cards = page.locator("article.f");
  if ((await cards.count()) !== d.findings.length) fail(`expected ${d.findings.length} cards, got ${await cards.count()}`);
  for (const f of d.findings) {
    const card = page.locator(`article[id="${f.id}"]`);
    const text = await card.innerText();
    for (const id of f.source_ids) {
      if (!text.toLowerCase().includes(short(id).toLowerCase())) fail(`${f.id}: rule ${short(id)} not shown`);
      if (!text.includes(d.rules[id].sources)) fail(`${f.id}: sources of ${id} not shown`);
    }
    if ((await card.locator(".rec").count()) !== 1) fail(`${f.id}: expected exactly one Recommended badge`);
    const panels = f.picture?.panels || [];
    const after = panels.filter((p) => p.role === "after").length;
    if ((await card.locator(".lbl.proposal").count()) !== after) fail(`${f.id}: every after panel needs a Proposal label`);
    const before = f.evidence_status === "NOT_ASSESSABLE" ? 0 : panels.filter((p) => p.role === "before").length;
    const beforeLabel = f.picture?.tier === "capture" ? ".lbl:not(.proposal):not(.recon)" : ".lbl.recon";
    if ((await card.locator(beforeLabel).count()) !== before) fail(`${f.id}: before panels need the ${f.picture?.tier === "capture" ? "Captured" : "Reconstruction"} label`);
    if (f.evidence_status === "NOT_ASSESSABLE" && (await card.locator(".lbl:not(.proposal)").count())) fail(`${f.id}: NOT_ASSESSABLE card shows a before picture`);
    const triage = ["wont-fix", "not-an-issue", "defer"].concat(["LIKELY", "RISK"].includes(f.evidence_status) ? ["verify-first"] : []);
    for (const k of triage) if (!(await card.locator(`input[value="${k}"]`).count())) fail(`${f.id}: triage option ${k} missing`);
  }

  const multiStep = (d.flows || []).some((fl) => fl.steps.length > 1);
  if (multiStep !== (await page.locator("#flow").count()) > 0) fail("flow map presence does not match the flow steps");
  const unreached = (d.flows || []).flatMap((fl) => fl.steps).filter((s) => s.status === "not_reached").length;
  if (multiStep && (await page.locator("#flow .step.nr").count()) !== unreached) fail("unreached steps are not marked");

  const hasChecklist = (await page.locator("#checklist").count()) > 0;
  if (hasChecklist !== (d.mode === "full")) fail("checklist appendix must appear only in full mode");
  if (hasChecklist) {
    if ((await page.locator("#checklist details").getAttribute("open")) !== null) fail("checklist must start collapsed");
    for (const href of await page.locator("#checklist tbody a").evaluateAll((as) => as.map((a) => a.getAttribute("href")))) {
      if (!(await page.locator(`article[id="${href.slice(1)}"]`).count())) fail(`checklist link ${href} has no card`);
    }
  }

  // Triage round trip: pick, reload, comment, copy.
  const [f1, f2] = d.findings;
  await page.locator(`article[id="${f1.id}"] input[value="a"]`).check();
  await page.reload();
  if (!(await page.locator(`article[id="${f1.id}"] input[value="a"]`).isChecked())) fail("choice did not survive a reload");
  if (f2) {
    await page.locator(`article[id="${f2.id}"] input[value="not-an-issue"]`).check();
    await page.locator(`article[id="${f2.id}"] textarea`).fill("already handled");
  }
  await page.click("#copy");
  const ids = (f) => f.source_ids.map((s) => s.split("#")[1]).join(", ");
  const expected = [`${f1.id} (${ids(f1)}): a`].concat(f2 ? [`${f2.id} (${ids(f2)}): not-an-issue — already handled`] : []).join("\n");
  if ((await page.inputValue("#out")) !== expected) fail(`copied decisions differ:\n${await page.inputValue("#out")}\nexpected:\n${expected}`);
  if ((await page.evaluate(() => navigator.clipboard.readText())) !== expected) fail("clipboard does not hold the decisions");

  // Phone width and dark mode.
  await page.setViewportSize({ width: 375, height: 800 });
  if (await page.evaluate(() => document.documentElement.scrollWidth > 375)) fail("horizontal scroll at 375px");
  await page.emulateMedia({ colorScheme: "dark" });
  const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  const [r, g, b] = bg.match(/\d+/g).map(Number);
  if (0.2126 * r + 0.7152 * g + 0.0722 * b > 60) fail(`dark mode background is light (${bg})`);

  if (preview && tag === "signup-flow") {
    await page.emulateMedia({ colorScheme: "light" });
    await page.evaluate(() => localStorage.clear());
    await page.setViewportSize({ width: 1100, height: 900 });
    await page.reload();
    await page.evaluate(() => {
      document.getElementById("dock").hidden = true;
      window.scrollTo(0, 0);
    });
    const target = path.join(ROOT, "ux-crux-reports", "report-preview.png");
    fs.mkdirSync(path.dirname(target), { recursive: true });
    await page.screenshot({ path: target, clip: { x: 0, y: 0, width: 1100, height: 1480 }, fullPage: true });
    console.log(`test:report: wrote ${path.relative(ROOT, target)}`);
  }
  await context.close();
  console.log(`test:report: ${tag} checked`);
}
await browser.close();
fs.rmSync(outDir, { recursive: true, force: true });

if (failures.length) {
  console.error(`\ntest:report: FAILED\n  - ${failures.join("\n  - ")}`);
  process.exit(1);
}
console.log("\ntest:report: all report checks passed.");
