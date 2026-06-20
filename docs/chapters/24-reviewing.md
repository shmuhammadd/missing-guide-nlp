---
sidebar_position: 24
title: "24. How to review well"
---

You will be asked to review sooner than you expect — often in your first year, sometimes before your own first acceptance. Peer review is volunteer labor, and the whole system runs on it; a field that submits more than it reviews collapses under its own backlog. Reviewing well is therefore a duty. It is also the fastest way to become a better author: nothing teaches you what reviewers look for like sitting in the chair. This chapter is how to do it well, and how not to become the [Reviewer 2](./03-jargon.md) of someone else's story. It is the mirror image of [the rebuttal chapter](./23-rebuttal.md) — read both.

Everything below follows the [ARR reviewer guidelines](https://aclrollingreview.org/reviewerguidelines), which are the authoritative source; read them in full before your first assignment. The single sentence to carry into every review: **"Write the review you would like to get yourself."**

## Before you accept the assignment

Reviewing has duties that begin before you read a word of the paper.

- **Conflict of interest.** If you know who wrote it — a collaborator, an advisor or advisee, someone at your institution, a close friend — or if it overlaps your own unsubmitted work, you have a conflict. The guidelines are explicit: "If the submission looks like something that is very close to your own work about to be submitted, it is best to recuse yourself." Ask your area chair for reassignment, and use the form field that asks whether you know the authors' identity.
- **Confidentiality.** "All the information about submissions and reviews that you receive as part of your assignment is confidential." Do not share the paper, do not discuss identifiable details, and if you talk about reviewing on social media, keep examples "general enough that no submissions can be identified."
- **No language models on the manuscript.** You may not paste a submission, or your review, into a non-privacy-preserving AI tool — it breaches the authors' confidentiality ([Chapter 21](./21-ai-assistance.md) covers this in full). If you spot a hidden prompt injection trying to manipulate an AI reviewer, report it to the chairs; such papers should be desk-rejected. A review you did not actually write is a breach of trust, and increasingly a detectable one.
- **Timeliness.** Block the time when you accept. "Late reviews mean extra work for the AC and other volunteers — and the authors might not get a fair chance to respond." If life intervenes, tell your ACs early rather than vanishing.
- **Competence.** Review what you can actually judge, and set your Confidence score honestly. There is no shame in a low-confidence review; there is real harm in a confident review of work you did not understand.

## Read the paper for what it is

Read it fully, and at least twice. Then review the paper the authors *wrote*, not the one you would have written — "Should have done X instead" is not a valid criticism when there are several valid approaches to a problem. Calibrate to the paper's type: a short paper "is not expected to have extensive evaluation and analysis," and a resource or position paper is judged on different things than an empirical one ([Chapter 2](./02-paper-types.md)).

## The anatomy of a review

The ARR form is not bureaucracy; each field does a job. Fill them as follows:

- **Paper summary.** Restate, neutrally and in your own words, what the paper does. This proves you read it and lets the authors correct you if you misread.
- **Summary of strengths.** Real ones. Every paper that took months to write has them; finding none is usually a failure of reading, not of the paper.
- **Summary of weaknesses.** Numbered, specific, and prioritized — the concerns that would make you rank another paper above this one. This is the heart of the review.
- **Comments, suggestions, typos.** Minor fixes that do not affect your assessment. Keep them separate from the weaknesses so the authors can tell what is load-bearing.
- **Questions for the authors.** What you genuinely want clarified in the rebuttal. Phrase them so a good answer could change your score.
- **The scores.** Soundness, Excitement, Overall Assessment, and Confidence, plus the reproducibility, datasets, software, and ethics fields where they apply.

## Scoring honestly

Three of the scores are easy to confuse; keep them distinct.

- **Soundness** asks whether the claims are adequately supported. The rule that catches lazy reviews: "The soundness scores must be justified by the text of the review. If you give a low Soundness score without finding any major faults, this means that your review is not a faithful explanation of your recommendation." Name the fault or raise the score.
- **Excitement** is your subjective sense of how interesting or impactful the work is — explicitly *orthogonal* to soundness. A paper can be rock-solid but unexciting, or thrilling but shaky, and the form is built to say both.
- **Overall Assessment** is your publication recommendation, on a scale that distinguishes award-worthy, main-conference, and Findings-level work.
- **Confidence** is how sure you are. Set it low when the area is outside your expertise; it tells the AC how much weight your scores should carry.

## What is not a valid reason to reject

This is the part that separates a good reviewer from a [Reviewer 2](./03-jargon.md), so the guidelines enumerate the bad reasons explicitly. None of the following, on its own, is grounds to reject:

- **"The results aren't surprising."** "Many findings seem obvious in retrospect, but this does not mean that the community is already aware of them."
- **"The results contradict what I expected."** That may be confirmation bias, not a flaw.
- **"It's not novel"** — *without a citation.* If you claim the contribution exists already, "you need to provide a reference." A vague novelty complaint is not reviewable.
- **"It doesn't beat the state of the art."** "SOTA results are neither necessary nor sufficient for a scientific contribution."
- **"The results are negative."** The bias toward only positive results is a known pathology; negative findings are explicitly welcome.
- **"The method is too simple."** "The goal is to solve the problem, not to solve it in a complex way."
- **"It only evaluates a non-English language,"** or uses a methodology you would not have chosen, or addresses a narrow subfield. NLP is interdisciplinary, and a main-track paper "may well make a big contribution to a narrow subfield."
- **"The English has errors."** "As long as the writing is clear enough, better scientific content should be more valuable than better journalistic skills." Judge the science, not the prose polish — especially for non-native authors.
- **"It's missing experiment X."** "A paper only needs to present sufficient evidence for the claim that the authors are making." Demanding experiments beyond that claim is a wishlist, not a review.
- **The authors' own Limitations section.** "A good review should not just take the limitations and list them as weaknesses or reasons to reject." Punishing honesty teaches authors to hide their limitations — the opposite of what [Chapter 19](./19-limitations.md) asks of them.

## Write it so it actually helps

A review exists to give the authors a clear path forward and the chairs a basis for a decision. So:

- **Be specific and actionable.** "The paper is missing references XYZ" beats "the paper is missing relevant references"; "the results would be stronger with validation on the LDC NYT dataset" beats "not enough experiments." Name the reference, the baseline, the dataset, the line.
- **Separate major from minor,** so the authors know what is sinking the paper versus what is a typo.
- **Justify every score** in the text. A score the prose does not explain reads as arbitrary — to the authors and the AC alike.
- **Stay professional, neutral, and kind.** "As an anonymous reviewer, you are in a position of power, and the written medium makes it easier to be more dismissive and sarcastic than if you were communicating with the authors face-to-face." Resist it.
- **Engage with the rebuttal.** Acknowledge the response, update your review if the authors cleared something up, and if you are still unconvinced, say *why* — "then the authors will at least know that their response was not convincing."

## An example: the same paper, reviewed badly and well

The following is **illustrative** — an invented paper and invented reviews.

**The (fictional) paper.** *A prompt-based method for sentiment analysis in Swahili*, a short paper: it shows that a simple prompting recipe beats a fine-tuned baseline on one Swahili sentiment dataset, across three seeds, with an honest limitations section noting the single-dataset scope.

**A weak review.**

> The method is not novel — prompting for sentiment has been done many times. The paper only evaluates Swahili, so it is hard to know if it generalizes, and the approach is quite simple. The English also has several grammatical errors. The authors admit themselves that they only use one dataset. I would have used a multilingual model instead. Reject. *(Soundness: 2, Confidence: 4.)*

Almost every sentence here is a forbidden heuristic. "Not novel" comes with no citation; "only Swahili" penalizes non-English work; "quite simple" treats simplicity as a fault; "grammatical errors" judges prose over science; "the authors admit themselves" weaponizes the Limitations section; "I would have used…" substitutes the reviewer's taste for the authors' valid choice. The Soundness score of 2 is not justified by a single named fault. This is a drive-by reject, and an AC should discount it.

**A strong review.**

> **Summary.** The paper proposes a prompt-based recipe for Swahili sentiment analysis and shows it outperforms a fine-tuned baseline on the TweetSwahili dataset by 3.1 F1, averaged over three seeds.
>
> **Strengths.** (1) Swahili sentiment is genuinely under-served, and a method that avoids fine-tuning lowers the compute barrier for low-resource work. (2) Results are averaged over three seeds with reported variance — good practice for a short paper. (3) The limitations section is honest about the single-dataset scope.
>
> **Weaknesses.** (1) The central claim rests on one dataset; even within a short paper's scope, a second existing Swahili set (e.g. the SwahBERT evaluation data) would considerably strengthen it — is one available? (2) The prompt templates are described in prose but not listed in full, which will hamper reproduction; a table in the appendix would fix this. (3) The baseline's hyperparameters are not reported, so I cannot tell whether it was tuned as carefully as the proposed method.
>
> **Questions.** Was the fine-tuned baseline tuned on the same validation budget as the prompting method? Are the prompts in English or Swahili, and does that choice matter?
>
> **Scores.** Soundness 3 (claims are supported for the one dataset tested, with the gaps above); Excitement 3; Overall: solid short paper, leaning accept; Confidence 4.

Notice what the strong review does: a neutral summary that proves it was read, concrete strengths, *numbered and specific* weaknesses tied to the paper's own claim, questions a rebuttal could actually answer, and scores the text justifies. It asks for one in-scope experiment, not a wishlist, and it never once reaches for a forbidden heuristic.

## Common mistakes

- **The drive-by reject.** A few dismissive sentences and a low score with no named fault. The most damaging thing a reviewer does.
- **The wishlist.** Demanding experiments beyond the paper's actual claim. Review the paper that was written.
- **"Not novel," unsourced.** If it has been done, cite where. Otherwise it is not a review.
- **The taste review.** "I would have done it differently" is not a weakness when the authors' approach is valid.
- **Punishing honesty.** Mining the Limitations section for reasons to reject.
- **Scores that contradict the prose.** A low Soundness with no fault, or a glowing review with a reject score, reads as unserious.
- **The AI-written or late or absent review.** Each fails the authors and the volunteers downstream; if you cannot do it, decline early.

## Further reading

- The [ARR reviewer guidelines](https://aclrollingreview.org/reviewerguidelines) and [review form](https://aclrollingreview.org/reviewform) — the authoritative, current source for everything above.
- The [ACL Code of Ethics](https://www.aclweb.org/portal/content/acl-code-ethics) — the standard your ethics flags are judged against ([Chapter 20](./20-ethics.md)).
- [The rebuttal](./23-rebuttal.md) — the other side of the same conversation; reviewing well and rebutting well are the same skill viewed from two chairs.
