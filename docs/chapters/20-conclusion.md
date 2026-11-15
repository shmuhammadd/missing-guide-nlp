---
sidebar_position: 20
title: "20. Conclusion"
---

Keep the conclusion short. Many great \*ACL papers conclude in three to five sentences.

**How it differs from the abstract and the introduction.** All three compress the paper, and reviewers spot text copied between them at once. The abstract sells the work to someone deciding whether to read it. The introduction promises what the paper will show. The conclusion tells a reader who has finished what the paper showed and what follows. Tense gives it away: the introduction looks forward ("we propose"), the conclusion looks back ("we showed"). Real caveats go in [Limitations](./21-limitations.md).

## What goes in

- **One sentence restating what you did.**
- **One or two sentences restating what you found, with the headline number.**
- **One sentence on implications or future work, if you have any.**

## What does NOT go in

- New results. (Anything in the conclusion should already be in the results section.)
- The abstract, restated in full. (It has a different job and a different reader.)
- Speculation about what your method might one day do. (Reviewers trust restraint.)
- A wishlist of unfinished follow-ups. (One sentence on direction is enough.)

## Phrasebook: the moves of a conclusion

A conclusion runs three to five sentences and makes three moves. It restates what you did, restates what you found, and ends on what it means. As in the other phrasebooks, most entries below are **adaptable templates** with `[bracketed]` slots. A few are real, verified sentences from well-judged conclusions and carry a citation. Two entries sit in the open under each move; expand **Show more** for the rest. If your conclusion needs all of them, it is too long.

### Restating what you did (from real papers and templates)

Open with one sentence in the past tense that names the contribution and its defining property.

- "In this work, we presented the Transformer, the first sequence transduction model based entirely on attention, replacing the recurrent layers most commonly used in encoder-decoder architectures with multi-headed self-attention." One sentence, past tense: the thing, its defining property, and what it replaces. *[Attention Is All You Need](https://arxiv.org/abs/1706.03762)* (Vaswani et al., 2017)
- *"In this paper we presented [method], a [one-phrase description] for [task]."* The bare opener; keep it to one clause.

<details>
<summary>**Show 3 more**</summary>

- "In this work we presented a hybrid pointer-generator architecture with coverage, and showed that it reduces inaccuracies and repetition." Folds what-we-did and what-we-found into a single, modest sentence. *[Get To The Point: Summarization with Pointer-Generator Networks](https://aclanthology.org/P17-1099/)* (See et al., ACL 2017)
- *"We introduced [resource / method] and used it to [the thing it enabled]."* Links the contribution to what it made possible, in one breath.
- *"This paper asked [the question] and answered it by [the approach]."* Frames the conclusion around the question the introduction opened.

</details>

### Restating what you found, with the number (templates)

Give the headline number, never a vague "it worked."

- *"On [benchmark], [method] reaches [score], improving over [baseline] by [delta]."* The headline number, restated once. It should appear earlier in the paper first.
- *"We found that [the central finding], a result that held across [the settings tested]."* States the finding and its scope together, so the summary does not overreach.

<details>
<summary>**Show 3 more**</summary>

- *"The gains are [modest / substantial] ([delta]) and, more importantly, [the qualitative takeaway]."* Pairs the number with what it means, which is the conclusion's real job.
- *"Our [analysis / ablation] showed that [component] is what drives the result."* Carries the analysis's main finding into the summary.
- *"Where [method] helped most was [setting]; where it did not, [setting], we leave open."* An honest two-sided summary of the result.

</details>

### The implication, and one line of future work (from real papers and templates)

End on what the work means, then add at most one sentence on where it points. Without that "and therefore", a conclusion is only a summary.

- "Our major contribution is further generalizing these findings to deep bidirectional architectures, allowing the same pre-trained model to successfully tackle a broad set of NLP tasks." States why the contribution matters beyond the numbers, without overclaiming. *[BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding](https://aclanthology.org/N19-1423/)* (Devlin et al., NAACL 2019)
- *"These results suggest [the broader implication]; we therefore expect [the consequence for the field or for practice]."* The "and therefore" that turns a summary into a conclusion.

<details>
<summary>**Show 4 more**</summary>

- "Our model exhibits many abstractive abilities, but attaining higher levels of abstraction remains an open research question." One sentence of future work, framed as an open question rather than a to-do list. *[Get To The Point: Summarization with Pointer-Generator Networks](https://aclanthology.org/P17-1099/)* (See et al., ACL 2017)
- *"A natural next step is [one direction], which we leave to future work."* The single, disciplined future-work sentence. One direction, not a wishlist.
- *"We release [dataset / method] at [URL] to support [the follow-on work it enables]."* Ends on the resource and what it unlocks, a concrete implication.
- *"More broadly, [the finding] bears on [the larger question] the field has been asking."* Connects the narrow result to the conversation the introduction joined.

</details>

## Common mistakes

- **The padding conclusion.** Three paragraphs that summarize the paper again. Reviewers skip them.
- **Conclusion = future work.** If 80% of the conclusion is what you have not done, the contribution feels thin.
- **Missing implication.** Without an "and therefore…", the conclusion is only a summary.

## Five examples of well-judged conclusions

1. *Attention Is All You Need* (Vaswani et al., 2017). Five sentences: state of the art, simpler, faster, and one sentence of future directions.
2. *[BERT](https://aclanthology.org/N19-1423/)* (Devlin et al., NAACL 2019). Restates the main empirical finding and points at the broader takeaway.
3. *[GloVe](https://aclanthology.org/D14-1162/)* (Pennington et al., EMNLP 2014). A short conclusion that earns its claim of "best of both worlds."
4. *[With Little Power Comes Great Responsibility](https://aclanthology.org/2020.emnlp-main.745/)* (Card et al., EMNLP 2020). The conclusion makes a normative point the rest of the paper has built toward. It shows what a conclusion may say once the paper has earned it.
5. *[Get To The Point](https://aclanthology.org/P17-1099/)* (See et al., ACL 2017). A short, modest conclusion that leaves nothing out.

## Further reading

- Vered Shwartz's [tips post](https://medium.com/@vered1986/tips-for-writing-nlp-papers-9c729a2f9e1f) again. Her advice on conclusions is sharp.
- The companion phrasebooks in [Chapter 11 (The Abstract)](./11-abstract.md) and [Chapter 12 (The Introduction)](./12-introduction.md). Those two introduce the contribution. The conclusion restates it in the past tense, to a reader who has finished.
