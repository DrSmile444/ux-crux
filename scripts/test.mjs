#!/usr/bin/env node
// Runs the ux-crux eval suite (evals/**/prompt.md + graders/*.md, the format
// `claude plugin eval` consumes).
//
// By default this only runs a free, deterministic structural preflight over
// every eval case (valid frontmatter, non-empty prompt/grader bodies) — it
// does NOT spend real model credits. Live grading via `claude plugin eval`
// is a real, costed agent run against your own account, so it only runs when
// explicitly requested with --live (or RUN_LIVE_EVALS=1), and even then only
// after the preflight passes.
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { ROOT, walkFiles } from "./lib.mjs";

const args = process.argv.slice(2);
const runLive = args.includes("--live") || process.env.RUN_LIVE_EVALS === "1";

function parseFrontmatter(content) {
  const m = content.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) return null;
  const fm = {};
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (kv) fm[kv[1]] = kv[2];
  }
  return { fields: fm, body: content.slice(m[0].length).trim() };
}

function findCaseDirs() {
  const evalsDir = path.join(ROOT, "evals");
  const dirs = [];
  for (const domainEntry of fs.readdirSync(evalsDir, { withFileTypes: true })) {
    if (!domainEntry.isDirectory() || domainEntry.name === "results") continue;
    const domainDir = path.join(evalsDir, domainEntry.name);
    for (const caseEntry of fs.readdirSync(domainDir, { withFileTypes: true })) {
      if (!caseEntry.isDirectory()) continue;
      const caseDir = path.join(domainDir, caseEntry.name);
      if (fs.existsSync(path.join(caseDir, "prompt.md"))) dirs.push(caseDir);
    }
  }
  return dirs;
}

let failures = [];
const caseDirs = findCaseDirs();

if (caseDirs.length === 0) {
  failures.push("no eval cases found under evals/ — expected at least one <domain>/<case>/prompt.md");
}

for (const caseDir of caseDirs) {
  const rel = path.relative(ROOT, caseDir);
  const promptPath = path.join(caseDir, "prompt.md");
  const promptContent = fs.readFileSync(promptPath, "utf8");
  const prompt = parseFrontmatter(promptContent);
  if (!prompt) {
    failures.push(`${rel}/prompt.md: missing or malformed frontmatter`);
  } else {
    if (!prompt.fields.max_turns) failures.push(`${rel}/prompt.md: missing max_turns`);
    if (!prompt.fields.allowed_tools) failures.push(`${rel}/prompt.md: missing allowed_tools`);
    if (!prompt.body) failures.push(`${rel}/prompt.md: empty body`);
  }

  const gradersDir = path.join(caseDir, "graders");
  if (!fs.existsSync(gradersDir)) {
    failures.push(`${rel}/graders/: missing directory`);
    continue;
  }
  const graderFiles = fs.readdirSync(gradersDir).filter((f) => f.endsWith(".md"));
  if (graderFiles.length === 0) {
    failures.push(`${rel}/graders/: no grader files`);
  }
  for (const gf of graderFiles) {
    const content = fs.readFileSync(path.join(gradersDir, gf), "utf8");
    const grader = parseFrontmatter(content);
    if (!grader) {
      failures.push(`${rel}/graders/${gf}: missing or malformed frontmatter`);
      continue;
    }
    if (!grader.fields.type) failures.push(`${rel}/graders/${gf}: missing type`);
    if (!grader.body) failures.push(`${rel}/graders/${gf}: empty body`);
  }
}

if (failures.length > 0) {
  console.error(`test: preflight FAILED (${caseDirs.length} case(s) scanned)\n`);
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}

console.log(`test: preflight passed — ${caseDirs.length} eval case(s) structurally valid.`);

if (!runLive) {
  console.log("test: skipping live grading (pass --live or set RUN_LIVE_EVALS=1 to run real `claude plugin eval`, which spends real model credits on your account).");
  process.exit(0);
}

console.log("test: running live evals via `claude plugin eval` ...");
try {
  execFileSync("claude", ["plugin", "eval", "./plugin", "--trust-plugin", "--threshold", "1.0"], {
    stdio: "inherit",
    cwd: ROOT,
  });
} catch (err) {
  console.error("test: live eval run failed or scored below threshold.");
  process.exit(1);
}
