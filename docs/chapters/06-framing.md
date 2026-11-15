---
sidebar_position: 6
title: "6. Framing the Contribution"
---

Before you open Overleaf, answer four questions in plain English. Write the answers on an index card.

1. **What is the research question?** Not "we trained a model on task X." That is a method. The question is *what did we want to know?* "Can large language models reason about negation in syllogisms?" is a question. "Do bigger retrievers help long-context QA, or do they just memorize?" is a question.

2. **Why does the answer matter?** If the only people who care are the three other groups working on the same benchmark, your paper will struggle. Tie it to something larger: a capability we lacked, a misconception we held, a tool the community needs, a deployment problem we cannot solve.

3. **What did you do that nobody had done before?** Be honest. "We added a contrastive loss" is no contribution if seventeen prior papers added a contrastive loss. The contribution might be *what you learned* by doing so. [Chapter 4](./04-contribution.md) lists the kinds of thing that count.

4. **What is the headline result?** One sentence. One number, or one finding. If you cannot say it in one sentence, you have experiments and no paper yet.

These four answers are the spine of the paper. They appear, in increasing detail, in the title, the abstract, the introduction and the conclusion. If they shift mid-draft, stop and fix the spine before you write another paragraph.

## Write the paper backwards

Senior researchers often draft in reverse order.

1. Start with the *result figure*: the one plot or table you would put on a poster.
2. Then write the caption.
3. Then write the paragraph in the results section that points at it.
4. Then write the introduction paragraph that promises that result.
5. Then write the abstract.

By the time you reach the methods section, you know what story it has to support. Most reviewer comments that "the paper feels disjointed" come from writing front to back without this exercise.

## A few principles to internalize

**Write for a tired reader.** Your reviewer reads your paper at 11pm after a second coffee, with eight more papers in the queue. Buried contributions, undefined acronyms, missing baselines and vague claims all cost you. Write for someone skimming.

**Write plainly.** Vered Shwartz puts it well: "Aim to write papers that can be understood by anyone in NLP, regardless of their subarea. Don't try to sound smart." Write *use* for *utilize*. Write *we propose* for *herein we introduce a novel methodology*.

**Sell what the reader learns.** Ask "what did this paper teach the field?" If your only sentence-long answer is "we got +0.4 BLEU on WMT," your paper is in trouble however good the method is.

**Tell a story.** You did the work in one order. Present it in the order that makes the result look inevitable, and leave the lab notebook out.

## Further reading

- Vered Shwartz, ["Tips for Writing NLP Papers"](https://medium.com/@vered1986/tips-for-writing-nlp-papers-9c729a2f9e1f). The best short read for new NLP authors.
- Jennifer Widom, ["Tips for Writing Technical Papers"](https://cs.stanford.edu/people/widom/paper-writing.html). Written for databases, but it has aged well.
- Simon Peyton Jones, ["How to write a great research paper"](https://www.microsoft.com/en-us/research/academic-program/write-great-research-paper/). The talk version is on YouTube and is 50 minutes well spent.
