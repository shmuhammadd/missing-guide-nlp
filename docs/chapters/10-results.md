---
sidebar_position: 10
title: "10. Results"
---

A results section is not "here are our numbers"; it is "here is what our numbers mean."

## The shape of a good results section

1. **Lead with the headline result.** Table 1 or Figure 2 should answer the central question of the paper. The text should tell the reader what to see.
2. **One claim per paragraph.** Each paragraph should make exactly one comparison or observation, with a pointer to the relevant table cell or figure region.
3. **Be specific.** "Our method outperforms the baselines" is not a result. "Our method achieves 78.4 F1, a 3.2-point improvement over the strongest baseline (Smith et al., 2023, 75.2 F1)" is.
4. **Surface non-results too.** If you ran an experiment and the difference was within noise, say so. "We find no significant difference between X and Y" is a perfectly publishable result and reviewers respect it.

## Table craft

- **Bold the best.** Do not leave reviewers squinting to figure out which row won. If the difference is not significant, bold both.
- **Show variance.** "78.4 ± 0.6" beats "78.4" if you have multiple seeds.
- **Captions are paragraphs, not labels.** A table caption should let the reader understand the table without reading the body text. Example: "Results on MMLU. Higher is better. Best result per column is bold; differences within 0.5 are not significant. Our method is in the last row."
- **Do not split a table across pages** unless absolutely necessary. Use `\small` if needed.

## Figure craft

- **Label everything.** Axes, units, legend, error bars.
- **Color carefully.** At least 8% of male reviewers have some form of color vision deficiency. Use colorbrewer-safe palettes ([colorbrewer2.org](https://colorbrewer2.org)) or distinguishable shapes/line styles.
- **Captions, again, are paragraphs.** The reader should understand the figure standalone.
- **Test in grayscale.** Print your figures in grayscale. If you cannot tell the lines apart, neither can a reviewer printing the paper for a long-haul flight.

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
