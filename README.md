<div align="center">

# The Missing NLP Paper Guide

**The class nobody teaches you: how to write your first paper for ACL, EMNLP, NAACL, EACL, and the rest of the \*ACL family.**

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](LICENSE)
[![Last Reviewed](https://img.shields.io/badge/last%20reviewed-2026-blue)](CHANGELOG.md)
[![Built with Docusaurus](https://img.shields.io/badge/built%20with-Docusaurus-3578e5.svg)](https://docusaurus.io/)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](CONTRIBUTING.md)

[**Read the guide →**](docs/chapters/) &nbsp;·&nbsp; [**One-page checklist**](docs/checklists/submission-checklist.md) &nbsp;·&nbsp; [**Best papers list**](docs/chapters/30-best-papers.md) &nbsp;·&nbsp; [**Contribute**](CONTRIBUTING.md)

</div>

---

## Why this exists

Your PhD program does not teach you how to write a paper. Your advisor assumes you picked it up by osmosis. Your peers pretend they already know how. The official ACL author guidelines cover the *format* of a paper: margins, citation style, page limits. They say nothing about the *craft*. They will not show you how to frame a contribution, or what a related work section needs beyond a list of citations. Nor will they explain why your introduction feels flat, or why a reviewer called your results section "hard to follow" when the numbers are right there.

This guide is that missing class. MIT's [Missing Semester of Your CS Education](https://missing.csail.mit.edu/) taught students the command line, version control, and debugging tools that nobody had bothered to teach them. We try to do the same for \*ACL paper writing, as the methods seminar your program never ran.

## Who this is for

- **First-time \*ACL authors**: PhD students, MS students, or industry researchers with a result and a deadline.
- **Advisors** who want a single artifact to hand new students instead of explaining the same things every cycle.
- **Reading groups** running a "how to write papers" session.

## Chapters

1. [The NLP Publication Landscape](docs/chapters/01-publication-landscape.md)
2. [Understanding the Field](docs/chapters/02-understanding-the-field.md)
3. [What Kind of Paper Are You Writing?](docs/chapters/03-paper-types.md)
4. [What Counts as a Contribution?](docs/chapters/04-contribution.md)
5. [Decoding the Jargon](docs/chapters/05-jargon.md)
6. [Before You Write](docs/chapters/06-framing.md)
7. [Working With Advisors and Co-authors](docs/chapters/07-collaboration.md)
8. [Writing Clearly](docs/chapters/08-writing-clearly.md)
9. [Figures and Tables That Work](docs/chapters/09-figures-and-tables.md)
10. [The Structure of an \*ACL Paper](docs/chapters/10-paper-structure.md)
11. [The Title](docs/chapters/11-title.md)
12. [The Abstract](docs/chapters/12-abstract.md)
13. [The Introduction](docs/chapters/13-introduction.md)
14. [Related Work](docs/chapters/14-related-work.md)
15. [Background / Preliminaries](docs/chapters/15-background.md)
16. [Dataset Construction](docs/chapters/16-dataset-construction.md)
17. [Methods](docs/chapters/17-methods.md)
18. [Experimental Setup](docs/chapters/18-experimental-setup.md)
19. [Results](docs/chapters/19-results.md)
20. [Analysis and Discussion](docs/chapters/20-analysis.md)
21. [Conclusion](docs/chapters/21-conclusion.md)
22. [Limitations (Required)](docs/chapters/22-limitations.md)
23. [Ethical Considerations](docs/chapters/23-ethics.md)
24. [Using AI Tools Responsibly](docs/chapters/24-ai-assistance.md)
25. [References & Appendices](docs/chapters/25-references-and-appendices.md)
26. [The Rebuttal](docs/chapters/26-rebuttal.md)
27. [How to Review Well](docs/chapters/27-reviewing.md)
28. [After Rejection](docs/chapters/28-after-rejection.md)
29. [After Acceptance](docs/chapters/29-after-acceptance.md)
30. [Best Papers Worth Reading](docs/chapters/30-best-papers.md)
31. [A Final Checklist](docs/chapters/31-checklist.md)

## Run the site locally

This repo is a [Docusaurus 3](https://docusaurus.io/) site. The chapters are plain markdown, and you can read them directly on GitHub. The deployed site adds search, dark mode, and a proper sidebar.

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
│   ├── chapters/              # The 31 chapters
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

See [CONTRIBUTING.md](CONTRIBUTING.md) and [STYLE.md](STYLE.md). We most want:

- More paper examples. They must meet our quality bar, so read the [examples database](docs/examples/) first.
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

This guide builds on [Vered Shwartz's "Tips for Writing NLP Papers"](https://medium.com/@vered1986/tips-for-writing-nlp-papers-9c729a2f9e1f), [Simon Peyton Jones's "How to Write a Great Research Paper"](https://www.microsoft.com/en-us/research/academic-program/write-great-research-paper/), [Jennifer Widom's "Tips for Writing Technical Papers"](https://cs.stanford.edu/people/widom/paper-writing.html), the [ACLPUB documentation](https://acl-org.github.io/ACLPUB/), and the example set by MIT's [Missing Semester](https://missing.csail.mit.edu/).

If you used this guide to write a paper that got into \*ACL, [open an issue and tell us](https://github.com/shmuhammadd/missing-guide-nlp/issues/new).
