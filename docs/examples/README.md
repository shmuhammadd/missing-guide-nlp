---
title: Paper Examples
slug: /examples/
---

# Examples

This directory holds the database of paper examples cited across the guide.

## Files

| File | Purpose |
|---|---|
| [`examples.yaml`](https://github.com/shmuhammadd/missing-guide-nlp/blob/main/docs/examples/examples.yaml) | Structured database: one entry per cited paper, indexed by chapter. The single source of truth. |
| [`papers-to-read.bib`](https://github.com/shmuhammadd/missing-guide-nlp/blob/main/docs/examples/papers-to-read.bib) | BibTeX file of every paper cited in [Chapter 30](../chapters/30-best-papers.md). Drop into Overleaf. |

## Why YAML?

The chapter files cite examples in prose, and the same paper often appears in two or three chapters. With the canonical entry in `examples.yaml`:

1. **One place to update** if a paper's link changes or it gets a Best Paper Award we should note.
2. **Tools can render it.** The Docusaurus site can generate example cards from this file, and future translators can keep titles synced.
3. **Contributions are simpler.** Adding a paper means editing one YAML block instead of hunting for the right paragraph in prose.

## How to add a paper

Read [CONTRIBUTING.md](https://github.com/shmuhammadd/missing-guide-nlp/blob/main/CONTRIBUTING.md) first. Summary:

1. Add the entry to `examples.yaml` in the correct chapter section, alphabetized within the chapter.
2. Verify the anthology_url resolves.
3. Add the BibTeX to `papers-to-read.bib` if the paper belongs in Chapter 30.
4. Reference the example in the relevant chapter markdown file. The cap is five examples per section. If you add one, propose which one to swap out.

## Schema

```yaml
- chapter: <slug>            # title, abstract, introduction, methods, results, ...
  paper: <full title>
  authors: <comma-separated, "et al." for >3>
  venue: <short venue + year>
  anthology_url: <URL or null>
  exemplifies: <one sentence — what this paper does well>
  notes: <optional longer commentary>
```
