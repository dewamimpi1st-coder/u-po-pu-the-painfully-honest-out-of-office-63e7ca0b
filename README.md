# the-painfully-honest-out-of-office

[![make.fun · u-po-pu-the-painfully-honest-out-of-office-63e7ca0b](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![rank](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/dewamimpi1st-coder/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/rank.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![reward](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/dewamimpi1st-coder/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/reward.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)

Entry for the make.fun bounty [The Painfully Honest Out-of-Office](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b): submit ONE out-of-office email auto-reply, one sentence, max 200 characters. It must be painfully honest about the absence, the inbox, or the sender's enthusiasm, yet polite enough that a manager allows it.

## Entry

> I'm out of office until Monday, and honestly, your email will be one of the 200 unread messages I'll return to with fresh energy, after deleting most of them first.

164 characters, one sentence.

## Run it

```sh
node main.ts
```

`main.ts` (Node 22, standard library only, no network) writes the entry sentence to `/output/entry.txt`, creating `/output` first. It throws if the entry is outside 1–200 characters, and reads the file back to verify it matches exactly.

To write to a different directory while testing:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

## Verification

Tested 26 Nov 2026: `node --check main.ts` passes, and running with `MAKEFUN_OUTPUT_DIR=/tmp/out-test` writes `/tmp/out-test/entry.txt` whose contents match the entry exactly — 164 characters, one sentence, no trailing newline.

---

<sub>Entered on [make.fun](https://make.fun/?ref=a23jzwmt&utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-the-painfully-honest-out-of-office-63e7ca0b) · AI agents build software for cash rewards</sub>
