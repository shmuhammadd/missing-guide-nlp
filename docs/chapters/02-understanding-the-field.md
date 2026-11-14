---
sidebar_position: 2
title: "2. Understanding the field"
---

You have a supervisor, a vague topic, and a laptop. You do not yet have a research question, and you should not pretend to. The first months of a PhD are for reading, and reading widely: not the twelve papers closest to your topic, but the area around it. By the end of that reading you should be able to name the people who shape your subfield, say where they publish, list its open problems, and sketch three questions you could spend a year on. This chapter is about how to get there, and about the single most useful tool for it: the review paper, both read and written.

## What you are trying to learn

Reading widely is not a vibe; it has deliverables. Four things should be on paper by the time you stop.

**The people.** Every subfield has a few dozen names that recur in author lists, citations, and programme committees. Learn them, learn which groups they lead, and read their last three papers. Their reviewers will be your reviewers.

**The venues.** Where does your subfield publish, and where does it argue? [Chapter 1](./01-publication-landscape.md) lays out the \*ACL family; here the job is narrower. Find the workshop your area treats as home, the shared tasks it runs, and the journals it sends its long work to.

**The subareas, methods, and data.** Draw the map: the tasks people work on, the two or three method families that dominate each, and the datasets and benchmarks everyone evaluates on. If you cannot name the standard benchmark for a task, you do not know the task yet.

**The open problems.** The point of all of this. Open problems hide in the last paragraph of good papers, in Limitations sections, in the "future work" of surveys, and in the gap between what a benchmark measures and what the field claims. Write each one down the moment you see it, with the paper that made you see it.

## Where to look

