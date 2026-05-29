---
sidebar_position: 6
title: "6. Related Work"
---

The related work section is where new authors most often shoot themselves in the foot. It is *not* a literature review. It is not a bibliography with sentences attached. It is an *argument*: this is the conversation our paper joins, and here is what we add to it.

## Two structures that work

**Structure A: By thread.** Group prior work into 2–4 themes that matter to your paper, give each a paragraph, and end each paragraph by contrasting your work. Example:

> *Retrieval-augmented generation.* (cite group, summarize their approach, point at the gap)… Unlike X et al. and Y et al., we…
>
> *Long-context language models.* … In contrast to this line of work, our method…

**Structure B: By dimension.** Compare prior work along axes that matter to your contribution — modality, supervision, scale, evaluation. A small table summarizing prior methods on these axes is often more useful than two pages of prose.

## Where related work goes in the paper

There are three valid placements:

1. **After the introduction (§2).** Most common. Lets the reader orient before diving into the method.
2. **Before the conclusion.** Good if the contributions are best appreciated *after* the reader has seen the method. Common when the work is interdisciplinary and the comparison is subtle.
3. **Distributed throughout.** Rare in \*ACL, but used by some senior authors. Each section cites the prior work it builds on. Hard to do well; do not attempt on your first paper.

## Phrasebook: the moves of a related work section

A related work section is built from a small set of recurring rhetorical moves. The subsections below give each move a name and a bank of phrasings.

**Two kinds of entry, and the difference matters.** Some moves — *positioning by contrast*, *crediting and situating* — are quotable almost verbatim from the abstracts and introductions of well-known papers, so those subsections give **real, quoted sentences with citations**, exactly like the abstract and introduction phrasebooks ([Chapter 4](./04-abstract.md), [Chapter 5](./05-introduction.md)). The other moves — *thread openers*, *naming the closest work*, *concurrent work*, *polite disagreement*, *grouping a literature* — are formulaic connective tissue that lives in the body of a paper and varies too much to quote usefully. Those subsections give **adaptable templates**: phrasings with `[bracketed]` slots for you to fill. **The templates are not quotes and are not attributed to any paper** — they are scaffolding to adapt, then make your own.

**Patterns to internalise, not fill in mechanically.** A related work section stitched together from templates without thought reads exactly as templated as it is. Name the move, then write the sentence your paper actually needs. Under each move below, two entries sit in the open; expand **Show more** for the rest.

### Thread openers and signposting (templates)

