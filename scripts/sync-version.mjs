#!/usr/bin/env node
// Propagates package.json's version into both plugin manifests, so there is
// exactly one version source of truth (design.md decision 5).
import fs from "node:fs";
import path from "node:path";
import { ROOT, readPackageVersion } from "./lib.mjs";

const version = readPackageVersion();

const targets = [
  path.join(ROOT, ".claude-plugin", "plugin.json"),
  path.join(ROOT, ".codex-plugin", "plugin.json"),
];

let changed = 0;
for (const file of targets) {
  if (!fs.existsSync(file)) {
    console.error(`sync-version: missing manifest ${file}`);
    process.exitCode = 1;
    continue;
  }
  const manifest = JSON.parse(fs.readFileSync(file, "utf8"));
  if (manifest.version !== version) {
    manifest.version = version;
    fs.writeFileSync(file, JSON.stringify(manifest, null, 2) + "\n");
    changed++;
    console.log(`sync-version: updated ${path.relative(ROOT, file)} -> ${version}`);
  } else {
    console.log(`sync-version: ${path.relative(ROOT, file)} already at ${version}`);
  }
}

console.log(`sync-version: package.json=${version}; ${changed} manifest(s) updated.`);
