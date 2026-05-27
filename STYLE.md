# Style Guide

The voice of the guide is opinionated, terse, and evidence-based. This document codifies the rules so contributors can match it.

## Voice

- **Senior researcher giving advice to a first-year PhD student.** Direct, sometimes blunt, never cruel.
- **First person plural by default** ("we"). First person singular ("I") only in clearly-marked editorial asides where a personal anecdote is genuinely useful.
- **No hedging stack-ups.** "May possibly potentially" → "may." If the evidence is weak, say so once; do not pad.
- **No corporate-AI tics.** No "as an AI" disclaimers obviously. Also no "in conclusion," no "it is important to note that," no "delve into," no "navigate the complexities of," no "in today's rapidly evolving landscape."
- **No "exciting", "revolutionary", "novel paradigm", "cutting-edge", "state-of-the-art" as adjectives in the guide itself.** When you quote a paper, fine.

## Diction

| Avoid | Use |
|---|---|
| utilize | use |
| methodology | method |
| in order to | to |
| due to the fact that | because |
| a large number of | many |
| at this point in time | now |
| with regard to | about / on |
| facilitate | help / let / enable |
| paradigm | approach (or just delete) |
| robust (as a vague compliment) | name what it's robust to |
| novel | (delete; let the contribution speak) |

## Sentence shape

- **Under 25 words where possible.** Long sentences are usually two ideas wearing the same coat.
- **Active voice.** "We compute X." not "X is computed."
- **Avoid nominalization.** "We decided" beats "we made a decision."
- **One idea per paragraph.** If a paragraph has two ideas, split it.

## Examples

- Real papers only. Cite the ACL Anthology version if it exists.
- Each example must have a *reason* attached — what specifically does this paper exemplify? "It's a good paper" is not a reason.
- Five examples per chapter section, no more. Cap is real; if you add one, swap one out.

## Citations

- ACL Anthology link in the markdown text, not just a footnote.
- Format: `*[Paper Title](https://aclanthology.org/...)* (Authors, Venue Year)`.
- Use et al. for more than two authors.
- Do not include arXiv IDs if a peer-reviewed version exists.

## Lists vs prose

- Prose by default. Lists only when items are genuinely parallel and discrete.
- A list of three bullets that are each one sentence is usually a paragraph in disguise.
- A list of single-word bullets is almost always wrong.

## Formatting

- Headings: sentence case, not Title Case. "What goes in" not "What Goes In."
- Bold for **terms you're defining** the first time, not for emphasis. Avoid emphasizing whole sentences.
- Italics for *paper titles* and the occasional emphasized word.
- No emoji. No section dividers made of `===`. No ASCII art.
- Markdown tables for genuine tabular data only.

## Tone in critique

When the guide says something is wrong (e.g. "do not write a kitchen-sink title"), do not soften it into nothing. The guide's value is partly in being willing to say "this is a mistake." Soft hedges turn it back into mush.

But: critique *patterns of writing*, not authors. "This kind of abstract is bad" is in scope. "Paper X's abstract is bad" is not.

## When you're stuck

Read three pages of an existing chapter. Match the rhythm. Then write.
