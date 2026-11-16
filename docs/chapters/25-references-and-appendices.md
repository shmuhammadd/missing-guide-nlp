---
sidebar_position: 25
title: "25. References, Appendices, and Reproducibility"
---

The back matter holds three things, each with its own job. *References* let a reader check the conversation you joined. *Appendices* hold what supports your claims without being essential to them. The *reproducibility* record lets someone rebuild your results. Material the main claims depend on belongs in the main text. Material that supports no claim belongs nowhere.

**The appendix test** asks one question: *can a reviewer accept the paper's claims without turning to the appendix?* If yes, the content sits in the right place. If a claim holds only once the reader reaches Appendix C, that content is in the wrong place. The same boundaries run through the guide. The method goes in [Methods](./17-methods.md), hyperparameter values in [Experimental Setup](./18-experimental-setup.md), and data-collection detail in [Dataset Construction](./16-dataset-construction.md). The appendix takes the useful but inessential overflow from each.

## References

- **Alphabetical by first author.** ACL convention.
- **Use the ACL Anthology BibTeX** wherever the paper appears there. The bib keys are stable and other authors will find your citations easier to verify. ACL Anthology bib key format: `{firstauthor}-{etal}-{year}-{titleword}`.
- **Cite the peer-reviewed version**, not the arXiv preprint, if both exist. ACLPUB guidelines are explicit on this.
- **Do not hallucinate citations.** This is now a documented problem in the field. Hundreds of recent \*ACL papers contain references to nonexistent works, most produced when authors drafted with LLMs and did not verify the output. Verify every citation. If you used an LLM to help draft, *check every reference it produced*.

## Appendices

Appendices go after references. They do not count toward the page limit. Keep out anything essential to the main claims, because reviewers are not required to read them.

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

About one week before the deadline, freeze your code and your experiments. Tag the commit. From that tag, you should be able to reproduce every number in the paper with one command. If you cannot, write the documentation to make it possible. Reviewers may not look. If they do, this is the difference between a clean accept and a "results may not be reproducible" rejection.

## Further reading

- Pineau et al., ["Improving Reproducibility in Machine Learning Research"](https://arxiv.org/abs/2003.12206), the NeurIPS reproducibility checklist that influenced ACL's.
- Dodge et al., ["Show Your Work"](https://aclanthology.org/D19-1224/), EMNLP 2019.
- The ACL Anthology FAQ on bib keys: [https://aclanthology.org/faq/](https://aclanthology.org/faq/).
