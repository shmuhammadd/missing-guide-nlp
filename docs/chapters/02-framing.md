---
sidebar_position: 2
title: "2. Framing the Contribution"
---

Stop. Before you open Overleaf, you need to be able to answer four questions in plain English. Write them on an index card.

1. **What is the research question?** Not "we trained a model on task X." That is a method. The question is: *what did we want to know?* "Can large language models reason about negation in syllogisms?" is a question. "Do bigger retrievers help long-context QA, or do they just memorize?" is a question.

2. **Why does the answer matter?** If the only people who care are the three other groups working on the exact same benchmark, your paper will struggle. Tie it to something larger: a capability we did not have, a misconception we held, a tool the community needs, a deployment problem we cannot solve.

3. **What did you do that nobody had done before?** Be honest. "We added a contrastive loss" is not a contribution if seventeen prior papers added a contrastive loss. The contribution might instead be *what you learned* by doing so.

4. **What is the headline result?** One sentence. One number, or one finding. If you cannot say it in one sentence, your paper does not yet exist; your experiments do.

These four answers are the spine of the paper. They will appear (in increasing detail) in the title, the abstract, the introduction, and the conclusion. If they shift mid-draft, stop and revise the spine first. Do not keep writing on a broken spine.

## Write the paper backwards

A useful exercise borrowed from how senior researchers actually draft: write the paper backwards.

1. Start with the *result figure* — the one plot or table you would put on a poster.
2. Then write the caption.
3. Then write the paragraph in the results section that points at it.
4. Then write the introduction paragraph that promises that result.
5. Then write the abstract.

By the time you write the methods section, you know exactly what story it has to support. Most "the paper feels disjointed" reviewer comments are caused by writing forward without ever doing this exercise.

## A few principles to internalize

**Reviewers are tired.** They are reading your paper at 11pm after their second coffee, with eight more papers in the queue. Anything that makes their job harder — buried contributions, undefined acronyms, missing baselines, vague claims — costs you. Write for someone skimming, not for someone savoring.

**Clarity beats sophistication.** Vered Shwartz puts it well: "Aim to write papers that can be understood by anyone in NLP, regardless of their subarea. Don't try to sound smart." Use *use*, not *utilize*. Use *we propose*, not *herein we introduce a novel methodology*.

**The contribution is not the technique; the contribution is what the reader learns.** If your only sentence-long answer to "what did this paper teach the field?" is "we got +0.4 BLEU on WMT," your paper is in trouble regardless of how good the method is.

**A paper is a story, not a lab notebook.** You did the work in some order. You will present it in a different order — the order that makes the result inevitable.

## Further reading

- Vered Shwartz, ["Tips for Writing NLP Papers"](https://medium.com/@vered1986/tips-for-writing-nlp-papers-9c729a2f9e1f). The single best short read for new NLP authors.
- Jennifer Widom, ["Tips for Writing Technical Papers"](https://cs.stanford.edu/people/widom/paper-writing.html). Database-flavored but timeless.
- Simon Peyton Jones, ["How to write a great research paper"](https://www.microsoft.com/en-us/research/academic-program/write-great-research-paper/). The talk version is on YouTube and is 50 minutes well spent.
