---
sidebar_position: 15
title: "15. Experimental Setup"
---

This section is dry and necessary. Reviewers go here to check whether they should believe your results. Make it easy to check.

**Where the line falls.** This is not [Methods](./14-methods.md), and the boundary trips up new authors. Methods is *what your contribution is*; experimental setup is *everything a reader needs to re-run it and trust the numbers* — data versions, baselines, metrics, hyperparameters, seeds, compute. The test: if a detail is part of the idea, it belongs in Methods; if it is a knob you turned to get a number, it belongs here. Hyperparameter values, in particular, are setup, not method. If your paper's contribution is a dataset, much of the construction lives in [Dataset Construction](./13-dataset-construction.md) instead — but you still report baselines, metrics, and splits here.

## What belongs here

- **Datasets.** Name, size, splits, source, license. If you constructed it, point to the construction details (usually a separate section or appendix). If you used a standard benchmark, cite the version (GLUE vs. SuperGLUE; SQuAD 1.1 vs. 2.0).
- **Baselines.** What you compare to and *why those*. The honest answer is "the most competitive prior methods we could run." Reviewers will check whether you ducked a strong baseline.
- **Metrics.** Which ones, and why each is appropriate. If you use a non-standard metric, justify it (and ideally also report standard ones).
- **Implementation details.** Model size, framework, hardware, training time. Enough that another researcher could reproduce the work.
- **Hyperparameters and selection procedure.** How were they chosen — grid search, prior work, default? Were they tuned on the validation set or the test set? (It must be the validation set.)
- **Statistical practice.** Are results averaged over seeds? How many? Are differences statistically significant? Card et al.'s ["With Little Power Comes Great Responsibility"](https://aclanthology.org/2020.emnlp-main.745/) is mandatory reading on this point.

## Make the numbers mean something

A metric is a proxy, and the only question that matters is whether it tracks what you actually care about. Reporting a number because it is standard, without asking whether it is *valid* for your claim, is how a paper ends up with results that do not mean what they say. Three habits keep you honest. (Significance, seeds, and power are handled above and in the phrasebook below; this section is about whether the thing you are measuring is the right thing at all.)

**Check that your metric measures your claim.** Automatic metrics can diverge sharply from human judgment: a structured review of 284 reported correlations found BLEU's agreement with human quality ratings far weaker and more variable than its ubiquity suggests ([Reiter, *Computational Linguistics* 2018](https://aclanthology.org/J18-3002/)). Accuracy misleads under class imbalance; overlap metrics like BLEU and ROUGE reward surface similarity, not meaning. Choose a metric because it is valid for what you claim, report a second when one cannot carry the claim, and remember Goodhart ([Chapter 3](./03-jargon.md)): once a number becomes the target, it stops measuring what you wanted.

