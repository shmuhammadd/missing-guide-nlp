---
sidebar_position: 3
title: "3. The Title"
---

The title is the only part of your paper most of the field will ever read. It is the line that appears in the proceedings, in citations, in a reviewer's bidding list, in a search result, in a tweet, on a slide someone else made about your work. You will write it in ninety seconds and live with it for ten years. Treat it like the load-bearing wall it is.

## What a good \*ACL title does

- **It names the contribution, not just the topic.** "Neural Machine Translation" is a topic; a thousand papers share it. *Attention Is All You Need* is a claim only one paper can make.
- **It is searchable.** Reviewers, future students, and retrieval systems look for keywords. If the paper is about retrieval-augmented generation for biomedical QA, those words — or their close cousins — should be in the title. A title no one can find is a title no one cites.
- **It is honest.** Do not promise *Universal* or *General-Purpose* if you tested one language and two datasets. Reviewers see through it in the abstract, and the claim ages badly once someone runs the obvious counterexample.
- **It survives being read aloud.** Titles get spoken — in talks, in introductions, in hallway recommendations. If you stumble reading yours, rewrite it.
- **It sets the reader's expectations and then the paper meets them.** The title is a promise. Paragraph 4 of your introduction (the results preview — see [the Introduction chapter](./05-introduction.md)) is where you keep it.

## The dominant patterns

A handful of shapes account for most \*ACL titles. None is mandatory; each fits a kind of paper.

| Pattern | Example | When it fits |
|---|---|---|
| Declarative claim | *Attention Is All You Need* | You genuinely have one clean claim the paper delivers |
| Name + colon expansion | *BERT: Pre-training of Deep Bidirectional Transformers…* | A reusable system, model, or dataset others will cite by name |
| Resource + scope | *SQuAD: 100,000+ Questions for Machine Comprehension of Text* | A dataset or benchmark; the scope numbers are the selling point |
| Descriptive | *Neural Machine Translation by Jointly Learning to Align and Translate* | The work is foundational and the plain description is already interesting |
| Question | *Why are Sensitive Functions Hard for Transformers?* | The paper is genuinely investigative and ends with an answer |
| Hook + payoff | *With Little Power Comes Great Responsibility* | The hook is memorable **and** the second half says the real topic |
| Imperative | *Don't Stop Pretraining* | A finding sharp enough to phrase as advice |

The phrasebook below fills each of these in with real, highly-cited titles so you can study the shape.

## Phrasebook: titles by pattern

The subsections below collect real \*ACL (and a few field-defining adjacent) titles, grouped by surface shape. Each entry names *what the title does* — the move — so you can copy the move, not the words.

**These are patterns to internalise, not templates to fill in.** Unlike the abstract and introduction phrasebooks ([Chapter 4](./04-abstract.md), [Chapter 5](./05-introduction.md)), there is no plagiarism worry here: a title *is* its citation, so quoting one in full is just naming the paper. The risk runs the other way. These shapes are so well-worn that copying one mindlessly produces a cliché — the ten-thousandth *X: A Novel Framework for Y*. Read a subsection, name the move ("name-and-expand," "hook that still tells the topic," "the honest question"), then write your own. A paper can fit several patterns; each title is filed under the shape it shows most clearly.

### Name + colon expansion (the workhorse)

The single most common shape in modern \*ACL: a short, pronounceable name, a colon, then a precise expansion. Use it when you are shipping a system, model, or method others will cite by name. The name has to be sayable and the expansion has to be honest about scope.

<details>
<summary>**Show 13 examples**</summary>

