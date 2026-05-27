---
sidebar_position: 9
title: "9. Experimental Setup"
---

This section is dry and necessary. Reviewers go here to check whether they should believe your results. Make it easy to check.

## What belongs here

- **Datasets.** Name, size, splits, source, license. If you constructed it, point to the construction details (usually a separate section or appendix). If you used a standard benchmark, cite the version (GLUE vs. SuperGLUE; SQuAD 1.1 vs. 2.0).
- **Baselines.** What you compare to and *why those*. The honest answer is "the most competitive prior methods we could run." Reviewers will check whether you ducked a strong baseline.
- **Metrics.** Which ones, and why each is appropriate. If you use a non-standard metric, justify it (and ideally also report standard ones).
- **Implementation details.** Model size, framework, hardware, training time. Enough that another researcher could reproduce the work.
- **Hyperparameters and selection procedure.** How were they chosen — grid search, prior work, default? Were they tuned on the validation set or the test set? (It must be the validation set.)
- **Statistical practice.** Are results averaged over seeds? How many? Are differences statistically significant? Card et al.'s ["With Little Power Comes Great Responsibility"](https://aclanthology.org/2020.emnlp-main.745/) is mandatory reading on this point.

## Common mistakes

- **The "see appendix" punt.** Some information has to be in the main paper. Dataset sizes, baselines, metrics, and number of seeds belong in the main text. Pushing all of this to the appendix tells reviewers you do not want them to see it.
- **Single-seed results.** A single run with one seed is not a result, it is an anecdote. Average over at least three seeds wherever feasible, and report variance.
- **Test-set tuning.** If your hyperparameter choices were made looking at test numbers, your results are not valid. Be religious about val/test separation.
- **Cherry-picked baselines.** If a stronger baseline exists and is feasible to run, run it. Reviewers will notice the missing comparison.
- **No license / no provenance.** Especially for new datasets or scraped corpora — the [ACL Responsible NLP Checklist](https://aclrollingreview.org/cfp) asks about this directly.

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
