---
sidebar_position: 7
title: "7. Background / Preliminaries"
---

Not every paper needs a separate background section. Some do. Use one when:

- The paper builds on a specific formalism the reader needs (a particular decoding algorithm, a probability model, a measure).
- You are introducing notation that will be used heavily later.
- The audience genuinely spans subfields and you need to level the floor.

If your work is on a topic everyone at ACL already understands (e.g., autoregressive language modeling), skip this section and fold any necessary notation into Methods.

## What goes in

- **Notation.** Define symbols once, use them consistently. A small notation table can be worth its weight in pages.
- **The core formalism.** State it cleanly, in a few equations if needed. Cite the original source.
- **The specific prior result you build on.** If your method modifies a published algorithm, write the original algorithm here so the reader can see what changes in §Methods.

## Common mistakes

- **Lecture-mode.** Re-deriving softmax for two paragraphs. The ACL audience knows softmax.
- **No clear function.** The background section exists to support the methods. If a paragraph here is not used later, cut it.
- **Inconsistent notation.** If `h_t` is the hidden state in §3, do not switch to `h^(t)` in §5.

## A useful test

Before you keep a paragraph in the background section, ask: *will I refer to this content later in the paper?* If not, it does not belong here. Background exists in service of methods. Trivia about the history of the field is not background — it is filler.

## Five examples

1. *Attention Is All You Need* (Vaswani et al., 2017). The "Background" subsection is short, focused, and used.
2. *Neural Machine Translation by Jointly Learning to Align and Translate* (Bahdanau, Cho, Bengio, ICLR 2015). Sets up the encoder-decoder framework cleanly before introducing attention.
3. *[Lexically Constrained Decoding for Sequence Generation Using Grid Beam Search](https://aclanthology.org/P17-1141/)* (Hokamp & Liu, ACL 2017). Background on beam search that sets up the modification crisply.
4. *[Get To The Point: Summarization with Pointer-Generator Networks](https://aclanthology.org/P17-1099/)* (See et al., ACL 2017). Exemplary preliminaries that prepare the reader for the model contribution.
5. *[Latent Retrieval for Weakly Supervised Open Domain Question Answering](https://aclanthology.org/P19-1612/)* (Lee, Chang, Toutanova, ACL 2019). The preliminaries are tightly scoped to what the model needs.

## Further reading

- The methods sections of textbooks (Jurafsky & Martin's *Speech and Language Processing*, [free online](https://web.stanford.edu/~jurafsky/slp3/)) for the level of explanation you should aim for.
