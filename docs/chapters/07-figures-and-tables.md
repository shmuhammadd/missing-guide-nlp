---
sidebar_position: 7
title: "7. Figures and tables that work"
---

Many reviewers read your figures and tables before a single sentence of prose, and form an opinion there. Figure 1 — usually your architecture or your main idea — and Table 1 — usually your headline result — do more persuading than any paragraph. [Methods](./14-methods.md) tells you to spend a full day on Figure 1; [Results](./16-results.md) tells you the main table is the headline. This chapter is how to make figures and tables that are *correct, legible, accessible,* and *ACL-compliant* — and which tools to reach for. The governing test: a reader who looks only at your figures, tables, and their captions should be able to reconstruct the paper.

## What ACL actually requires

These are not suggestions; getting them wrong looks careless to the people deciding your fate. From the [ACL formatting guidelines](https://acl-org.github.io/ACLPUB/formatting.html):

- **Use vector graphics.** "Graphics and photos should, if possible, use vector graphic formats (PDF, EPS), which allow the graphics to scale arbitrarily." A blurry PNG screenshot of a plot is the most common amateur tell — export PDF instead.
- **Keep the font large.** "For any text or numbers in tables and figures, whenever possible, please use the font size of the document text." Six-point axis labels nobody can read are a real source of reviewer irritation.
- **Captions are 10-point and self-contained,** and the ACL guide places them below the figure or table — but follow the year's style files, and make every caption a short paragraph that explains the figure without the body text ([Results](./16-results.md)).
- **It must survive print and zoom.** "Your paper must look good both when printed (A4 size) and when viewed onscreen as PDF." Check both.
- **Grayscale-readable.** "To accommodate people who are color-blind (as well as those printing with black-and-white printers), grayscale readability is strongly encouraged… tables and figures [must] not rely solely on color to convey critical distinctions."

## Color, done right

Roughly eight percent of men have some color-vision deficiency, and plenty of reviewers still print in black and white — so color can never be your *only* signal.

- **Use a colorblind-safe palette.** Good defaults: `viridis`, the Okabe–Ito palette, [ColorBrewer](https://colorbrewer2.org) schemes, or seaborn's `"colorblind"`. Avoid distinguishing categories by red-versus-green alone.
- **Encode redundantly.** Pair color with line style, marker shape, or a direct label, so the figure still works in grayscale. WCAG AA contrast (4.5:1 for normal text) is the accessibility target.
- **Test it.** Run the figure through a simulator (Color Oracle, or the Coblis web tool) and literally print it in grayscale. If two lines merge, redesign before a reviewer does it for you.

## Plots that work

The classic short reference is Rougier et al.'s ["Ten Simple Rules for Better Figures"](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1003833) (PLOS Computational Biology, 2014, open access); the deeper one is Claus Wilke's free [*Fundamentals of Data Visualization*](https://clauswilke.com/dataviz/). The essentials:

- **One figure, one message.** Decide the single point the plot must make, then strip everything that does not serve it. A figure that shows five things shows nothing.
- **Maximize data, minimize ink.** Tufte's principle: no 3-D bars, no gradient fills, no heavy gridlines, no chartjunk. The data should dominate the frame.
- **Label honestly.** Axes with units; a legend or, better, direct labels on the lines; error bars or shaded variance where you have multiple seeds.
- **Do not mislead with scale.** Start bar charts at zero, never truncate an axis to inflate a gap, and use the *same* axis range across plots you want compared.
- **Tools.** `matplotlib` + `seaborn` (Python) or `ggplot2` (R); save with a vector backend (`plt.savefig("fig.pdf", bbox_inches="tight")`) and a colorblind palette. Generate the plot from your results files, not by hand, so it updates when the numbers do.

## Architecture and method diagrams

Figure 1 is often the most reproduced part of a paper, so it earns real time. A reader should be able to explain your method from the diagram alone.

- **Show flow.** Lay it out left-to-right or top-down so the data path is obvious; use arrows for data flow and consistent shapes for consistent kinds of thing.
- **Label the tensors.** Name inputs, outputs, and key dimensions; a reader should see where the shapes change.
- **Cut ruthlessly.** A diagram with forty boxes communicates nothing. Show the idea; push the exhaustive detail to the text or an appendix figure.
- **Tools.** `TikZ`/`PGF` is the publication standard (native LaTeX, vector, beautiful, steep learning curve); [draw.io / diagrams.net](https://www.drawio.com) and Excalidraw are fast and free and export PDF; Inkscape and Graphviz suit specific needs; Keynote or PowerPoint are fine *if* you export to vector PDF, not a screenshot. Whatever you draw in, export vector.

## Tables that work

A good results table is dense, scannable, and honest. The single highest-leverage fix in LaTeX is the [`booktabs`](https://ctan.org/pkg/booktabs) package.

- **No vertical rules.** Use `booktabs`' `\toprule`, `\midrule`, `\bottomrule` and *no* vertical lines and *no* double rules — they are visual clutter that the eye has to fight through.
- **Bold the best per column,** and if the difference is not significant, bold both rather than implying a winner that the statistics do not support ([Experimental Setup](./15-experimental-setup.md)).
- **Show variance and align numbers.** Report `78.4 ± 0.6`, keep significant figures consistent down a column, put units in the header, and align on the decimal point (the `siunitx` `S` column does this automatically).
- **Right-align numbers, left-align text,** group related rows, and let whitespace — not lines — do the separating.
- **Don't dump the giant table in the body.** A 40-column monster belongs in the appendix; the main text gets the rows that carry your claims.
- **Tools.** `booktabs` + `siunitx` for the styling; generate the table body from code (`pandas` `df.to_latex()` or `df.style`, or a small script) so the numbers in the paper can never drift from the numbers you computed.

## Accessibility is now expected

\*ACL venues ask for accessible papers, and reviewers increasingly notice. Beyond the colorblind-safe, redundant-encoding rules above, the [ACL accessibility guidance](https://acl2020.org/blog/accessibility-for-camera-ready/) asks for **alt text on every visual** — figures, tables, charts, and diagrams alike. Write alt text that conveys the *salient finding* ("Accuracy rises with model size on all three languages, fastest for Hausa"), not a flat description ("a line chart"), and do not just repeat the caption. This is part of the work now, not optional polish.

## Tools at a glance

| Job | Reach for |
|---|---|
| Statistical plots | matplotlib + seaborn, ggplot2, plotly |
| Colorblind-safe color | viridis, Okabe–Ito, ColorBrewer, seaborn `colorblind` |
| Architecture diagrams | TikZ/PGF, draw.io, Excalidraw, Inkscape, Graphviz |
| LaTeX tables | booktabs, siunitx, tabularray, pandas `to_latex` |
| Checking color / grayscale | Color Oracle, Coblis, print it in B&W |

## A short workflow

- **Draft the key figure and table early** — deciding what Figure 1 and Table 1 must show forces clarity about your actual claim.
- **Generate from data,** never hand-draw numbers, so everything updates when results change.
- **Export vector, embed fonts,** and check the figure at 100% and zoomed in.
- **Run the grayscale and colorblind check,** then write the alt text.
- **Read each caption alone.** If it does not stand without the body text, it is not finished.

## Common mistakes

- **Raster screenshots.** A blurry PNG of a plot or a table. Export vector PDF.
- **Tiny fonts.** Axis labels and table numbers smaller than the body text.
- **Color as the only signal,** or a red-green palette. Encode redundantly; use a safe palette.
- **Chartjunk and misleading axes.** 3-D bars, truncated y-axes, mismatched scales across compared plots.
- **Vertical rules and double lines** in tables. Use `booktabs`.
- **Label-only captions,** and figures or tables the prose never refers to.
- **No alt text.** Now an expected part of an accessible submission.

## Further reading

- Rougier, Droettboom, and Bourne, ["Ten Simple Rules for Better Figures"](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1003833) (PLOS Computational Biology, 2014). Short, free, and the best starting point.
- Claus O. Wilke, [*Fundamentals of Data Visualization*](https://clauswilke.com/dataviz/) (O'Reilly, 2019; free online). The deep reference, strong on color and accessibility.
- Edward Tufte, *The Visual Display of Quantitative Information*. The classic on data-ink and removing chartjunk.
- The [ACL formatting guidelines](https://acl-org.github.io/ACLPUB/formatting.html) and [accessibility guidance](https://acl2020.org/blog/accessibility-for-camera-ready/) — the rules your camera-ready is held to ([Chapter 26](./26-after-acceptance.md)).
- [ColorBrewer](https://colorbrewer2.org) for ready-made, print- and colorblind-safe palettes.
