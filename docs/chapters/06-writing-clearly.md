---
sidebar_position: 6
title: "6. Writing clearly"
---

This chapter is for everyone, but it is written with the many \*ACL authors who work in English as a second, third, or fourth language especially in mind. Start with the good news, which is backed by the field's own rules: reviewers are explicitly told to judge your science, not your prose polish — "as long as the writing is clear enough, better scientific content should be more valuable than better journalistic skills" ([Chapter 24](./24-reviewing.md)). What you owe the reader is *clarity*, not native fluency. And clarity is a craft, not a gift you are born with: nearly all of it reduces to a handful of habits you can learn. Clear writing is not writing dumbed down — it is writing that costs the reader the least effort to understand a hard idea.

## Write for the reader's effort, not your own

The deepest principle in scientific writing comes from George Gopen and Judith Swan's classic ["The Science of Scientific Writing"](https://www.gatsby.ucl.ac.uk/~pel/misc/gopen_swan.pdf) (*American Scientist*, 1990): readers have fixed expectations about *where* in a sentence information will appear, and meeting those expectations is most of what we call clarity. Two rules of thumb follow:

- **Old information first, new information last.** Open a sentence with something the reader already knows, and land the new point at the end — the position of natural emphasis. The reader arrives with context and leaves with your point.
- **Keep the subject next to its verb.** A reader holds a sentence open, slightly straining, until the verb arrives; long detours between subject and verb are the most common source of "heavy" prose.

The reader's silent question is always "why are you telling me this, *here*?" Good structure answers it before they have to ask.

## Tense: a small, learnable system

NLP prose uses a few tenses consistently, and choosing by rule rather than by ear removes a common error:

- **Present** for established knowledge and for what your paper does: "Transformers use self-attention." "We propose…", "Section 4 reports…", "the model learns…".
- **Past** for specific completed actions — your experiments and what happened: "We trained the model on 10k sentences." "Accuracy rose by 3 points."
- **Present perfect** for prior work that bears on the present: "Prior work has shown that…".

Drifting between tenses inside a paragraph is a frequent tell; the system above keeps it consistent.

## Articles: a, an, the

The English article system has no equivalent in many languages, so it produces the single most common surface error in \*ACL drafts. It rarely blocks meaning, so do not agonize — but the rules of thumb are simple:

- **a / an** introduces something for the first time, or names one of many: "We train *a* transformer."
- **the** points to something specific, already mentioned, or unique: "*The* transformer we train has 12 layers." "*the* highest score."
- **no article** for general plurals and uncountable nouns: "Transformers are widely used." "Data is noisy."

Watch the uncountable nouns NLP leans on — *research, work, evidence, training data, progress*. They take no "a" and no plural: not "a research" or "many researches," but "research" or "a study."

## Hedge, but calibrate it

Academic English hedges claims on purpose — to match the strength of a statement to the strength of its evidence. *Suggests*, *may*, *to our knowledge*, *under these conditions* are precision tools, not weakness. There are two ways to misuse them:

- **Over-hedging** — the hedge-stack: "the results may possibly suggest that the method could perhaps help in some cases." Pick one hedge and say it once.
- **Under-hedging** — the overclaim: "our method solves named-entity recognition." Scope it to what you showed.

Aim for a claim exactly as strong as your evidence, and no stronger. The project's [STYLE.md](https://github.com/shmuhammadd/missing-guide-nlp/blob/main/STYLE.md) bans the hedge-stack; the [Results](./16-results.md) and [Limitations](./19-limitations.md) chapters police the overclaim from the other side.

## Prefer strong verbs and the active voice

- **Active, not passive.** "We compute the score," not "the score is computed." Active voice names the agent and is almost always shorter.
- **Un-freeze your verbs.** Nominalization buries a verb inside a noun: "we made a decision" → "we decided"; "we performed a comparison of A and B" → "we compared A and B."
- **Drop the weak-verb padding.** "provides an improvement to" → "improves"; "has the ability to" → "can."

A page rewritten from nominal-and-passive to verbal-and-active typically loses a third of its words and gains all of its energy.

## Cut the clutter

William Zinsser's whole argument in *[On Writing Well](https://en.wikipedia.org/wiki/On_Writing_Well)* is that "clutter is the disease" of prose, and the cure is to strip each sentence to its cleanest components. Concretely:

- "in order to" → "to"; "due to the fact that" → "because"; "a large number of" → "many"; "utilize" → "use".
- Delete empty intensifiers and throat-clearing: *very, quite, really, clearly, it is important to note that*.
- One idea per sentence. A sentence past roughly 25 words is usually two ideas wearing one coat — split it.

