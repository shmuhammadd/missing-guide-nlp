---
sidebar_position: 23
title: "23. Using AI tools responsibly"
---

You will use a language model somewhere in making your paper: to polish a sentence, debug a script, or find related work. That is now normal, and the field has written rules for it. Below is what those rules say, what you must disclose, and the few uses that will get a paper desk-rejected or, later, retracted. In short, AI can help you *write*. It cannot *author*, you cannot *trust it on facts*, and in *reviewing* it is mostly forbidden.

## What the ACL policy says

\*ACL venues follow the [ACL 2023 Policy on AI Writing Assistance](https://2023.aclweb.org/blog/ACL-2023-policy/), which sorts uses along a spectrum. From most to least clearly acceptable:

- **Polishing your own words.** Using a model "for paraphrasing or polishing the author's original content, rather than for suggesting new content" is fine and needs no disclosure. So is predictive-text and autocomplete-style input.
- **Literature search.** Using a model to surface related work is allowed. The normal citation rules still apply: you must read and verify what you cite. The next section covers this, because it is where papers get into trouble.
- **Generating low-novelty text.** For boilerplate describing well-established concepts, you must "specify where such text was used" and confirm it is accurate.
- **Generating new ideas and the text expressing them.** The policy draws the line here: "A contributor of both ideas and their execution seems to us like the definition of a co-author, which the models cannot be." This is discouraged, and at minimum you must "convince the reviewers that the generation was checked to be accurate and is accompanied by relevant and appropriate citations."

You disclose through the **Responsible NLP Checklist** you already fill out at submission. It now asks whether you used writing assistants and, if so, to "elaborate on the scope and nature of their use." The question is "not meant for automatic desk-rejections"; it exists for reflection and norm-setting. Reviewers do see your answers, though, and may flag a paper for case-by-case ethics review. Honest disclosure costs you nothing. A concealed use that surfaces later costs you the paper. The same policy asks you to acknowledge **code assistants** like Copilot in the README of any code you release.

## The hallucinated-citation trap

Language models invent references that look perfect and do not exist. The authors are plausible, the venue sounds real, the title is clean. Drop one into your bibliography and you have published a fabrication, whatever your intent. No failure is more likely to sink a first paper. The problem is documented across the field. Recent \*ACL papers have shipped with references to works that were never written, most of them produced when authors drafted with a model and did not check its output. [Chapter 24](./24-references-and-appendices.md) treats this as a hard rule.

Treat every citation a model produces as a *claim to verify*. Confirm that the paper exists, that the authors and title are exact, and that the venue and year are right. Check against the [ACL Anthology](https://aclanthology.org) where you can. Apply the same caution to any *factual* claim a model hands you: a summary of prior work, a definition, a statistic. Models are fluent without being reliable, and the fluency hides the errors. If your paper states it, you answer for it. The tool does not.

## AI cannot be an author

The field and the major publishers agree that a language model cannot be listed as an author. *Nature*, *Science*, the Springer Nature journals, and the [Committee on Publication Ethics](https://publicationethics.org/guidance/cope-position/authorship-and-ai-tools) all prohibit it. The reason is **accountability**. An author takes responsibility for the work's integrity, approves the final version, and can answer for it afterward. A model, as Nature [puts it](https://www.nature.com/nature-portfolio/editorial-policies/ai), "cannot be held accountable", and it has no persistent identity that could be. Acknowledge a tool that helped you write in the way the policy above describes. Never put it on the byline.

## Using AI in your own writing

Within the rules, a model is a useful writing aid. One line keeps you safe: **the ideas, the claims, and the citations are yours; the model only helps with the prose.**

- **Good uses.** Tightening a clumsy sentence, suggesting a clearer structure for a paragraph you wrote, catching grammar slips in a second language, rephrasing for the word limit, explaining a reviewer's terse comment.
- **Risky uses.** Drafting whole sections from a prompt, generating "related work" you have not read, asking for "a citation that supports this". Each invites the hallucination trap and edges toward the co-author line.
- **The non-negotiable.** Read, verify, and own every word in the paper. A model's confident tone is not evidence. The diction this guide bans ("delve," "it is important to note," hedge-stacks) also marks unedited generated text. If your draft reads like that, you have not finished writing it.

## AI in reviewing: mostly off-limits

Review touches other people's unpublished work, so here the rules turn restrictive. Under the [ARR reviewer guidelines](https://aclrollingreview.org/reviewerguidelines), you must **not** paste a submission, or any part of it, into a non-privacy-preserving generative tool. Doing so "may violate the authors' confidentiality and intellectual property rights." The same bar covers your review report. You may not upload it "even if it is just for the purpose of improving language and readability," because it contains confidential information about the submission. You may use privacy-preserving tools for language help, but you remain responsible for what you submit.

This already happens. A 2024 study estimated that **between 6.5% and 16.9%** of review text at several major AI conferences (ICLR 2024, NeurIPS 2023, EMNLP 2023, CoRL 2023) could have been substantially modified by a language model ([Liang et al., ICML 2024](https://arxiv.org/abs/2403.07183)). That text clustered in low-confidence, last-minute reviews. A review outsourced to a model fails the author and breaks the trust the system runs on.

Some authors now hide **prompt injections** in their submissions: invisible text telling an AI to return a glowing review. ARR's guidance is blunt. If you spot one, report it to the chairs, and "such submissions should be desk rejected." Do not plant them, and do not run a review through an AI they could exploit.

## Common mistakes

- **Pasting model citations unchecked.** The fastest way to get a fabrication into print. Verify every reference against the Anthology.
- **Treating fluent output as correct.** Models can be confident and wrong at once. Every fact is yours to confirm.
- **Concealing substantive use.** The checklist asks; reviewers see the answer. A concealed use found later costs far more than disclosure.
- **Letting the model find your related work.** Surfacing candidates is fine. Citing papers you have not read is not, and reviewers can tell.
- **Running a review through ChatGPT.** It breaches confidentiality, and it is increasingly easy to detect. Use only privacy-preserving tools for language help, and own the result.

## Further reading

- The [ACL 2023 Policy on AI Writing Assistance](https://2023.aclweb.org/blog/ACL-2023-policy/), the primary source for the spectrum above. Read it before you submit.
- The [ARR reviewer guidelines](https://aclrollingreview.org/reviewerguidelines), with the confidentiality and AI rules for when you are on the other side of the table ([Chapter 22](./22-ethics.md) covers the broader ethics).
- Liang et al., ["Monitoring AI-Modified Content at Scale"](https://arxiv.org/abs/2403.07183) (ICML 2024), the evidence on how far LLM use has already crept into peer review.