The first sentence of the section, or of each paragraph, that tells the reader how prior work is organized. Without it, a related work section reads as an undifferentiated pile of citations. State the organizing principle out loud. *RAG* (Lewis et al., NeurIPS 2020) and *[ELECTRA](https://arxiv.org/abs/2003.10555)* (Clark et al., ICLR 2020) both open their §2 with clean threads worth studying.

- *"Prior work on [problem] falls into two broad lines: [approach A] and [approach B]. Our work sits between them: [how]."* — Two-line split is the most common and most legible organization for a short related work section.
- *"Three threads of research inform this work — [A], [B], and [C] — and we take each in turn."* — Announce the count and the order so the reader can track where they are.

<details>
<summary>**Show 6 more**</summary>

- *"We organize prior work along the axis most relevant to our contribution, [axis], and defer [other axis] to Appendix [N]."* — Honest signposting: tells the reader what you are *not* covering and where it went.
- *"Our contribution touches two literatures that rarely cite each other: [field A] and [field B]."* — Useful when the paper's value is connecting two communities; flag it explicitly.
- *"[Topic] has a long history; we focus on the [neural / post-2018 / modern] strand and refer the reader to [survey] for the rest."* — Bounds the scope and offloads completeness to a survey, pre-empting the "you missed older work" review.
- *"We review prior work in order of decreasing relevance to our setting, beginning with [closest area]."* — Orders by relevance, not chronology — usually the more useful ordering for the reader.
- *"Work on [topic] can be grouped by [dimension]: [type 1] and [type 2]."* — Sets up Structure B (the comparison-by-dimension table) in one sentence.
- *"Below we situate our work with respect to [A], [B], and [C], deferring head-to-head comparison to Section [N]."* — Separates *positioning* (here) from *empirical comparison* (later), so §2 stays an argument rather than a results dump.

</details>

### Positioning by contrast — "unlike X, we…" (from real papers)

The move that makes related work an argument: name the prior class of work, then the one axis on which you differ. The best versions name a *specific* difference, not a vague "however."

- "Unlike recent language representation models, BERT is designed to pre-train deep bidirectional representations from unlabeled text by jointly conditioning on both left and right context in all layers." — The cleanest "unlike X, we Y" in the field: names the prior class and the single axis of difference (bidirectionality). *[BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding](https://aclanthology.org/N19-1423/)* (Devlin et al., NAACL 2019)
- "By contrast, humans can generally perform a new language task from only a few examples or from simple instructions - something which current NLP systems still largely struggle to do." — "By contrast" pivots off a human baseline to position an entire paradigm, not one competitor. *[Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165)* (Brown et al., NeurIPS 2020)

<details>
<summary>**Show 6 more**</summary>

- "In contrast, most NLU models above the word level are designed for a specific task and struggle with out-of-domain data." — "In contrast" set against the paper's own opening claim; the contrast motivates the benchmark. *[GLUE: A Multi-Task Benchmark and Analysis Platform for Natural Language Understanding](https://aclanthology.org/W18-5446/)* (Wang et al., EMNLP Workshop 2018)
- "Instead of masking the input, our approach corrupts it by replacing some tokens with plausible alternatives sampled from a small generator network." — "Instead of X, our approach does Y" positions sharply against BERT's masked-LM in a single sentence. *[ELECTRA: Pre-training Text Encoders as Discriminators Rather Than Generators](https://arxiv.org/abs/2003.10555)* (Clark et al., ICLR 2020)
- "However, it requires that both sentences are fed into the network, which causes a massive computational overhead: Finding the most similar pair in a collection of 10,000 sentences requires about 50 million inference computations (~65 hours) with BERT." — Concedes the prior method works, then names the precise cost that justifies the departure. *[Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks](https://aclanthology.org/D19-1410/)* (Reimers & Gurevych, EMNLP 2019)
- "Open-domain question answering relies on efficient passage retrieval to select candidate contexts, where traditional sparse vector space models, such as TF-IDF or BM25, are the de facto method." — Positions by naming the incumbent (BM25) it intends to replace. *[Dense Passage Retrieval for Open-Domain Question Answering](https://aclanthology.org/2020.emnlp-main.550/)* (Karpukhin et al., EMNLP 2020)
- "However, RLHF is a complex and often unstable procedure, first fitting a reward model that reflects the human preferences, and then fine-tuning the large unsupervised LM using reinforcement learning to maximize this estimated reward without drifting too far from the original model." — Positions against the dominant method by spelling out its procedural pain, not by dismissing it. *[Direct Preference Optimization: Your Language Model is Secretly a Reward Model](https://arxiv.org/abs/2305.18290)* (Rafailov et al., NeurIPS 2023)
- "They also, paradoxically, struggle with basic functionality, such as arithmetic or factual lookup, where much simpler and smaller models excel." — Positions large LMs against "simpler and smaller models" — a contrast framed as a paradox to motivate the gap. *[Toolformer: Language Models Can Teach Themselves to Use Tools](https://arxiv.org/abs/2302.04761)* (Schick et al., NeurIPS 2023)

</details>

### Crediting and situating — "building on X…" (from real papers)

Positioning is not only about difference. The generous, confident move is to name exactly what you inherit from prior work — it signals you understand the lineage and are not pretending to invent from nothing.

- "It uses a standard Tranformer-based neural machine translation architecture which, despite its simplicity, can be seen as generalizing BERT (due to the bidirectional encoder), GPT (with the left-to-right decoder), and many other more recent pretraining schemes." — Credits two prior models by naming precisely what it inherits from each (the "Tranformer" typo is in the original). *[BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation, Translation, and Comprehension](https://aclanthology.org/2020.acl-main.703/)* (Lewis et al., ACL 2020)
- "In this paper, we explore the landscape of transfer learning techniques for NLP by introducing a unified framework that converts all text-based language problems into a text-to-text format." — Situates the work as *unifying* an existing landscape rather than competing within it. *[Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer](https://arxiv.org/abs/1910.10683)* (Raffel et al., JMLR 2020)
- "We present a replication study of BERT pretraining, which includes a careful evaluation of the effects of hyperparmeter tuning and training set size." — Frames the contribution as crediting and re-examining prior work, not displacing it (the "hyperparmeter" typo is in the original). *[RoBERTa: A Robustly Optimized BERT Pretraining Approach](https://arxiv.org/abs/1907.11692)* (Liu et al., 2019)

### Naming the closest work (templates)

Every paper has one or two nearest neighbours. Name them, and state the difference precisely — reviewers who know the area will check this paragraph first, and a vague or missing comparison reads as evasion. *[Dense Passage Retrieval](https://aclanthology.org/2020.emnlp-main.550/)* (Karpukhin et al., EMNLP 2020) positioning against ORQA, and *[Sentence-BERT](https://aclanthology.org/D19-1410/)* (Reimers & Gurevych, EMNLP 2019) against InferSent and Universal Sentence Encoder, are clean models.

- *"The work closest to ours is [X et al.], who [do Y]. We differ in [three] respects: [a], [b], and [c]."* — When a single paper is the obvious comparison, meet it head-on and enumerate the differences.
- *"Like [X], we [shared choice]; unlike [X], we [key difference], which lets us [consequence]."* — The "like X / unlike X" pairing credits and distinguishes in one breath.

<details>
<summary>**Show 5 more**</summary>

- *"[X et al.] share our goal of [Z] but pursue it via [their method]; we instead [our method]."* — Separates shared *goal* from differing *method* — the most common real relationship between neighbouring papers.
- *"Our method can be viewed as [X]'s [approach] without [their requirement]."* — Frames the contribution as removing a constraint of the closest prior work.
- *"[X] is our most direct point of comparison; we adopt their [setup / splits / metric] so the numbers are comparable."* — Pre-empts "is this a fair comparison?" by stating that you reused the prior setup.
- *"Two recent papers are especially relevant: [X] [does A] and [Y] [does B]. We combine their strengths while avoiding [shared limitation]."* — For when two papers jointly define the gap you fill.
- *"Where [X] requires [expensive thing], our approach needs only [cheaper thing]."* — A one-line closest-work contrast built entirely around the cost axis.

</details>

### Concurrent and independent work (templates)

When another group reached a similar result around the same time, say so plainly. Claiming credit you do not own is the fastest way to lose a reviewer; acknowledging genuine concurrency costs you nothing and buys credibility. Under \*ACL / ARR rules there is a contemporaneity window — work posted within roughly three months of the deadline is usually treated as concurrent, not prior — but cite generously regardless.

- *"Concurrent with our work, [X et al.] propose [Y]. The two efforts were developed independently; our approach differs in [Z]."* — The standard, safe framing: concede concurrency, then distinguish.
- *"In independent and contemporaneous work, [X et al.] reach a similar conclusion using [a different method]."* — "Independent and contemporaneous" is the precise, accepted phrasing for genuine co-discovery.

<details>
<summary>**Show 4 more**</summary>

- *"[X], released while this paper was under review, is complementary: they study [A] whereas we study [B]."* — Handles a paper that appeared after submission without conceding priority.
- *"After this work was completed we became aware of [X]; we include it here for completeness and note [relationship]."* — Honest disclosure when you found a neighbour late.
- *"Like us, [X] observe [shared finding], though they do not [your additional contribution]."* — Credits the overlap while marking what remains uniquely yours.
- *"We do not claim priority over [X]; our contribution is instead [the part that is genuinely yours]."* — When in doubt, disclaim priority explicitly. It reads as confidence, not weakness.

</details>

### Disagreeing without trashing (templates)

You will sometimes contradict prior work. Do it by locating the *reason* for the discrepancy, not by attacking the authors — who may well be your reviewers. Critique the result, the setting, or the assumption; never the competence.

- *"While [X] reports [result], we observe [contrasting result]; we attribute the difference to [data / metric / scale], not to a flaw in their method."* — Names the discrepancy and a benign cause in the same sentence.
- *"[X]'s approach is well suited to [their setting]; our setting differs in [way], where [their assumption] no longer holds."* — Reframes disagreement as a difference in scope, which is almost always the truth.

<details>
<summary>**Show 4 more**</summary>

- *"We reach a different conclusion from [X]; the discrepancy appears to stem from [cause], which we examine directly in Section [N]."* — Promises to investigate the disagreement rather than just asserting it.
- *"Prior work has assumed [assumption]; we revisit it and find [nuance]."* — Challenges an assumption, not a person — the most defensible form of disagreement.
- *"Our results complicate, rather than contradict, the picture in [X]: [explanation]."* — "Complicate, not contradict" lets you advance the field without picking a fight.
- *"[X] is effective but [costly / narrow]; we trade [their strength] for [our strength]."* — Concedes the prior work's merit before stating the trade-off.

</details>

### Grouping a literature — the citation pile, done right (templates)

Sometimes you genuinely must cite ten papers at once. The skill is to give the group a shared description and a shared limitation, so the pile becomes a claim rather than a list.

- *"A growing body of work studies [X] [(citations)]. These methods typically [shared property] but [shared limitation]."* — The right way to cite many papers: one shared property, one shared gap, then your move.
- *"To our knowledge, no prior work [does the specific thing]; the nearest attempts [(cites)] stop short of [the gap]."* — A bounded novelty claim — "to our knowledge" — that names the nearest neighbours instead of claiming a vacuum.

<details>
<summary>**Show 4 more**</summary>

- *"Several recent systems [(cites)] adopt [approach]; we are the first to [extension], to our knowledge."* — Groups the precedent, then states the precise increment.
- *"[Technique] has been applied to [task A] [(cites)], [task B] [(cites)], and [task C] [(cites)]; we ask whether it transfers to [task D]."* — Turns a citation pile into a motivated research question.
- *"Closest in spirit are [cites], which share [property] but differ from us in [respect]."* — A grouped version of the closest-work move when no single paper dominates.
- *"The [benchmark / dataset] has been studied extensively [(cites)]; we revisit it under [new condition]."* — Acknowledges saturation, then justifies returning to a well-worn benchmark.

</details>

## Common mistakes

- **The list-of-summaries.** "Smith et al. (2021) proposed X. Jones et al. (2022) proposed Y. Lee et al. (2023) proposed Z." This is not related work; this is annotated bibliography. Group, contrast, and argue.
- **Missing the obvious citations.** Reviewers in your area know what should be cited. Missing two or three landmark papers in your subfield can sink you. Spend a full day on prior work search alone.
- **Citing only your own group.** Looks insular and lazy. Always do a fresh literature search from scratch, not just from your group's BibTeX.
- **Trashing prior work.** "Smith et al.'s method is fundamentally flawed because…" No. Even if they are wrong, be generous. Reviewers are sometimes the authors of papers you are dismissing.
- **Comparing only to weaker baselines.** If a stronger competing method exists, you must cite it and either compare against it or explain why you cannot.
- **Template tells.** A section assembled from the templates above without editing reads as assembled. Fill every bracket with a specific, and vary the sentence shapes — three "Unlike X, we…" sentences in a row is its own kind of list-of-summaries.

## Two practical tips

**Use the ACL Anthology as your bibliography spine.** Go to [https://aclanthology.org](https://aclanthology.org) and search for your topic. Bulk-download BibTeX and pick from authoritative sources.

**The "Author Beware" submission checklist** ([ACL Rolling Review](https://aclrollingreview.org/authorchecklist)) reminds you that citations to non-anonymous repos, your own preprints, or recent contemporaneous work need careful handling. Read it before you submit.

## Five examples from real ACL papers

1. *Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks* (Lewis et al., NeurIPS 2020). The §2 organizes prior work into clean threads with a clear contrast.
2. *Beyond the Imitation Game (BIG-bench)* (Srivastava et al., TMLR 2023). Compares to many prior benchmarks with an axis-style table.
3. *[Linguistic Knowledge and Transferability of Contextual Representations](https://aclanthology.org/N19-1112/)* (Liu et al., NAACL 2019). Good example of related work that lives partly in §2 and partly inline as needed.
4. *ELECTRA* (Clark et al., ICLR 2020). Sharp positioning against BERT and its descendants in a few paragraphs.
5. *[Beyond Accuracy: Behavioral Testing of NLP Models with CheckList](https://aclanthology.org/2020.acl-main.442/)* (Ribeiro et al., ACL 2020 Best Paper). Related work that explicitly names what it borrows from software-engineering literature, not just NLP.

## Further reading

- ACL author guidelines on citation practice: [https://aclrollingreview.org/cfp](https://aclrollingreview.org/cfp).
- The ACL Anthology FAQ on citation keys: [https://aclanthology.org/faq/](https://aclanthology.org/faq/).
- The companion phrasebooks in [Chapter 4 — The Abstract](./04-abstract.md) and [Chapter 5 — The Introduction](./05-introduction.md): the positioning sentence you draft here is the same move your abstract and introduction make in compressed form.
