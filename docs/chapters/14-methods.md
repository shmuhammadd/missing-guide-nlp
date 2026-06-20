---
sidebar_position: 14
title: "14. Methods"
---

The methods section is where the new author most often over-writes and under-explains simultaneously. Let me say what I mean by that.

**Over-writes**: too many equations, too much narration of every micro-decision, full hyperparameter dumps mid-paragraph, paragraph after paragraph of "we then…we then…we then."

**Under-explains**: the *why* of each design choice is missing. The reader cannot tell which choices are essential to the contribution and which were arbitrary.

**A scope check first.** This chapter is for **modelling and method papers** — papers whose contribution is a model, an algorithm, a training procedure, or an analysis method. If your contribution is instead a dataset, benchmark, or other resource, the section in this slot is [Dataset Construction](./13-dataset-construction.md), because there the construction *is* the method; write that chapter, not this one. A paper that proposes both writes both, the dataset first. Everything below assumes the thing you are explaining is a method.

## Structure that works

1. **One paragraph overview.** What does the method do, at a high level? A diagram (Figure 1 or 2) is almost mandatory here. The reader should be able to close the paper after this paragraph and explain your method to a colleague.
2. **Walk through the components.** One subsection per major component. Within each: *what* it does, *how* it does it (with equations as needed), and *why* you designed it this way.
3. **Training / inference details that are part of the contribution.** Things like a novel loss, a custom decoding constraint, an unusual training schedule belong here. Routine details (learning rate, batch size) go in the experimental setup.
4. **A worked example or pseudocode.** For complex methods, pseudocode in algorithm-block style helps reviewers enormously. For dataset/pipeline papers, a worked example is the equivalent.

## Phrasebook: the moves of a methods section

A methods section is built from a handful of recurring moves — state the method, formalise the task, walk through a component, justify a choice, fix the objective, point forward to the evidence. As in the [Related Work](./11-related-work.md) and [Dataset Construction](./13-dataset-construction.md) phrasebooks, most entries below are **adaptable templates** with `[bracketed]` slots — scaffolding to fill with your specifics, *not* phrasings to lift. A few are real, verified sentences from well-known papers and carry a citation; absorb how they move, then write your own. Two entries sit in the open under each move; expand **Show more** for the rest. A section assembled from templates without thought reads exactly as assembled — name the move, then write the sentence your method actually needs.

### Stating the method — the overview sentence (from real papers and templates)

The first sentence of the overview: what the method is, in one breath, before a single equation. If the reader keeps one sentence from your methods section, it should be this one.

