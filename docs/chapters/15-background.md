---
sidebar_position: 15
title: "15. Background / Preliminaries"
---

Many papers need no separate background section. Write one when:

- The paper builds on a specific formalism the reader needs (a particular decoding algorithm, a probability model, a measure).
- You introduce notation that you will use heavily later.
- The audience spans subfields and you need to level the floor.

If everyone at ACL already knows your topic (e.g., autoregressive language modeling), skip this section and fold any notation you need into Methods.

## Background is not related work

New authors blur these two sections. Their placement next to each other, as §2 and §3, does not help. Related work is an *argument*: it sets your paper against competitors and names the gap you fill (see [Chapter 14](./14-related-work.md)). Background is *scaffolding*. It sets up the notation and formalism your Methods section depends on, and it cites where a technique came from instead of its rivals.

One test separates them. Delete a related-work paragraph and the method still stands. Delete a background paragraph and the notation in §Methods no longer parses.

Some papers combine the two under one heading, usually `Background and Related Work`, when the technical setup is light and the positioning is short. That is a fine choice. Make it on purpose, knowing you are putting two different moves under one header. The names vary too: "Related Work" or "Prior Work"; "Background" or "Preliminaries."

## What goes in

- **Notation.** Define each symbol once and use it the same way throughout. A small notation table can be worth its weight in pages.
- **The core formalism.** State it in a few equations if you need them. Cite the original source.
- **The specific prior result you build on.** If your method modifies a published algorithm, write out the original here so the reader can see what changes in §Methods.

## Common mistakes

- **Lecture-mode.** Re-deriving softmax for two paragraphs. The ACL audience knows softmax.
- **No clear function.** The background section supports the methods. If the paper never uses a paragraph here again, cut it.
- **Inconsistent notation.** If `h_t` is the hidden state in §3, do not switch to `h^(t)` in §5.

## A useful test

Before you keep a paragraph in the background section, ask: *will I refer to this content later in the paper?* If not, cut it. Trivia about the history of the field is filler.

## Five examples

1. *Attention Is All You Need* (Vaswani et al., 2017). The "Background" subsection is short, focused, and used later.
2. *Neural Machine Translation by Jointly Learning to Align and Translate* (Bahdanau, Cho, Bengio, ICLR 2015). Sets up the encoder-decoder framework before it introduces attention.
3. *[Lexically Constrained Decoding for Sequence Generation Using Grid Beam Search](https://aclanthology.org/P17-1141/)* (Hokamp & Liu, ACL 2017). Background on beam search that sets up the modification in a few lines.
4. *[Get To The Point: Summarization with Pointer-Generator Networks](https://aclanthology.org/P17-1099/)* (See et al., ACL 2017). Preliminaries that prepare the reader for the model contribution.
5. *[Latent Retrieval for Weakly Supervised Open Domain Question Answering](https://aclanthology.org/P19-1612/)* (Lee, Chang, Toutanova, ACL 2019). The preliminaries cover only what the model needs.

## Further reading

- The methods sections of textbooks (Jurafsky & Martin's *Speech and Language Processing*, [free online](https://web.stanford.edu/~jurafsky/slp3/)) show the level of explanation to aim for.
