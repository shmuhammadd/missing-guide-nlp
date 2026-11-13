<div align="center">

# The Missing NLP Paper Guide

**The class nobody teaches you: how to actually write your first paper for ACL, EMNLP, NAACL, EACL, and the rest of the \*ACL family.**

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](LICENSE)
[![Last Reviewed](https://img.shields.io/badge/last%20reviewed-2026-blue)](CHANGELOG.md)
[![Built with Docusaurus](https://img.shields.io/badge/built%20with-Docusaurus-3578e5.svg)](https://docusaurus.io/)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](CONTRIBUTING.md)

[**Read the guide →**](docs/chapters/) &nbsp;·&nbsp; [**One-page checklist**](docs/checklists/submission-checklist.md) &nbsp;·&nbsp; [**Best papers list**](docs/chapters/27-best-papers.md) &nbsp;·&nbsp; [**Contribute**](CONTRIBUTING.md)

</div>

---

## Why this exists

There is a class your PhD program does not teach. Your advisor assumes you picked it up by osmosis. Your peers pretend they already know it. The official ACL author guidelines tell you the *format* of a paper — margins, citation style, page limits — but not the *craft*. How do you actually frame a contribution? What goes in a related work section that is not just a list of citations? Why does your introduction feel flat? Why did the reviewer say your results section was "hard to follow" when the numbers are right there?

This is the missing class. Inspired in spirit by MIT's [Missing Semester of Your CS Education](https://missing.csail.mit.edu/) — the course that finally taught students the command line, version control, and debugging tools nobody had bothered to teach them — this guide tries to do the same for \*ACL paper writing. It is the missing methods seminar.

## Who this is for

- **First-time \*ACL authors** — PhD students, MS students, or industry researchers with a result and a deadline.
- **Advisors** who want a single artifact to hand new students instead of explaining the same things every cycle.
- **Reading groups** running a "how to write papers" session.

## Chapters

1. [The NLP Publication Landscape](docs/chapters/01-publication-landscape.md)
2. [What Kind of Paper Are You Writing?](docs/chapters/02-paper-types.md)
3. [Decoding the Jargon](docs/chapters/03-jargon.md)
4. [Before You Write](docs/chapters/04-framing.md)
5. [Working With Advisors and Co-authors](docs/chapters/05-collaboration.md)
6. [Writing Clearly](docs/chapters/06-writing-clearly.md)
7. [Figures and Tables That Work](docs/chapters/07-figures-and-tables.md)
8. [The Title](docs/chapters/08-title.md)
9. [The Abstract](docs/chapters/09-abstract.md)
10. [The Introduction](docs/chapters/10-introduction.md)
11. [Related Work](docs/chapters/11-related-work.md)
12. [Background / Preliminaries](docs/chapters/12-background.md)
13. [Dataset Construction](docs/chapters/13-dataset-construction.md)
14. [Methods](docs/chapters/14-methods.md)
15. [Experimental Setup](docs/chapters/15-experimental-setup.md)
16. [Results](docs/chapters/16-results.md)
17. [Analysis and Discussion](docs/chapters/17-analysis.md)
18. [Conclusion](docs/chapters/18-conclusion.md)
19. [Limitations (Required)](docs/chapters/19-limitations.md)
20. [Ethical Considerations](docs/chapters/20-ethics.md)
21. [Using AI Tools Responsibly](docs/chapters/21-ai-assistance.md)
22. [References & Appendices](docs/chapters/22-references-and-appendices.md)
23. [The Rebuttal](docs/chapters/23-rebuttal.md)
24. [How to Review Well](docs/chapters/24-reviewing.md)
25. [After Rejection](docs/chapters/25-after-rejection.md)
26. [After Acceptance](docs/chapters/26-after-acceptance.md)
27. [Best Papers Worth Reading](docs/chapters/27-best-papers.md)
28. [A Final Checklist](docs/chapters/28-checklist.md)

## Run the site locally

This repo is a [Docusaurus 3](https://docusaurus.io/) site. The chapters are plain markdown — you can read them directly on GitHub — but the deployed site has search, dark mode, and a proper sidebar.

```bash
# Install dependencies (Node 18+ required)
npm install

# Start the dev server (hot-reloads on save)
npm start

# Build the static site to ./build
npm run build

# Preview the built site
npm run serve
```

The dev server runs at `http://localhost:3000`.

In VS Code: `Cmd+Shift+P` → **Tasks: Run Task** → **Docusaurus: start (dev server)**.

## Project layout

```
.
├── docs/                      # All content (chapters, checklists, examples)
│   ├── index.md               # Homepage
│   ├── chapters/              # The 28 chapters
│   ├── checklists/            # Printable checklists
│   └── examples/              # YAML database + BibTeX
├── src/css/custom.css         # Theme overrides
├── static/img/                # Logo, favicon
├── docusaurus.config.js       # Site config
├── sidebars.js                # Sidebar navigation
├── package.json
└── README.md                  # This file (GitHub landing page)
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) and [STYLE.md](STYLE.md). We particularly want:

- More paper examples (subject to our quality bar — read [examples database](docs/examples/) first).
- Translations under `i18n/<locale>/`.
- Corrections to broken links, outdated rules, or hallucinated citations.

## Citation

```bibtex
@misc{missing_guide_acl_2026,
  title  = {The Missing NLP Paper Guide},
  author = {{Contributors to The Missing NLP Paper Guide}},
  year   = {2026},
  url    = {https://github.com/shmuhammadd/missing-guide-nlp},
  note   = {Version 2026.1}
}
```

## License

[CC BY 4.0](LICENSE). Use it, fork it, translate it, hand it to your students. Attribution appreciated.

## Acknowledgments

This guide stands on the shoulders of [Vered Shwartz's "Tips for Writing NLP Papers"](https://medium.com/@vered1986/tips-for-writing-nlp-papers-9c729a2f9e1f), [Simon Peyton Jones's "How to Write a Great Research Paper"](https://www.microsoft.com/en-us/research/academic-program/write-great-research-paper/), [Jennifer Widom's "Tips for Writing Technical Papers"](https://cs.stanford.edu/people/widom/paper-writing.html), the [ACLPUB documentation](https://acl-org.github.io/ACLPUB/), and the example set by MIT's [Missing Semester](https://missing.csail.mit.edu/).

If you used this guide to write a paper that got into \*ACL, [open an issue and tell us](https://github.com/shmuhammadd/missing-guide-nlp/issues/new). That is the kind of feedback that keeps a guide like this alive.
