---
sidebar_position: 9
title: "9. Methods"
---

The methods section is where the new author most often over-writes and under-explains simultaneously. Let me say what I mean by that.

**Over-writes**: too many equations, too much narration of every micro-decision, full hyperparameter dumps mid-paragraph, paragraph after paragraph of "we then…we then…we then."

**Under-explains**: the *why* of each design choice is missing. The reader cannot tell which choices are essential to the contribution and which were arbitrary.

## Structure that works

1. **One paragraph overview.** What does the method do, at a high level? A diagram (Figure 1 or 2) is almost mandatory here. The reader should be able to close the paper after this paragraph and explain your method to a colleague.
2. **Walk through the components.** One subsection per major component. Within each: *what* it does, *how* it does it (with equations as needed), and *why* you designed it this way.
3. **Training / inference details that are part of the contribution.** Things like a novel loss, a custom decoding constraint, an unusual training schedule belong here. Routine details (learning rate, batch size) go in the experimental setup.
4. **A worked example or pseudocode.** For complex methods, pseudocode in algorithm-block style helps reviewers enormously. For dataset/pipeline papers, a worked example is the equivalent.

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