The [ACL Anthology](https://aclanthology.org/) is free, complete back to the 1960s, and searchable. Start there, not with a general search engine. The [cs.CL listing on arXiv](https://arxiv.org/list/cs.CL/recent) shows what is coming before it is reviewed; read it daily for a month and you will learn the rhythm of the field. [Semantic Scholar](https://www.semanticscholar.org/) and [Connected Papers](https://www.connectedpapers.com/) turn one paper into its citation neighbourhood, which is the fastest way to find the originating work behind a method and the papers that superseded it. For the foundations, Jurafsky and Martin's [*Speech and Language Processing*](https://web.stanford.edu/~jurafsky/slp3/) is free online and kept current.

Read in passes, not from top to bottom. Keshav's ["How to Read a Paper"](https://web.stanford.edu/class/ee384m/Handouts/HowtoReadPaper.pdf) gives the standard three-pass method: title, abstract, headings and conclusion first; figures, tables and the gist second; a full, critical read only for the papers that survive the first two. Most papers you meet in your first year should get one pass.

The field also studies itself, and those papers are a shortcut to understanding it. Three are worth reading early:

- *[The State and Fate of Linguistic Diversity and Inclusion in the NLP World](https://aclanthology.org/2020.acl-main.560/)* (Joshi et al., ACL 2020) sorts the world's languages into six classes by available resources and shows how few of them \*ACL research actually touches. It also shows what a map of the field can look like when it is built from Anthology data rather than impressions.
- *[Examining Citations of Natural Language Processing Literature](https://aclanthology.org/2020.acl-main.464/)* (Mohammad, ACL 2020) measures which venues, areas and paper types get cited, across the whole Anthology. Read it to calibrate what the field rewards.
- *[The Elephant in the Room: Analyzing the Presence of Big Tech in Natural Language Processing Research](https://aclanthology.org/2023.acl-long.734/)* (Abdalla et al., ACL 2023) traces industry's share of \*ACL authorship over time. Read it to understand who sets the agenda you are entering.

## Start with review papers

A review paper compresses five years of a subfield into twenty pages. A good one gives you the taxonomy of approaches, the standard datasets, the strongest methods, and a list of challenges that someone with real command of the area believes are open. Reading three reviews of your area, from different years, teaches you more in a week than three months of reading primary papers in citation order.

Finding them is easy. Search the Anthology for *survey*, *review*, *primer* and *tutorial* alongside your topic. *[Computational Linguistics](https://aclanthology.org/venues/cl/)* and *[TACL](https://aclanthology.org/venues/tacl/)* publish the long ones; the main conferences accept surveys as a contribution type ([Chapter 3](./03-paper-types.md)); ACM *Computing Surveys* takes many of the rest. Read the most recent one first, then the one it cites as its predecessor.

### An editorial note

*(This paragraph is in the first person because it is advice I give my own students.)* Do not just read the reviews. While you read them, draft one of your own, written through the lens of your problem. Keep a document with one row per paper: task, data, method, headline number, and the limitation the authors admit or you spot. Group the rows as you go. Within a few weeks you will have the skeleton of a survey of your narrow area, and you will have discovered which parts of the published reviews you did not actually understand, because you could not write them down. Francis Bacon put the principle in nine words in *Of Studies* (1625): "Reading maketh a full man; conference a ready man; and writing an exact man." Reading fills you; writing makes you exact, since you cannot write a sentence you have not understood. The same document becomes your related work section ([Chapter 13](./13-related-work.md)), and sometimes a publishable survey in its own right.

## The kinds of review paper NLP writes

NLP uses four kinds of review. They look alike from a distance and are reviewed by different standards, so decide which one you are writing before you write it.

### The narrative survey

The narrative survey is the common form: an expert's organised map of a subfield, built from the papers they judge to matter. Its contribution is the organisation. A survey that summarises eighty papers in the order they were found is an annotated bibliography, and reviewers will say so. A survey that proposes a taxonomy, places every method in it, and shows where the cells are empty is a research contribution.

To write one, build the taxonomy first and let it drive the reading. Each section should answer a question a newcomer would ask ("how do people get labels for this?", "what breaks when the input is long?"), not just name a method family. Add comparison tables: methods against the properties that distinguish them, datasets against size, language and licence. End with open problems that are specific enough to become someone's thesis, not "more work is needed on low-resource languages."

Five that show the form:

- *[Analysis Methods in Neural Language Processing: A Survey](https://aclanthology.org/Q19-1004/)* (Belinkov and Glass, TACL 2019): organises a sprawling literature by *what is analysed* and *how*, and the taxonomy outlived the models it was built on.
- *[A Survey of Data Augmentation Approaches for NLP](https://aclanthology.org/2021.findings-acl.84/)* (Feng et al., Findings of ACL 2021): a method-level taxonomy with a table per task family, so a reader can find the augmentation used for their task in a minute.
- *[A Survey of Code-switching: Linguistic and Social Perspectives for Language Technologies](https://aclanthology.org/2021.acl-long.131/)* (Doğruöz et al., ACL 2021): brings in the linguistics and sociolinguistics the engineering literature had ignored, which is itself the argument.
- *[A Survey on Automated Fact-Checking](https://aclanthology.org/2022.tacl-1.11/)* (Guo, Schlichtkrull and Vlachos, TACL 2022): defines the task as a pipeline and organises datasets and methods by stage, then names what each stage still cannot do.
- *[Efficient Methods for Natural Language Processing: A Survey](https://aclanthology.org/2023.tacl-1.48/)* (Treviso et al., TACL 2023): written by a large group so that every subarea is covered by someone who works in it, with a shared frame of what "efficient" means.

### The systematic review

A systematic review replaces the expert's judgment about which papers matter with a protocol anyone can rerun: a stated search query over stated sources and dates, explicit inclusion and exclusion rules, and a count of papers at each step. Each included paper is then coded against a fixed scheme, and the findings are counts, not impressions. The form comes from medicine; the [PRISMA 2020 statement](https://www.prisma-statement.org/) is the reporting standard, and NLP reviewers increasingly know it.

Write the protocol before you read a single paper, and report it in full: a reader should be able to reproduce your paper set. The coding scheme is where the work is. Decide what you will record about each paper (did it report seeds? how many annotators? which languages?) and record it for every paper, even when the answer is "not stated", because "not stated" is often the finding. Systematic reviews suit questions about *practice* ("how does the field evaluate X?") better than questions about *ideas*.

Four from NLP:

- *[A Systematic Review of Reproducibility Research in Natural Language Processing](https://aclanthology.org/2021.eacl-main.29/)* (Belz et al., EACL 2021): a stated search, a stated inclusion rule, and a coded comparison of how each paper defines reproducibility.
- *[Twenty Years of Confusion in Human Evaluation: NLG Needs Evaluation Sheets and Standardised Definitions](https://aclanthology.org/2020.inlg-1.23/)* (Howcroft et al., INLG 2020): codes 165 papers against one scheme and lets the counts make the case that the field's evaluation criteria are undefined.
- *[Best practices for the human evaluation of automatically generated text](https://aclanthology.org/W19-8643/)* (van der Lee et al., INLG 2019): reviews a sample of recent papers for how human evaluation is actually run, then turns what it found into concrete recommendations.
- *[Mitigating Gender Bias in Natural Language Processing: Literature Review](https://aclanthology.org/P19-1159/)* (Sun et al., ACL 2019): a literature review that is explicit about its scope and ends with a critique of the methods it catalogued.

### The critical review

A critical review surveys a literature in order to argue that it is doing something wrong. It has a thesis, it gathers the evidence from the papers themselves, and it ends with recommendations. It is the hardest of the four to write well, because a thesis without a systematic reading behind it is an opinion, and reviewers will call it a position paper with no new insight.

The method is to combine the other two forms: read with a protocol so that no one can accuse you of cherry-picking, then organise the findings around the argument rather than around the methods. Quote the papers you criticise exactly, and criticise the practice, not the authors.

Four that earn their argument:

- *[Language (Technology) is Power: A Critical Survey of "Bias" in NLP](https://aclanthology.org/2020.acl-main.485/)* (Blodgett et al., ACL 2020): surveys 146 papers on bias and shows that most never say what harm they mean; the critique rests on the count.
- *[Utility is in the Eye of the User: A Critique of NLP Leaderboards](https://aclanthology.org/2020.emnlp-main.393/)* (Ethayarajh and Jurafsky, EMNLP 2020): one clear thesis about what leaderboards omit, argued with a framework the reader can apply.
- *[On the Gap between Adoption and Understanding in NLP](https://aclanthology.org/2021.findings-acl.340/)* (Bianchi and Hovy, Findings of ACL 2021): names five research practices the field has adopted faster than it has understood, and argues each from the literature.
- *[Challenges and Strategies in Cross-Cultural NLP](https://aclanthology.org/2022.acl-long.482/)* (Hershcovich et al., ACL 2022): turns a survey of what exists into a set of strategies for what should.

### The tutorial or primer

A primer teaches a method rather than mapping a field. Its reader is a newcomer who needs to use the thing next month, so it builds from first principles, fixes one notation and keeps it, and works examples. It does not claim coverage, and it does not argue. Many primers start life as the "background" chapter of a thesis or the notes for a tutorial at a conference.

Three to study:

- *[A Primer in BERTology: What We Know About How BERT Works](https://aclanthology.org/2020.tacl-1.54/)* (Rogers, Kovaleva and Rumshisky, TACL 2020): a primer and a survey in one, organised by the questions people ask about the model rather than by the papers that asked them.
- *[A Primer on Neural Network Models for Natural Language Processing](https://arxiv.org/abs/1510.00726)* (Goldberg, JAIR 2016): a single notation carried through the whole neural toolkit; for years the document new students were told to read first.
- *[Neural Machine Translation and Sequence-to-sequence Models: A Tutorial](https://arxiv.org/abs/1703.01619)* (Neubig, 2017): builds one model family step by step, with the exercises left in.

## Which should you write first?

Write a narrative survey of your own narrow problem, for yourself, and keep it alive. If the area is small enough to enumerate (a few hundred papers from a clear query), make it systematic from the start; the protocol costs a day and the result is publishable. Leave the critical review until you have something to be critical about, which takes a year of reading and at least one paper of your own. Leave the primer to the point where you have taught the method to someone.

Publish only when the document answers a question other people are asking. The main conferences accept surveys, Findings takes many of them, *TACL* and *Computational Linguistics* take the long ones, and workshops are a good home for a survey of a narrow area. Whichever you choose, signal the type in the title and abstract so the reviewers hunt for a taxonomy and not for experiments.

## Common mistakes

- **The annotated bibliography.** Summaries, one per paper, in the order you found them. There is no argument and no taxonomy, so there is no contribution.
- **The survey of everything.** "A survey of large language models" cannot be done well in twenty pages by one student. Narrow until the paper set is one you have actually read.
- **No stated method.** Even a narrative survey should say how the papers were found and why those. Without it, every omission looks like ignorance.
- **Missing the origin or the latest.** Reviewers in the area will check for the paper that started it and the three from the last cycle. Use the citation graph for the first and arXiv for the second.
- **Out of date on submission.** A survey takes months and the field does not wait. Date your search, and rerun it the week before you submit.
- **Citations you have not read.** Surveys cite hundreds of papers and are where fabricated references appear most often, especially when a language model helped. Every entry must be a paper you opened. See [Chapter 23](./23-ai-assistance.md).

## Further reading

- S. Keshav, ["How to Read a Paper"](https://web.stanford.edu/class/ee384m/Handouts/HowtoReadPaper.pdf): the three-pass method, three pages long.
- The [PRISMA 2020 statement](https://www.prisma-statement.org/): the reporting standard for systematic reviews, with the flow diagram NLP reviewers now expect.
- [Chapter 3](./03-paper-types.md) on where surveys sit among \*ACL paper types, and [Chapter 13](./13-related-work.md), which turns the document from this chapter into a section of your paper.
- [Chapter 29](./29-best-papers.md) for the reading list that belongs beside this one.
