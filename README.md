<div align="center">

# The Missing Guide for *ACL First Authors

**The class nobody teaches you: how to actually write your first paper for ACL, EMNLP, NAACL, EACL, and the rest of the \*ACL family.**

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](LICENSE)
[![Last Reviewed](https://img.shields.io/badge/last%20reviewed-2026-blue)](CHANGELOG.md)
[![Built with Docusaurus](https://img.shields.io/badge/built%20with-Docusaurus-3578e5.svg)](https://docusaurus.io/)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](CONTRIBUTING.md)

[**Read the guide →**](docs/chapters/) &nbsp;·&nbsp; [**One-page checklist**](docs/checklists/submission-checklist.md) &nbsp;·&nbsp; [**Best papers list**](docs/chapters/15-best-papers.md) &nbsp;·&nbsp; [**Contribute**](CONTRIBUTING.md)

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

1. [Before You Write: Framing the Contribution](docs/chapters/01-framing.md)
2. [The Title](docs/chapters/02-title.md)
3. [The Abstract](docs/chapters/03-abstract.md)
4. [The Introduction](docs/chapters/04-introduction.md)
5. [Related Work](docs/chapters/05-related-work.md)
6. [Background / Preliminaries](docs/chapters/06-background.md)
7. [Methods](docs/chapters/07-methods.md)
8. [Experimental Setup](docs/chapters/08-experimental-setup.md)
9. [Results](docs/chapters/09-results.md)
10. [Analysis and Discussion](docs/chapters/10-analysis.md)
11. [Conclusion](docs/chapters/11-conclusion.md)
12. [Limitations (Required)](docs/chapters/12-limitations.md)
13. [Ethical Considerations](docs/chapters/13-ethics.md)
14. [References, Appendices, Reproducibility](docs/chapters/14-references-and-appendices.md)
15. [Best Papers Worth Reading](docs/chapters/15-best-papers.md)
16. [A Final Checklist](docs/chapters/16-checklist.md)

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
│   ├── chapters/              # The 16 chapters
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
  title  = {The Missing Guide for *ACL First Authors},
  author = {{Contributors to The Missing Guide}},
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
