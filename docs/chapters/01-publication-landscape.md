---
sidebar_position: 1
title: "1. The NLP Publication Landscape"
---

Know where a paper will live before you draft it. The venue sets the scope: a TACL paper is longer and more polished than an ACL short paper. It sets the review experience (rolling vs. cycle) and what counts as success for hiring and promotion. It even shapes how you frame the contribution in the abstract. This chapter describes the venues; you decide which one fits your work.

## A conference-first field

In most academic disciplines, journals are the archival venue and conferences are where you give a talk. Computer science, including NLP, reverses this. The conference *is* the archival venue. Most journal articles are retrospectives or polished follow-ups to conference papers. The Computing Research Association's *Best Practice Memo on Evaluating Computer Scientists and Engineers For Promotion and Tenure* (Patterson, Snyder, and Ullman, 1999) gives three reasons:

> "the shorter time to print (7 months vs 1–2 years), the opportunity to describe the work before one's peers at a public presentation, and the more complete level of review."

The memo adds that "premier conferences in the field are typically more selective than top-tier journals." Most other fields find this surprising. In NLP, a paper at ACL or EMNLP *is* the citation, and any journal article comes later.

So do not chase a journal publication because you assume journals always outrank conferences. In NLP they usually do not.

## The \*ACL family

The Association for Computational Linguistics runs, or is affiliated with, all the big NLP conferences. ACL describes itself as concerned with "the scientific study of language from a computational perspective." Together these venues are called the \*ACL family. They share most policies, including the author guidelines, the Responsible NLP Checklist and the LaTeX template. More and more, they also share one review pipeline (see *ACL Rolling Review*, below).

### ACL: Annual Meeting of the Association for Computational Linguistics

ACL is the flagship. It has run annually since 1979 and held its 63rd Annual Meeting in 2025. The 2025 main programme had 1,603 long papers and 98 short papers. Separate volumes held the Industry Track (110 papers), System Demonstrations (65), Student Research Workshop (87), and Tutorials (9). *Findings of ACL* is a separate archival track for papers that are sound but not selected for the main programme. Its papers appear in the ACL Anthology in their own volume (*Findings of the Association for Computational Linguistics: ACL 2025*, edited by Wanxiang Che, Joyce Nabende, Ekaterina Shutova, and Mohammad Taher Pilehvar, Vienna, July 2025). The *Findings of \*ACL* section below explains how the track works across all four major chapters. Proceedings: https://aclanthology.org/venues/acl/. Findings of ACL 2025: https://aclanthology.org/volumes/2025.findings-acl/.

### EMNLP: Conference on Empirical Methods in Natural Language Processing

EMNLP has been held annually since 1996. SIGDAT, the ACL's *Special Interest Group on Linguistic Data and Corpus-based Approaches to Natural Language Processing*, organises it. It counts as ACL's equal in prestige and shares its review pipeline. Proceedings: https://aclanthology.org/venues/emnlp/. SIGDAT: https://sigdat.org/.

### NAACL: Nations of the Americas Chapter of the ACL

The ACL Anthology now lists NAACL under the name *Nations of the Americas Chapter of the Association for Computational Linguistics*. The name changed recently from the older *North American Chapter*. NAACL has been held annually since 2000, and its 2025 long-papers volume contains 638 papers. Proceedings: https://aclanthology.org/venues/naacl/.

### EACL: European Chapter of the ACL

EACL was founded in 1983 and meets about every two years (recent editions: 2021, 2023, 2024, 2026). Proceedings: https://aclanthology.org/venues/eacl/.

### AACL: Asian Chapter of the ACL

AACL is the youngest \*ACL conference. Its first edition was in 2020 and its fourth in 2025. Proceedings: https://aclanthology.org/venues/aacl/.

### COLING: International Conference on Computational Linguistics

COLING was first held in 1965, which makes it older than the ACL itself. It runs about every two years, and the International Committee on Computational Linguistics organises it. In 2024 it merged with LREC for one edition, *LREC-COLING 2024*, which produced over 1,500 papers. Proceedings: https://aclanthology.org/venues/coling/.

### LREC: International Conference on Language Resources and Evaluation

LREC is organised by ELRA, the European Language Resources Association, "a non-profit organisation whose main mission is to make Language Resources (LRs) for Human Language Technologies (HLT) available to the community at large," founded in 1995. LREC meets every two years, in even years, and focuses on datasets, evaluation, and resource papers. LREC 2026 is the 15th edition (Palma de Mallorca, May 2026). Proceedings: https://aclanthology.org/venues/lrec/. ELRA: https://www.elra.info/en/.

## Adjacent venues that publish NLP work

A growing share of NLP work, especially on large language models, appears at machine-learning, speech, or general-AI venues instead of \*ACL.