- "We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely." — Names the method, the one idea it rests on, and what it throws away, all in a single sentence. *[Attention Is All You Need](https://arxiv.org/abs/1706.03762)* (Vaswani et al., 2017)
- *"We propose [name], a [one-phrase category] that [what it does] by [the core mechanism]."* — The canonical overview template: name, category, function, mechanism, in that order, and nothing else.

<details>
<summary>**Show 6 more**</summary>

- "In this work, we show that retrieval can be practically implemented using dense representations alone, where embeddings are learned from a small number of questions and passages by a simple dual-encoder framework." — Leads with the claim ("dense representations alone"), then the mechanism, so the contribution lands before the machinery. *[Dense Passage Retrieval for Open-Domain Question Answering](https://aclanthology.org/2020.emnlp-main.550/)* (Karpukhin et al., EMNLP 2020)
- "generating a chain of thought—a series of intermediate reasoning steps—significantly improves the ability of large language models to perform complex reasoning." — Defines the new object inline, between the em-dashes, and states its effect in the same breath. *[Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903)* (Wei et al., NeurIPS 2022)
- *"At a high level, [method] takes [input] and produces [output] through [N] stages: [stage 1], [stage 2], and [stage 3]."* — The close-the-paper-and-explain-it-to-a-colleague sentence; if you cannot write it, the method is not yet clear to you.
- *"Figure [N] shows the full architecture; we describe each component in turn below."* — Hands the overview to the diagram and signposts the walk-through that follows.
- *"The method has [N] moving parts, but only [the one] is new; we spend this section on it and treat the rest briefly."* — Tells the reader, up front, where the contribution actually lives.
- *"Our approach can be read as [familiar method] with [the one change]; the rest of this section makes that change precise."* — Anchors a new method to a known one, then isolates the delta.

</details>

### Formalising the task and notation (templates)

Define the problem and the symbols once, before the method needs them, and never quietly redefine them later. A small notation table earns its space.

- *"We are given [input] and aim to predict [output]. We write [symbol] for [quantity] and [symbol] for [quantity] throughout."* — Establishes the input–output contract and pins the notation in one place.
- *"Let [symbol] denote [definition]. We cast [task] as [the mapping or optimisation problem]."* — The standard formalisation opener: define the symbol, then state the problem in its terms.

<details>
<summary>**Show 5 more**</summary>

- *"Throughout, lowercase denotes [scalars], bold denotes [vectors], and uppercase denotes [matrices / sets]."* — States the typographic convention once so every later equation is unambiguous.
- *"Our goal is to learn a function [f]: [domain] → [range] such that [property]."* — Frames the method as learning a specific mapping, which keeps the objective concrete.
- *"We assume [stated assumption]; Section [N] discusses what happens when it does not hold."* — Surfaces a load-bearing assumption instead of smuggling it in silently.
- *"Table [N] summarises the notation."* — For a symbol-heavy method, point to the table and stop narrating definitions in prose.
- *"For clarity we describe the [single-example / single-layer] case; the [batched / multi-layer] extension is immediate."* — Lets you write clean equations without the bookkeeping, while flagging that the general case follows.

</details>

### Walking through a component (templates)

One subsection per major component: what it does, how it does it, and — the part new authors drop — why it is built this way.

- *"The [component] takes [input] and returns [output], computed as [equation], where [symbol] is [meaning]."* — The workhorse sentence: input, output, the equation, and what the new symbol means.
- *"Concretely, [component] [operation]; intuitively, this [effect], which is what lets the model [capability]."* — Pairs the formal operation with the intuition, so the equation is never left to speak alone.

<details>
<summary>**Show 5 more**</summary>

- *"Equation [N] computes [quantity]; the [term] encourages [behaviour] and the [term] penalises [behaviour]."* — Reads an equation back in words, term by term — the sentence that should follow every display equation.
- *"This is the standard [mechanism] of [cite]; our only change is [the modification], which [effect]."* — Credits the inherited part and isolates exactly what is new.
- *"[Component A] feeds [Component B]: the [output of A] becomes the [input of B], so that [consequence]."* — States how two components connect, which a block diagram alone rarely makes precise.
- *"We omit [routine sub-step] for brevity; it follows [cite / standard practice] unchanged."* — Keeps the prose focused by naming, not narrating, the parts that are not yours.
- *"The shapes are: [input] is [shape], [weight] is [shape], and [output] is [shape]."* — A dimensions sentence pre-empts the reader's most common point of confusion.

</details>

### Justifying a design choice (from real papers and templates)

The move the under-explaining author skips: why this choice, and not the obvious alternative. Name the alternative and the reason in the same breath, and tie the reason to your task — not to fashion.

- "we use coverage to keep track of what has been summarized, which discourages repetition." — Pairs a design choice with the exact problem it solves, in a single clause. *[Get To The Point: Summarization with Pointer-Generator Networks](https://aclanthology.org/P17-1099/)* (See et al., ACL 2017)
- *"We use [choice X] rather than [obvious alternative Y] because [reason tied to the task or data]."* — The bare justification template; fill the reason with something specific to your setting, never a platitude like "for better performance."

<details>
<summary>**Show 6 more**</summary>

- "automatically (soft-)search for parts of a source sentence that are relevant to predicting a target word, without having to form these parts as a hard segment explicitly." — Justifies a soft mechanism by naming the rigidity of the hard alternative it replaces. *[Neural Machine Translation by Jointly Learning to Align and Translate](https://arxiv.org/abs/1409.0473)* (Bahdanau, Cho & Bengio, ICLR 2015)
- "we replace dot-product attention by one that uses locality-sensitive hashing, changing its complexity from O(L^2) to O(L log L), where L is the length of the sequence." — Justifies the choice with the precise complexity it buys — a quantified reason, not a vague "more efficient." *[Reformer: The Efficient Transformer](https://arxiv.org/abs/2001.04451)* (Kitaev, Kaiser & Levskaya, ICLR 2020)
- *"[Choice] is essential to the contribution; [other choice] is a convenience and could be swapped without affecting the claim."* — Separates load-bearing choices from arbitrary ones — the distinction the reader most wants drawn.
- *"This choice trades [what you give up] for [what you gain]; the trade favours [X] here because [reason]."* — States a design choice as an explicit trade-off rather than a free win.
- *"We considered [alternative] but found it [failed how / cost what]; we ablate this in Section [N]."* — Justifies by promising evidence, and forward-references the experiment that backs it.
- *"[Choice] may look unusual; we adopt it because [the property of the data or task that demands it]."* — Pre-empts a reviewer's raised eyebrow by naming the reason before they can ask.

</details>

### Objective, training, and what counts as contribution (templates)

State the objective and the parts of training that are genuinely yours. Push routine hyperparameters to [Experimental Setup](./15-experimental-setup.md); they are not method.

- *"We train [model] to minimise [loss], which [what it encourages]; optimiser and schedule details are deferred to [Experimental Setup](./15-experimental-setup.md)."* — States the objective and what it does, then gets the hyperparameters out of the way.
- *"The only non-standard part of training is [X]; everything else follows [prior recipe] [(cite)]."* — Tells the reader the one training detail to actually attend to.

<details>
<summary>**Show 5 more**</summary>

- *"Our loss adds [term] to the standard [loss]; [weight] balances the two and is tuned on the dev set."* — Names the new loss term, its role, and how its weight is set — without dumping the value here.
- *"At inference we [decode / predict] by [procedure], subject to [constraint]."* — Separates the inference-time procedure from training, which readers routinely conflate.
- *"Algorithm [N] gives the full procedure in pseudocode."* — For anything with control flow, point to the algorithm block; prose cannot match it for a loop.
- *"We tried [approach] and it did not help under [condition]; we report this in Section [N] rather than omit it."* — The honest negative-result pointer, framed as a finding, not an apology.
- *"Steps [a]–[c] are standard; the contribution is step [d], which [what it does differently]."* — Walks a pipeline while marking exactly which step carries the contribution.

</details>

## Common mistakes

- **No diagram.** If a reviewer cannot understand your architecture in 30 seconds from a figure, you are losing them. Spend a full day on Figure 1.
- **The "novel" trap.** Do not call your method "novel" every paragraph. Let the contribution speak. Reviewers find "novel" exhausting.
- **Equations without text.** Every equation needs a sentence before and after telling the reader what it computes and why. Equations alone are not a method description.
- **Missing the ablation pointer.** If you made a non-obvious design choice (chose loss A over loss B), the reader will wonder why. Either justify it here or forward-reference the ablation: "We ablate this choice in §5.3."
- **Hyperparameter creep.** "We used 7e-5 learning rate, 32 batch size, 2048 sequence length, AdamW with β1=0.9, β2=0.999, weight decay 0.01, warmup ratio 0.06…" This is not methods, this is appendix material. Or at most, a small table in §Experimental Setup.

## Reporting what did not work

It is okay to report negative results in the methods section. The field's bias toward clean positive stories wastes time: someone will try your failed idea next year. A well-framed negative result is a contribution.

The ACL community has dedicated venue support for this. The [*Workshop on Insights from Negative Results in NLP*](https://aclanthology.org/venues/insights/) has run yearly since 2020 and exists specifically for results that "did not work as expected."

For the methods section specifically:

- If you tried an approach that did not work and you have evidence about *why*, say so. A short paragraph — "we first tried X; it failed for reason Y; this led us to Z" — tells the reader more than a clean linear narrative that pretends Z was the obvious first move.
- Frame the result as a finding, not an apology. "Contrastive pretraining on Z did not improve over the baseline, contrary to our expectation that…" is informative. "We unfortunately found that…" is not.
- Scope the claim. A negative result is "X did not help under these conditions," not "X never helps." The setup must make the conditions explicit so others can interpret the result and know when it transfers.

A poorly-tuned baseline is sloppiness, not a negative result. A well-tuned, well-analyzed failure is evidence — and reviewers who understand the difference will treat it as such.

## A reviewer's-eye check

After drafting methods, do this: ask a colleague who is *not* in your subfield to read the section and re-explain your method back to you. Where they get confused is where you need to rewrite. Do not argue with them; if they got confused, the section failed. The reviewer will fail in the same place.

## Five examples of well-written methods sections

1. *Attention Is All You Need* (Vaswani et al., 2017). Section 3 is a masterclass: high-level architecture, then encoder, then decoder, then attention, then position. Every subsection has a clear purpose.
2. *[BERT](https://aclanthology.org/N19-1423/)* (Devlin et al., NAACL 2019). Two pretraining objectives, each explained with a small figure and a clear "why this matters" paragraph.
3. *[Get To The Point: Summarization with Pointer-Generator Networks](https://aclanthology.org/P17-1099/)* (See et al., ACL 2017). Builds the model layer by layer; the diagram does enormous work.
4. *T5* (Raffel et al., JMLR 2020). A long methods section that stays readable because every subsection is scoped tightly.
5. *Chain-of-Thought Prompting Elicits Reasoning in Large Language Models* (Wei et al., NeurIPS 2022). The "method" is conceptually simple, and the paper has the discipline to present it simply rather than dressing it up.

## Further reading

- Strunk & White, *The Elements of Style*. Yes, really. Methods writing benefits from terseness.
- Daniel Wilkerson on passive voice — methods sections are where passive voice runs amok. Active voice ("we compute X") almost always reads better than "X is computed."
- The companion phrasebooks in [Chapter 9 — The Abstract](./09-abstract.md), [Chapter 10 — The Introduction](./10-introduction.md), and [Chapter 13 — Dataset Construction](./13-dataset-construction.md): the overview sentence you write here is the same contribution your abstract and introduction sell in compressed form.
