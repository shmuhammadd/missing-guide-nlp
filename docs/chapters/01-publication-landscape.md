---
sidebar_position: 1
title: "1. The NLP Publication Landscape"
---

Before you draft a paper, you should know where it will live. The venue affects scope (a TACL paper is longer and more polished than an ACL short paper), the review experience (rolling vs. cycle), what counts as success for hiring and promotion, and even how you frame the contribution in the abstract. This chapter is the map. It is descriptive, not prescriptive — you decide which venue fits your work.

## A conference-first field

Most academic disciplines treat journals as the archival venue and conferences as where you give a talk. Computer science, including NLP, has the opposite culture: the conference *is* the archival venue, and most journal articles are either retrospectives or polished follow-ups to conference papers. The Computing Research Association's *Best Practice Memo on Evaluating Computer Scientists and Engineers For Promotion and Tenure* (Patterson, Snyder, and Ullman, 1999) gives three reasons for this:

> "the shorter time to print (7 months vs 1–2 years), the opportunity to describe the work before one's peers at a public presentation, and the more complete level of review."

The memo adds that "premier conferences in the field are typically more selective than top-tier journals." This is the cultural fact most other fields find surprising: in NLP, a paper at ACL or EMNLP *is* the citation, and the journal article — if any — comes later.

A practical consequence for first-time authors: do not optimise for a journal publication on the assumption that journals always outrank conferences. In NLP, they typically do not.

## The \*ACL family

The big conferences in NLP are all run by, or affiliated with, the Association for Computational Linguistics. ACL describes itself as concerned with "the scientific study of language from a computational perspective." Together these venues are usually abbreviated as the \*ACL family. They share most policies — author guidelines, the Responsible NLP Checklist, the same LaTeX template — and increasingly the same review pipeline (see *ACL Rolling Review*, below).

### ACL — Annual Meeting of the Association for Computational Linguistics

The flagship. ACL has run annually since 1979 and reached its 63rd Annual Meeting in 2025. The 2025 main programme included 1,603 long papers and 98 short papers, plus separate volumes for the Industry Track (110 papers), System Demonstrations (65), Student Research Workshop (87), and Tutorials (9). Alongside the main programme, *Findings of ACL* runs as a separate archival track for papers that are sound but not selected for the main programme — these are published in the ACL Anthology under their own volume (*Findings of the Association for Computational Linguistics: ACL 2025*, edited by Wanxiang Che, Joyce Nabende, Ekaterina Shutova, and Mohammad Taher Pilehvar, Vienna, July 2025). See the dedicated *Findings of \*ACL* section below for how the track works across all four major chapters. Proceedings: https://aclanthology.org/venues/acl/. Findings of ACL 2025: https://aclanthology.org/volumes/2025.findings-acl/.

### EMNLP — Conference on Empirical Methods in Natural Language Processing

Held annually since 1996. EMNLP is organised by SIGDAT, the ACL's *Special Interest Group on Linguistic Data and Corpus-based Approaches to Natural Language Processing*. It is generally regarded as co-equal with ACL in prestige and shares its review pipeline. Proceedings: https://aclanthology.org/venues/emnlp/. SIGDAT: https://sigdat.org/.

### NAACL — Nations of the Americas Chapter of the ACL

The ACL Anthology now lists NAACL under the name *Nations of the Americas Chapter of the Association for Computational Linguistics* — a recent rebranding from the older *North American Chapter*. Held annually since 2000; the 2025 long-papers volume contains 638 papers. Proceedings: https://aclanthology.org/venues/naacl/.

### EACL — European Chapter of the ACL

Founded 1983; held roughly every two years (recent editions: 2021, 2023, 2024, 2026). Proceedings: https://aclanthology.org/venues/eacl/.

### AACL — Asian Chapter of the ACL

The youngest \*ACL conference: first edition 2020, fourth edition 2025. Proceedings: https://aclanthology.org/venues/aacl/.

### COLING — International Conference on Computational Linguistics

COLING is older than the ACL itself (first held in 1965), runs roughly biennially, and is organised by the International Committee on Computational Linguistics. In 2024 it merged for one edition with LREC into *LREC-COLING 2024*, which produced over 1,500 papers. Proceedings: https://aclanthology.org/venues/coling/.

### LREC — International Conference on Language Resources and Evaluation