- **NeurIPS, ICML, ICLR.** The three big machine-learning conferences. NLP papers there usually stress the modelling contribution (architecture, training method, scaling law) over the linguistic phenomenon. Reviewing is ML-style; the \*ACL author guidelines and Responsible NLP Checklist do not apply.
- **Interspeech, ICASSP.** The two main speech venues. Authors often send work on text-to-speech, automatic speech recognition, or speech–language model overlap here.
- **AAAI, IJCAI.** Broad AI venues with dedicated NLP tracks. They were once a major outlet for NLP. They are less common now but still matter for some subareas.

If an NLP paper you cite has no ACL Anthology link, check whether it appeared at NeurIPS, ICML, ICLR, or AAAI before you assume it is only on arXiv. Both happen often.

## NLP journals

Three peer-reviewed journals matter for NLP. None is the default outlet; most authors publish at conferences. Each fills a particular role.

- **TACL: Transactions of the ACL.** Published by MIT Press; open access; no submission or article-processing fees. TACL "accepts submissions all year (the 1st day of each month is a submission deadline)" and publishes "papers in all areas of computational linguistics and natural language processing." Accepted papers are "eligible for a presentation at certain ACL-sponsored conferences," but presentation is optional. Journal-level review plus a talk at an \*ACL conference is part of why TACL carries high prestige. Home: https://transacl.org/.
- **Computational Linguistics (CL).** The ACL's flagship journal, in continuous publication since 1974 (51 volumes through 2025). Quarterly. It favours longer, more polished work: survey articles, comprehensive analyses, retrospectives, and theoretical contributions. ACL Anthology: https://aclanthology.org/venues/cl/.
- **Natural Language Processing.** Cambridge University Press; open access; six issues per year. Formerly known as *Natural Language Engineering* (1995–2024) and renamed in 2025. Its stated aim is "to bridge the gap between traditional computational linguistics research and the implementation of practical applications with potential real-world use." ISSN 1351-3249 (print), 1469-8110 (online). Home: https://www.cambridge.org/core/journals/natural-language-processing.

## Findings of \*ACL

The Findings track began with *Findings of EMNLP 2020* and now exists across ACL, EMNLP, NAACL, and EACL. Program chairs offer a Findings slot to papers they judge sound and useful to the field but not strong enough for the main programme. Findings papers are archival. They appear in the ACL Anthology, are citable, and count as a full publication. They usually get no oral presentation slot at the main conference. Anthology: https://aclanthology.org/venues/findings/.

For an author, "rejected from EMNLP" and "appearing in Findings of EMNLP" are often the same outcome seen from two sides. Many well-regarded papers appear in Findings.

## Workshops: archival vs non-archival

Workshops are one- or two-day events held beside the main conferences, usually the day before or after. Each covers a narrower topic. They come in two kinds:

- **Archival workshops** publish their proceedings in the ACL Anthology. The paper is citable and counts as a published work. Most recurring \*ACL workshops are archival.
- **Non-archival workshops** present accepted papers but do not publish proceedings. The author retains the right to submit the paper to a main conference later (often in expanded form). Early in a project, this gets you feedback without "burning" the work at a venue.

A few "workshops" have outgrown the label. *CoNLL* (Conference on Computational Natural Language Learning, since 1997) calls itself a conference and is the flagship of SIGNLL. It runs alongside an \*ACL conference with its own proceedings volume.

Long-running archival workshops worth knowing:

- **CoNLL**: Conference on Computational Natural Language Learning. Since 1997. Often co-located with EMNLP. Famous for its shared tasks on syntactic and semantic parsing.
- **WMT**: Conference on Machine Translation. Since 2006 (originally the *Workshop on Statistical Machine Translation*; renamed to "Conference" when the field professionalised). 10th edition (under the "Conference" name) in 2025. The reference venue for MT research. Site: https://www.statmt.org/.
- **BlackboxNLP**: *Analyzing and Interpreting Neural Networks for NLP.* Since 2018, co-located with EMNLP or ACL.
- **BEA**: *Innovative Use of NLP for Building Educational Applications.* Since 2003.
- **BioNLP**: Biomedical NLP workshop. Since 2004. Hosts the BioNLP Shared Task.
- **SemEval**: see *Shared tasks*, below.

A workshop with a long history and a recurring shared task is usually more competitive than its "workshop" label suggests.

## ACL Rolling Review (ARR)

