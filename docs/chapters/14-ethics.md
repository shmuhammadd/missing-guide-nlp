---
sidebar_position: 14
title: "14. Ethical Considerations"
---

Optional but strongly encouraged. Like the Limitations section, it does not count toward the page limit. It sits before the references.

## What goes in

- **Data.** Was personal or sensitive data used? How was consent obtained? What are the licenses?
- **Annotators.** If you used human annotators or crowd workers, what were they paid? What demographics? Were they warned about offensive content?
- **Models and biases.** What biases might your model exhibit or amplify? Did you test for any? What are the deployment risks?
- **Dual use.** Could your method be misused (e.g., for surveillance, disinformation, scams)? Acknowledge it honestly.
- **Environmental.** Compute use, especially for very large models.

## Common mistakes

- **Boilerplate.** "We followed standard ethical guidelines." That tells the reader nothing. Be specific.
- **Pretending it does not apply.** Almost every NLP paper has *some* ethical dimension. Even a syntax-parser paper has training-data provenance.
- **Performative ethics.** Long, vague paragraphs that signal concern without substantive engagement. Be concrete.

## Five examples

1. *Stanford Alpaca* (Taori et al., 2023). Discusses misuse risk of instruction-tuned models honestly.
2. *Whose Opinions Do Language Models Reflect?* (Santurkar et al., ICML 2023). Ethics tied to the methodology.
3. *The BigScience ROOTS Corpus* (Laurençon et al., NeurIPS 2022). Substantial treatment of data ethics for a large corpus.
4. *On the Dangers of Stochastic Parrots* (Bender et al., FAccT 2021) — the paper is itself an ethical analysis; useful as a model for depth of engagement.
5. *Dolma: an Open Corpus for Language Model Pretraining* (Soldaini et al., ACL 2024). Discusses tradeoffs in data filtering and licensing.

## Further reading

- ACL Code of Ethics: [https://www.aclweb.org/portal/content/acl-code-ethics](https://www.aclweb.org/portal/content/acl-code-ethics).
- Bender & Friedman, ["Data Statements for NLP"](https://aclanthology.org/Q18-1041/), TACL 2018. The original "what should a dataset paper disclose" reference.
