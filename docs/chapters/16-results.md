---
sidebar_position: 16
title: "16. Results"
---

A results section is not "here are our numbers"; it is "here is what our numbers mean."

**Results, not analysis.** That said, this section reports *what happened* — the scores, the comparison, what to see in each table — but it stops short of explaining *why*. The why is [Analysis](./17-analysis.md). The two blur, and the cost is a results section clogged with speculation and an analysis section with nothing left to do. Keep results to observation — "X beats Y by 3.2 points, and the gap widens on long inputs" — and save the mechanism — "because Y's attention degrades past 512 tokens" — for the next chapter. Reporting a number is results; arguing about its cause is analysis.

## The shape of a good results section

1. **Lead with the headline result.** Table 1 or Figure 2 should answer the central question of the paper. The text should tell the reader what to see.
2. **One claim per paragraph.** Each paragraph should make exactly one comparison or observation, with a pointer to the relevant table cell or figure region.
3. **Be specific.** "Our method outperforms the baselines" is not a result. "Our method achieves 78.4 F1, a 3.2-point improvement over the strongest baseline (Smith et al., 2023, 75.2 F1)" is.
4. **Surface non-results too.** If you ran an experiment and the difference was within noise, say so. "We find no significant difference between X and Y" is a perfectly publishable result and reviewers respect it.

## Presenting the numbers

Your results table and figures carry the headline; reviewers read them before the prose. The essentials specific to a results table:

- **Bold the best per column.** Do not make reviewers squint to find the winning row. If the difference is not significant, bold both.
- **Show variance.** "78.4 ± 0.6" beats "78.4" when you have multiple seeds.
- **Captions are paragraphs, not labels.** A caption should let the reader understand the table or figure without the body text. Example: "Results on MMLU. Higher is better. Best per column in bold; differences within 0.5 are not significant. Our method is the last row."

The full craft of figures and tables — vector graphics, legible fonts, colorblind-safe and grayscale-readable design, `booktabs`, alt text, and the tools for each — lives in [Chapter 7](./07-figures-and-tables.md). Treat it as required reading before you build Table 1.

## Phrasebook: the moves of a results section

A results section is built from a few recurring moves — state the headline, point the reader at the table, report a comparison precisely, surface a non-result, scope the claim. As in the [Methods](./14-methods.md) and [Experimental Setup](./15-experimental-setup.md) phrasebooks, most entries below are **adaptable templates** with `[bracketed]` slots — fill every bracket with a real number, and never report a comparison you did not run. A few are real, verified sentences from well-known papers and carry a citation. Two entries sit in the open under each move; expand **Show more** for the rest. The cardinal rule survives all of them: a result is a number, a named baseline, and — where it matters — a test, never "outperforms the baselines."

### Stating the headline result (from real papers and templates)

The one sentence that answers the paper's central question with a number attached. Lead with it; everything else in the section supports it.

