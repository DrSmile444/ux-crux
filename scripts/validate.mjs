#!/usr/bin/env node
// Three checks:
//   1. Shared-model drift: every generated shared/*.md must be byte-identical
//      to src/shared/*.md (it should only ever be produced by build.mjs).
//   2. Review-bundle drift: every file under a review package's domains/<d>/
//      must match that domain's real src/skills/<d>/references/ content
//      (after the same path rewrite build.mjs applies).
//   3. Version-bump enforcement: if generated skill content differs from the
//      last recorded snapshot, package.json's version must have changed too.
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { ROOT, DOMAINS, readPackageVersion, walkFiles, rewriteSharedPathsNestedDomainReference } from "./lib.mjs";

const SNAPSHOT_PATH = path.join(ROOT, ".build-snapshot.json");
const version = readPackageVersion();
let failures = [];

// --- 1. Shared-model drift check ---
const sharedDir = path.join(ROOT, "src", "shared");
const sharedFiles = fs.readdirSync(sharedDir).filter((f) => f.endsWith(".md"));

for (const domain of DOMAINS) {
  for (const genRoot of [
    path.join(ROOT, "skills", `ux-crux-${domain}`),
    path.join(ROOT, "plugin", "skills", domain),
  ]) {
    for (const file of sharedFiles) {
      const genFile = path.join(genRoot, "shared", file);
      const srcFile = path.join(sharedDir, file);
      if (!fs.existsSync(genFile)) {
        failures.push(`drift: ${path.relative(ROOT, genFile)} is missing (run npm run build)`);
        continue;
      }
      const genContent = fs.readFileSync(genFile, "utf8");
      const srcContent = fs.readFileSync(srcFile, "utf8");
      if (genContent !== srcContent) {
        failures.push(
          `drift: ${path.relative(ROOT, genFile)} does not match src/shared/${file} — edit the source, not the generated copy, then rebuild`
        );
      }
    }
  }
}

// --- 2. Review-bundle drift check ---
const OTHER_DOMAINS = DOMAINS.filter((d) => d !== "review");

for (const reviewRoot of [
  path.join(ROOT, "skills", "ux-crux-review"),
  path.join(ROOT, "plugin", "skills", "review"),
]) {
  for (const domain of OTHER_DOMAINS) {
    const domainRefsSrc = path.join(ROOT, "src", "skills", domain, "references");
    if (!fs.existsSync(domainRefsSrc)) continue;
    for (const file of walkFiles(domainRefsSrc)) {
      const rel = path.relative(domainRefsSrc, file);
      const bundledFile = path.join(reviewRoot, "domains", domain, rel);
      const expectedContent = rewriteSharedPathsNestedDomainReference(fs.readFileSync(file, "utf8"));
      if (!fs.existsSync(bundledFile)) {
        failures.push(
          `drift: ${path.relative(ROOT, bundledFile)} is missing (run npm run build)`
        );
        continue;
      }
      const bundledContent = fs.readFileSync(bundledFile, "utf8");
      if (bundledContent !== expectedContent) {
        failures.push(
          `drift: ${path.relative(ROOT, bundledFile)} does not match src/skills/${domain}/references/${rel} — edit the source, not review's bundled copy, then rebuild`
        );
      }
    }
  }
}

// --- 3. Version-bump enforcement ---
function hashGeneratedContent() {
  const hash = crypto.createHash("sha256");
  const roots = [path.join(ROOT, "skills"), path.join(ROOT, "plugin", "skills")];
  const files = roots.flatMap((r) => walkFiles(r)).sort();
  for (const file of files) {
    hash.update(path.relative(ROOT, file));
    hash.update(fs.readFileSync(file));
  }
  return hash.digest("hex");
}

const currentHash = hashGeneratedContent();

if (!fs.existsSync(SNAPSHOT_PATH)) {
  fs.writeFileSync(SNAPSHOT_PATH, JSON.stringify({ version, hash: currentHash }, null, 2) + "\n");
  console.log(`validate: no snapshot found, created one at version ${version}.`);
} else {
  const snapshot = JSON.parse(fs.readFileSync(SNAPSHOT_PATH, "utf8"));
  if (snapshot.hash === currentHash) {
    console.log("validate: generated content unchanged since last snapshot — OK.");
  } else if (snapshot.version === version) {
    failures.push(
      `version: generated skill content changed (snapshot was version ${snapshot.version}) but package.json's version was not bumped. Bump the version before release.`
    );
  } else {
    fs.writeFileSync(SNAPSHOT_PATH, JSON.stringify({ version, hash: currentHash }, null, 2) + "\n");
    console.log(`validate: content changed and version was bumped ${snapshot.version} -> ${version} — OK. Snapshot updated.`);
  }
}

if (failures.length > 0) {
  console.error("\nvalidate: FAILED\n");
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}

console.log("\nvalidate: all checks passed.");
