---
sidebar_position: 16
title: "16. References, Appendices, and Reproducibility"
---

## References

- **Alphabetical by first author.** ACL convention.
- **Use the ACL Anthology BibTeX** wherever the paper appears there. The bib keys are stable and other authors will find your citations easier to verify. ACL Anthology bib key format: `{firstauthor}-{etal}-{year}-{titleword}`.
- **Cite the peer-reviewed version**, not the arXiv preprint, if both exist. ACLPUB guidelines are explicit on this.
- **Do not hallucinate citations.** This is now a documented problem in the field — hundreds of recent \*ACL papers contain references to nonexistent works, most produced when authors used LLMs to help draft without verifying the output. Verify every citation. If you used an LLM to help draft, *check every reference it produced*.

## Appendices

Appendices go after references. They do not count toward the page limit, but they should not contain content essential to the main claims — reviewers are not required to read them.

**Good appendix content:**

- Hyperparameter tables.
- Additional ablation results.
- Dataset construction details (annotation instructions, screenshots of interfaces).
- Proofs and derivations.
- Additional qualitative examples.

**Bad appendix content:**

- Your main results table (it belongs in the main text).
- The definition of your method (also belongs in the main text).
- An eight-page literature review you could not fit elsewhere.

## Reproducibility

ACL has a formal **Responsible NLP Research Checklist** that you must fill out at submission. Read it now, not the night before the deadline: [https://aclrollingreview.org/cfp](https://aclrollingreview.org/cfp).

Key reproducibility items:

- **Code and data release.** Anonymized for the review period; deanonymized for camera-ready. Use an anonymous GitHub mirror or [anonymous.4open.science](https://anonymous.4open.science) during review.
- **Random seeds and number of runs.**
- **Compute used.** Number and type of GPUs, total training time.
- **Hyperparameter search.** Range searched, criterion, best value.
- **Licenses.** For all data, models, and code used.

## A practical workflow

About one week before the deadline, freeze your code and your experiments. Tag the commit. From that tag, you should be able to reproduce every number in the paper with one command. If you cannot, write the documentation to make it possible. Reviewers may not look — but they may, and if they do, this is the difference between a clean accept and a "results may not be reproducible" rejection.

## Further reading

- Pineau et al., ["Improving Reproducibility in Machine Learning Research"](https://arxiv.org/abs/2003.12206) — the NeurIPS reproducibility checklist that influenced ACL's.
- Dodge et al., ["Show Your Work"](https://aclanthology.org/D19-1224/), EMNLP 2019.
- The ACL Anthology FAQ on bib keys: [https://aclanthology.org/faq/](https://aclanthology.org/faq/).
