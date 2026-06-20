---
sidebar_position: 17
title: "17. Analysis and Discussion"
---

A paper with results but no analysis is a benchmark submission, not a research contribution. The analysis section is where you earn the reader's trust by showing you understand *why* your numbers came out the way they did.

**Analysis, discussion — and not results.** Three moves hide under this one heading, and keeping them straight is half the battle. *Results* report what happened (the [previous chapter](./16-results.md)). *Analysis* shows *why* it happened and *where it breaks* — ablations, error analysis, probing, sensitivity. *Discussion* steps back to *what it means* — how the finding bears on the question you opened with, and what it does and does not license. Many \*ACL papers fold all three under "Analysis and Discussion"; that is fine, but write them as distinct moves, not one undifferentiated pour. A caveat that rises to a stated weakness belongs in [Limitations](./19-limitations.md), not buried here.

## What goes here

- **Ablations.** Which components of your method matter? Remove them one at a time and report. A well-designed ablation table is sometimes the most-cited part of a paper.
- **Qualitative examples.** Three to six examples (good and bad) that illustrate what the model is doing. Include failure cases — they are diagnostic and they signal honesty.
- **Error analysis.** A categorization of where the model fails. "Of 200 errors, 45% involved temporal reasoning, 30% involved entity disambiguation, …"
- **Sensitivity analysis.** Robustness to hyperparameters, prompt variations, dataset shifts.
- **Negative findings.** What did you try that did not work? Reviewers and especially area chairs reward authors who share this.

## Phrasebook: the moves of an analysis section

Analysis is built from a handful of moves — set up an ablation, read what it shows, categorise the errors, walk a few examples, then interpret. As in the [Methods](./14-methods.md) and [Results](./16-results.md) phrasebooks, most entries below are **adaptable templates** with `[bracketed]` slots — fill every bracket with a specific, and never assert a cause you did not test. A few are real, verified sentences from well-known analysis papers and carry a citation; study how carefully they word their claims. Two entries sit in the open under each move; expand **Show more** for the rest.

### Setting up an ablation (templates)

An ablation is a controlled experiment: change one thing, hold the rest fixed, attribute the difference.

- *"To isolate the contribution of [component], we remove it and retrain, holding everything else fixed."* — The core ablation setup: one component out, all else constant.
- *"We ablate [component] in three variants — [full], [without X], [without Y] — reported in Table [N]."* — Names the variants up front so the table reads cleanly.

<details>
<summary>**Show 4 more**</summary>

- *"Because [components A and B] interact, we ablate them jointly as well as singly."* — Pre-empts the objection that single ablations miss interactions.
- *"We replace [component] with [simpler alternative] rather than deleting it, so the model still [functions]."* — The honest ablation when outright removal would break the pipeline.
- *"Each ablation is run over [N] seeds; we report mean and standard deviation so small drops are interpretable."* — Carries the variance discipline from Experimental Setup into the ablation.
- *"We ablate on the validation set, not the test set, to avoid tuning against the final numbers."* — Keeps the val/test separation even in analysis.

</details>

### Reading the ablation (from real papers and templates)

The number alone is not the finding; the finding is what the number tells you about the method.