LREC is organised by ELRA, the European Language Resources Association — "a non-profit organisation whose main mission is to make Language Resources (LRs) for Human Language Technologies (HLT) available to the community at large," founded in 1995. LREC is biennial (even years), focused on datasets, evaluation, and resource papers. LREC 2026 is the 15th edition (Palma de Mallorca, May 2026). Proceedings: https://aclanthology.org/venues/lrec/. ELRA: https://www.elra.info/en/.

## Adjacent venues that publish NLP work

A growing share of NLP work — particularly on large language models — appears at machine-learning, speech, or general-AI venues rather than at \*ACL. A first author should know these exist.

- **NeurIPS, ICML, ICLR.** The three big machine-learning conferences. NLP papers there usually emphasise the modelling contribution (architecture, training method, scaling law) rather than the linguistic phenomenon. Reviewing is ML-style; the \*ACL author guidelines and Responsible NLP Checklist do not apply.
- **Interspeech, ICASSP.** The two main speech venues. Work that touches text-to-speech, automatic speech recognition, or speech–language model overlap is often submitted here.
- **AAAI, IJCAI.** Broad AI venues with dedicated NLP tracks. Historically a major outlet for NLP; less common now, but still relevant for specific subareas.

A practical consequence: if you cite an NLP paper that has no ACL Anthology link, check whether it appeared at NeurIPS / ICML / ICLR / AAAI before assuming it is only on arXiv. Both happen often.

## NLP journals

Three peer-reviewed journals matter for NLP. None of them is the default outlet; most authors will publish at conferences instead. But each plays a specific role.

- **TACL — Transactions of the ACL.** Published by MIT Press; open access; no submission or article-processing fees. TACL "accepts submissions all year (the 1st day of each month is a submission deadline)" and publishes "papers in all areas of computational linguistics and natural language processing." Accepted papers are "eligible for a presentation at certain ACL-sponsored conferences," but presentation is optional. The combination of journal-level review with a talk at an \*ACL conference is part of why TACL has high prestige. Home: https://transacl.org/.
- **Computational Linguistics (CL).** The ACL's flagship journal, in continuous publication since 1974 (51 volumes through 2025). Quarterly. Tends toward longer, more polished work — survey articles, comprehensive analyses, retrospectives, theoretical contributions. ACL Anthology: https://aclanthology.org/venues/cl/.
- **Natural Language Processing.** Cambridge University Press; open access; six issues per year. Formerly known as *Natural Language Engineering* (1995–2024) and renamed in 2025. Its stated aim is "to bridge the gap between traditional computational linguistics research and the implementation of practical applications with potential real-world use." ISSN 1351-3249 (print), 1469-8110 (online). Home: https://www.cambridge.org/core/journals/natural-language-processing.

## Findings of \*ACL

The Findings track began with *Findings of EMNLP 2020* and now exists across ACL, EMNLP, NAACL, and EACL. Papers that the program chairs judge to be sound and to contribute to the field, but not strong enough for the main programme, are offered a Findings slot. Findings papers are archival — they appear in the ACL Anthology, are citable, and count as a full publication — but typically without an oral presentation slot at the main conference. Anthology: https://aclanthology.org/venues/findings/.

For an author, the practical point is that "rejected from EMNLP" and "appearing in Findings of EMNLP" are often the same outcome viewed from two angles. Many well-regarded papers appear in Findings.

## Workshops: archival vs non-archival

Workshops are one- or two-day events co-located with the main conferences (typically the day before or after). They focus on a narrower topic, and they fall into two categories:

- **Archival workshops** publish their proceedings in the ACL Anthology. The paper is citable and counts as a published work. Most recurring \*ACL workshops are archival.
- **Non-archival workshops** present accepted papers but do not publish proceedings. The author retains the right to submit the paper to a main conference later (often in expanded form). This is useful early in a project for getting feedback without "burning" the work at a venue.

A few "workshops" have outgrown the label in practice. *CoNLL — Conference on Computational Natural Language Learning* (since 1997) is called a conference and is the flagship of SIGNLL; it runs as an \*ACL-co-located event with its own proceedings volume.

Long-running archival workshops worth knowing:

- **CoNLL** — Conference on Computational Natural Language Learning. Since 1997. Often co-located with EMNLP. Famous for its shared tasks on syntactic and semantic parsing.
- **WMT** — Conference on Machine Translation. Since 2006 (originally the *Workshop on Statistical Machine Translation*; renamed to "Conference" when the field professionalised). 10th edition (under the "Conference" name) in 2025. The reference venue for MT research. Site: https://www.statmt.org/.
- **BlackboxNLP** — *Analyzing and Interpreting Neural Networks for NLP.* Since 2018, co-located with EMNLP or ACL.
- **BEA** — *Innovative Use of NLP for Building Educational Applications.* Since 2003.
- **BioNLP** — Biomedical NLP workshop. Since 2004. Hosts the BioNLP Shared Task.
- **SemEval** — see *Shared tasks*, below.

