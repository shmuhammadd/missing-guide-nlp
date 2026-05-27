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

## Common mistakes

- **The list-of-summaries.** "Smith et al. (2021) proposed X. Jones et al. (2022) proposed Y. Lee et al. (2023) proposed Z." This is not related work; this is annotated bibliography. Group, contrast, and argue.
- **Missing the obvious citations.** Reviewers in your area know what should be cited. Missing two or three landmark papers in your subfield can sink you. Spend a full day on prior work search alone.
- **Citing only your own group.** Looks insular and lazy. Always do a fresh literature search from scratch, not just from your group's BibTeX.
- **Trashing prior work.** "Smith et al.'s method is fundamentally flawed because…" No. Even if they are wrong, be generous. Reviewers are sometimes the authors of papers you are dismissing.
- **Comparing only to weaker baselines.** If a stronger competing method exists, you must cite it and either compare against it or explain why you cannot.

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
