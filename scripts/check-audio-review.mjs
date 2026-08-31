import { createHash } from "node:crypto";
import { readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";

const repoRoot = process.cwd();
const audioDir = join(repoRoot, "public", "audio");
const manifestPath = join(repoRoot, "docs", "AUDIO_REVIEW_MANIFEST.json");

const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const records = new Map(manifest.files.map((entry) => [entry.path, entry]));

function gitBlobSha1(buffer) {
  const header = Buffer.from(`blob ${buffer.length}\0`, "utf8");
  return createHash("sha1").update(header).update(buffer).digest("hex");
}

const actualPaths = readdirSync(audioDir)
  .filter((name) => name.toLowerCase().endsWith(".mp3"))
  .map((name) => relative(repoRoot, join(audioDir, name)).replaceAll("\\", "/"))
  .sort();

const manifestPaths = [...records.keys()].sort();
const errors = [];

for (const path of actualPaths) {
  const record = records.get(path);
  if (!record) {
    errors.push(`${path}: audio file is not registered in docs/AUDIO_REVIEW_MANIFEST.json`);
    continue;
  }

  const bytes = readFileSync(join(repoRoot, path));
  const sha = gitBlobSha1(bytes);

  if (sha !== record.git_blob_sha1) {
    errors.push(
      `${path}: fingerprint changed (${record.git_blob_sha1} -> ${sha}); semantic audio review and manifest update required`,
    );
  }

  if (bytes.length !== record.size_bytes) {
    errors.push(
      `${path}: size changed (${record.size_bytes} -> ${bytes.length}); review manifest is stale`,
    );
  }
}

for (const path of manifestPaths) {
  if (!actualPaths.includes(path)) {
    errors.push(`${path}: manifest references an audio file that no longer exists`);
  }
}

if (errors.length > 0) {
  console.error("Audio review fingerprint check FAILED:\n");
  for (const error of errors) console.error(`- ${error}`);
  console.error(
    "\nReview only the changed/new audio, then update docs/AUDIO_REVIEW_MANIFEST.json with the new fingerprint, review date, basis, and status.",
  );
  process.exit(1);
}

console.log(
  `Audio review fingerprint check passed: ${actualPaths.length} MP3 files are byte-for-byte unchanged from the recorded review baseline (${manifest.baseline_recorded_on}).`,
);