A useful rule for newcomers: a workshop with a long history and a recurring shared task is usually more competitive than its "workshop" label suggests.

## ACL Rolling Review (ARR)

ARR is "a centralized reviewing service targeting top-tier conferences under the Association for Computational Linguistics" (https://aclrollingreview.org/). It was proposed in 2020 and has since become the default review pipeline for the \*ACL conferences: in 2024, "the ACL, EACL, NAACL, and EMNLP main conferences all used ARR as the sole submission system."

The model is two-step:

1. **Submit to ARR.** Cycles run roughly every 10 weeks (changed from 8-week cycles in May 2025), so about five cycles per year. A submission receives reviews and a meta-review through ARR's pool of reviewers.
2. **Commit to a venue.** Each \*ACL conference sets a commitment deadline; if you commit your ARR-reviewed paper by that deadline, the program chairs use your existing ARR reviews to decide. The ARR site states: "Program chairs decide the process for committing ARR reviewed papers, as well as the criteria and process for deciding to accept a subset of these submissions into their event."

Resubmissions are explicitly supported. When you resubmit, you must "provide a link to the previous submission" and "an explanation of revisions," and you can request the same reviewers or all-new ones. Failure to acknowledge a prior submission leads to desk rejection.

A subtle point: "ARR does not place any restrictions on committing to multiple venues simultaneously, or committing to one venue and submitting for direct review at another venue. However, venues typically do not permit these types of dual commitments / submissions." The restriction comes from the venue, not from ARR.

ARR cycle dates and the list of conferences accepting commitments shift every cycle. The authoritative current schedule is at https://aclrollingreview.org/dates. As of the March 2026 cycle, EMNLP 2026 and AACL 2026 commitments close on 2 August 2026; EACL 2027 commitments close on 11 October 2026.

## Shared tasks

A *shared task* is an organised competition: the organisers release a dataset and an evaluation metric, participants submit system predictions on a held-out test set, and the results are written up as a "system description paper" published in the workshop proceedings. Shared tasks have a distinct rhythm from regular conference papers — the work happens against a fixed timeline (data release → test phase → paper deadline), the evaluation is standardised, and the proceedings include both an organisers' overview paper and dozens of system papers.

For newcomers, shared tasks have three practical features:

- The dataset and evaluation are ready-made; you do not have to design either.
- The system-paper requirements are usually lighter than a main-conference paper.
- Other participants are working on the same task, so the results section is informative without elaborate baselines of your own.

The longest-running and broadest shared-task series:

- **SemEval — Workshop on Semantic Evaluation** (formerly *SENSEVAL*). Started 1998; SemEval-2025 was the 19th edition; SemEval-2027 task proposals are open. Annual, with 10–20 tasks per edition spanning semantic analysis, sentiment, factuality, reasoning, and beyond. Home: https://semeval.github.io/. Proceedings: https://aclanthology.org/venues/semeval/.
- **WMT shared tasks.** Annual at WMT. Tasks include news translation, biomedical translation, automatic metrics evaluation, quality estimation, and chat translation. The "findings of the WMT shared task" paper from each task organiser is a standard reference. Site: https://www.statmt.org/.
- **BEA shared task.** Hosted at the BEA workshop. The 2019 BEA shared task on Grammatical Error Correction is the de facto modern GEC benchmark.
- **BioNLP shared tasks.** Domain-specific (relation extraction, event extraction, medical text classification) at the BioNLP workshop.

System-description papers from shared tasks are archival ACL Anthology publications and are cited like any other paper. Many active NLP researchers wrote their first publication as a shared-task system paper.

## A note on Best Paper awards and prestige

The \*ACL conferences give Best Paper, Outstanding Paper, and area-specific awards each year. These are highly visible signals — being awarded one is a major career event. The list of awarded papers for each conference is published on the conference website and indexed in the ACL Anthology page for that year. Chapter 17 of this guide recommends specific Best Paper recipients worth reading closely.

## Sources

All claims in this chapter were verified by fetching the source pages below. Where a source is quoted, the page URL is given inline in the relevant section.

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

URLs reflect the state of the venues at the time of writing. ARR cycle dates, conference commitment dates, and the list of ARR-using conferences change every cycle — the ARR Dates page above is the authoritative current schedule.
