---
sidebar_position: 22
title: "22. Limitations (Required)"
---

Since 2022, \*ACL venues **require** a Limitations section after the conclusion. It does not count toward the page limit. New authors often write this section in a panic in the last hour. Do not.

Reviewers are trained to look for what you missed. If you name those gaps first, you set the terms. A strong Limitations section *helps* you.

**Limitations and ethics.** This section answers one question: *where might our claims not hold?* Societal risk belongs in [Ethical Considerations](./23-ethics.md). The two overlap. Biased data both bounds your claims and raises a harm concern, so put the validity angle here and the harm angle there. Do not repeat every caveat you raised in [Analysis](./20-analysis.md). Keep the few that carry weight.

## What goes in

- **Scope limits.** Languages, domains, model sizes, task types you did not test on.
- **Methodological limits.** Assumptions your method relies on; conditions under which it would not work.
- **Data limits.** Bias, coverage, license, size, annotation quality.
- **Computational limits.** The method needs significant compute, which limits reproduction or deployment.
- **Generalization limits.** Where you suspect (with reason) the result might not transfer.

## The three approaches and why two are wrong

Lorelei Lingard, in ["The Art of Limitations"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4456466/), names three ways writers approach the section:

- **The Confessional.** Lists everything that could possibly be wrong. Looks weak. Wrong.
- **The Dismissal.** "Limitations are minor and do not affect the conclusions." Looks defensive. Wrong.
- **The Reflection.** Names limitations, explains why they exist, and where appropriate, signals how future work could address them. Correct.

Aim for The Reflection.

## Phrasebook: the moves of a limitations section

A limitations section makes a few honest moves. Name a boundary, say why it is there, and where you can, point at what would resolve it. These sentences are specific to each paper. Unlike the earlier phrasebooks, every entry here is an **adaptable template** with `[bracketed]` slots, and none is a quotation. Fill each slot with a boundary your own work has. Aim for Lingard's *Reflection*, never the *Confessional* or the *Dismissal*. Two entries sit in the open under each move; expand **Show more** for the rest.

### Scope limits (templates)

The most common limitation, and the easiest to read, is what you did not test on.

- *"We evaluate only on [languages / domains / model sizes]; whether the result holds for [the untested set] is open."* Names the boundary and refuses to assume past it.
- *"Our experiments use [N] [datasets / tasks]; this is enough to show [the claim] but not [the broader claim]."* Separates what the evidence supports from what it does not.

<details>
<summary>**Show 3 more**</summary>

- *"All data is [English / high-resource / single-domain]; we expect [specific differences] in [other settings] but did not test them."* Honest about the dominant-language default instead of hiding it.
- *"We test at [model scale]; behaviour at [larger / smaller] scale may differ, because [reason]."* Bounds a claim to the scale studied.
- *"Our evaluation is [automatic / in-domain]; [human / out-of-domain] evaluation could change the picture."* Names the kind of evidence missing, not just its quantity.

</details>

### Methodological and assumption limits (templates)

Name the assumptions a reader would not guess. Every method rests on some.

- *"Our method assumes [assumption]; where it does not hold — [example] — performance will degrade."* States the assumption and the concrete case that breaks it.
- *"We rely on [resource / tool / signal]; results are bounded by its [quality / coverage / availability]."* Ties your ceiling to a dependency the reader can assess.

<details>
<summary>**Show 3 more**</summary>

- *"The approach requires [requirement]; settings without it ([example]) fall outside our claims."* Marks the precondition for the method to apply.
- *"We did not compare against [class of method] because [reason]; that comparison is left open."* Owns a missing comparison rather than letting a reviewer find it.
- *"Our metric, [metric], captures [aspect] but not [aspect]; a method that games [the second] could score well unfairly."* Names what the evaluation cannot see.

</details>

### Data and generalization limits (templates)

- *"The dataset reflects [its source / period / population]; findings may not transfer to [other]."* Connects a data property to a limit on generalization.
- *"Annotation was performed by [who], which may introduce [a specific bias]; we did not measure its effect."* Honest about an unquantified source of bias. (Report the construction in [Dataset Construction](./16-dataset-construction.md); state the validity consequence here.)

<details>
<summary>**Show 3 more**</summary>

- *"Class [X] is under-represented ([P]%), so our numbers on it are [high-variance / unreliable]."* Flags where the data is too thin to trust.
- *"We suspect, with reason, that [result] would not hold under [shift], because [mechanism]."* A reasoned generalization limit, the kind the hostile-reviewer prompt surfaces.
- *"Compute constraints limited us to [N runs / model size]; larger-scale verification remains future work."* States a resource limit plainly, without apology.

</details>

### Framing the limitation as reflection (templates)

Give each limitation a cause and, where honest, a path forward. The framing matters as much as the content.

- *"[Limitation] arises because [reason]; [the experiment / resource] would address it, which we leave to future work."* The full Reflection move: boundary, cause, path forward.
- *"We flag [limitation] not because it undermines [the core claim], but because it bounds [the specific claim]."* Distinguishes a real boundary from a fatal flaw, without dismissing it.

<details>
<summary>**Show 3 more**</summary>

- *"A hostile reviewer would run [experiment] to test [weakness]; we report what we know about it here."* Turns the chapter's own prompt into a sentence.
- *"We could have [mitigation], but [the cost]; we chose [the trade-off] and note its consequence."* Owns a deliberate trade-off as a limitation.
- *"This is a genuine limitation, not a minor one; we do not claim [the thing it prevents]."* The anti-Dismissal sentence. Names the limitation as real.

</details>

## Common mistakes

- **Generic limitations.** "Our method requires data." That describes every method. Name a specific limit.
- **Limitations that admit fatal flaws.** "Our experiments may have been subject to test-set leakage." If they were, you cannot publish. Resolve it; do not list it.
- **Naming limitations only to dismiss them.** "We only test on English, but English is widely spoken, so this is fine." Reviewers see through this. Test on more languages or own the scope.
- **Treating it as boilerplate.** Reviewers read this section now, so give it the care you give the rest.

## A useful prompt

When stuck, ask: "If I were a hostile reviewer, what one experiment would I run to break this paper?" Write *that* in the limitations section, framed honestly. It names a real limitation and shows reviewers you thought hard about your work.

## Five examples of substantive Limitations sections

1. *Mission: Impossible Language Models* (Kallini et al., ACL 2024 Best Paper). Names exactly what the experimental design cannot tell us.
2. *Holistic Evaluation of Language Models (HELM)* (Liang et al., 2023). Extensive, honest limitations for a project of that scope.
3. *OLMo: Accelerating the Science of Language Models* (Groeneveld et al., ACL 2024 best theme paper). The limitations on data and resources are stated clearly.
4. *Reading Subtext: Evaluating LLMs on Short Story Summarization with Writers* (Subbiah et al., TACL 2024 / ACL 2025 Best Paper). Names limitations of human evaluation honestly.
5. Browse the [ACL 2023 awards page](https://2023.aclweb.org/program/best_papers/). Many outstanding papers do this section well.

## Further reading

- ACLPUB formatting page, the Limitations subsection: [https://acl-org.github.io/ACLPUB/formatting.html](https://acl-org.github.io/ACLPUB/formatting.html).
- Lingard, ["The Art of Limitations"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4456466/).
- The neighbouring [Chapter 20 (Analysis)](./20-analysis.md) and [Chapter 23 (Ethical Considerations)](./23-ethics.md). Caveats first raised in analysis come together here. Where a limitation also risks harm, that angle goes to ethics.
