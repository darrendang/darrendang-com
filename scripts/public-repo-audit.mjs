import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const ignoredDirs = new Set(['.git', 'node_modules', '.next', 'out']);
const forbiddenPathFragments = [
  'docs/project-canon',
  'MASTER_PROJECT_INSTRUCTIONS',
  'DECISION_LOG',
  'PUBLIC_PROFILE_AND_CREDIBILITY_CANON',
  'CTO_Packet',
  'short bio',
  'LA Times High School',
];
const forbiddenExtensions = new Set(['.docx', '.pptx']);
const secretPatterns = [
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
  /github_pat_[A-Za-z0-9_]+/,
  /ghp_[A-Za-z0-9]+/,
  /(?:api[_-]?key|secret|token)\s*[:=]\s*["']?[A-Za-z0-9_\-]{20,}/i,
  /[A-Za-z0-9._%+-]+@(gmail|yahoo|hotmail|outlook)\.com/i,
  /\b(?:\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]\d{3}[-.\s]\d{4}\b/,
];

const failures = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignoredDirs.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    const rel = path.relative(root, full).replaceAll(path.sep, '/');

    if (forbiddenPathFragments.some((fragment) => rel.toLowerCase().includes(fragment.toLowerCase()))) {
      failures.push(`Forbidden internal/source path: ${rel}`);
    }

    if (entry.isDirectory()) {
      walk(full);
      continue;
    }

    if (forbiddenExtensions.has(path.extname(entry.name).toLowerCase())) {
      failures.push(`Forbidden source-document extension: ${rel}`);
      continue;
    }

    const stat = fs.statSync(full);
    if (stat.size > 2_000_000) continue;
    let text;
    try { text = fs.readFileSync(full, 'utf8'); } catch { continue; }
    for (const pattern of secretPatterns) {
      if (pattern.test(text)) {
        failures.push(`Potential private/secret content in: ${rel}`);
        break;
      }
    }
  }
}

walk(root);

if (failures.length) {
  console.error('Public repository audit FAILED:\n' + failures.map((x) => `- ${x}`).join('\n'));
  process.exit(1);
}

console.log('Public repository audit passed.');
