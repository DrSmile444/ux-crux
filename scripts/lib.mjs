// Shared helpers for the ux-crux build/version/validate scripts.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

export const DOMAINS = [
  "review",
  "usability",
  "psychology",
  "accessibility",
  "product",
  "trust",
];

export function readPackageVersion() {
  const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, "package.json"), "utf8"));
  return pkg.version;
}

export function walkFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkFiles(full));
    else out.push(full);
  }
  return out;
}

export function rewriteFrontmatterName(content, newName) {
  return content.replace(/^(---\n(?:.*\n)*?name: )([^\n]+)(\n)/, `$1${newName}$3`);
}

export function rewriteFrontmatterVersion(content, newVersion) {
  const hasVersionField = /^(---\n(?:.*\n)*?  version: )"[^"]*"(\n)/m.test(content);
  if (hasVersionField) {
    return content.replace(/^(---\n(?:.*\n)*?  version: )"[^"]*"(\n)/m, `$1"${newVersion}"$2`);
  }
  return content;
}

export function rewriteSharedPathsSkillMd(content) {
  // src/skills/<domain>/SKILL.md uses ../../shared/... ; the generated package
  // keeps shared/ as a direct sibling of SKILL.md, so it becomes shared/...
  return content.replaceAll("../../shared/", "shared/");
}

export function rewriteSharedPathsReference(content) {
  // src/skills/<domain>/references/*.md uses ../../../shared/... ; the
  // generated package keeps shared/ one level up from references/, so it
  // becomes ../shared/...
  return content.replaceAll("../../../shared/", "../shared/");
}

export function rewriteSharedPathsNestedDomainReference(content) {
  // When a domain's references/*.md is copied into review's package under
  // domains/<domain>/*.md, it sits two levels deep from the package root
  // (domains/<domain>/ instead of references/), so its original
  // ../../../shared/... link becomes ../../shared/..., not ../shared/....
  return content.replaceAll("../../../shared/", "../../shared/");
}

export function markFrontmatterInternal(content) {
  // Marks the plugin distribution's SKILL.md as internal (metadata.internal:
  // true) so skills.sh's discovery hides it from normal listing/install -
  // the standalone ux-crux-<domain> copy is the one meant to be discovered
  // there. Without this, plugin/skills/<domain> (short names) would show up
  // as loose top-level skills alongside the intentional ux-crux-<domain>
  // ones once .claude-plugin/ and .codex-plugin/ moved to the repo root.
  if (/^(---\n(?:.*\n)*?  internal: )/m.test(content)) {
    return content.replace(/^(---\n(?:.*\n)*?  internal: )(true|false)(\n)/m, `$1true$3`);
  }
  return content.replace(/^(---\n(?:.*\n)*?metadata:\n)/m, `$1  internal: true\n`);
}

export function ensureEmptyDir(dir) {
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
}
