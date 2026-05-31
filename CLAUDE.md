# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A [Docusaurus 3](https://docusaurus.io/) documentation site, **The Missing NLP Paper Guide** — a prose guide to writing first papers for \*ACL venues. There is almost no application code: the substance is markdown content under `docs/`. Most "development" here is content editing, and content edits are governed by [STYLE.md](STYLE.md) (binding) and [CONTRIBUTING.md](CONTRIBUTING.md).

## Commands

```bash
npm install        # Node 18+ required
npm start          # dev server with hot reload at http://localhost:3000
npm run build      # static build to ./build (this is what CI runs)
npm run serve      # preview the production build
npm run clear      # clear the Docusaurus cache (.docusaurus/) when the build behaves oddly
```

There is no test suite and no linter. The only automated check is a link checker (lychee) that runs on PRs and weekly — see [.github/workflows/link-check.yml](.github/workflows/link-check.yml). Before opening a PR, verify a clean `npm run build` and that links resolve, since broken links are the main failure mode.

## Architecture

- **`routeBasePath: '/'`** — docs are the site root, so there is no `/docs/` URL prefix. The homepage is [docs/index.md](docs/index.md), not a React page in `src/`.
- **Numeric filename prefixes are stripped from doc IDs.** `docs/chapters/02-framing.md` has doc ID `chapters/framing` and URL `/chapters/framing`. The `NN-` prefix controls file ordering only.
- **The sidebar is hand-maintained** in [sidebars.js](sidebars.js) using those clean (prefix-stripped) doc IDs. Adding, renaming, or renumbering a chapter file requires a matching edit here — the sidebar is not auto-generated, so the two can silently drift. Chapter ordering inside a file is also set via `sidebar_position` in frontmatter; keep it consistent with the filename prefix and the sidebars.js order.
- Site config lives in [docusaurus.config.js](docusaurus.config.js): navbar, footer, GitHub Pages target (`shmuhammadd.github.io/missing-guide-nlp/`), `onBrokenLinks: 'warn'` (intended to be promoted to `'throw'` once stable).
- `src/css/custom.css` is the only theme code. `static/img/` holds the logo and favicon.
- Deployment is automatic: pushing to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds and publishes to GitHub Pages.

## The examples database

Paper examples are not free-form. They live in two parallel files that are the single source of truth:

- [docs/examples/examples.yaml](docs/examples/examples.yaml) — structured entries keyed by chapter slug, sorted alphabetically by chapter then by year. Each entry needs `chapter`, `paper`, `authors`, `venue`, `anthology_url`, and `exemplifies` (a one-sentence reason).
- [docs/examples/papers-to-read.bib](docs/examples/papers-to-read.bib) — the matching BibTeX.

Hard rule from CONTRIBUTING.md and STYLE.md: **a chapter section caps at five examples.** To add one you must remove one. Every example must be a real, human-verified paper (prefer ACL Anthology over arXiv), cited with its reason — never an AI-generated or unverified citation. When adding an example: update `examples.yaml`, add the BibTeX, and reference it in the chapter.

## Content/voice rules (read before editing any `docs/` prose)

[STYLE.md](STYLE.md) is enforced, not aspirational. The essentials:

- First person plural ("we"); "I" only in clearly-marked editorial asides.
- Active voice, sentences under ~25 words, one idea per paragraph, prose over bullet lists.
- Banned diction (utilize, methodology, novel, paradigm, "state-of-the-art" as an adjective, hedge stacks, AI tics like "delve into" / "it is important to note"). See the diction table in STYLE.md.
- Sentence-case headings, no emoji, no ASCII dividers, tables only for genuine tabular data.
- `\*ACL` (asterisk + italics) refers to the conference family; bare "ACL" is the specific conference/association.
- Critique patterns of writing, never named authors.