**Use human evaluation when metrics cannot reach.** For generation and other subjective tasks, automatic scores are necessary but not sufficient, and human evaluation is the standard — yet it is done so inconsistently across papers that it undermines comparison ([van der Lee et al., INLG 2019](https://aclanthology.org/W19-8643/)). Do it properly: define each criterion precisely (fluency, adequacy, and faithfulness are different things), use enough items and annotators to be adequately powered, report inter-annotator agreement ([Chapter 13](./13-dataset-construction.md)), pay fairly ([Chapter 20](./20-ethics.md)), and release the protocol and the raw ratings. Eyeballing a handful of outputs — "vibes-based evaluation" ([Chapter 3](./03-jargon.md)) — is not human evaluation.

**Treat an LLM judge as an instrument to be calibrated.** Using a language model to score outputs is cheap and increasingly common, but it carries documented biases: a *position bias* toward whichever answer it sees first, a *verbosity bias* toward longer answers, and a *self-enhancement bias* toward its own outputs ([Zheng et al., NeurIPS 2023](https://arxiv.org/abs/2306.05685)). Before you trust an LLM judge, validate it against human ratings on a sample, control for position by swapping answer order, report the exact model and prompt, and be wary of letting a model grade its own family's outputs. An unvalidated LLM judge is a metric of unknown validity — the very thing this section warns against.

## Phrasebook: the moves of an experimental setup

The reporting sentences of an experimental setup are formulaic, which is the good news: the moves are learnable, and the goal is clarity, not style. As in the [Dataset Construction](./13-dataset-construction.md) and [Methods](./14-methods.md) phrasebooks, most entries below are **adaptable templates** with `[bracketed]` slots — fill every bracket with a specific, and never report a number you did not compute. A few entries in the last group are real, verified sentences from the methodology papers that argue for honest reporting; quote them when you need the authority. Two entries sit in the open under each move; expand **Show more** for the rest.

### Datasets, benchmarks, and versions

- *"We evaluate on [dataset] ([cite]), using the [official / standard] train/dev/test split of [sizes]."* — Names the data, the citation, and the exact split in one sentence.
- *"We use [benchmark] version [N.N] ([cite]) and report on the [public dev / held-out test] set, because [reason]."* — Pins the version and the evaluation set; "SQuAD" without "1.1 or 2.0" is a hole.

<details>
<summary>**Show 5 more**</summary>

- *"For [dataset] no canonical split exists; we create one by [method] and release it so others can compare."* — Discloses a self-made split and commits to releasing it.
- *"We report on [N] of the [M] tasks in [benchmark], excluding [tasks] because [reason]."* — Honest about partial coverage instead of quietly dropping tasks.
- *"All datasets are English unless noted; [dataset] additionally covers [languages]."* — States the language scope, which English-default papers routinely omit.
- *"We use the [filtered / deduplicated] version of [dataset] from [cite], not the original, to avoid [issue]."* — Names which release you used, since versions of the same dataset differ.
- *"Dataset statistics are in Table [N]; construction details are in [Dataset Construction / Appendix N]."* — Points back without re-narrating the collection.

</details>

### Baselines and what you compare to

- *"We compare against [A] ([cite]), [B] ([cite]), and [C] ([cite]) — the strongest published methods on [task] that we could run."* — States the comparison set and, implicitly, that you did not duck a strong one.
- *"Where published numbers are not comparable (different [split / metric]), we re-run the baseline under our setting; otherwise we cite the reported score and mark it."* — Pre-empts the "is this a fair comparison?" objection.

<details>
<summary>**Show 5 more**</summary>

- *"[Baseline] is the current best published result on [benchmark]; we treat it as the bar to clear."* — Names the bar explicitly, so the reader knows what beating it means.
- *"We include a [majority / random / simple] baseline to establish the floor on [task]."* — The lower bound that contextualises every other number.
- *"For a controlled comparison, all baselines share the same [backbone / data / tokeniser]; only [the variable] changes."* — Signals the comparison isolates one factor.
- *"We omit [baseline] because [it is inapplicable / code is unavailable / it needs resources we lack]; Section [N] discusses the gap."* — Name the missing comparison before a reviewer does.
- *"Scores marked † are from the original papers; all others are from our runs."* — A one-line provenance convention for a mixed results table.

</details>

### Metrics, and why each one

- *"We report [metric] as the primary measure because [it matches the task / prior work uses it], with [secondary metric] as a [complementary / diagnostic] check."* — Justifies the metric instead of printing it bare.
- *"Because the labels are imbalanced, we report [macro-F1 / per-class F1] rather than accuracy."* — Ties the metric choice to a property of the data.

<details>
<summary>**Show 5 more**</summary>

- *"[Metric] is computed with [official script / library + version] for comparability with [cite]."* — Pins the implementation; metric definitions drift between toolkits.
- *"We report [generation metric] but read it cautiously; Section [N] adds the human evaluation it cannot replace."* — Flags the known limits of automatic generation metrics.
- *"For [task] we follow the official evaluation of [benchmark]: [metric] under [protocol]."* — Defers to the benchmark's protocol rather than inventing one.
- *"We also report [latency / FLOPs / parameters], since our claim concerns [cost], not only accuracy."* — Match the metric to the actual claim.
- *"Significance of these differences is assessed in the [seeds and significance] paragraph below."* — A forward pointer that keeps the metric prose uncluttered.

</details>

### Human and model-based evaluation

- *"Because automatic metrics do not capture [quality dimension], we run a human evaluation: [N] annotators rate [N] outputs for [criterion] on a [scale]; inter-annotator agreement is [κ / α = value]."* — Reports a human evaluation with the details that make it credible.
- *"We use [model + version] as an automatic judge, validated against human ratings on [N] items (agreement [value]), and swap answer order to control for position bias."* — Reports an LLM judge as a calibrated instrument, not an oracle.

<details>
<summary>**Show 3 more**</summary>

- *"Annotators were [native speakers / domain experts] paid [rate]; the full protocol and the raw ratings are released."* — The fair-pay-and-transparency sentence human evaluation now needs.
- *"We validate [metric] against human judgment on [task], finding [correlation]; we therefore [trust / caution against] it for our claim."* — Establishes a metric's validity instead of assuming it.
- *"The judge's exact prompt is in Appendix [N]; scores shift by [amount] across prompt variants, so we report [how you handled it]."* — Pins the judge's configuration and reports its sensitivity.

</details>

### Implementation, hyperparameters, and compute

- *"We implement all models in [framework + version] and train on [hardware]; a single run takes [time]."* — The reproducibility basics in one sentence.
- *"Hyperparameters were selected by [grid / random / Bayesian] search over [ranges] on the validation set; the space and the chosen values are in Table [N]."* — States the search and, crucially, that it used validation data.

<details>
<summary>**Show 5 more**</summary>

- *"We adopt the hyperparameters of [cite] without further tuning, changing only [the few you changed]."* — Honest about inherited settings rather than implying a fresh search.
- *"Model sizes are [N] parameters for [model] and [M] for [baseline]; Table [N] lists them in full."* — Reports scale, which the reader needs to read any comparison fairly.
- *"All choices were made on validation data; the test set was used once, for the final reported numbers."* — The val/test-separation sentence reviewers look for.
- *"Total compute is approximately [GPU type] × [hours], including hyperparameter search and failed runs."* — The honest compute figure, not just the final model.
- *"Code, configs, and weights [will be released upon acceptance / are at the anonymised link]."* — The release sentence, kept anonymity-safe for double-blind review.

</details>

### Seeds, variance, and significance (with real-paper anchors)

This is the group where a number becomes a claim — or fails to. Report variation, not a lone point estimate, and test whether a difference survives noise before you build an argument on it.

- *"All results are mean ± standard deviation over [N ≥ 3] seeds; Table [N] reports both."* — Turns a point estimate into a distribution, the minimum bar for a non-deterministic method.
- "In this paper we show that reporting a single performance score is insufficient to compare non-deterministic approaches." — The thesis that justifies reporting over seeds rather than a lone number. *[Reporting Score Distributions Makes a Difference](https://aclanthology.org/D17-1035/)* (Reimers & Gurevych, EMNLP 2017)

<details>
<summary>**Show 5 more**</summary>

- "test-set performance scores alone are insufficient for drawing accurate conclusions about which model performs best." — Grounds the practice of also reporting validation performance and the search budget. *[Show Your Work: Improved Reporting of Experimental Results](https://aclanthology.org/D19-1224/)* (Dodge et al., EMNLP 2019)
- "Underpowered experiments make it more difficult to discern the difference between statistical noise and meaningful model improvements, and increase the chances of exaggerated findings." — The reason to run a power analysis before claiming a small gain. *[With Little Power Comes Great Responsibility](https://aclanthology.org/2020.emnlp-main.745/)* (Card et al., EMNLP 2020)
- *"We test significance with [paired bootstrap / approximate randomisation] ([cite]); differences marked * are significant at p < [0.05]."* — Name the test, not just the p-value.
- *"Our gain over [baseline] is [X] points (p = [value]); we report it as [significant / not] and over-claim neither way."* — States the result and its uncertainty in the same breath.
- *"Variance across seeds is [large / small] for [setting]; we therefore [report all runs / caution against fine-grained ranking]."* — Treats variance as information, not embarrassment.

</details>

## Common mistakes

- **The "see appendix" punt.** Some information has to be in the main paper. Dataset sizes, baselines, metrics, and number of seeds belong in the main text. Pushing all of this to the appendix tells reviewers you do not want them to see it.
- **Single-seed results.** A single run with one seed is not a result, it is an anecdote. Average over at least three seeds wherever feasible, and report variance.
- **Test-set tuning.** If your hyperparameter choices were made looking at test numbers, your results are not valid. Be religious about val/test separation.
- **Cherry-picked baselines.** If a stronger baseline exists and is feasible to run, run it. Reviewers will notice the missing comparison.
- **No license / no provenance.** Especially for new datasets or scraped corpora — the [ACL Responsible NLP Checklist](https://aclrollingreview.org/cfp) asks about this directly.
- **A metric that does not fit the claim.** Reporting BLEU, ROUGE, or accuracy because it is standard, without asking whether it tracks what you actually claim. A metric is valid or it is noise.
- **An unvalidated LLM judge.** Scoring outputs with a model and reporting the numbers as fact — without checking them against humans or controlling for position and verbosity bias.

## A reproducibility minimum

Before you submit, you should be able to answer all of these in the paper or its appendix:

- Exact training data and splits used.
- Number of model parameters.
- Hyperparameter ranges searched and selection criterion.
- Number of random seeds used and how results are aggregated.
- Total compute used (GPU type × hours).
- Software versions (or a frozen `requirements.txt` link).
- Whether code and weights will be released.

If any of these is missing, reviewers will ask. Better to answer in the paper than in a rebuttal.

## Five examples to study

1. *GLUE* and *SuperGLUE* benchmark papers (Wang et al.). For how to describe a benchmark in detail.
2. *[Don't Stop Pretraining](https://aclanthology.org/2020.acl-main.740/)* (Gururangan et al., ACL 2020). Clean baseline structure across domains.
3. *MMLU* (Hendrycks et al., ICLR 2021). Defines a benchmark and how it should be evaluated.
4. *[Linguistic Knowledge and Transferability of Contextual Representations](https://aclanthology.org/N19-1112/)* (Liu et al., NAACL 2019). 17 probing tasks described compactly with clear setup details.
5. *[Show Your Work](https://aclanthology.org/D19-1224/)* (Dodge et al., EMNLP 2019). Not just a paper to read — a paper whose own experimental-setup discipline is a model.

## Further reading

- ACL Responsible NLP Research Checklist (in the ACL Rolling Review CFP): [https://aclrollingreview.org/cfp](https://aclrollingreview.org/cfp).
- Dodge et al., ["Show Your Work: Improved Reporting of Experimental Results"](https://aclanthology.org/D19-1224/), EMNLP 2019. Required reading.
- Reimers & Gurevych, ["Reporting Score Distributions Makes a Difference"](https://aclanthology.org/D17-1035/), EMNLP 2017.
- Ehud Reiter, ["A Structured Review of the Validity of BLEU"](https://aclanthology.org/J18-3002/), *Computational Linguistics* 2018. Why a standard metric is not automatically a valid one.
- van der Lee et al., ["Best practices for the human evaluation of automatically generated text"](https://aclanthology.org/W19-8643/), INLG 2019. How to run a human evaluation other people can trust.
- Zheng et al., ["Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena"](https://arxiv.org/abs/2306.05685), NeurIPS 2023. The biases of LLM judges, and how to check for them.
- The companion phrasebooks in [Chapter 13 — Dataset Construction](./13-dataset-construction.md) and [Chapter 14 — Methods](./14-methods.md): the data and method you set up here are described in full there; keep the cross-references consistent.
