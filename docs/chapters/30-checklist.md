---
sidebar_position: 30
title: "30. A Final Checklist"
---

Walk through this list before you submit. Some of it overlaps with the official Responsible NLP Checklist; treat that one as canonical.

A standalone, printable copy is at [`checklists/submission-checklist.md`](../checklists/submission-checklist.md).

## Content

- [ ] The introduction states the research question plainly, in one sentence.
- [ ] Contributions list in the introduction is concrete and honest.
- [ ] Every section serves the central argument; nothing is there because you "had it lying around."
- [ ] Figures and tables are readable in grayscale.
- [ ] All claims are supported by experiments or citations.
- [ ] Results are reported with variance, not single seeds.
- [ ] Strongest available baselines are included; missing ones are justified.

## Writing

- [ ] Read the full paper aloud at least once. Rewrite every sentence you stumble over.
- [ ] No undefined acronyms.
- [ ] Notation is consistent throughout.
- [ ] No "novel" or "we are the first" without verification.
- [ ] Captions are self-contained paragraphs.

## Structure

- [ ] Limitations section is present, substantive, and honest.
- [ ] Ethical Considerations section is present if relevant.
- [ ] References use the ACL Anthology version of each paper; every citation has been verified to exist.
- [ ] Appendices contain supplementary material only; main claims are in the body.

## Submission Logistics

- [ ] Anonymized: no author names or affiliations, and self-citations in the third person ("Smith (2023) showed," not "we showed in [Smith 2023]").
- [ ] Acknowledgments and identifying funding/grant numbers removed from the review version (they go back in the camera-ready).
- [ ] PDF metadata clean: your name is not in the file's document properties. Check the Author field; it exposes many otherwise-anonymous submissions.
- [ ] No links to non-anonymous repositories; use an anonymized mirror (e.g. [anonymous.4open.science](https://anonymous.4open.science)) for code and data.
- [ ] Page limits respected (Limitations, Ethics, References, Appendix do not count).
- [ ] Responsible NLP Checklist filled out.
- [ ] PDF compiled with the correct year's ACL style file.
- [ ] Ran [`aclpubcheck`](https://github.com/acl-org/aclpubcheck) on the PDF and fixed what it flags. It catches the margin, font, page-limit, and citation errors that trigger desk rejects (`aclpubcheck --paper_type long paper.pdf`). Ignore its line-number warnings on a review-version PDF.

## The reviewer test

Read the paper one last time as a tired reviewer with eight more papers to read. Mark where you would stop reading. That is where you have more work to do.

## A closing word

Your first ACL paper will not be perfect. It will not be the best paper of your career, and it does not need to be. It needs to be *honest*, *clear*, and *complete*. A paper that says one true thing clearly earns more respect than one that promises everything and delivers a moving target.

Show your draft to people who will tell you the truth. Revise more than you think you need to. Submit, and if it gets rejected, take the reviews seriously, improve the paper, and resubmit. Almost every senior researcher you admire has a stack of rejection letters. In the end they learned more from those than from their acceptances.

Good luck.
