---
sidebar_position: 11
title: "11. Analysis and Discussion"
---

A paper with results but no analysis is a benchmark submission, not a research contribution. The analysis section is where you earn the reader's trust by showing you understand *why* your numbers came out the way they did.

## What goes here

- **Ablations.** Which components of your method matter? Remove them one at a time and report. A well-designed ablation table is sometimes the most-cited part of a paper.
- **Qualitative examples.** Three to six examples (good and bad) that illustrate what the model is doing. Include failure cases — they are diagnostic and they signal honesty.
- **Error analysis.** A categorization of where the model fails. "Of 200 errors, 45% involved temporal reasoning, 30% involved entity disambiguation, …"
- **Sensitivity analysis.** Robustness to hyperparameters, prompt variations, dataset shifts.
- **Negative findings.** What did you try that did not work? Reviewers and especially area chairs reward authors who share this.

## Common mistakes

- **Skipping ablations.** "Our method has four components" but no ablation. Reviewers will assume at least one is unnecessary, and they will be right.
- **Cherry-picked qualitative examples.** Showing only success cases is transparent. Include genuine failures.
- **Analysis as restating results.** "Table 4 shows our method is better. This confirms that our method is better." No new information. Cut.
- **Hand-waving causal claims.** "The model learned to do X because of Y." Did you verify this? Probing experiments? Causal interventions? If not, soften.

## How much analysis is enough?

Roughly: at least as many pages of analysis as you have pages of headline results. If your paper has one page of results tables and four pages of methods, your analysis is probably too thin. Reviewers will read your paper and ask "but why does it work?" — your analysis section should answer that before they ask.

## Five examples of strong analysis sections

1. *[Probing Neural Network Comprehension of Natural Language Arguments](https://aclanthology.org/P19-1459/)* (Niven & Kao, ACL 2019). A whole paper that is essentially analysis — and it changed how the field interpreted a prior result.
2. *What Does BERT Look At?* (Clark et al., BlackBoxNLP 2019). Analysis through attention visualization done carefully.
3. *Are Sixteen Heads Really Better than One?* (Michel et al., NeurIPS 2019). Ablations that became canonical.
4. *[Beyond Accuracy: Behavioral Testing of NLP Models with CheckList](https://aclanthology.org/2020.acl-main.442/)* (Ribeiro et al., ACL 2020 Best Paper). Analysis as the contribution itself.
5. *Mission: Impossible Language Models* (Kallini et al., ACL 2024 Best Paper). Analysis tightly coupled to the central hypothesis.

## Further reading

- Belinkov & Glass, ["Analysis Methods in Neural Language Processing: A Survey"](https://aclanthology.org/Q19-1004/), TACL 2019. The reference on what counts as analysis in our field.