- *[BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding](https://aclanthology.org/N19-1423/)* — Acronym plus exact scope. The colon structure became a genre convention partly because this paper made it look so clean. (Devlin et al., NAACL 2019)
- *[GloVe: Global Vectors for Word Representation](https://aclanthology.org/D14-1162/)* — Short name, precise expansion, and the acronym actually decodes ("Global Vectors"). ACL Test-of-Time, 2024. (Pennington, Socher & Manning, EMNLP 2014)
- *[ELECTRA: Pre-training Text Encoders as Discriminators Rather Than Generators](https://arxiv.org/abs/2003.10555)* — The expansion states the one idea that distinguishes it ("discriminators rather than generators"). (Clark et al., ICLR 2020)
- *[ALBERT: A Lite BERT for Self-supervised Learning of Language Representations](https://arxiv.org/abs/1909.11942)* — The expansion does double duty: "A Lite BERT" is both what the acronym stands for and the whole pitch. (Lan et al., ICLR 2020)
- *[RoBERTa: A Robustly Optimized BERT Pretraining Approach](https://arxiv.org/abs/1907.11692)* — Names itself as a recipe ("approach"), not a new architecture — honest about what changed. (Liu et al., 2019)
- *[BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation, Translation, and Comprehension](https://aclanthology.org/2020.acl-main.703/)* — The expansion is long but every clause earns its place: objective, architecture, and the three task families it covers. (Lewis et al., ACL 2020)
- *[Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks](https://aclanthology.org/D19-1410/)* — The name tells you the lineage (BERT) and the twist (sentence-level) before the colon. (Reimers & Gurevych, EMNLP 2019)
- *[BLEURT: Learning Robust Metrics for Text Generation](https://aclanthology.org/2020.acl-main.704/)* — A pronounceable name riffing on BLEU, then the expansion says what it is (a learned metric). (Sellam, Das & Parikh, ACL 2020)
- *[ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629)* — The name encodes the contribution itself ("Re"asoning + "Act"ing); the expansion spells it out. (Yao et al., ICLR 2023)
- *[AutoPrompt: Eliciting Knowledge from Language Models with Automatically Generated Prompts](https://aclanthology.org/2020.emnlp-main.346/)* — The name says the method in one word; the expansion says what it is for. (Shin et al., EMNLP 2020)
- *[Stanza: A Python NLP Toolkit for Many Human Languages](https://aclanthology.org/2020.acl-demos.14/)* — A toolkit paper: the expansion names the language (Python), the type (toolkit), and the scope (many languages). (Qi et al., ACL 2020)
- *[mT5: A Massively Multilingual Pre-trained Text-to-Text Transformer](https://aclanthology.org/2021.naacl-main.41/)* — The "m" prefix signals the one new thing (multilingual) over a known base (T5). (Xue et al., NAACL 2021)
- *[AlephBERT: Language Model Pre-training and Evaluation from Sub-Word to Sentence Level](https://aclanthology.org/2022.acl-long.4/)* — The name localises the model (Hebrew, via *aleph*) and the expansion states the granularity range. (Seker et al., ACL 2022)

</details>

### Resource and benchmark titles (name + scope)

A close cousin of the pattern above, specialised for datasets, benchmarks, and shared-task resources. Here the expansion sells the *scope*: how many examples, how many languages, what task. Put the number in the title — it is the most reused fact about the resource.

<details>
<summary>**Show 7 examples**</summary>

- *[SQuAD: 100,000+ Questions for Machine Comprehension of Text](https://aclanthology.org/D16-1264/)* — The size ("100,000+") is in the title because for a dataset the scale *is* the contribution. (Rajpurkar et al., EMNLP 2016)
- *[GLUE: A Multi-Task Benchmark and Analysis Platform for Natural Language Understanding](https://aclanthology.org/W18-5446/)* — Names the two deliverables — a benchmark and a platform — not just "a benchmark." (Wang et al., EMNLP Workshop 2018)
- *[SuperGLUE: A Stickier Benchmark for General-Purpose Language Understanding Systems](https://arxiv.org/abs/1905.00537)* — The name signals "harder successor to GLUE"; "stickier" is a wink that still communicates "harder." (Wang et al., NeurIPS 2019)
- *[RACE: Large-scale ReAding Comprehension Dataset From Examinations](https://aclanthology.org/D17-1082/)* — The acronym is forced ("ReAding Comprehension Examinations") but the expansion names the unusual source (exams), which is the point. (Lai et al., EMNLP 2017)
- *[XTREME: A Massively Multilingual Multi-task Benchmark for Evaluating Cross-lingual Generalization](https://arxiv.org/abs/2003.11080)* — Every adjective is load-bearing: massively multilingual, multi-task, cross-lingual. (Hu et al., ICML 2020)
- *[TyDi QA: A Benchmark for Information-Seeking Question Answering in Typologically Diverse Languages](https://aclanthology.org/2020.tacl-1.30/)* — "Typologically Diverse" is the contribution; the title refuses to hide it behind "multilingual." (Clark et al., TACL 2020)
- *[The Flores-101 Evaluation Benchmark for Low-Resource and Multilingual Machine Translation](https://aclanthology.org/2022.tacl-1.30/)* — The number (101 languages) is baked into the name and the scope is stated plainly. (Goyal et al., TACL 2022)

</details>

### The declarative claim

A title that is a full sentence asserting something. High-risk, high-reward: it is memorable and quotable, but the paper has to actually earn the claim or reviewers will use the title against you. Reserve it for one clean, defensible result.

<details>
<summary>**Show 5 examples**</summary>

- *Attention Is All You Need* (Vaswani et al., NeurIPS 2017) — The canonical assertive title. It is an overstatement the paper very nearly justifies, which is exactly why it works — and why imitating its bravado without the results behind it backfires.
- *[Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165)* — A flat declarative that doubles as the paper's thesis; no colon, no hedge. (Brown et al., NeurIPS 2020)
- *[BERT Rediscovers the Classical NLP Pipeline](https://aclanthology.org/P19-1452/)* — The verb ("Rediscovers") tells you the finding before you open the PDF. (Tenney, Das & Pavlick, ACL 2019)
- *[Making Pre-trained Language Models Better Few-shot Learners](https://aclanthology.org/2021.acl-long.295/)* — A gerund-claim: states what the paper accomplishes rather than what system it ships. (Gao, Fisch & Chen, ACL 2021)
- *[Universal Language Model Fine-tuning for Text Classification](https://aclanthology.org/P18-1031/)* — Names the method (ULMFiT) by its claim; "Universal" is a promise the paper sets out to keep. (Howard & Ruder, ACL 2018)

</details>

### The descriptive workhorse

The plain title that says exactly what was done. Most \*ACL papers are — and should be — here. It is never wrong, always searchable, and the right default when your contribution is solid but not a single quotable claim. The craft is in choosing the *right nouns and verbs*: precise, keyword-rich, no filler.

<details>
<summary>**Show 14 examples**</summary>

- *[Sequence to Sequence Learning with Neural Networks](https://arxiv.org/abs/1409.3215)* — Six words that defined a paradigm; no hook needed when the description itself is new. (Sutskever, Vinyals & Le, NeurIPS 2014)
- *[Neural Machine Translation by Jointly Learning to Align and Translate](https://arxiv.org/abs/1409.0473)* — The "by …-ing" construction states the method ("jointly learning to align") inside the description. (Bahdanau, Cho & Bengio, ICLR 2015)
- *[Neural Machine Translation of Rare Words with Subword Units](https://aclanthology.org/P16-1162/)* — Names the problem (rare words) and the solution (subword units) in one breath. (Sennrich, Haddow & Birch, ACL 2016)
- *[Effective Approaches to Attention-based Neural Machine Translation](https://aclanthology.org/D15-1166/)* — "Effective Approaches" is mildly weak, but the keywords (attention, NMT) make it findable. (Luong, Pham & Manning, EMNLP 2015)
- *[Deep Contextualized Word Representations](https://aclanthology.org/N18-1202/)* — Four words, each a keyword; the contribution (ELMo) became famous despite the title never naming it. (Peters et al., NAACL 2018)
- *[Efficient Estimation of Word Representations in Vector Space](https://arxiv.org/abs/1301.3781)* — The word2vec paper. "Efficient" is the selling point and the title leads with it. (Mikolov et al., ICLR Workshop 2013)
- *[Reading Wikipedia to Answer Open-Domain Questions](https://aclanthology.org/P17-1171/)* — Reads like a one-line description of the system; the infinitive ("to Answer") states the goal. (Chen et al., ACL 2017)
- *[Dense Passage Retrieval for Open-Domain Question Answering](https://aclanthology.org/2020.emnlp-main.550/)* — Method ("Dense Passage Retrieval") plus application ("Open-Domain QA"); nothing wasted. (Karpukhin et al., EMNLP 2020)
- *[Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903)* — Descriptive but with a strong verb ("Elicits") that makes a quiet claim. (Wei et al., NeurIPS 2022)
- *[Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155)* — The InstructGPT paper. Lowercase, almost a methods-section sentence; deliberately undramatic. (Ouyang et al., NeurIPS 2022)
- *[Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](https://arxiv.org/abs/2005.11401)* — Coins the term (RAG) inside a descriptive frame; the scope ("knowledge-intensive") is precise. (Lewis et al., NeurIPS 2020)
- *[Semisupervised Neural Proto-Language Reconstruction](https://aclanthology.org/2024.acl-long.788/)* — Foundational and self-evident: every word is a keyword and a specialist knows the contribution instantly. ACL 2024 Best Paper. (Lu, Xie & Mortensen, ACL 2024)
- *[A Structural Probe for Finding Syntax in Word Representations](https://aclanthology.org/N19-1419/)* — Names the instrument ("structural probe") and what it finds, in order. (Hewitt & Manning, NAACL 2019)
- *[Energy and Policy Considerations for Deep Learning in NLP](https://aclanthology.org/P19-1355/)* — A position-flavoured descriptive title; the unexpected nouns ("Energy," "Policy") signal a paper the field had not seen. (Strubell, Ganesh & McCallum, ACL 2019)

</details>

### The question title

A title phrased as a question. It works only when the paper genuinely investigates and answers it — and when the question is one the reader also wants answered. A question with an obvious answer reads as filler; an unanswered one reads as a blog post.

<details>
<summary>**Show 4 examples**</summary>

- *[Why are Sensitive Functions Hard for Transformers?](https://aclanthology.org/2024.acl-long.800/)* — A real open question the paper answers with theory; the "why" promises a mechanism, not just a benchmark. ACL 2024 Best Paper. (Hahn & Rofin, ACL 2024)
- *[How Multilingual is Multilingual BERT?](https://aclanthology.org/P19-1493/)* — Turns a model everyone was using into an honest empirical question. (Pires, Schlinger & Garrette, ACL 2019)
- *[What Does BERT Look At? An Analysis of BERT's Attention](https://aclanthology.org/W19-4828/)* — Question plus a colon-clause that says, plainly, how the question gets answered. (Clark et al., BlackboxNLP 2019)
- *[Are Emergent Abilities of Large Language Models a Mirage?](https://arxiv.org/abs/2304.15004)* — A question that challenges a popular claim; the loaded word ("Mirage") signals the paper's answer is "largely yes." NeurIPS 2023 Outstanding Paper. (Schaeffer, Miranda & Koyejo, NeurIPS 2023)

</details>

### Hook + payoff (two-part, colon-joined)

A memorable first half, a colon, then the half that says the actual topic. The most-loved and most-abused shape. The rule: **the part after the colon must let a stranger find and understand the paper without the hook.** If you deleted the cute half, the title should still work. If deleting the *informative* half leaves the title meaningless, the hook is doing too much.

<details>
<summary>**Show 8 examples**</summary>

- *[With Little Power Comes Great Responsibility](https://aclanthology.org/2020.emnlp-main.745/)* — Pure wordplay, yet "Power" is the literal topic (statistical power); the joke and the keyword are the same word. (Card et al., EMNLP 2020)
- *[Mission: Impossible Language Models](https://aclanthology.org/2024.acl-long.787/)* — The hook ("Mission: Impossible") and the subject ("impossible language models") fuse into one phrase. ACL 2024 Best Paper. (Kallini et al., ACL 2024)
- *[Get To The Point: Summarization with Pointer-Generator Networks](https://aclanthology.org/P17-1099/)* — The idiom ("get to the point") quietly puns on summarization; the colon-clause names the method exactly. (See, Liu & Manning, ACL 2017)
- *[Lost in the Middle: How Language Models Use Long Contexts](https://aclanthology.org/2024.tacl-1.9/)* — The hook *is* the finding (information in the middle gets lost); the subtitle says the topic in full. (Liu et al., TACL 2024)
- *[Beyond Accuracy: Behavioral Testing of NLP Models with CheckList](https://aclanthology.org/2020.acl-main.442/)* — "Beyond Accuracy" frames the critique; the subtitle delivers the method and the tool's name. ACL 2020 Best Paper. (Ribeiro et al., ACL 2020)
- *[Climbing towards NLU: On Meaning, Form, and Understanding in the Age of Data](https://aclanthology.org/2020.acl-main.463/)* — A position paper: the metaphor ("climbing") sets the stance, the subtitle states the actual subject. (Bender & Koller, ACL 2020)
- *[Right for the Wrong Reasons: Diagnosing Syntactic Heuristics in Natural Language Inference](https://aclanthology.org/P19-1334/)* — The idiom names the failure mode; the subtitle says precisely which failure and where. (McCoy, Pavlick & Linzen, ACL 2019)
- *[It's Not Just Size That Matters: Small Language Models Are Also Few-Shot Learners](https://aclanthology.org/2021.naacl-main.185/)* — A title in conversation with another (*Language Models are Few-Shot Learners*); the hook sets up the rebuttal the subtitle states. (Schick & Schütze, NAACL 2021)

</details>

### The imperative

A title phrased as advice. It only works when the finding is sharp enough to *be* advice — when the paper has earned the right to tell the reader what to do.

<details>
<summary>**Show 3 examples**</summary>

- *[Don't Stop Pretraining: Adapt Language Models to Domains and Tasks](https://aclanthology.org/2020.acl-main.740/)* — The imperative *is* the finding (keep pretraining on in-domain data); the subtitle says how. (Gururangan et al., ACL 2020)
- *[Show Your Work: Improved Reporting of Experimental Results](https://aclanthology.org/D19-1224/)* — A scolding imperative that names a community bad habit; the subtitle makes it a methods contribution. (Dodge et al., EMNLP 2019)
- *[Get To The Point: Summarization with Pointer-Generator Networks](https://aclanthology.org/P17-1099/)* — Also an imperative (see above); it reads as both a pun and an instruction. (See, Liu & Manning, ACL 2017)

</details>

### The "On the …" framing

The "On the …" opening signals a position paper, an analysis, or a survey — a paper *about* a question rather than a system that solves one. It carries a slightly formal, essayistic tone. Use it when the contribution is an argument or a measurement, not an artifact.

<details>
<summary>**Show 3 examples**</summary>

- *On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?* — The "On the Dangers of" framing announces a position paper; the metaphor ("stochastic parrots") became field vocabulary. Not \*ACL (FAccT 2021) but worth studying for how a title can name a concept the field then adopts. (Bender, Gebru, McMillan-Major & Mitchell, FAccT 2021)
- *[On the Cross-lingual Transferability of Monolingual Representations](https://aclanthology.org/2020.acl-main.421/)* — "On the … Transferability of …" frames the paper as an investigation of a property, not a new model. (Artetxe, Ruder & Yogatama, ACL 2020)
- *[Universal Adversarial Triggers for Attacking and Analyzing NLP](https://aclanthology.org/D19-1221/)* — Not literally "On the," but the same essayistic register: the title promises a phenomenon to understand, not a leaderboard to top. (Wallace et al., EMNLP 2019)

</details>

## Common mistakes

- **The kitchen-sink title.** *A Novel Multi-Task Cross-Lingual Contrastive Pre-Training Framework for Low-Resource Question Answering with Knowledge Distillation.* Every modifier you add halves the weight of the others. Pick one or two ideas; cut the rest.
- **The mystery title.** *On the Nature of Things.* Cute, unsearchable, uncitable. No reviewer hunting for your topic will ever land on it.
- **The buzzword title.** Stacking *LLM*, *agentic*, and *novel* in one line signals trying too hard. Reviewers read it as a tell.
- **"Novel."** Delete it. Every paper claims novelty; saying so in the title wastes a word and dares the reviewer to disagree. Let the contribution be novel without announcing it.
- **The over-promise.** *Solving Mathematical Reasoning with Transformers* had better solve it. A title that outruns the results is the first thing a skeptical reviewer quotes back at you.
- **"Towards" as a hedge.** *Towards X* can be honest for genuinely early work, but reviewers often read it as "we did not quite get to X." If you got there, drop the "Towards." If you did not, ask whether the paper is ready.

## Process tip

Write five titles. Show them to two colleagues with no context and ask which paper they would rather read — and what they expect it to contain. The gap between what they expect and what your paper delivers is the gap to fix. Pick the title that closes it, then sleep on it. Titles improve overnight more reliably than almost any other part of the paper.

## Five examples worth studying

1. *Attention Is All You Need* (Vaswani et al., NeurIPS 2017). The declarative claim done at maximum risk — and earned.
2. *[BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding](https://aclanthology.org/N19-1423/)* (Devlin et al., NAACL 2019). The name-and-expand template that the field has copied ever since.
3. *[SQuAD: 100,000+ Questions for Machine Comprehension of Text](https://aclanthology.org/D16-1264/)* (Rajpurkar et al., EMNLP 2016). The resource title that puts its scale in the name.
4. *[Mission: Impossible Language Models](https://aclanthology.org/2024.acl-long.787/)* (Kallini et al., ACL 2024 Best Paper). The hook that pays off in the abstract and the experiments.
5. *[With Little Power Comes Great Responsibility](https://aclanthology.org/2020.emnlp-main.745/)* (Card et al., EMNLP 2020). Playful on the surface, but "power" is the literal topic — the joke and the keyword are one word.

## Further reading

- Steven Pinker, *The Sense of Style*, Chapter 2 — on how a title functions as the reader's first model of your content.
- Mike Ashby, ["How to Write a Paper"](https://www-mech.eng.cam.ac.uk/mmd/ashby-paper-V6.pdf), the section on titles.
- The companion phrasebooks in [Chapter 4 — The Abstract](./04-abstract.md) and [Chapter 5 — The Introduction](./05-introduction.md): a title is the one-line compression of the move sentence those chapters unpack.
