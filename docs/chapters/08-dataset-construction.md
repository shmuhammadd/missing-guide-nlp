---
sidebar_position: 8
title: "8. Dataset Construction"
---

If your paper's contribution is a dataset, a benchmark, or any other resource, this is your methods section — and it is the section reviewers read most suspiciously. A modelling paper that hides a detail loses a little credibility; a resource paper that hides how the data was made loses all of it, because the data *is* the contribution. Everything a reader needs to trust your numbers, reuse your data, and reproduce your pipeline lives here. Write it as if a skeptical reviewer will try to rebuild the dataset from your description alone — because the good ones will.

This chapter is for **resource papers**: new datasets, benchmarks, annotated corpora, shared-task data, evaluation suites. A modelling paper that merely *uses* an existing dataset does not need a section like this; a sentence in the experimental setup pointing at the original release is enough.

## Where it goes, and what it replaces

In a resource paper this section usually appears right after Related Work, often titled *Data*, *Dataset*, *Dataset Construction*, *Data Collection*, or *Corpus*. For most resource papers it **stands in for the methods chapter** ([Chapter 9](./09-methods.md)): the construction *is* the method. If you also propose a model trained on the data, the dataset section comes first and the model section follows. Baselines and metrics then go in [Experimental Setup](./10-experimental-setup.md).

Reviewers of resource papers are explicitly asked, under most \*ACL data and reproducibility criteria, whether the collection and annotation are documented well enough to judge data quality and to reuse the resource. Treat that as the spec for this section.

## What the section must report

A complete dataset section answers six questions. Skip one and a reviewer will assume the worst about it.

### 1. The task and the labels

State what the data is *for* before how it was made. What is the unit (sentence, document, turn, image–caption pair)? What is the label space, and what does each label *mean*? A one-line definition per label, with a borderline example, prevents half your annotation disagreements from looking like noise. If the task is novel, this is also where you justify that the label scheme is the right one — not three other schemes you rejected in a footnote.

### 2. Languages and language varieties

