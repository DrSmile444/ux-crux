#!/usr/bin/env node
// Generates two distributions from src/skills/<domain>/ (the canonical source):
//   skills/ux-crux-<domain>/    - standalone distribution, for skills.sh / npx skills add
//   plugin/skills/<domain>/     - plugin distribution, for the Claude/Codex plugin
//
// Every generated skill package is self-contained: src/shared/*.md is copied
// into a shared/ subfolder inside each generated package, and the SKILL.md /
// references links are rewritten to point at that local copy instead of the
// canonical src/shared/ location.
import fs from "node:fs";
import path from "node:path";
import {
  ROOT,
  DOMAINS,
  readPackageVersion,
  walkFiles,
  rewriteFrontmatterName,
  rewriteFrontmatterVersion,
  rewriteSharedPathsSkillMd,
  rewriteSharedPathsReference,
  rewriteSharedPathsNestedDomainReference,
  markFrontmatterInternal,
  ensureEmptyDir,
} from "./lib.mjs";

const version = readPackageVersion();
const sharedDir = path.join(ROOT, "src", "shared");
const sharedFiles = fs.readdirSync(sharedDir).filter((f) => f.endsWith(".md"));

function buildOne(domain, { outDir, skillName, internal = false }) {
  const srcDir = path.join(ROOT, "src", "skills", domain);
  ensureEmptyDir(outDir);

  // SKILL.md
  let skillMd = fs.readFileSync(path.join(srcDir, "SKILL.md"), "utf8");
  skillMd = rewriteFrontmatterName(skillMd, skillName);
  skillMd = rewriteFrontmatterVersion(skillMd, version);
  skillMd = rewriteSharedPathsSkillMd(skillMd);
  if (internal) skillMd = markFrontmatterInternal(skillMd);
  fs.writeFileSync(path.join(outDir, "SKILL.md"), skillMd);

  // references/
  const refsSrcDir = path.join(srcDir, "references");
  if (fs.existsSync(refsSrcDir)) {
    for (const file of walkFiles(refsSrcDir)) {
      const rel = path.relative(refsSrcDir, file);
      const destPath = path.join(outDir, "references", rel);
      fs.mkdirSync(path.dirname(destPath), { recursive: true });
      let content = fs.readFileSync(file, "utf8");
      content = rewriteSharedPathsReference(content);
      fs.writeFileSync(destPath, content);
    }
  }

  // shared/ (copied verbatim into every generated package so it is self-contained)
  fs.mkdirSync(path.join(outDir, "shared"), { recursive: true });
  for (const file of sharedFiles) {
    fs.copyFileSync(path.join(sharedDir, file), path.join(outDir, "shared", file));
  }

  return { skillName, outDir };
}

const results = { standalone: [], plugin: [] };

for (const domain of DOMAINS) {
  results.standalone.push(
    buildOne(domain, {
      outDir: path.join(ROOT, "skills", `ux-crux-${domain}`),
      skillName: `ux-crux-${domain}`,
    })
  );
  results.plugin.push(
    buildOne(domain, {
      outDir: path.join(ROOT, "plugin", "skills", domain),
      skillName: domain,
      // Hidden from skills.sh discovery: since .claude-plugin/ and
      // .codex-plugin/ moved to the repo root (required for `owner/repo`
      // remote plugin installs to work), plugin/skills/<domain> now reads
      // as an ordinary top-level skill dir to a generic crawler too. Without
      // this it would be discoverable twice, under both its short name here
      // and its ux-crux-<domain> name in skills/ - metadata.internal hides
      // this copy so ux-crux-<domain> is the only one skills.sh lists.
      internal: true,
    })
  );
}

console.log(`Built ${results.standalone.length} standalone skills into skills/ (version ${version}):`);
for (const r of results.standalone) console.log(`  - ${r.skillName}`);
console.log(`Built ${results.plugin.length} plugin skills into plugin/skills/ (version ${version}):`);
for (const r of results.plugin) console.log(`  - ${r.skillName}`);

// review must be self-contained: bundle every OTHER domain's references/
// into review's own generated package under domains/<domain>/, so review
// works fully even when installed alone (skills.sh has no dependency
// mechanism - installing one skill never pulls in another).
const OTHER_DOMAINS = DOMAINS.filter((d) => d !== "review");
const reviewPackageDirs = [
  path.join(ROOT, "skills", "ux-crux-review"),
  path.join(ROOT, "plugin", "skills", "review"),
];
let bundledDomainFileCount = 0;
for (const reviewDir of reviewPackageDirs) {
  const domainsOutDir = path.join(reviewDir, "domains");
  ensureEmptyDir(domainsOutDir);
  for (const domain of OTHER_DOMAINS) {
    const domainRefsSrc = path.join(ROOT, "src", "skills", domain, "references");
    if (!fs.existsSync(domainRefsSrc)) continue;
    for (const file of walkFiles(domainRefsSrc)) {
      const rel = path.relative(domainRefsSrc, file);
      const destPath = path.join(domainsOutDir, domain, rel);
      fs.mkdirSync(path.dirname(destPath), { recursive: true });
      let content = fs.readFileSync(file, "utf8");
      content = rewriteSharedPathsNestedDomainReference(content);
      fs.writeFileSync(destPath, content);
      bundledDomainFileCount++;
    }
  }
}
console.log(`Bundled ${bundledDomainFileCount} domain reference file(s) into each review package's domains/ (${OTHER_DOMAINS.join(", ")}).`);

// evals/ is authored once at the repo root (alongside src/) and copied
// verbatim into plugin/evals/, because `claude plugin eval <plugin-path>`
// looks for the eval dir below the plugin root, not at the repo root.
const evalsSrcDir = path.join(ROOT, "evals");
const evalsOutDir = path.join(ROOT, "plugin", "evals");
ensureEmptyDir(evalsOutDir);
let evalFileCount = 0;
for (const file of walkFiles(evalsSrcDir)) {
  const rel = path.relative(evalsSrcDir, file);
  const destPath = path.join(evalsOutDir, rel);
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.copyFileSync(file, destPath);
  evalFileCount++;
}
console.log(`Copied ${evalFileCount} eval file(s) into plugin/evals/ (for \`claude plugin eval ./plugin\`).`);
