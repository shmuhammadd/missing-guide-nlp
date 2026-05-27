---
sidebar_position: 13
title: "13. Limitations (Required)"
---

Since 2022, \*ACL venues **require** a Limitations section after the conclusion. It does not count toward the page limit. New authors often write this section in a panic in the last hour. Do not.

A strong Limitations section *helps* you. Reviewers are trained to look for what you missed. If you name those things yourself, you have controlled the narrative.

## What goes in

- **Scope limits.** Languages, domains, model sizes, task types you did not test on.
- **Methodological limits.** Assumptions your method relies on; conditions under which it would not work.
- **Data limits.** Bias, coverage, license, size, annotation quality.
- **Computational limits.** Method requires significant compute, which limits reproducibility or deployment.
- **Generalization limits.** Where you suspect (with reason) the result might not transfer.

## The three approaches and why two are wrong

Lorelei Lingard, in ["The Art of Limitations"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4456466/), identifies three writer approaches:

- **The Confessional.** Lists everything that could possibly be wrong. Looks weak. Wrong.
- **The Dismissal.** "Limitations are minor and do not affect the conclusions." Looks defensive. Wrong.
- **The Reflection.** Names limitations, explains why they exist, and where appropriate, signals how future work could address them. Correct.

Aim for The Reflection.

## Common mistakes

- **Generic limitations.** "Our method requires data." That is not a limitation; that is what methods are. Be specific.
- **Limitations that admit fatal flaws.** "Our experiments may have been subject to test-set leakage." If they were, you cannot publish. Resolve it; do not list it.
- **Naming limitations only to dismiss them.** "We only test on English, but English is widely spoken, so this is fine." Reviewers see through this. Either test on more languages or own the scope honestly.
- **Treating it as boilerplate.** Reviewers read this section now. Write it like you mean it.

## A useful prompt

When stuck, ask: "If I were a hostile reviewer, what one experiment would I run to break this paper?" Write *that* in the limitations section, framed honestly. You have just acknowledged a real limitation, and you have signaled to reviewers that you thought hard about your work.

## Five examples of substantive Limitations sections

1. *Mission: Impossible Language Models* (Kallini et al., ACL 2024 Best Paper). Names exactly what the experimental design cannot tell us.
2. *Holistic Evaluation of Language Models (HELM)* (Liang et al., 2023). Limitations are extensive and honest, given the scope.
3. *OLMo: Accelerating the Science of Language Models* (Groeneveld et al., ACL 2024 best theme paper). The limitations on data and resources are stated clearly.
4. *Reading Subtext: Evaluating LLMs on Short Story Summarization with Writers* (Subbiah et al., TACL 2024 / ACL 2025 Best Paper). Names limitations of human evaluation honestly.
5. Browse the [ACL 2023 awards page](https://2023.aclweb.org/program/best_papers/) — many outstanding papers do this section especially well.

## Further reading

- ACLPUB formatting page, the Limitations subsection: [https://acl-org.github.io/ACLPUB/formatting.html](https://acl-org.github.io/ACLPUB/formatting.html).
- Lingard, ["The Art of Limitations"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4456466/).