Be specific to the point of pedantry. "Multilingual" and "low-resource" are not data descriptions. Name every language, give its **ISO 639-3 code**, and say which **script** and which **variety or dialect** (Modern Standard Arabic is not Algerian Arabic; Nigerian Pidgin is not English). Note code-switching if your data contains it — most real-world text from multilingual communities does, and pretending otherwise misleads everyone downstream. *[AfriSenti](https://aclanthology.org/2023.emnlp-main.862/)* (Muhammad et al., EMNLP 2023) and *[MasakhaNER](https://aclanthology.org/2021.tacl-1.66/)* (Adelani et al., TACL 2021) are good models: each enumerates its languages, families, and scripts rather than waving at "African languages." For typological breadth as a deliberate design goal, see *[TyDi QA](https://aclanthology.org/2020.tacl-1.30/)* (Clark et al., TACL 2020).

### 3. Data source and collection

Where did the raw text come from, and how did you get it? A reviewer needs provenance: the platform or corpus, the time window, the sampling method, the query terms or seed lists, and the size before filtering. State the **license or terms of service** under which you collected and can redistribute it, and whether redistribution is of the text itself or only IDs/links (platform terms often forbid the former). If the data involves people — and social-media or elicited data always does — say what consent and **anonymisation** you applied. Document every filtering and deduplication step, because each one shapes the distribution your models will learn.

### 4. Annotation

This is where resource papers are won or lost. Report:

- **Who annotated, and why they are qualified.** Native speakers? Trained linguists? Crowdworkers? For any language other than high-resource English, native-speaker or fluent annotation is not optional, and reviewers will ask. Name the number of annotators.
- **The guidelines.** Summarise them and include the full version in an appendix or repository. Guidelines are the difference between a label scheme and a vibe.
- **The process.** Pilot rounds, annotator training, how many annotators saw each item, how disagreements were adjudicated, how the guidelines changed in response to early rounds.
- **Compensation and ethics.** Pay rate relative to local minimum wage, recruitment, and IRB/ethics approval where applicable. Underpaying annotators is both an ethical failure and, increasingly, a desk-reject risk. This connects to [Ethical Considerations](./15-ethics.md).
- **The tooling.** What annotation interface or platform; it affects what kinds of errors are even possible.

### 5. Quality and inter-annotator agreement

A dataset with no reported agreement is, to a reviewer, a dataset of unknown quality. Report an **inter-annotator agreement** statistic and name which one and why: Cohen's κ for two annotators, Fleiss' κ for more, Krippendorff's α when you have missing labels or non-nominal scales, raw percentage agreement only as a supplement. Interpret the number — do not just print it — and say what you did about low-agreement items (adjudication, expert review, exclusion). If agreement is genuinely low because the phenomenon is subjective (much of pragmatics, sentiment, toxicity), say so and treat the disagreement as signal, not embarrassment.

### 6. Statistics and splits

Give the reader a table, not a paragraph of numbers. At minimum: total size, the **train/dev/test split** sizes, the **label distribution** (per split — a class that appears only in test is a bug), and basic shape (sentence/document length, vocabulary size, number of annotators). Then the part most papers botch: **how the splits were made and why they are leak-free.** Random split? Stratified? Split by document, speaker, or time so that no entity straddles train and test? Deduplicated across splits? For benchmarks meant to test generalisation, contamination control is now a first-class concern — say what you did to prevent test data leaking into common pretraining corpora.

## Phrasebook: the moves of a dataset section

The reporting sentences of a dataset section are formulaic — which is good news, because it means you can learn the moves. As in the [Related Work phrasebook](./06-related-work.md), most entries below are **adaptable templates** with `[bracketed]` slots, *not* quotations; a few are real, verified sentences from well-known resource papers and are marked with a citation. Templates are scaffolding — fill every bracket with a specific, and never report a statistic you did not compute. Two entries sit in the open under each move; expand **Show more** for the rest.

### Source and provenance

- *"We collected [N] [units] from [source] posted between [start] and [end], using [sampling method / query terms]."* — Provenance in one sentence: how many, from where, when, and how sampled.
- "We present the Stanford Question Answering Dataset (SQuAD), a new reading comprehension dataset consisting of 100,000+ questions posed by crowdworkers on a set of Wikipedia articles, where the answer to each question is a segment of text from the corresponding reading passage." — A real provenance sentence: source (Wikipedia), method (crowdworkers), and the format, all at once. *[SQuAD: 100,000+ Questions for Machine Comprehension of Text](https://aclanthology.org/D16-1264/)* (Rajpurkar et al., EMNLP 2016)

<details>
<summary>**Show 7 more**</summary>

- *"The raw corpus contains [N] [units]; after [filtering steps] and deduplication, [M] remain."* — Always report the before-and-after of filtering; the gap tells the reader how aggressive you were.
- *"Data was gathered under [license / platform terms], which permit [redistribution / ID-only release]; we release [what you can actually share]."* — States the legal basis and what you can and cannot redistribute.
- *"To protect privacy we removed [PII types] and replaced [usernames / handles] with placeholders."* — Names the anonymisation, which social and elicited data require.
- *"Texts were drawn from [domain/genre A], [genre B], and [genre C] to ensure genre diversity."* — Justifies coverage when the source is heterogeneous.
- *"We seeded collection with [seed terms / lexicons] curated by native speakers of [language]."* — The honest way to describe targeted collection for a specific language.
- *"Documents shorter than [N] tokens or in a language other than [target] were discarded; language ID used [tool]."* — Names the filters and the tool, so the distribution is reproducible.
- *"We sampled to [balance / preserve] the natural distribution of [variable]; Section [N] reports the resulting skew."* — States the sampling intent and points to the evidence.

</details>

### Annotation process

- *"Each [unit] was independently annotated by [k] [native-speaker / expert] annotators following written guidelines (Appendix [N]); disagreements were resolved by [adjudication / majority / expert]."* — The core sentence: how many annotators, who, by what rules, and how ties broke.
- *"Annotators were [recruited from / employed via] [source], paid [rate], and completed [training / a qualification round] before annotating."* — Recruitment, pay, and training in one sentence — the details reviewers now require.

<details>
<summary>**Show 6 more**</summary>

- *"Guidelines were refined over [N] pilot rounds; the final version is released with the data."* — Signals an iterative, documented process rather than an ad-hoc one.
- *"All annotators are native or fluent speakers of [language]; [N] of them are [trained linguists / domain experts]."* — Establishes annotator qualification, which is non-negotiable for non-English data.
- *"Annotation was carried out in [tool / platform], which constrained labels to [the valid set] and recorded [timing / provenance]."* — Names the interface, which shapes which errors are possible.
- *"A separate group of [k] annotators validated a random [N]% sample; [M]% of labels were confirmed."* — Describes a second-pass validation, a strong quality signal.
- *"We obtained [IRB / ethics] approval ([reference]) for the collection and annotation involving human participants."* — The one-line ethics statement reviewers look for.
- *"Annotators could flag items as [out-of-scope / offensive / unintelligible]; flagged items were [handled how]."* — Shows you planned for the messy items instead of forcing labels.

</details>

### Agreement and quality

- *"Inter-annotator agreement was [κ / α] = [value] ([metric name]), which we interpret as [substantial / moderate] for [this task]."* — Report the number, name the metric, and interpret it — never print a bare coefficient.
- *"We use Krippendorff's α rather than κ because [missing labels / ordinal scale / more than two annotators]."* — Justifying the choice of statistic signals you understand it.

<details>
<summary>**Show 6 more**</summary>

- *"Agreement is lower on [subcategory] (α = [value]), reflecting the genuine subjectivity of [phenomenon]; we treat this disagreement as signal and release all raw annotations."* — The mature way to report low agreement on a subjective task.
- *"Items with no majority label ([N], [P]%) were [adjudicated by an expert / excluded]; we report results both with and without them."* — Shows the disagreement did not silently disappear.
- *"We report agreement per language, since pooling across languages can mask low agreement in [language]."* — Disaggregated agreement, essential for multilingual resources.
- *"A domain expert reviewed a [N]-item sample and found an estimated label error rate of [P]%."* — An independent quality estimate beyond the agreement coefficient.
- *"To distinguish annotator disagreement from annotator error, we [analysis]."* — Separates noise from genuine ambiguity, which reviewers appreciate.
- *"Raw (pre-adjudication) annotations are released alongside the gold labels so others can study disagreement."* — Releasing raw labels is increasingly expected and strengthens the contribution.

</details>

### Statistics and splits

- *"Table [N] reports per-split sizes, label distribution, and [length / vocabulary] statistics."* — Point to a table; do not narrate a list of numbers in prose.
- *"We split [units] into train/dev/test ([sizes]) by [document / speaker / time], so that no [entity] appears in more than one split."* — States the split axis and the leakage guarantee in one sentence.

<details>
<summary>**Show 6 more**</summary>

- *"Splits are stratified by [label / language / domain] to preserve the class distribution across train, dev, and test."* — Names the stratification, which prevents distribution skew between splits.
- *"The label distribution is imbalanced ([majority class] = [P]%); we report [macro-F1 / per-class] accordingly."* — Reports imbalance and the metric choice it forces.
- *"We deduplicated within and across splits using [exact / near-duplicate method], removing [N] items."* — Documents deduplication, a common silent source of leakage.
- *"To limit contamination, we [held out a fresh test set / checked overlap with common pretraining corpora]."* — The contemporary contamination-control statement for benchmarks.
- *"Each test instance carries [k] reference labels; we report [agreement / human ceiling] of [value]."* — Gives the human upper bound, which contextualises model scores.
- *"Appendix [N] gives the full per-language / per-class breakdown."* — Pushes exhaustive tables to the appendix while signalling they exist.

</details>

### Licensing, consent, and release

- *"The dataset is released under [license] at [URL / DOI]; the annotation guidelines and code are included."* — The release sentence: license, location, and what is included.
- *"Because [platform] terms forbid redistributing [content], we release [tweet IDs / hydration scripts] rather than the text."* — The honest workaround when terms of service constrain release.

<details>
<summary>**Show 5 more**</summary>

- *"We provide a datasheet (Appendix [N]) following Gebru et al. (2021), documenting motivation, composition, collection, and recommended uses."* — Commits to a recognised documentation standard.
- *"A data statement (Bender and Friedman, 2018) describing speaker and annotator demographics accompanies the release."* — The NLP-specific documentation standard for who produced the language.
- *"We document known limitations and intended uses, and explicitly discourage [misuse]."* — Pairs the release with a use statement, which reviewers increasingly expect.
- *"For the anonymous submission, the data is available via [anonymised link]; the permanent release will be at [home]."* — Handles double-blind release without revealing authorship.
- *"All personal identifiers were removed and the release was reviewed for [PII / harmful content] before publication."* — States the pre-release safety pass.

</details>

## Common mistakes

- **"We collected tweets."** From where, when, how many, in what language, under what license, sampled how? Every unstated detail is a hole a reviewer will fall into.
- **No inter-annotator agreement.** The single fastest way to lose a resource-paper reviewer. If the task is subjective, report the low number and discuss it; silence is worse.
- **"Annotated by annotators."** Who? Native speakers? Paid how much? One annotator per item with no agreement number is not an annotated dataset; it is one person's opinions.
- **English passed off as universal.** A dataset in one language is a contribution; calling it "a benchmark for language understanding" without the qualifier is overclaiming. Name the language in the abstract and the title.
- **Leaky splits.** Random splits when the same speaker, document, or near-duplicate appears in both train and test. Your reported numbers are then partly memorisation, and a reviewer who notices will not be gentle.
- **No license, or an impossible one.** Releasing scraped platform text that the platform's terms forbid you to redistribute. Sort this out before submission, not after acceptance.
- **Statistics without splits.** A single "50,000 examples" with no per-split, per-class breakdown hides exactly the problems reviewers look for.
- **The vanishing appendix.** "Guidelines available upon request" is not documentation. Release them.

## A reporting checklist

Before you submit, confirm the dataset section answers every one of these:

- Task, unit, and label definitions — with a borderline example per label.
- Every language with ISO 639-3 code, script, and variety; code-switching noted.
- Source, time window, sampling, and size before filtering.
- License / terms for collection and redistribution; consent and anonymisation.
- Who annotated, their qualification, the guidelines, the pay, and the ethics approval.
- Annotators per item, adjudication procedure, and pilot/training rounds.
- Inter-annotator agreement: which metric, the value, and an interpretation.
- A statistics table: total, per-split sizes, per-split label distribution, basic shape.
- How splits were made and why they are leak-free; deduplication and contamination control.
- Release: license, URL/DOI, datasheet or data statement, guidelines, and code.

## Five examples from real resource papers

1. *[SQuAD: 100,000+ Questions for Machine Comprehension of Text](https://aclanthology.org/D16-1264/)* (Rajpurkar et al., EMNLP 2016). A textbook crowdsourced-construction section: source, collection interface, and a human-performance ceiling that contextualises every later result.
2. *[A large annotated corpus for learning natural language inference](https://aclanthology.org/D15-1075/)* (Bowman et al., EMNLP 2015). The SNLI paper is explicit about the elicitation prompt and the validation pass that turned crowd labels into gold.
3. *[TyDi QA: A Benchmark for Information-Seeking Question Answering in Typologically Diverse Languages](https://aclanthology.org/2020.tacl-1.30/)* (Clark et al., TACL 2020). Typological diversity treated as a design requirement, not a marketing line, with the collection method chosen to avoid translation artefacts.
4. *[AfriSenti: A Twitter Sentiment Analysis Benchmark for African Languages](https://aclanthology.org/2023.emnlp-main.862/)* (Muhammad et al., EMNLP 2023). Enumerates 14 languages across four families, documents native-speaker annotation, and handles code-switching and platform-terms release honestly.
5. *[MasakhaNER: Named Entity Recognition for African Languages](https://aclanthology.org/2021.tacl-1.66/)* (Adelani et al., TACL 2021). Community-driven annotation by native speakers across ten languages, with per-language agreement and a clear release.

## Further reading

- Emily M. Bender and Batya Friedman, ["Data Statements for Natural Language Processing"](https://aclanthology.org/Q18-1041/) (TACL 2018). The NLP standard for documenting who produced your data and who it represents.
- Timnit Gebru et al., ["Datasheets for Datasets"](https://arxiv.org/abs/1803.09010) (CACM 2021). The general documentation checklist; pair it with the data statement.
- Ron Artstein and Massimo Poesio, ["Inter-Coder Agreement for Computational Linguistics"](https://aclanthology.org/J08-4004/) (Computational Linguistics, 2008). The reference on which agreement metric to use and how to interpret it.
- The companion phrasebooks in [Chapter 4 — The Abstract](./04-abstract.md) and [Chapter 5 — The Introduction](./05-introduction.md): your dataset's scale and contribution still have to be sold in one move sentence there.