- "It obtains new state-of-the-art results on eleven natural language processing tasks, including pushing the GLUE score to 80.5 (7.7 point absolute improvement), MultiNLI accuracy to 86.7% (4.6% absolute improvement)…" — Note what actually carries this sentence: the exact scores and the parenthetical deltas, not the phrase "state-of-the-art." *[BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding](https://aclanthology.org/N19-1423/)* (Devlin et al., NAACL 2019)
- *"On [benchmark], [our method] reaches [score], a [delta]-point improvement over the strongest baseline ([cite], [their score])."* — The headline template: metric, number, delta, named baseline.

<details>
<summary>**Show 5 more**</summary>

- "This reduces the effort for finding the most similar pair from 65 hours with BERT / RoBERTa to about 5 seconds with SBERT, while maintaining the accuracy from BERT." — A headline stated as a concrete before/after on the axis that matters (time), with the accuracy caveat attached so it does not read as a free lunch. *[Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks](https://aclanthology.org/D19-1410/)* (Reimers & Gurevych, EMNLP 2019)
- *"Table [N] is the main result: [one-sentence reading of what it shows]."* — Tell the reader the table's headline before they parse the cells.
- *"The central finding is [X]; the rest of this section breaks it down by [dimension]."* — States the conclusion first, then the supporting structure.
- *"[Our method] is best on [N] of [M] [tasks], and within noise of the best on the rest."* — An honest aggregate headline that does not hide the losses.
- *"Gains are largest on [setting] ([delta]) and smallest on [setting] ([delta])."* — A headline that already points at where the method helps and where it does not.

</details>

### Pointing the reader at the table or figure (templates)

A number the reader cannot locate is a number they do not believe. Name the table, the column, the row.

- *"Table [N] reports [what]; the comparison that matters is the [column] column, [model] versus [baseline]."* — Directs the eye to the exact cell that carries the claim.
- *"Figure [N] plots [y] against [x]; the gap between [line A] and [line B] is the effect we claim."* — Tells the reader what to see, not just that the figure exists.

<details>
<summary>**Show 5 more**</summary>

- *"Higher is better throughout; the best result per column is in bold."* — States the reading convention once, so every later table is legible.
- *"We report [score] ± [std] over [N] seeds; bold marks results not significantly worse than the best."* — Folds variance and significance into the table's reading rule.
- *"The trend, not the individual numbers, is the point of Figure [N]: [the trend]."* — Tells the reader which features of a plot to read and which to ignore.
- *"Rows are grouped by [factor]; within each group, only [the variable] changes."* — Makes a table's controlled comparison visible.
- *"Full per-[task] numbers are in Table [N] (appendix); the main text reports the [average / headline]."* — Points to the exhaustive table while keeping the body focused.

</details>

### Reporting a comparison precisely (templates)

The difference between a result and a vibe is a number, a named baseline, and a test.

- *"[Our method] improves over [baseline] by [delta] points ([metric]); the difference is significant under [test] (p < [value])."* — Delta, named baseline, and significance in one sentence.
- *"The gain over [baseline] is [delta], but falls within seed-to-seed variance ([std]); we therefore do not claim an improvement here."* — The honest version when a difference does not survive noise.

<details>
<summary>**Show 5 more**</summary>

- *"Relative to [baseline], [our method] trades [delta down on metric A] for [delta up on metric B]."* — Reports a trade-off honestly rather than cherry-picking the favourable metric.
- *"The improvement holds across [conditions] but disappears under [condition], where [observation]."* — States exactly where a result generalises and where it stops.
- *"[Baseline B], not [Baseline A], is the one to beat; we exceed it by [delta]."* — Names the genuinely strongest competitor instead of the convenient one.
- *"Both methods are within [delta] on [metric]; we report a tie and look to [secondary axis] to separate them."* — Calls a tie a tie.
- *"The effect size is [number]; with our test set of [N], this is [adequately / not] powered."* — Reads the result through power, per Card et al.

</details>

### Reporting a non-result or a loss (templates)

A clean negative is a finding. A buried loss is a liability a reviewer will dig up.

- *"We find no significant difference between [X] and [Y] ([numbers], p = [value]); this is itself informative, because [why]."* — Reports a null result as a finding, with the reason it matters.
- *"[Our method] underperforms on [dataset] ([number] vs. [baseline]); we surface it here and examine the cause in [Analysis](./17-analysis.md)."* — Puts the loss in the main table and hands the why to analysis.

<details>
<summary>**Show 4 more**</summary>

- *"Contrary to our expectation that [hypothesis], [X] did not improve [metric]."* — Frames a negative as a finding against a stated prior, not an apology.
- *"The gain we expected from [component] does not materialise; the ablation in Section [N] localises why."* — Honest about an unmet expectation, and points to the evidence.
- *"On [hard subset], all methods including ours fail ([numbers]); we treat this as an open problem, not a footnote."* — Surfaces a shared failure as a contribution.
- *"[Result] holds only under [condition]; we report the negative case rather than narrow the claim silently."* — Discloses the boundary instead of quietly restricting scope.

</details>

### Scoping the claim (templates)

Every result has a boundary. Name it before a reviewer does, and never let a two-setting experiment become "robust across all settings."

- *"These results hold for [the settings tested: list]; we make no claim beyond them."* — States the scope explicitly, the antidote to over-generalisation.
- *"We tested [N] [settings]; 'general' would require more, so we make the narrower claim that [precise claim]."* — Refuses the overclaim and substitutes the precise one.

<details>
<summary>**Show 4 more**</summary>

- *"The improvement is consistent but modest ([delta]); we present it as incremental, not transformative."* — Right-sizes the claim to the size of the effect.
- *"Our evidence is [in-domain / English / single-architecture]; whether it transfers to [other] is open."* — Names the dimension along which the result is untested.
- *"We observe [correlation]; we do not claim [causation], which would need [the controlled experiment]."* — Keeps a correlational result from being read as causal.
- *"Results are reported on [test set]; we did not evaluate on [other] and so do not speak to it."* — Bounds the claim to what was actually measured.

</details>

## Common mistakes

- **No headline.** The reader has to assemble the story from twelve tables. Tell them what to see.
- **Hiding losses.** If your method underperforms on one dataset, do not bury it on page 9. Surface it in the main results table and address it. Reviewers find honesty more persuasive than spin.
- **Statistical sleight of hand.** "Improves by 0.3 points" with no test of significance and a single seed is not a finding. It is noise.
- **Over-claiming generality.** "Our method is robust across all settings" when you tested two settings. Be precise about scope.

## Five examples worth studying

1. *T5* (Raffel et al., 2020). The headline table compares many models on many tasks; the surrounding text directs the eye.
2. *Chain-of-Thought Prompting* (Wei et al., 2022). The result figures do enormous work — pay attention to how each one isolates a single claim.
3. *Mission: Impossible Language Models* (Kallini et al., ACL 2024 Best Paper). Results presented as a series of clean, controlled comparisons that build a cumulative argument.
4. *[With Little Power Comes Great Responsibility](https://aclanthology.org/2020.emnlp-main.745/)* (Card et al., EMNLP 2020). A results section that is mostly about *what we cannot conclude* — and a beautiful example of presenting non-results well.
5. *[Beyond Accuracy: Behavioral Testing of NLP Models with CheckList](https://aclanthology.org/2020.acl-main.442/)* (Ribeiro et al., ACL 2020 Best Paper). Tables that surface failure modes cleanly.

## Further reading

- Edward Tufte, *The Visual Display of Quantitative Information*. Old, still right.
- ColorBrewer ([colorbrewer2.org](https://colorbrewer2.org)) for figure palettes.
- The neighbouring chapters [Chapter 15 — Experimental Setup](./15-experimental-setup.md) and [Chapter 17 — Analysis](./17-analysis.md): the setup that makes a number interpretable and the analysis that explains it bracket this section on both sides.
