# Contributing to The Missing NLP Paper Guide

Thanks for considering a contribution. This guide is better when more experienced authors share what they have learned. Below are the rules — they exist because a community resource only stays useful if it stays principled.

## What we want

In rough order of priority:

1. **More examples.** Papers from your subfield that exemplify a specific craft point in a chapter. See [Example contributions](#example-contributions) below.
2. **Corrections.** Broken links, outdated rules (the ACL CFP changes year to year), debunked claims.
3. **Translations.** The audience is global. See [Translations](#translations).
4. **New sub-sections.** If you have advice on a genre we under-cover (system demos, shared-task papers, position papers, survey papers, dataset papers), open an issue first.
5. **Tone-edits.** If a passage reads like AI-generated filler, propose a tighter rewrite.

## What we do not want

- **AI-generated examples.** Every paper cited in this guide must be one a human contributor has actually read. If you used an LLM to find candidates, that is fine; verify the paper exists on the ACL Anthology, verify the authors are correct, verify the venue and year, and verify your characterization of what the paper does well by reading it.
- **Promotion of your own group's papers** unless they genuinely belong in their slot. Self-citation is normal; gratuitous self-promotion is not. Reviewers reading the guide will notice.
- **Long abstract rewrites** of existing chapters. Small targeted edits beat sweeping rewrites.
- **Tone slippage.** No hedging ("might possibly potentially"), no buzzwords ("novel paradigm-shifting framework"), no AI-style enumerated bullets where prose would do.

## Style rules

Read [STYLE.md](STYLE.md) before opening a PR. Summary:

- First person plural ("we") or impersonal — never "I" except in clearly-marked editorial asides.
- Active voice over passive.
- Concrete over abstract. "Reviewers are tired" beats "reviewer fatigue is a known phenomenon."
- Cite primary sources. ACL Anthology over arXiv when both exist.
- No emoji. No "🚀". No "exciting." Reviewers do not find your work exciting; they find it acceptable or not.
- Sentences under 25 words where possible.
- Use \*ACL (with the asterisk and italics) for the conference family; ACL alone refers to the conference and the association.

## Example contributions

The single most valuable contribution is adding a high-quality example to a chapter.

A valid example:

- Is a peer-reviewed \*ACL paper (ACL/EMNLP/NAACL/EACL/AACL/Findings/TACL/CL) or a comparable venue (NeurIPS/ICLR/ICML/FAccT) when explicitly justified.
- Has a stable ACL Anthology or DOI link.
- Demonstrates the specific craft point of the chapter, not just "this is a good paper."
- Comes with a one-sentence reason why it exemplifies the point.

**How to add one:**

1. Add the paper to [`examples/examples.yaml`](examples/examples.yaml) in the appropriate section.
2. Add the BibTeX entry to [`examples/papers-to-read.bib`](examples/papers-to-read.bib).
3. Reference it in the relevant chapter file. Keep the chapter list at exactly five examples — if you add a sixth, you must argue for swapping one out.
4. Open a PR titled `examples(chapter-N): add <short paper handle>`.

## Translations

Translations live under `translations/<language-code>/`. We follow the ISO 639-1 two-letter codes (`zh` for Chinese, `es` for Spanish, `de` for German, etc.).

Rules:

- Translate the whole guide, not single chapters. A half-translated guide is worse than an English-only one.
- Keep the directory structure parallel to the English version. Same filenames.
- Keep example paper titles in English (with original ACL Anthology links). Translate the discussion around them, not the titles.
- Add yourself to the translation's local `README.md` so credit is clear.

Open an issue before starting so we can avoid duplicate work.

## Pull request process

1. **Fork and branch.** One topic per branch. `examples/abstract-add-bert`, not `improvements`.
2. **Open an issue first** for anything larger than a typo fix. We will tell you whether the change is in scope.
3. **One paragraph in the PR description** explaining what changes and why.
4. **All links must work.** A maintainer will run a link check before merging.
5. **No CI to break.** We deliberately keep the toolchain minimal. If you want to add a link-check action, propose it in an issue first.

## Reporting problems

If you find an error — a wrong claim, broken link, hallucinated paper, outdated CFP rule — open an issue with the `bug` label. The faster we fix these the more the guide stays trustworthy.

If you used the guide and got a paper into \*ACL: open an issue with the `success` label and tell us which chapter helped most. That is the feedback that keeps the maintainers going.

## Code of Conduct

Be kind. Argue with ideas, not people. Authors of papers cited (positively or critically) are members of this community. If you would not say it in front of them at the poster session, do not write it here.

Maintainers reserve the right to close PRs and issues that violate these norms.
