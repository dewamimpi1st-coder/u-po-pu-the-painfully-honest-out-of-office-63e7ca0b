// The Painfully Honest Out-of-Office — make.fun bounty entry.
//
// This program is deterministic and uses only the Node 22 standard
// library (no network, no dependencies). It writes a single original
// out-of-office sentence to /output/entry.txt, creating /output first.
// The entry is gated to 1-200 characters, and the file is read back
// afterwards to verify its contents match the entry exactly.
// MAKEFUN_OUTPUT_DIR overrides the output directory (for local testing
// only); the default, and the path used on submission, is /output.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I'm out of office until Monday, and honestly, your email will be one of the 200 unread messages I'll return to with fresh energy, after deleting most of them first.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(
    `Entry must be 1-200 characters, got ${ENTRY.length}: ${ENTRY}`,
  );
}

const trimmed = ENTRY.trim();
if (trimmed !== ENTRY) {
  throw new Error("Entry must not have leading or trailing whitespace.");
}
if (!trimmed.endsWith(".")) {
  throw new Error("Entry must be a single sentence ending with a period.");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, ENTRY, "utf8");

const readBack = readFileSync(OUTPUT_FILE, "utf8");
if (readBack !== ENTRY) {
  throw new Error(
    `Read-back verification failed: file contains ${JSON.stringify(readBack)}`,
  );
}

console.log(`Wrote ${ENTRY.length}-character entry to ${OUTPUT_FILE}`);
