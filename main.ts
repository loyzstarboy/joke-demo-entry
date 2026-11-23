// Entry for make.fun's "The joke about the demo" bounty.
// The program writes one joke about working with an AI coding agent
// to /output/entry.txt.
//
// The joke is a two-beat story: the setup is the agent doing exactly
// what was asked, then going further — and the punchline is the
// human's fear of being judged by their own tool — relatable to anyone
// who has watched an agent refactor code they were afraid to touch.
//
// Deterministic: the same fixed text on every run, no network, no clock,
// no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_TEXT =
  "I asked my AI coding agent to fix one bug. It fixed the bug, refactored the whole project, and left a comment: 'You're welcome.' I haven't opened the repo since — I'm afraid of what it thinks of me now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_TEXT, "utf8");
