---
sidebar_position: 16
title: "16. Best Papers Worth Reading"
---

Read these papers carefully — not just the abstract, the whole thing — paying attention to how they are structured, how they motivate their problem, how they present results, and how they handle the boring sections (related work, experimental setup, limitations). Pattern-match your own writing against them.

A BibTeX file of every paper in this chapter is available at [`examples/papers-to-read.bib`](../examples/papers-to-read.bib) — drop it straight into Overleaf.

The list is organized by what each paper does especially well, so you can read with a purpose.

## For learning how to frame a problem

- **Vaswani et al., *Attention Is All You Need* (NeurIPS 2017).** Honorary inclusion — outside \*ACL but the canonical example of a focused contribution. Watch how the abstract and introduction commit to one claim and defend it.
- **Devlin et al., *[BERT](https://aclanthology.org/N19-1423/)* (NAACL 2019, NAACL Best Long Paper).** The introduction is a textbook case of "here's the gap, here's the move, here's the result." Read it three times.
- **Pennington, Socher, Manning, *[GloVe](https://aclanthology.org/D14-1162/)* (EMNLP 2014, ACL Test-of-Time 2024).** Positions itself against two prior traditions and stakes out the middle ground precisely.
- **Bender et al., *On the Dangers of Stochastic Parrots* (FAccT 2021).** Field-defining problem framing. The introduction of this paper is studied in graduate seminars.

## For learning how to do analysis

- **Niven & Kao, *[Probing Neural Network Comprehension of Natural Language Arguments](https://aclanthology.org/P19-1459/)* (ACL 2019).** The whole paper is one careful analysis. Showed the field how surface heuristics can fake comprehension.
- **Ribeiro et al., *[Beyond Accuracy: Behavioral Testing with CheckList](https://aclanthology.org/2020.acl-main.442/)* (ACL 2020, Best Paper).** Analysis as contribution. Read for how the authors structure a paper around evaluation rather than a new model.
- **Card, Henderson, Khandelwal, Jia, Sturm, Jurafsky, *[With Little Power Comes Great Responsibility](https://aclanthology.org/2020.emnlp-main.745/)* (EMNLP 2020).** A meta-analysis of the field's own statistical practice. Read for how to make a "non-result" feel essential.
- **Clark, Khandelwal, Levy, Manning, *What Does BERT Look At?* (BlackBoxNLP 2019).** A model paper for how to do careful probing analysis.

## For learning how to write methods

- **Vaswani et al., *Attention Is All You Need*. (Yes, again.)** The Methods section is a masterclass.
- **See, Liu, Manning, *[Get To The Point](https://aclanthology.org/P17-1099/)* (ACL 2017).** Pointer-generator architecture explained with discipline.
- **Lewis et al., *Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks* (NeurIPS 2020).** Cleanly decomposes a complex method.
- **Wei et al., *Chain-of-Thought Prompting Elicits Reasoning in Large Language Models* (NeurIPS 2022).** The method is conceptually simple; the paper has the wisdom to present it simply.

## Recent best-paper winners worth studying (\*ACL family)

These are recent, on-topic, and exemplary in different ways. Find them on the [ACL Anthology](https://aclanthology.org).

- **Kallini, Papadimitriou, Futrell, Mahowald, Potts, *Mission: Impossible Language Models* (ACL 2024 Best Paper).** Beautiful experimental design, clean analysis, sharp claims.
- **Lu, Liu, Mortensen, *Semisupervised Neural Proto-Language Reconstruction* (ACL 2024 Best Paper).** Excellent example of a paper rooted in linguistic theory but rigorous in NLP method.
- **Hahn, Rofin, *Why Are Sensitive Functions Hard for Transformers?* (ACL 2024 Best Paper).** A theory paper that stays grounded in empirical observations.
- **Guan et al., *Deciphering Oracle Bone Language with Diffusion Models* (ACL 2024 Best Paper).** First-authored by an undergraduate. A reminder that genuine novelty + careful execution wins.
- **Groeneveld et al., *OLMo: Accelerating the Science of Language Models* (ACL 2024 Best Theme Paper).** A resource/openness paper done right.
- **Subbiah, Zhang, Chilton, McKeown, *Reading Subtext: Evaluating LLMs on Short Story Summarization with Writers* (TACL 2024 / ACL 2025 Best Paper).** Excellent example of mixing human-expert evaluation with NLP rigor.
- **Yao et al., *VisKoP: Visual Knowledge oriented Programming for Interactive KBQA* (ACL 2023 Best Paper).** A system/demo paper that explains a complex tool clearly.
- **From EACL 2024 Best Papers:** *LOCOST: State-Space Models for Long Document Abstractive Summarization* (Le Bronnec et al.); *Leak, Cheat, Repeat: Data Contamination and Evaluation Malpractices in Closed-Source LLMs* (Balloccu et al.) — both worth reading for how they handle controversial methodological territory.
- **From EMNLP 2023:** Morris, Kuleshov, Shmatikov, Rush, *Text Embeddings Reveal (Almost) As Much As Text* (EMNLP 2023 Outstanding). A short, surprising paper with disciplined experimental design.
- **From ACL 2023 Best Papers:** the [awards page](https://2023.aclweb.org/program/best_papers/) lists three best papers and 39 outstanding papers. Browse and pick three that overlap with your area.

## Test-of-Time papers (papers that aged well)

The ACL Test-of-Time Award honors papers from 10 and 25 years prior whose impact has endured. They are worth reading because they show what a "good idea, well executed" looks like *in retrospect*:

- **Pennington, Socher, Manning, *[GloVe](https://aclanthology.org/D14-1162/)* (EMNLP 2014, 10-year award 2024).**
- **Lillian Lee, *Measures of Distributional Similarity* (ACL 1999, 25-year award 2024).**
- Full Test-of-Time announcements: [ACL Portal](https://www.aclweb.org/portal/content/announcement-20acl-test-time-paper-award).

## How to read these

Do not just read them once. For two or three papers from this list:

1. Read the abstract. Try to predict the structure of the paper. Read it again.
2. Read the introduction. Mark, paragraph by paragraph, what role each paragraph plays (context, gap, move, preview, contributions).
3. Skim the methods. Look at the figures first. Can you understand the method from the figures alone?
4. Read the results. Identify the single most important table or figure.
5. Read the limitations. Notice what the authors chose to surface and how.
6. Now read your own draft with the same lens.

This exercise is worth more than ten "tips for writing papers" blog posts.

## Want to contribute a paper to this list?

We welcome suggestions — see [CONTRIBUTING.md](https://github.com/shmuhammadd/missing-guide-nlp/blob/main/CONTRIBUTING.md). The bar: it must exemplify a *specific* craft point in a section of this guide, and it must be linkable on the ACL Anthology (or a comparable peer-reviewed venue).
