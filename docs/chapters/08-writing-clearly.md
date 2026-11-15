---
sidebar_position: 8
title: "8. Writing clearly"
---

We wrote this chapter for every author, and above all for the many \*ACL authors who work in English as a second, third or fourth language. Start with the good news, backed by the field's own rules. Reviewers are told to judge your science over your polish: "as long as the writing is clear enough, better scientific content should be more valuable than better journalistic skills" ([Chapter 26](./26-reviewing.md)). You owe the reader *clarity*. You do not owe them native fluency. Clarity is a craft, and nearly all of it comes down to a handful of habits you can learn. Clear writing explains a hard idea at the least cost to the reader.

## Write for the reader's effort, not your own

George Gopen and Judith Swan set out the core idea in their classic ["The Science of Scientific Writing"](https://www.gatsby.ucl.ac.uk/~pel/misc/gopen_swan.pdf) (*American Scientist*, 1990). Readers expect information in fixed places in a sentence, and meeting those expectations is most of what we call clarity. Two rules of thumb follow:

- **Old information first, new information last.** Open a sentence with something the reader already knows, and put the new point at the end, where emphasis falls. The reader arrives with context and leaves with your point.
- **Keep the subject next to its verb.** A reader holds a sentence open until the verb arrives. A long detour between subject and verb is the most common cause of "heavy" prose.

The reader keeps asking "why are you telling me this, *here*?" Good structure answers before they have to ask.

## Tense: a small, learnable system

NLP prose uses three tenses, each for a fixed job. Choose by rule instead of by ear:

- **Present** for established knowledge and for what your paper does: "Transformers use self-attention." "We propose…", "Section 4 reports…", "the model learns…".
- **Past** for specific completed actions, such as your experiments and what happened: "We trained the model on 10k sentences." "Accuracy rose by 3 points."
- **Present perfect** for prior work that bears on the present: "Prior work has shown that…".

Reviewers notice tense drift inside a paragraph. The three rules prevent it.

## Articles: a, an, the

Many languages have nothing like the English article system, and articles cause the most common surface error in \*ACL drafts. A wrong article rarely blocks meaning, so do not agonize. The rules of thumb are simple:

- **a / an** introduces something for the first time, or names one of many: "We train *a* transformer."
- **the** points to something specific, already mentioned, or unique: "*The* transformer we train has 12 layers." "*the* highest score."
- **no article** for general plurals and uncountable nouns: "Transformers are widely used." "Data is noisy."

Watch the uncountable nouns NLP leans on: *research, work, evidence, training data, progress*. They take no "a" and no plural: not "a research" or "many researches," but "research" or "a study."

## Hedge, but calibrate it

Academic English hedges on purpose, to match the strength of a claim to the strength of its evidence. *Suggests*, *may*, *to our knowledge* and *under these conditions* are precision tools. Authors misuse them in two ways:

- **Over-hedging** stacks hedges: "the results may possibly suggest that the method could perhaps help in some cases." Pick one hedge and say it once.
- **Under-hedging** overclaims: "our method solves named-entity recognition." Scope the claim to what you showed.

Make each claim as strong as your evidence and no stronger. The project's [STYLE.md](https://github.com/shmuhammadd/missing-guide-nlp/blob/main/STYLE.md) bans the hedge-stack. The [Results](./18-results.md) and [Limitations](./21-limitations.md) chapters police the overclaim.

## Prefer strong verbs and the active voice

- **Use the active voice.** Write "We compute the score," not "the score is computed." The active names the agent and is almost always shorter.
- **Un-freeze your verbs.** Nominalization buries a verb inside a noun: "we made a decision" → "we decided"; "we performed a comparison of A and B" → "we compared A and B."
- **Drop the weak-verb padding.** "provides an improvement to" → "improves"; "has the ability to" → "can."

Rewrite a page from nouns and passives into verbs and actives, and it typically loses a third of its words.

## Cut the clutter

In *[On Writing Well](https://en.wikipedia.org/wiki/On_Writing_Well)*, William Zinsser argues that "clutter is the disease" of prose. His cure is to strip each sentence to its cleanest parts:

- "in order to" → "to"; "due to the fact that" → "because"; "a large number of" → "many"; "utilize" → "use".
- Delete empty intensifiers and throat-clearing: *very, quite, really, clearly, it is important to note that*.
- Put one idea in each sentence. A sentence past roughly 25 words usually holds two ideas. Split it.

[STYLE.md](https://github.com/shmuhammadd/missing-guide-nlp/blob/main/STYLE.md) holds the full substitution table. Learn it and your second drafts will shrink.

## Build paragraphs that flow

The paragraph is the unit of argument.

- **Topic sentence first.** Lead with the point, so a skimming reviewer gets it from the first line. The rest of the paragraph supports it.
- **One idea per paragraph.** If a paragraph turns to a second idea, start a new one.
- **Link old to new across sentences.** End a sentence on an idea, then begin the next sentence from it. This is the stress-position rule applied to the paragraph. It makes prose *flow* where a list would only stack.
- **Earn your transitions.** *However*, *therefore* and *in contrast* each signal a specific logical move. Use the one that names the move you are making. Never add one for decoration.

## A before-and-after

Revising your own clutter teaches more than any rule. Here is a typical first-draft sentence and its repair.

> **Before.** "Due to the fact that the utilization of large language models has been increasing across a large number of different tasks, it is very important to note that the evaluation of these models is something that is often performed in a way that is not particularly rigorous, and our paper is a paper that makes an attempt to provide an improvement to this situation through the proposing of a new benchmark."

> **After.** "Large language models are now used across many tasks, but they are often evaluated unrigorously. We propose a new benchmark to fix this."

Sixty-one words became twenty-three, with nothing lost. "Due to the fact that" → restructured. "utilization … has been increasing" → "are now used". "it is very important to note that" → deleted. "a paper that makes an attempt to provide an improvement to" → "to fix". The runaway sentence became two clean ones, and passive nouns became active verbs.

## Habits that build the skill

- **Read your draft aloud.** Your ear catches the tangles your eye slides over.
- **Imitate structure, never words.** Read the papers in [Chapter 29](./29-best-papers.md) and copy how they move from sentence to sentence. Never copy the sentences.
- **Get one late reading** from a fluent colleague after the science is settled, so the feedback is about prose.
- **Use tools honestly.** A grammar checker, or a model that polishes *your own* sentences, is the one clearly permitted AI use ([Chapter 23](./23-ai-assistance.md)). Never use one to generate claims or paragraphs you did not write.
- **Revise.** A first draft gets the ideas down. Clarity comes in the second and third pass, so expect to rewrite.

## Common mistakes

- **Translating your first language's sentence shape directly.** The result is over-long sentences, late verbs and dropped articles. Write English sentences, not English words in another language's order.
- **Hedge-stacks and overclaims.** Say it once, as strongly as the evidence allows.
- **Nominalization and passive voice everywhere.** Name the agent; use the verb.
- **Mistaking "clear" for "simple-minded."** Explaining a hard idea so a tired reviewer grasps it on the first read is the hardest writing skill.
- **Polishing before the science is settled.** You will rewrite that paragraph, so do not buff it yet.

## Further reading

These books and essays repay the time.

- George Gopen and Judith Swan, ["The Science of Scientific Writing"](https://www.gatsby.ucl.ac.uk/~pel/misc/gopen_swan.pdf) (*American Scientist*, 1990). The reader-expectation approach in a dozen pages, and the best short read here.
- Joshua Schimel, [*Writing Science*](https://global.oup.com/academic/product/writing-science-9780199760244) (Oxford, 2012). How to structure a paper as a story, from the whole down to the sentence. Written for scientists.
- William Zinsser, *[On Writing Well](https://en.wikipedia.org/wiki/On_Writing_Well)*. The classic campaign against clutter. It is not academic, and is better for it.
- Steven Pinker, *[The Sense of Style](https://en.wikipedia.org/wiki/The_Sense_of_Style)* (2014). A linguist's modern guide. It explains why expertise makes us *harder* to understand: the "curse of knowledge."
- Strunk and White, *[The Elements of Style](https://en.wikipedia.org/wiki/The_Elements_of_Style)*. Terse, old, and still right about most things.
- Joseph M. Williams, *Style: Lessons in Clarity and Grace*. The deepest treatment of cohesion and the old-to-new principle.
- Justin Zobel, [*Writing for Computer Science*](https://link.springer.com/book/10.1007/978-1-4471-6639-9) (Springer). Practical, written for computer science, and close to our conventions.
- The project's own [STYLE.md](https://github.com/shmuhammadd/missing-guide-nlp/blob/main/STYLE.md), the house style this guide follows.
