---
sidebar_position: 21
title: "21. Using AI tools responsibly"
---

You will use a language model somewhere in the making of your paper — to polish a sentence, debug a script, or find related work. That is now normal, and the field has written rules about it. This chapter is what those rules actually say, what you must disclose, and the few uses that will get a paper desk-rejected or, later, retracted. The short version: AI can help you *write*, but it cannot *author*, it cannot be *trusted on facts*, and in *reviewing* it is mostly forbidden.

## What the ACL policy actually says

\*ACL venues follow the [ACL 2023 Policy on AI Writing Assistance](https://2023.aclweb.org/blog/ACL-2023-policy/), which sorts use into a spectrum rather than a yes/no. From most to least clearly acceptable:

- **Polishing your own words.** Using a model "for paraphrasing or polishing the author's original content, rather than for suggesting new content" is fine and needs no disclosure. So is predictive-text and autocomplete-style input.
- **Literature search.** Using a model to surface related work is allowed — but the normal citation rules apply, and you must actually read and verify what you cite (see the next section; this is where papers get into trouble).
- **Generating low-novelty text.** For boilerplate describing well-established concepts, you must "specify where such text was used" and confirm it is accurate.
- **Generating new ideas and the text expressing them.** The policy draws the line here: "A contributor of both ideas and their execution seems to us like the definition of a co-author, which the models cannot be." This is discouraged, and at minimum you must "convince the reviewers that the generation was checked to be accurate and is accompanied by relevant and appropriate citations."

Disclosure runs through the **Responsible NLP Checklist** you already fill out at submission, which now asks whether writing assistants were used and, if so, to "elaborate on the scope and nature of their use." Two things to understand about that question. First, it is "not meant for automatic desk-rejections" — it exists for reflection and norm-setting, not as a trap. Second, your answers are shown to reviewers, who may flag a paper for case-by-case ethics review. Honesty here costs you nothing; a concealed use that surfaces later costs you the paper. The same policy asks you to acknowledge **code assistants** like Copilot in the README accompanying any released code.

## The hallucinated-citation trap

This is the failure mode most likely to sink a first paper, so it gets its own section. Language models invent references that look perfect — plausible authors, a real-sounding venue, a clean title — and do not exist. Drop one into your bibliography and you have published a fabrication, whatever your intent. This is already a documented, field-wide problem: recent \*ACL papers have shipped with references to works that were never written, most of them produced when authors used a model to draft and did not check its output ([Chapter 22](./22-references-and-appendices.md) treats this as a hard rule).

So treat every model-produced citation as a *claim to verify*, not a fact to paste. Confirm the paper exists, the authors and title are exact, and the venue and year are right — preferably against the [ACL Anthology](https://aclanthology.org). The same caution extends to any *factual* claim a model hands you: a summary of prior work, a definition, a statistic. Models are fluent, not reliable; fluency is exactly what makes the errors hard to catch. If your paper states it, you are accountable for it, not the tool.

## AI cannot be an author

There is firm consensus across the field and the major publishers: a language model cannot be listed as an author. *Nature*, *Science*, the Springer Nature journals, and the [Committee on Publication Ethics](https://publicationethics.org/guidance/cope-position/authorship-and-ai-tools) all prohibit it. The reason is not snobbery but **accountability**: an author takes responsibility for the work's integrity, approves the final version, and can answer for it afterward — and a model, as Nature [puts it](https://www.nature.com/nature-portfolio/editorial-policies/ai), "cannot be held accountable" and has no persistent identity that could be. A tool that helped you write is acknowledged, in the manner the policy above describes; it is never a name on the byline.

## Using AI in your own writing

Within the rules, a model is a genuinely useful writing aid. The line that keeps you safe is simple: **the ideas, the claims, and the citations are yours; the model only helps with the prose.**

- **Good uses.** Tightening a clumsy sentence, suggesting a clearer structure for a paragraph you wrote, catching grammar slips in a second language, rephrasing for the word limit, explaining a reviewer's terse comment.
- **Risky uses.** Drafting whole sections from a prompt, generating "related work" you have not read, asking for "a citation that supports this" — each invites the hallucination trap and edges toward the co-author line.
- **The non-negotiable.** Read, verify, and take ownership of every word that ends up in the paper. A model's confident tone is not evidence. The diction this guide bans — "delve," "it is important to note," hedge-stacks — is also a fingerprint of unedited generated text; if your draft reads like that, you have not finished writing it.

## AI in reviewing: mostly off-limits

Here the rules flip from permissive to restrictive, because review touches other people's unpublished work. Under the [ARR reviewer guidelines](https://aclrollingreview.org/reviewerguidelines), you must **not** paste a submission, or any part of it, into a non-privacy-preserving generative tool: doing so "may violate the authors' confidentiality and intellectual property rights." The same bar covers your review report itself — you may not upload it "even if it is just for the purpose of improving language and readability," because it contains confidential information about the submission. Privacy-preserving tools are permitted for language help, but you remain fully responsible for what you submit.

Two further facts worth carrying. First, this is not hypothetical: a 2024 study estimated that **between 6.5% and 16.9%** of review text at several major AI conferences (ICLR 2024, NeurIPS 2023, EMNLP 2023, CoRL 2023) could have been substantially modified by a language model ([Liang et al., ICML 2024](https://arxiv.org/abs/2403.07183)) — concentrated, tellingly, in low-confidence, last-minute reviews. A review outsourced to a model is a disservice to the author and a breach of the trust the system runs on. Second, the arms race has a dark corner: some authors now hide **prompt injections** in their submissions — invisible text instructing an AI to return a glowing review. ARR's guidance is blunt: if you spot one, report it to the chairs, and "such submissions should be desk rejected." Do not plant them, and do not let an AI reviewer be the thing they exploit.

## Common mistakes

- **Pasting model citations unchecked.** The single fastest way to get a fabrication into print. Verify every reference against the Anthology.
- **Treating fluent output as correct.** Models are confident and wrong in the same breath. Every fact is yours to confirm.
- **Concealing substantive use.** The checklist asks; reviewers see the answer. Disclosure is cheap, discovery is expensive.
- **Letting the model find your related work.** Surfacing candidates is fine; citing what you have not read is not — and it shows.
- **Running a review through ChatGPT.** A confidentiality breach and, increasingly, a detectable one. Privacy-preserving language help only, and you own the result.

## Further reading

- The [ACL 2023 Policy on AI Writing Assistance](https://2023.aclweb.org/blog/ACL-2023-policy/) — the primary source for the spectrum above. Read it before you submit.
- The [ARR reviewer guidelines](https://aclrollingreview.org/reviewerguidelines) — the confidentiality and AI rules for when you are on the other side of the table ([Chapter 20](./20-ethics.md) covers the broader ethics).
- Liang et al., ["Monitoring AI-Modified Content at Scale"](https://arxiv.org/abs/2403.07183) (ICML 2024) — the evidence on how far LLM use has already crept into peer review.
