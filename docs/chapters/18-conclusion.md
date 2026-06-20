---
sidebar_position: 18
title: "18. Conclusion"
---

The conclusion is short. Many great \*ACL papers have a conclusion of three to five sentences.

**Not the abstract, not the introduction.** All three compress the paper, and copying text between them is a tell reviewers catch at once. The abstract sells the work to someone deciding whether to read it; the introduction promises what the paper will show; the conclusion reports, to a reader who has now finished, what it showed and what follows. Tense is the giveaway — the introduction looks forward ("we propose"), the conclusion looks back ("we showed"). Genuine caveats go in [Limitations](./19-limitations.md), not here.

## What goes in

- **One sentence restating what you did.**
- **One or two sentences restating what you found, with the headline number.**
- **One sentence on implications or future work — if any.**

That is it.

## What does NOT go in

- New results. (If it is in the conclusion, it should be in the results section.)
- A full restating of the abstract. (Different role, different audience.)
- Speculation about what your method might one day do. (Restraint earns trust.)
- A wishlist of unfinished follow-ups. (One sentence on direction is plenty.)

## Phrasebook: the moves of a conclusion

A conclusion has three moves and runs three to five sentences: restate what you did, restate what you found, end on what it means. As in the other phrasebooks, most entries below are **adaptable templates** with `[bracketed]` slots; a few are real, verified sentences from well-judged conclusions and carry a citation. Two entries sit in the open under each move; expand **Show more** for the rest. Brevity is the whole point — if your conclusion needs all of these, it is too long.

### Restating what you did (from real papers and templates)

The opening move: one sentence, past tense, naming the contribution and its defining property.

- "In this work, we presented the Transformer, the first sequence transduction model based entirely on attention, replacing the recurrent layers most commonly used in encoder-decoder architectures with multi-headed self-attention." — One sentence, past tense: the thing, its defining property, and what it replaces. *[Attention Is All You Need](https://arxiv.org/abs/1706.03762)* (Vaswani et al., 2017)
- *"In this paper we presented [method], a [one-phrase description] for [task]."* — The bare restate-what-you-did opener; keep it to one clause.

<details>
<summary>**Show 3 more**</summary>

- "In this work we presented a hybrid pointer-generator architecture with coverage, and showed that it reduces inaccuracies and repetition." — Folds what-we-did and what-we-found into a single, modest sentence. *[Get To The Point: Summarization with Pointer-Generator Networks](https://aclanthology.org/P17-1099/)* (See et al., ACL 2017)
- *"We introduced [resource / method] and used it to [the thing it enabled]."* — Links the contribution to what it made possible, in one breath.
- *"This paper asked [the question] and answered it by [the approach]."* — Frames the conclusion around the question the introduction opened.

</details>

### Restating what you found, with the number (templates)

The conclusion earns its place by carrying the headline number, not a vague "it worked."

- *"On [benchmark], [method] reaches [score], improving over [baseline] by [delta]."* — The headline number, restated once; the conclusion is not the place to first introduce it.
- *"We found that [the central finding], a result that held across [the settings tested]."* — States the finding and its scope together, so the summary does not overreach.

<details>
<summary>**Show 3 more**</summary>

- *"The gains are [modest / substantial] ([delta]) and, more importantly, [the qualitative takeaway]."* — Pairs the number with what it means, which is the conclusion's real job.
- *"Our [analysis / ablation] showed that [component] is what drives the result."* — Carries the analysis's main finding into the summary.
- *"Where [method] helped most was [setting]; where it did not, [setting], we leave open."* — An honest two-sided summary of the result.

</details>

### The implication, and one line of future work (from real papers and templates)

A conclusion without an "and therefore" is a summary. End on what the work means — then, at most, one sentence of where it points.

- "Our major contribution is further generalizing these findings to deep bidirectional architectures, allowing the same pre-trained model to successfully tackle a broad set of NLP tasks." — States why the contribution matters beyond the numbers, without overclaiming. *[BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding](https://aclanthology.org/N19-1423/)* (Devlin et al., NAACL 2019)
- *"These results suggest [the broader implication]; we therefore expect [the consequence for the field or for practice]."* — The "and therefore" that turns a summary into a conclusion.

<details>
<summary>**Show 4 more**</summary>

- "Our model exhibits many abstractive abilities, but attaining higher levels of abstraction remains an open research question." — One sentence of future work, framed as an open question rather than a to-do list. *[Get To The Point: Summarization with Pointer-Generator Networks](https://aclanthology.org/P17-1099/)* (See et al., ACL 2017)
- *"A natural next step is [one direction], which we leave to future work."* — The single, disciplined future-work sentence — one direction, not a wishlist.
- *"We release [dataset / method] at [URL] to support [the follow-on work it enables]."* — Ends on the resource and what it unlocks, a concrete implication.
- *"More broadly, [the finding] bears on [the larger question] the field has been asking."* — Connects the narrow result to the conversation the introduction joined.

</details>

## Common mistakes

- **The padding conclusion.** Three paragraphs that re-summarize the paper. Reviewers skip these. Be brief.
- **Conclusion = future work.** If 80% of the conclusion is what you have not done, the contribution feels thin.
- **Missing implication.** A conclusion with no "and therefore…" is a summary, not a conclusion.

## Five examples of well-judged conclusions

1. *Attention Is All You Need* (Vaswani et al., 2017). Five sentences. State of the art, simpler, faster, future directions for one sentence. Done.
2. *[BERT](https://aclanthology.org/N19-1423/)* (Devlin et al., NAACL 2019). Restates the main empirical finding and points at the broader takeaway.
3. *[GloVe](https://aclanthology.org/D14-1162/)* (Pennington et al., EMNLP 2014). A short conclusion that earns its claim of "best of both worlds."
4. *[With Little Power Comes Great Responsibility](https://aclanthology.org/2020.emnlp-main.745/)* (Card et al., EMNLP 2020). Conclusion makes a normative point — a great example of when a conclusion gets to say something the rest of the paper has built toward.
5. *[Get To The Point](https://aclanthology.org/P17-1099/)* (See et al., ACL 2017). Tight, modest, complete.

## Further reading

- Vered Shwartz's [tips post](https://medium.com/@vered1986/tips-for-writing-nlp-papers-9c729a2f9e1f), again — her advice on conclusions is sharp.
- The companion phrasebooks in [Chapter 9 — The Abstract](./09-abstract.md) and [Chapter 10 — The Introduction](./10-introduction.md): the conclusion restates, in past tense and to a reader who has finished, the same contribution those two introduce.
