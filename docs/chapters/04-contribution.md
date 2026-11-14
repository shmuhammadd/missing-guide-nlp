---
sidebar_position: 4
title: "4. What counts as a contribution?"
---

Every \*ACL review form has a box that asks what the paper contributes, and most rejections trace back to it. "We fine-tuned a model on dataset X and got 84.2" is a result. It is not yet a contribution. A contribution is something the field has after your paper that it did not have before: a resource it can use, or a fact it can rely on. This chapter is about the kinds of thing that count, how each is judged, and how to say which ones you are claiming, in the paper and on the submission form.

## Two kinds: artifacts and knowledge

The clearest map of NLP contributions is the one Pramanick, Hou, Mohammad and Gurevych built for *[The Nature of NLP: Analyzing Contributions in NLP Papers](https://aclanthology.org/2025.acl-long.1224/)* (ACL 2025). They annotated nearly 2,000 abstracts and then classified 28,937 papers from 1974 to 2024. Their taxonomy starts from a split any scientist would recognise: "scientific contributions are of two types: i) those that add to human knowledge, e.g., discovering the structure of DNA; and ii) those that create new and useful artifacts, e.g., a general-purpose chat system such as ChatGPT."

An **artifact** is a new resource: a dataset, a method or model, or a task. A **knowledge** contribution is a new insight about something that already exists: about a method, a dataset, a task, about language itself, or about people. Eight types in all. Most papers make more than one, and the authors found that "today, on average, individual NLP papers contribute in more ways than ever before."

| Type | What it means (the paper's definition) | A paper that is mostly this |
|---|---|---|
| New dataset | "Introduces a new NLP dataset (i.e., textual resources such as corpora or lexicon)." | See the dataset section below |
| New method | "Introduces or proposes a new or novel NLP method or model (primarily to solve NLP task(s))." | See the method section below |
| New task | "Introduces or proposes a new or novel NLP task (i.e., well-defined NLP problem)." | See the task section below |
| Knowledge about a method | "Describes new knowledge or analysis about NLP models or methods." | *[Attention is not Explanation](https://aclanthology.org/N19-1357/)* (Jain and Wallace, NAACL 2019) |
| Knowledge about a dataset | "Describes new knowledge about datasets, such as their new properties or characteristics." | *[Annotation Artifacts in Natural Language Inference Data](https://aclanthology.org/N18-2017/)* (Gururangan et al., NAACL 2018) |
| Knowledge about a task | "Describes new knowledge about NLP tasks." | *[Revisiting Low-Resource Neural Machine Translation: A Case Study](https://aclanthology.org/P19-1021/)* (Sennrich and Zhang, ACL 2019) |
| Knowledge about language | "Presents new knowledge about language, such as a new property or characteristic of language." | *[Are All Languages Equally Hard to Language-Model?](https://aclanthology.org/N18-2085/)* (Cotterell et al., NAACL 2018) |
| Knowledge about people | "Presents new knowledge about people, humankind, society, or human civilization." | *[The State and Fate of Linguistic Diversity and Inclusion in the NLP World](https://aclanthology.org/2020.acl-main.560/)* (Joshi et al., ACL 2020) |

Two findings from that paper should shape how you think about your own. First, the field is lopsided. Across the 29,000 papers, about 89% introduce a method and 90% add knowledge about a task, while only about 45% introduce a dataset and 45% add knowledge about people. Second, the rare types are not the cheap ones. In their citation analysis of ACL 2018, papers introducing a new dataset drew the most citations of any type (a mean of 138 against 122 for new methods), and the authors warn that "marked disparities in citation counts could potentially disincentivize work on certain types of contributions." Dataset papers are the ones most likely to be used.

Belay et al. applied the same taxonomy to one subfield. *[The Rise of AfricaNLP: A Survey of Contributions, Contributors, Community Impact, and Bibliometric Analysis](https://arxiv.org/abs/2509.25477)* (Belay et al., 2026, preprint) annotated 1,902 papers on African languages. There, method knowledge and new methods each make up about a quarter of contribution statements, new datasets 13%, and new tasks and knowledge about people only about 5% and 4%. The survey names generation, reasoning and vision-language work as nearly unexplored for African languages. It also finds that research attention tracks institutional support and data availability rather than speaker numbers. Nigerian Pidgin, with 121 million speakers, had 25 papers; Amharic, with 57 million, had 204. If you work on an African language, that gap list is a starting point for a topic.

## The dataset contribution

A dataset counts when the field can build on it. Reviewers judge that on five things: where the text came from and whether you may redistribute it; who annotated it, with what guidelines, and how well they agreed; how you made the splits and whether the test set is clean; the licence; and what the strongest baseline and a human score on it. Size alone is not a contribution. A thousand carefully annotated sentences in a language with nothing else is a bigger contribution than a million scraped lines of a language that has a hundred corpora already.

Four that show what the form rewards:

- *[Building a Large Annotated Corpus of English: The Penn Treebank](https://aclanthology.org/J93-2004/)* (Marcus et al., *Computational Linguistics* 1993): the founding example; the annotation scheme and process are the paper.
- *[Universal Dependencies v1: A Multilingual Treebank Collection](https://aclanthology.org/L16-1262/)* (Nivre et al., LREC 2016): the contribution is a scheme that holds across languages rather than any one treebank.
- *[MasakhaNER: Named Entity Recognition for African Languages](https://aclanthology.org/2021.tacl-1.66/)* (Adelani et al., TACL 2021): ten languages, published annotation guidelines, and transfer experiments that show what the data enables.
- *[AfriSenti: A Twitter Sentiment Analysis Benchmark for African Languages](https://aclanthology.org/2023.emnlp-main.862/)* (Muhammad et al., EMNLP 2023): fourteen languages with per-language annotation detail and baselines; it then became a SemEval task.

[Chapter 15](./15-dataset-construction.md) covers how to write the section. The two analyses above add a warning. Datasets are the rarest artifact and the most cited, and they are also the ones most often found wanting later. *[Quality at a Glance](https://aclanthology.org/2022.tacl-1.4/)* (Kreutzer et al., TACL 2022) audited web-crawled corpora and found whole low-resource subsets that were not in the language claimed.

## The task contribution

A new task is a new well-defined problem: an input, an output, a reason existing tasks do not cover it, and a way to score it. Pramanick et al. found new-task papers cited less than new-method papers, for a reason you can avoid. A task without data is a proposal. The task papers that lasted shipped the task, a dataset that instantiates it, baselines, a human score, and a metric, in one paper:

- *[A large annotated corpus for learning natural language inference](https://aclanthology.org/D15-1075/)* (Bowman et al., EMNLP 2015): reframed textual entailment as the three-way task the field then adopted, and shipped the corpus.
- *[GLUE: A Multi-Task Benchmark and Analysis Platform for Natural Language Understanding](https://aclanthology.org/W18-5446/)* (Wang et al., BlackboxNLP 2018): a task made of existing tasks; the contribution is the shared target and the diagnostic set.
- *[SWAG: A Large-Scale Adversarial Dataset for Grounded Commonsense Inference](https://aclanthology.org/D18-1009/)* (Zellers et al., EMNLP 2018): defines the task and a data-building method, adversarial filtering, that outlived the dataset.
- *[CommonsenseQA: A Question Answering Challenge Targeting Commonsense Knowledge](https://aclanthology.org/N19-1421/)* (Talmor et al., NAACL 2019): a task defined by what it requires of a model, with a construction that enforces it.
- *[NaijaSenti: A Nigerian Twitter Sentiment Corpus for Multilingual Sentiment Analysis](https://aclanthology.org/2022.lrec-1.63/)* (Muhammad et al., LREC 2022): sentiment for four Nigerian languages, with code-mixing written into the task definition instead of being filtered out.

The test for a task paper is whether someone else can enter it next year. If they cannot tell whether they have beaten you, you have not defined a task.

## The method contribution

This is the default, the one most of this guide assumes, and the one reviewers are hardest on because they see so many. A method counts when it does something measurable that the strongest existing method does not, on data the field recognises, with an analysis that says why. The last part is where new authors stop short. A table in which your row is bold is a result. The ablation that shows which part of the method earns the gain is what reviewers will call the contribution. [Chapter 16](./16-methods.md) and [Chapter 17](./17-experimental-setup.md) cover the writing and the evidence.

Two things count as methods that new authors often do not recognise as such. The first is an adaptation to a setting. *[MAD-X](https://aclanthology.org/2020.emnlp-main.617/)* (Pfeiffer et al., EMNLP 2020) introduced no new model, only adapters that let one transfer to languages the model never saw. *[LoRA](https://arxiv.org/abs/2106.09685)* (Hu et al., ICLR 2022) only changed which weights get trained. The second is a metric. Pramanick et al. file new evaluation measures under methods, "since these metrics function as algorithms or methods," and the field agrees: *[Bleu](https://aclanthology.org/P02-1040/)* (Papineni et al., ACL 2002), *[chrF](https://aclanthology.org/W15-3049/)* (Popović, WMT 2015) and *[AfriMTE and AfriCOMET](https://aclanthology.org/2024.naacl-long.334/)* (Wang et al., NAACL 2024) are method papers whose method is a way of scoring. A metric paper is judged on one thing, its correlation with human judgment, so collect the judgments.

## The knowledge contribution

A knowledge contribution is a finding: a claim about a method, dataset, task, language or population, the evidence for it, and what the field should do differently as a result. You need no new artifact. ARR now runs a track for them (Interpretability and Analysis of Models for NLP), and some of the most cited papers of the last decade are analyses:

- *[What Does BERT Look at? An Analysis of BERT's Attention](https://aclanthology.org/W19-4828/)* (Clark et al., BlackboxNLP 2019): knowledge about a method, from probing a model everyone was using.
- *[Hypothesis Only Baselines in Natural Language Inference](https://aclanthology.org/S18-2023/)* (Poliak et al., \*SEM 2018): knowledge about datasets, measured the same way across ten of them.
- *[Show Your Work: Improved Reporting of Experimental Results](https://aclanthology.org/D19-1224/)* (Dodge et al., EMNLP 2019): knowledge about how results depend on tuning budget, with a reporting fix.
- *[Energy and Policy Considerations for Deep Learning in NLP](https://aclanthology.org/P19-1355/)* (Strubell et al., ACL 2019): a measurement of what training costs, which changed what papers report.

A negative result is a knowledge contribution. So is a reproduction that fails: *[Offspring from Reproduction Problems: What Replication Failure Teaches Us](https://aclanthology.org/P13-1166/)* (Fokkens et al., ACL 2013) tried to reproduce two published results, could not, and traced why. What makes any of these a contribution rather than a report is the last step, the implication. "Hypothesis-only baselines reach 67% on SNLI" is a number. "Therefore NLI results on SNLI overstate what models learn about inference, and here is what to do about it" is knowledge.

## The rest of the menu

[Chapter 3](./03-paper-types.md) lists the forms \*ACL invites beyond the model paper. Three more kinds of contribution deserve a name here, because the submission form asks about them and because each is judged differently.

**Software and pre-trained models.** A released tool or model is an artifact, and the demo track exists for it. *[Transformers: State-of-the-Art Natural Language Processing](https://aclanthology.org/2020.emnlp-demos.6/)* (Wolf et al., EMNLP 2020 demos) describes a library and a model hub; there is no method in it. *[Adapting Pre-trained Language Models to African Languages via Multilingual Adaptive Fine-Tuning](https://aclanthology.org/2022.coling-1.382/)* (Alabi et al., COLING 2022) is cited for the models it released, AfroXLMR, more than for the recipe.

**Position papers.** An argument, with no experiments, that the field should change what it does. *[Climbing towards NLU](https://aclanthology.org/2020.acl-main.463/)* (Bender and Koller, ACL 2020) argues from thought experiments alone. *[Data Statements for Natural Language Processing](https://aclanthology.org/Q18-1041/)* (Bender and Friedman, TACL 2018) proposed a documentation practice and got it adopted. The bar is that a reader does something differently after reading it.

**Theory.** Proofs about what models can and cannot compute, such as *[Theoretical Limitations of Self-Attention in Neural Sequence Models](https://aclanthology.org/2020.tacl-1.11/)* (Hahn, TACL 2020). Rare at \*ACL; few reviewers can check them, and correctness is the only criterion.

Surveys are a contribution type too, and [Chapter 2](./02-understanding-the-field.md) is about writing them.

## Saying which one you made

**In the paper.** The introduction ends with a contributions list ([Chapter 12](./12-introduction.md)), and each item should be one of the types above, stated so a reviewer can check it. "We release a corpus of 12,400 Hausa tweets annotated for sentiment by three annotators each (κ = 0.71)" is checkable. "We propose a novel framework" is not. Match the verbs to the type: *release* a dataset, *define* a task, *propose* a method, *show* or *find* for knowledge. If you claim to be first, be sure ([Chapter 5](./05-jargon.md) on why that word draws fire).

**On the submission form.** ACL Rolling Review asks, among other fields, two questions that decide who reviews the paper. The first is the **area**, also called the track. There were 29 at the time of writing. They run from Machine Translation and Question Answering to Interpretability and Analysis of Models for NLP, Multilingualism and Cross-Lingual NLP, and Language Diversity and NLP for Low-resource/Less-studied Languages. The one new authors miss is *Resources and Evaluation*, whose keywords are "corpus creation; benchmarking; language resources; multilingual corpora; lexicon creation; automatic creation and evaluation of language resources; NLP datasets; automatic evaluation of datasets; evaluation methodologies; evaluation; datasets for low resource languages; metrics; reproducibility; statistical testing for evaluation." The track decides which area chair and reviewers see the paper, so a dataset paper sent to a modelling track gets reviewers hunting for a model.

ARR's own guidance for the hard cases ([Choosing the right track](https://aclrollingreview.org/areas)): "if there is a task-specific area, it takes both modeling and resource papers, but if your paper is very centered on data collection methodology, you might still want to consider the resource area." For low-resource work: "If the focus is on the training, and the low-resource setting is simulated from a well-resourced language, then we'd suggest the efficiency area. If you are contributing resources, analysis, or new solutions for languages that haven't had that kind of thing before, consider the multilingualism area." The track list changes every year or two; read the current one.

The second question is the **contribution types**, a checklist where you tick one or more. At the time of writing ([ARR call for papers](https://aclrollingreview.org/cfp)) the options are: approaches to low-resource settings; approaches to low-compute settings (efficiency); data resources; data analysis; model analysis and interpretability; NLP engineering experiment; publicly available software and/or pre-trained models; position papers; reproduction study; surveys; and theory. They map onto this chapter directly. Tick what the paper delivers rather than what it touches. A method paper that also releases its code is an engineering experiment plus software; using a dataset does not make it a data resource. Reviewers see these boxes, and a box you tick without delivering is a weakness they will write down.

**A worked case.** You have 8,000 Tigrinya news sentences annotated for topic, a fine-tuned AfroXLMR baseline, and an error analysis showing the model confuses sport with politics on match reports. Which paper is this? The lead contribution is the dataset, because it is the thing others will use. The second is knowledge about the dataset: the error analysis says something about the data and the task that a reader can act on. The model is a baseline and not a contribution; do not list it as one. Track: Resources and Evaluation, or the language-diversity area if the paper is as much about Tigrinya as about the corpus, per the ARR guidance above. Boxes: data resources, data analysis, and approaches to low-resource settings only if you did something about the low-resource setting beyond collecting data. Title and first bullet name the corpus.

## Common mistakes

- **Claiming a result as a contribution.** "We achieve 84.2 F1" says what happened. What did the field gain? Add the ablation, the finding, or the resource, and claim that.
- **A task without data, or data without a task.** A proposed task nobody can enter is a position paper. A corpus needs a stated use, a baseline and a metric.
- **Hiding the dataset.** New authors bury a new corpus in the experimental setup because they think only the model counts. The analyses above say the dataset is the more cited contribution. Put it in the title and the first bullet.
- **Contributions that are the paper's parts.** "We review related work, we describe our method, we run experiments" is a table of contents.
- **The wrong track.** A resource paper in a modelling track, or a low-resource language paper in Efficient Methods, gets reviewers who are looking for something else.
- **Ticking every box.** Four contribution types on the form and one in the paper reads as either confusion or padding.

## Further reading

- Aniket Pramanick, Yufang Hou, Saif M. Mohammad and Iryna Gurevych, *[The Nature of NLP: Analyzing Contributions in NLP Papers](https://aclanthology.org/2025.acl-long.1224/)* (ACL 2025): the taxonomy, the fifty-year trends, and the citation analysis behind this chapter.
- Tadesse Destaw Belay et al., *[The Rise of AfricaNLP](https://arxiv.org/abs/2509.25477)* (preprint, 2026): the same taxonomy applied to 1,902 papers on African languages, with the gaps named.
- The [ARR call for papers](https://aclrollingreview.org/cfp) for the current contribution-type checklist, and the [ARR areas page](https://aclrollingreview.org/areas) for the track keywords and the guidance on borderline cases.
- [Chapter 3](./03-paper-types.md) on the paper *forms* these contributions take, and [Chapter 6](./06-framing.md), whose four questions you can now answer with the right nouns.
