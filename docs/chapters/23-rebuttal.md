---
sidebar_position: 23
title: "23. The rebuttal"
---

You submitted. Weeks passed. The reviews arrived, and one of them misread your central claim, another asked for an experiment you already ran, and the third — well, you have met [Reviewer 2](./03-jargon.md). The rebuttal is your one chance to respond before scores are finalized. Written well, it can move a borderline paper to acceptance. Written in anger, it can confirm a reject. This chapter is how to write the good one.

First, calibrate your expectations. A study of ACL-2018 rebuttals found that author responses have only a "marginal (and statistically significant) influence on the final scores, especially for borderline papers," and that a reviewer's final score is "largely determined by her initial score and the distance to the other reviewers' initial scores" ([Gao et al., NAACL 2019](https://aclanthology.org/N19-1129/)). Read that as a strategy, not a discouragement: rebuttals rarely flip a clear reject, but **borderline is exactly where they bite** — and borderline is where most first papers live. A later study of ICLR-2022 likewise found significant score movement across the rebuttal stage ([Huang et al., 2023](https://arxiv.org/abs/2307.03371)). The response matters most precisely when your fate is undecided.

## Know the mechanics before you write

The rules differ by venue and, at ARR, by cycle — always read the current call. The shape to expect:

- **ARR's in-cycle response is narrow.** For roughly five days after reviews appear, authors may comment on them, but the comments "should be limited to clear factual errors or serious misunderstandings," and "should not include, for example, new experimental results or data analyses requested by reviewers" ([ARR in-cycle author response](https://aclrollingreview.org/in-cycle-author-response/)). At ARR the *primary* route for addressing substantive requests is revise-and-resubmit in a later cycle, not the rebuttal.
- **Other venues allow a fuller rebuttal.** Many \*ACL conferences and ML venues run a longer author-response phase where a *minor* add-on experiment in direct response to a reviewer's question is acceptable. Know which regime you are in, and never present major new work as if it had been in the submission.
- **Format is constrained.** Responses are typically text-only, no external links, with a length or per-thread limit; area chairs are not obligated to read endless back-and-forth. Write as if you get one well-aimed page, not a conversation.
- **You can flag a broken review.** ARR tags review issues with codes (I1–I12) that authors may report, and since May 2025 it sanctions "highly irresponsible" reviewing — extremely terse reviews, unprofessional tone, or LLM-generated reviews ([reviewer guidelines](https://aclrollingreview.org/reviewerguidelines)). Use this sparingly and only for genuine violations: it is an escalation to the chairs, not a rebuttal tactic.

## Before you write: triage

Do not start typing replies. Read all reviews twice, then sort every point into four bins:

1. **Misunderstandings you can correct.** The reviewer read something that is not what you wrote. Highest-value: a clarification can recover real points, and the fault is often the paper's, not the reviewer's.
2. **Answerable objections.** A fair criticism you can rebut with a result already in the paper, a number you can compute quickly (where allowed), or a precise argument.
3. **Fair hits you must concede.** A real limitation. Concede it cleanly, scope the claim, and where possible say what you will change. Conceding well builds the credibility that makes your other responses believable.
4. **Matters of taste.** "I would have liked a different paper." You usually cannot win these; acknowledge briefly and move on.

Then budget your space by *impact on the score*, not by how annoyed each point made you. A calm sentence on the objection that is actually sinking you beats three paragraphs litigating a typo.

## Structure that works

The most-cited working advice on this, from Parikh, Batra, and Lee's ["How we write rebuttals"](https://deviparikh.medium.com/how-we-write-rebuttals-dc84742fece1), maps cleanly onto \*ACL:

- **Start positive.** Open with a one-line summary that notes what the reviewers agreed was good. It sets a constructive tone and reminds the AC of the paper's strengths.
- **Order by importance, not by reviewer.** Lead with the biggest concern you can answer well, then work toward minor points. Group the same concern raised by multiple reviewers into one answer ("R1 and R3 both ask about…").
- **Quote, then respond.** State the reviewer's concern concisely in their own terms before answering, so the response is self-contained and the reviewer feels heard.
- **Don't promise, do.** "We will discuss Smith et al. in the final version" is weak; actually give the one-sentence discussion in the rebuttal. Show the change, do not pledge it.
- **Be concrete and specific.** Point to the table, give the number, name the section. Vague reassurance ("we believe our method is robust") moves nobody.

## Tone: the rebuttal is not an argument you win

The reviewer may be your area chair's trusted colleague, and will likely review your next paper. So:

- **Thank, don't grovel; correct, don't attack.** "We thank R2 for the careful read" costs nothing. "R2 clearly did not read Section 4" costs you the AC's sympathy, even when it is true.
- **Treat misreadings as the paper's failure.** "We see how Section 3 was unclear and will revise it" lands far better than "the reviewer misunderstood," and it is usually the more accurate framing anyway.
- **Never overclaim in the rebuttal.** Reviewers re-read with raised eyebrows. A measured concession is more persuasive than a confident dodge.
- **Stay out of the gutter.** If a review is genuinely abusive or obviously AI-generated, do not trade insults — note it factually and, if warranted, report it to the chairs through the proper channel.

## Phrasebook: the moves of a rebuttal

As in the rest of the guide, these are **adaptable templates**, not lines to paste. Fill every bracket with your specifics; a rebuttal assembled from stock phrases reads like one.

### Opening

- *"We thank the reviewers for their careful reading. We are glad R1 and R2 found [the agreed strength], and we address the main concerns — [concern A], [concern B], and [concern C] — below."* — One sentence of genuine thanks, the agreed strength, then a roadmap.

### Correcting a misunderstanding

- *"R2 reads our claim as [the misreading]. We actually claim [the precise claim] (Section [N]); we see the passage was ambiguous and will revise it to say [the fix]."* — Restate, correct, and own the ambiguity in one move.
- *"To clarify: [X] is not [what the reviewer assumed] but [what it is]. This does not affect [the result], because [reason]."* — Defuse and contain the misunderstanding's blast radius.

### Answering a request for more experiments

- *"R3 asks whether the gain holds on [setting]. It does: Table [N] already reports [the number] for that case."* — The best answer — the evidence is already there; point to it.
- *"In direct response to R1, we ran [the small additional experiment]: [result]. We will add this to Section [N]."* — Only where the venue permits a minor add-on; report the number, not a promise.
- *"A full study of [the requested setting] needs [resources/scale] beyond a rebuttal; we have added it to the limitations and future work, and note our claim is scoped to [what we tested]."* — When the request is reasonable but out of scope, concede and re-scope rather than fake it.

### Handling "not novel"

- *"R2 considers the method not novel but cites no prior work doing [our specific contribution]. The closest, [X et al.], differs in [precise way] (now stated in Section [N])."* — Hold the reviewer to the ARR rule that "not novel" needs a citation, then draw the line yourself.

### Conceding gracefully

- *"R1 is right that [limitation]. We have scoped the claim accordingly and flagged it in [Limitations]; addressing it fully is important future work."* — Concede the real hit, contain it, and move on. Conceding one point makes your other answers credible.

### Conflicting reviewers

- *"R1 and R3 disagree on [point]: R1 finds [A], R3 finds [B]. The evidence in Table [N] supports [resolution], which we hope clarifies for both."* — Address the disagreement openly rather than siding with one and ignoring the other.

### Closing

- *"We hope these clarifications address the reviewers' concerns and respectfully ask them to reconsider the score. We will incorporate every change noted above."* — Brief, courteous, and explicit that the changes are real.

## A worked example

The following is **illustrative — an invented paper and invented reviews**, not a real submission. It shows the moves above assembled into one response.

**The (fictional) paper.** *A lightweight adapter for low-resource Hausa NER.* Claim: a small adapter matches full fine-tuning at a fraction of the parameters, evaluated on one Hausa NER dataset across three seeds.

**The reviews, in brief.**

- *R1 (borderline):* "Interesting and efficient, but only one language and one dataset — I am not sure it generalizes."
- *R2 (negative):* "Not novel; adapters are well known. Also the method clearly won't scale to larger models."
- *R3 (positive):* "Solid. Minor: no significance testing, and Eq. 2's notation is confusing."

**A rebuttal.**

> We thank the reviewers for their careful reading, and are glad R1 and R3 found the approach efficient and the evaluation solid. We address generalization (R1), novelty and scaling (R2), and significance and notation (R3) below.
>
> **Generalization beyond one language (R1).** This is the fair central concern. Our claim is deliberately scoped to the low-resource single-language setting, where adapter efficiency matters most; we do not claim multilingual generality. To partially address the worry, we note Table 3 already reports consistent gains across the three seeds with low variance (±0.4 F1). We have revised the title and abstract to state the single-language scope explicitly, and added broader evaluation to future work.
>
> **"Not novel" (R2).** Adapters are indeed established, and we cite them as our foundation; our contribution is not the adapter but its application to low-resource Hausa NER and the finding that it matches full fine-tuning at 3% of the parameters — a result, to our knowledge, not previously reported. We would welcome a pointer to prior work showing this specific result.
>
> **Scaling to larger models (R2).** We agree this is untested and now say so in the limitations. Our claim concerns the small-model, low-resource regime that is most relevant to practitioners with limited compute; we make no claim about larger models.
>
> **Significance testing (R3).** Thank you — we have added a paired bootstrap test; the gain over the baseline is significant at p < 0.01, now noted in Table 2.
>
> **Eq. 2 notation (R3).** We see the ambiguity: `h_t` was overloaded. We have rewritten Eq. 2 to use a distinct symbol for the adapter state.
>
> We hope these clarifications help and respectfully ask the reviewers to reconsider. Every change above will be in the revision.

Notice what it does: opens positive, leads with the score-moving concern (generalization) and concedes its core honestly, holds R2 to the citation standard without hostility, *does* rather than promises (the significance test is reported, not pledged), and keeps every reply short.

## Common mistakes

- **Litigating every point equally.** Space spent on a typo is space stolen from the objection deciding your score. Triage.
- **Defensiveness and sarcasm.** "As clearly stated in the paper…" reads as contempt. Treat misreadings as your paper's fault.
- **Promising instead of doing.** "We will add…" is weak; show the sentence, the number, the fixed equation now.
- **Smuggling in major new work.** Presenting a large new experiment as if it were always there invites a desk-level credibility problem; respect the venue's rule.
- **Ignoring a reviewer's actual question.** Answering the question you wish they asked is transparent. Quote theirs, answer theirs.
- **Weaponizing the irresponsible-reviewer policy.** Reporting a merely negative review as "irresponsible" annoys the chairs. Reserve it for genuine violations.
- **Going silent.** A non-response reads as conceding the criticisms — even a short, gracious rebuttal is better than none, especially for a borderline paper.

## Further reading

- Gao et al., ["Does My Rebuttal Matter? Insights from a Major NLP Conference"](https://aclanthology.org/N19-1129/) (NAACL 2019). The empirical reality of what rebuttals do — and do not — change.
- Parikh, Batra, and Lee, ["How we write rebuttals"](https://deviparikh.medium.com/how-we-write-rebuttals-dc84742fece1). The clearest practical playbook; the structure section above follows it.
- The [ARR author guidelines](https://aclrollingreview.org/authors) and [in-cycle author response](https://aclrollingreview.org/in-cycle-author-response/) rules — read the current cycle's version before you respond.