- "even if models have been trained using multiple heads, in practice, a large percentage of attention heads can be removed at test time without significantly impacting performance." — An ablation finding stated as a claim about the method, not a table cell — the surprise named first, then quantified in the paper. *[Are Sixteen Heads Really Better than One?](https://arxiv.org/abs/1905.10650)* (Michel et al., NeurIPS 2019)
- *"Removing [component] drops [metric] by [delta], so it is essential; removing [other] costs only [small delta], so its role is minor."* — Reads each ablation as load-bearing or not — the distinction the table exists to draw.

<details>
<summary>**Show 4 more**</summary>

- *"The largest drop comes from removing [X] ([delta]), confirming it as the main driver of [the effect]."* — Attributes the effect to the component the ablation isolates.
- *"No single component dominates; the gain comes from their combination, as the joint ablation shows ([delta])."* — The honest reading when the contribution is the whole, not a part.
- *"[Component] helps on [setting] but not [setting], suggesting its benefit is specific to [condition]."* — Reads an ablation that cuts differently across settings.
- *"Surprisingly, removing [component] slightly improves [metric]; we examine why in the error analysis below."* — Flags a counter-intuitive ablation and points to the follow-up.

</details>

### Error analysis and where it fails (from real papers and templates)

A categorised account of the failures, with counts. This is where a reviewer decides whether you understand your own system.

- *"We hand-label [N] errors into [k] categories — [A] ([P]%), [B] ([P]%), [C] ([P]%) — with an example of each in Table [N]."* — The error-analysis backbone: a sample, named categories, percentages, examples.
- "We show that this result is entirely accounted for by exploitation of spurious statistical cues in the dataset." — Error analysis turned into the paper's thesis: a model's success traced to an artefact, not the intended capability. *[Probing Neural Network Comprehension of Natural Language Arguments](https://aclanthology.org/P19-1459/)* (Niven & Kao, ACL 2019)

<details>
<summary>**Show 4 more**</summary>

- *"Errors concentrate in [category] ([P]%), which share [property]; this points to [the underlying weakness]."* — Moves from a count to a diagnosis.
- *"Performance drops sharply on [subset] ([number]), indicating the model relies on [shortcut] rather than [the intended signal]."* — Names a shortcut and the evidence for it.
- *"To test whether [cue] drives the result, we construct a [controlled / adversarial] subset on which [observation]."* — The intervention that turns a suspicion into evidence.
- *"Some 'errors' are annotation noise ([P]% of the sample); we report the corrected number alongside."* — Distinguishes model error from gold-label error, which reviewers respect.

</details>

### Qualitative examples (templates)

A few examples, chosen honestly, show what the metrics cannot. Include failures.

- *"Table [N] shows representative outputs — [k] successes and [k] failures, chosen by [criterion], not cherry-picked."* — States the selection rule so the examples are not read as a highlight reel.
- *"In [example] the model [does X correctly]; in [example] it [fails how], a case of the [category] error above."* — Ties each example back to a quantified category.

<details>
<summary>**Show 3 more**</summary>

- *"We select examples by [sampling N random errors / stratifying by category] to avoid picking the most flattering."* — Names an unbiased selection procedure.
- *"The failure in [example] is systematic, not a one-off: it recurs in [P]% of [subset]."* — Distinguishes an illustrative failure from a representative one.
- *"Outputs are shown verbatim, including [the error]; we do not edit for readability."* — Signals the examples are real, not tidied.

</details>

### Interpreting — discussion and causal caution (from real papers and templates)

Interpretation is where careful papers separate themselves: claim what the evidence supports, and no more.

- "For example, we find heads that attend to the direct objects of verbs, determiners of nouns, objects of prepositions, and coreferent mentions with remarkably high accuracy." — An interpretive claim earned with measured evidence ("with remarkably high accuracy"), not asserted from a visualisation. *[What Does BERT Look at? An Analysis of BERT's Attention](https://aclanthology.org/W19-4828/)* (Clark et al., BlackBoxNLP 2019)
- *"We interpret [observation] as evidence that [mechanism]; we cannot rule out [alternative], which [the experiment that would settle it] would decide."* — Interpret, then name the alternative you have not excluded.

<details>
<summary>**Show 4 more**</summary>

- *"This is correlational: [X] co-occurs with [Y], but our experiments do not establish that [X] causes [Y]."* — The sentence that keeps a reader from over-reading the result.
- *"The effect is consistent with both [hypothesis A] and [hypothesis B]; our analysis favours [A] because [reason]."* — Weighs competing explanations instead of asserting one.
- *"We resist the stronger claim that [the model understands X]; what we show is the narrower [behavioural result]."* — Trades an attractive overclaim for a defensible one.
- *"What this does not show is [Z]; that would require [evidence] beyond this paper."* — Marks the boundary of the interpretation explicitly.

</details>

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
- The neighbouring [Chapter 16 — Results](./16-results.md) and [Chapter 19 — Limitations](./19-limitations.md): results supply the numbers this section explains, and a caveat raised here graduates into the limitations section.