ARR is "a centralized reviewing service targeting top-tier conferences under the Association for Computational Linguistics" (https://aclrollingreview.org/). ARR was proposed in 2020 and is now the default review pipeline for the \*ACL conferences. In 2024, "the ACL, EACL, NAACL, and EMNLP main conferences all used ARR as the sole submission system."

It works in two steps:

1. **Submit to ARR.** Cycles run about every 10 weeks (8 weeks until May 2025), so there are about five a year. ARR's pool of reviewers writes reviews and a meta-review for each submission.
2. **Commit to a venue.** Each \*ACL conference sets a commitment deadline. If you commit your ARR-reviewed paper by then, the program chairs decide using your existing ARR reviews. The ARR site says: "Program chairs decide the process for committing ARR reviewed papers, as well as the criteria and process for deciding to accept a subset of these submissions into their event."

ARR supports resubmission. When you resubmit, you must "provide a link to the previous submission" and "an explanation of revisions," and you can ask for the same reviewers or all-new ones. If you do not acknowledge a prior submission, the paper is desk-rejected.

ARR itself allows dual commitment: "ARR does not place any restrictions on committing to multiple venues simultaneously, or committing to one venue and submitting for direct review at another venue. However, venues typically do not permit these types of dual commitments / submissions." The ban comes from the venues.

ARR cycle dates, and the conferences accepting commitments, change every cycle. The authoritative schedule is at https://aclrollingreview.org/dates. As of the March 2026 cycle, commitments for EMNLP 2026 and AACL 2026 close on 2 August 2026, and for EACL 2027 on 11 October 2026.

## Shared tasks

A *shared task* is an organised competition. The organisers release a dataset and an evaluation metric, and participants submit system predictions on a held-out test set. Each team writes up its results as a "system description paper" published in the workshop proceedings. Shared tasks run to a different rhythm from regular conference papers. The work follows a fixed timeline (data release → test phase → paper deadline), and the evaluation is standardised. The proceedings hold an organisers' overview paper and dozens of system papers.

Shared tasks suit newcomers for three reasons:

- The dataset and evaluation are ready-made; you do not have to design either.
- The system-paper requirements are usually lighter than a main-conference paper.
- Other participants are working on the same task, so your results mean something without elaborate baselines of your own.

The longest-running and broadest shared-task series:

- **SemEval: Workshop on Semantic Evaluation** (formerly *SENSEVAL*). Started 1998; SemEval-2025 was the 19th edition; SemEval-2027 task proposals are open. Annual, with 10–20 tasks per edition covering semantic analysis, sentiment, factuality, reasoning, and more. Home: https://semeval.github.io/. Proceedings: https://aclanthology.org/venues/semeval/.
- **WMT shared tasks.** Annual at WMT. Tasks include news translation, biomedical translation, automatic metrics evaluation, quality estimation, and chat translation. The "findings of the WMT shared task" paper from each task organiser is a standard reference. Site: https://www.statmt.org/.
- **BEA shared task.** Hosted at the BEA workshop. The 2019 BEA shared task on Grammatical Error Correction is the standard modern GEC benchmark.
- **BioNLP shared tasks.** Domain-specific (relation extraction, event extraction, medical text classification) at the BioNLP workshop.

System-description papers from shared tasks are archival ACL Anthology publications and are cited like any other paper. Many active NLP researchers wrote their first publication as a shared-task system paper.

## A note on Best Paper awards and prestige

The \*ACL conferences give Best Paper, Outstanding Paper, and area-specific awards each year. The awards are visible, and winning one is a major career event. Each conference lists its winners on its website, and the ACL Anthology page for that year indexes them. Chapter 30 recommends Best Paper winners worth reading closely.

## Sources

We checked every claim in this chapter against the source pages below. Where we quote a source, its URL appears inline in that section.

- Patterson, D., Snyder, L., and Ullman, J. *Best Practice Memo: Evaluating Computer Scientists and Engineers For Promotion and Tenure.* Computing Research Association, 1999. https://cra.org/resources/best-practice-memos/evaluating-computer-scientists-and-engineers-for-promotion-and-tenure/
- *About ACL Rolling Review.* https://aclrollingreview.org/
- *ARR Call for Papers.* https://aclrollingreview.org/cfp
- *ARR Dates.* https://aclrollingreview.org/dates
- *ARR Author Information.* https://aclrollingreview.org/authors
- *About TACL.* https://transacl.org/index.php/tacl/about
- *Computational Linguistics (journal page on the ACL Anthology).* https://aclanthology.org/venues/cl/
- *Natural Language Processing (journal home).* https://www.cambridge.org/core/journals/natural-language-processing
- *The ACL Portal.* https://www.aclweb.org/portal/
- *SIGDAT.* https://sigdat.org/
- *ELRA.* https://www.elra.info/en/
- *SemEval.* https://semeval.github.io/
- ACL Anthology venue pages:
  - ACL: https://aclanthology.org/venues/acl/
  - EMNLP: https://aclanthology.org/venues/emnlp/
  - NAACL: https://aclanthology.org/venues/naacl/
  - EACL: https://aclanthology.org/venues/eacl/
  - AACL: https://aclanthology.org/venues/aacl/
  - COLING: https://aclanthology.org/venues/coling/
  - LREC: https://aclanthology.org/venues/lrec/
  - Findings: https://aclanthology.org/venues/findings/
  - CoNLL: https://aclanthology.org/venues/conll/
  - WMT: https://aclanthology.org/venues/wmt/
  - SemEval: https://aclanthology.org/venues/semeval/
  - BEA: https://aclanthology.org/venues/bea/
  - BioNLP: https://aclanthology.org/venues/bionlp/
  - BlackboxNLP: https://aclanthology.org/venues/blackboxnlp/

URLs reflect the state of the venues at the time of writing. ARR cycle dates, conference commitment dates, and the list of ARR-using conferences change every cycle. The ARR Dates page above holds the authoritative current schedule.