The full substitution table lives in [STYLE.md](https://github.com/shmuhammadd/missing-guide-nlp/blob/main/STYLE.md); internalize it and your second drafts shrink on their own.

## Build paragraphs that flow

Sentences are not enough; the paragraph is the unit of argument.

- **Topic sentence first.** Lead with the point so a skimming reviewer gets it from the first line and the rest of the paragraph supports it.
- **One idea per paragraph.** If a paragraph turns to a second idea, start a new one.
- **Link old-to-new across sentences.** End a sentence on an idea, then begin the next from it. This is the stress-position rule scaled up to the paragraph, and it is what makes prose feel like it *flows* rather than lists.
- **Earn your transitions.** *However, therefore, in contrast* each signals a specific logical move. Use the one that names what you are actually doing, and do not sprinkle them for decoration.

## A before-and-after

The single most useful exercise is revising your own clutter. Here is a typical first-draft sentence and its repair.

> **Before.** "Due to the fact that the utilization of large language models has been increasing across a large number of different tasks, it is very important to note that the evaluation of these models is something that is often performed in a way that is not particularly rigorous, and our paper is a paper that makes an attempt to provide an improvement to this situation through the proposing of a new benchmark."

> **After.** "Large language models are now used across many tasks, but they are often evaluated unrigorously. We propose a new benchmark to fix this."

Sixty-one words became twenty-three, with nothing lost. What changed: "due to the fact that" → restructured; "utilization … has been increasing" → "are now used"; "it is very important to note that" → deleted; "a paper that makes an attempt to provide an improvement to" → "to fix"; one runaway sentence → two clean ones; passive and nominal → active and verbal.

## Habits that build the skill

- **Read your draft aloud.** Your ear catches the tangles your eye slides over.
- **Imitate structure, not words.** Read the papers in [Chapter 27](./27-best-papers.md) and steal how they move from sentence to sentence — never the sentences themselves.
- **Get one late reading** from a fluent colleague, after the science is settled, so the feedback is about prose and not content.
- **Use tools honestly.** A grammar checker, or a model used to polish *your own* sentences, is the one clearly-permitted AI use ([Chapter 21](./21-ai-assistance.md)) — never to generate claims or paragraphs you did not write.
- **Revise.** First drafts exist to get the ideas down; clarity arrives in the second and third pass. Expect to rewrite.

## Common mistakes

- **Translating your first language's sentence shape directly** — over-long sentences, late verbs, dropped articles. Write English sentences, not English words in another language's order.
- **Hedge-stacks and overclaims.** Say it once, and exactly as strongly as the evidence allows.
- **Nominalization and passive voice everywhere.** Name the agent; use the verb.
- **Mistaking "clear" for "simple-minded."** Explaining a hard idea so a tired reviewer grasps it on the first read is the highest writing skill, not the lowest.
- **Polishing before the science is settled.** You will rewrite that paragraph; do not buff it first.

## Further reading

This is a craft with a deep literature; these are the books and essays worth your time.

- George Gopen and Judith Swan, ["The Science of Scientific Writing"](https://www.gatsby.ucl.ac.uk/~pel/misc/gopen_swan.pdf) (*American Scientist*, 1990). The reader-expectation approach, in a dozen pages — the highest-value short read here.
- Joshua Schimel, [*Writing Science*](https://global.oup.com/academic/product/writing-science-9780199760244) (Oxford, 2012). How to structure a paper as a story, from the whole down to the sentence; written for scientists.
- William Zinsser, *[On Writing Well](https://en.wikipedia.org/wiki/On_Writing_Well)*. The classic campaign against clutter; not academic, and better for it.
- Steven Pinker, *[The Sense of Style](https://en.wikipedia.org/wiki/The_Sense_of_Style)* (2014). A linguist's modern guide, including why expertise makes us *harder* to understand — the "curse of knowledge."
- Strunk and White, *[The Elements of Style](https://en.wikipedia.org/wiki/The_Elements_of_Style)*. Terse, old, and still right about most things.
- Joseph M. Williams, *Style: Lessons in Clarity and Grace*. The deepest treatment of cohesion and the old-to-new principle.
- Justin Zobel, [*Writing for Computer Science*](https://link.springer.com/book/10.1007/978-1-4471-6639-9) (Springer). CS-specific, practical, and close to our conventions.
- The project's own [STYLE.md](https://github.com/shmuhammadd/missing-guide-nlp/blob/main/STYLE.md) — the house style this guide is written in and enforces.
