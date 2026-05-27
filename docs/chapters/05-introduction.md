---
sidebar_position: 5
title: "5. The Introduction"
---

If the abstract sold the reader on opening the paper, the introduction has to sell them on reading past page two. This is the section that gets the most rewrites in any paper I have ever advised on.

## The classic five-paragraph *ACL introduction

Most well-written ACL papers follow a structure roughly like this:

**Paragraph 1 — The world the paper lives in.** Two to four sentences setting the broader context. *Why does this kind of problem matter?* Avoid "Recently, X has attracted attention…" — instead, point at a real phenomenon, deployment scenario, or scientific question.

**Paragraph 2 — The specific gap.** What is missing, broken, or unknown? This is where you cite prior work and explain its limits *briefly* (the full treatment goes in Related Work). End this paragraph with the research question.

**Paragraph 3 — What we do.** "In this paper, we…" Describe the move, then the method, in plain language. A diagram of the approach (Figure 1) usually lives in this section; if you have one, refer to it here.

**Paragraph 4 — What we find.** Preview the main results. Two or three concrete bullets or a short paragraph. Do not be coy; reviewers should not have to dig for your numbers.

**Paragraph 5 — Contributions, explicit.** Many papers end the intro with a bulleted contributions list. This is genre-appropriate in \*ACL. Three to five bullets, parallel grammar, each a real contribution and not a restatement of the method.

## Common mistakes

- **The history-of-NLP introduction.** "Since the days of Chomsky…" No. Start where the problem starts.
- **Forward references everywhere.** "As we will show in §5.3…" Three of these is fine; thirty makes the paper feel like an index.
- **Contributions that are not contributions.** "We use a transformer architecture" is not a contribution. "We provide the first evidence that X" is.
- **Method dump in the intro.** The intro previews; the methods section delivers. Keep the intro at a level a smart non-specialist can follow.
- **The bait-and-switch.** Promising one thing in the intro and delivering another in the experiments. Reviewers catch this and they punish it.

## The contributions list, done right

**Bad:**

> - We propose a transformer-based model.
> - We train it on a large dataset.
> - We achieve state-of-the-art results.

**Good:**

> - We introduce *MethodName*, the first approach to X that does not require Y.
> - We release a benchmark of 12,000 examples covering Z, with human-verified labels.
> - We show empirically that the standard assumption A does not hold in setting B, and identify the conditions under which it does.

Notice: each bullet promises something the reader could not have done themselves.

## Five examples from real ACL papers

1. *[BERT](https://aclanthology.org/N19-1423/)* (Devlin et al., NAACL 2019). The contributions list at the end of §1 is a textbook example: each bullet is precise and verifiable.
2. *[Linguistic Knowledge and Transferability of Contextual Representations](https://aclanthology.org/N19-1112/)* (Liu et al., NAACL 2019). Clean five-paragraph structure with a sharp research question.
3. *On the Dangers of Stochastic Parrots* (Bender, Gebru, McMillan-Major, Mitchell, FAccT 2021). Not technically \*ACL but field-defining; study how it frames the problem space in paragraphs 1–2.
4. *[Stanza: A Python NLP Toolkit for Many Human Languages](https://aclanthology.org/2020.acl-demos.14/)* (Qi et al., ACL 2020 Demo). A resource paper that motivates itself in two paragraphs without overclaiming.
5. *[Don't Stop Pretraining](https://aclanthology.org/2020.acl-main.740/)* (Gururangan et al., ACL 2020). The intro tells you exactly what experiment you are about to read and what it found.

## Further reading

- Kate Turabian, *A Manual for Writers*, chapter on argument structure.
- The "CARS" model (Create A Research Space) by John Swales — particularly useful for paragraph 2 (establishing the gap). Search "Swales CARS model."
