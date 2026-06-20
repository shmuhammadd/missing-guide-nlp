---
sidebar_position: 19
title: "19. Limitations (Required)"
---

Since 2022, \*ACL venues **require** a Limitations section after the conclusion. It does not count toward the page limit. New authors often write this section in a panic in the last hour. Do not.

A strong Limitations section *helps* you. Reviewers are trained to look for what you missed. If you name those things yourself, you have controlled the narrative.

**Limitations, not ethics, and not a confession.** This section answers one question: *where might our claims not hold?* It is not the place for societal risk — that is [Ethical Considerations](./20-ethics.md) — though the two overlap (biased data both bounds your claims and raises a harm concern; put the validity angle here and the harm angle there). Nor is it a re-run of every caveat you already raised in [Analysis](./17-analysis.md); consolidate those into the load-bearing few. The section is required at \*ACL venues and does not count against the page limit, so there is no excuse to rush it.

## What goes in

- **Scope limits.** Languages, domains, model sizes, task types you did not test on.
- **Methodological limits.** Assumptions your method relies on; conditions under which it would not work.
- **Data limits.** Bias, coverage, license, size, annotation quality.
- **Computational limits.** Method requires significant compute, which limits reproducibility or deployment.
- **Generalization limits.** Where you suspect (with reason) the result might not transfer.

## The three approaches and why two are wrong

Lorelei Lingard, in ["The Art of Limitations"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4456466/), identifies three writer approaches:

- **The Confessional.** Lists everything that could possibly be wrong. Looks weak. Wrong.
- **The Dismissal.** "Limitations are minor and do not affect the conclusions." Looks defensive. Wrong.
- **The Reflection.** Names limitations, explains why they exist, and where appropriate, signals how future work could address them. Correct.

Aim for The Reflection.

## Phrasebook: the moves of a limitations section

A limitations section is built from a few honest moves: name a boundary, say why it is there, and — where you can — point at what would resolve it. These are connective, paper-specific sentences, so unlike the earlier phrasebooks every entry here is an **adaptable template** with `[bracketed]` slots, not a quotation; fill each with the specific boundary your work actually has. The goal throughout is Lingard's *Reflection*, never the *Confessional* or the *Dismissal*. Two entries sit in the open under each move; expand **Show more** for the rest.

### Scope limits (templates)

The most common and most legible limitation: what you did not test on.

- *"We evaluate only on [languages / domains / model sizes]; whether the result holds for [the untested set] is open."* — Names the boundary and refuses to assume past it.
- *"Our experiments use [N] [datasets / tasks]; this is enough to show [the claim] but not [the broader claim]."* — Separates what the evidence supports from what it does not.

<details>
<summary>**Show 3 more**</summary>

- *"All data is [English / high-resource / single-domain]; we expect [specific differences] in [other settings] but did not test them."* — Honest about the dominant-language default instead of hiding it.
- *"We test at [model scale]; behaviour at [larger / smaller] scale may differ, because [reason]."* — Bounds a claim to the scale actually studied.
- *"Our evaluation is [automatic / in-domain]; [human / out-of-domain] evaluation could change the picture."* — Names the kind of evidence missing, not just its quantity.

</details>

### Methodological and assumption limits (templates)

Every method rests on assumptions. Name the ones a reader would not guess.

- *"Our method assumes [assumption]; where it does not hold — [example] — performance will degrade."* — States the assumption and the concrete case that breaks it.
- *"We rely on [resource / tool / signal]; results are bounded by its [quality / coverage / availability]."* — Ties your ceiling to a dependency the reader can assess.

<details>
<summary>**Show 3 more**</summary>

- *"The approach requires [requirement]; settings without it ([example]) fall outside our claims."* — Marks the precondition for the method to apply.
- *"We did not compare against [class of method] because [reason]; that comparison is left open."* — Owns a missing comparison rather than letting a reviewer find it.
- *"Our metric, [metric], captures [aspect] but not [aspect]; a method that games [the second] could score well unfairly."* — Names what the evaluation cannot see.

</details>

### Data and generalization limits (templates)

- *"The dataset reflects [its source / period / population]; findings may not transfer to [other]."* — Connects a data property to a limit on generalization.
- *"Annotation was performed by [who], which may introduce [a specific bias]; we did not measure its effect."* — Honest about an unquantified source of bias. (Report the construction in [Dataset Construction](./13-dataset-construction.md); state the validity consequence here.)

<details>
<summary>**Show 3 more**</summary>

- *"Class [X] is under-represented ([P]%), so our numbers on it are [high-variance / unreliable]."* — Flags where the data is too thin to trust.
- *"We suspect, with reason, that [result] would not hold under [shift], because [mechanism]."* — A reasoned generalization limit, the kind the hostile-reviewer prompt surfaces.
- *"Compute constraints limited us to [N runs / model size]; larger-scale verification remains future work."* — States a resource limit plainly, without apology.

</details>

### Framing the limitation — reflection, not confession (templates)

How you say it matters as much as what you say. Give each limitation a cause and, where honest, a path forward.

- *"[Limitation] arises because [reason]; [the experiment / resource] would address it, which we leave to future work."* — The full Reflection move: boundary, cause, path forward.
- *"We flag [limitation] not because it undermines [the core claim], but because it bounds [the specific claim]."* — Distinguishes a real boundary from a fatal flaw, without dismissing it.

<details>
<summary>**Show 3 more**</summary>

- *"A hostile reviewer would run [experiment] to test [weakness]; we report what we know about it here."* — Turns the chapter's own prompt into a sentence.
- *"We could have [mitigation], but [the cost]; we chose [the trade-off] and note its consequence."* — Owns a deliberate trade-off as a limitation.
- *"This is a genuine limitation, not a minor one; we do not claim [the thing it prevents]."* — The anti-Dismissal sentence — names the limitation as real.

</details>

## Common mistakes

- **Generic limitations.** "Our method requires data." That is not a limitation; that is what methods are. Be specific.
- **Limitations that admit fatal flaws.** "Our experiments may have been subject to test-set leakage." If they were, you cannot publish. Resolve it; do not list it.
- **Naming limitations only to dismiss them.** "We only test on English, but English is widely spoken, so this is fine." Reviewers see through this. Either test on more languages or own the scope honestly.
- **Treating it as boilerplate.** Reviewers read this section now. Write it like you mean it.

## A useful prompt

When stuck, ask: "If I were a hostile reviewer, what one experiment would I run to break this paper?" Write *that* in the limitations section, framed honestly. You have just acknowledged a real limitation, and you have signaled to reviewers that you thought hard about your work.

## Five examples of substantive Limitations sections

1. *Mission: Impossible Language Models* (Kallini et al., ACL 2024 Best Paper). Names exactly what the experimental design cannot tell us.
2. *Holistic Evaluation of Language Models (HELM)* (Liang et al., 2023). Limitations are extensive and honest, given the scope.
3. *OLMo: Accelerating the Science of Language Models* (Groeneveld et al., ACL 2024 best theme paper). The limitations on data and resources are stated clearly.
4. *Reading Subtext: Evaluating LLMs on Short Story Summarization with Writers* (Subbiah et al., TACL 2024 / ACL 2025 Best Paper). Names limitations of human evaluation honestly.
5. Browse the [ACL 2023 awards page](https://2023.aclweb.org/program/best_papers/) — many outstanding papers do this section especially well.

## Further reading

- ACLPUB formatting page, the Limitations subsection: [https://acl-org.github.io/ACLPUB/formatting.html](https://acl-org.github.io/ACLPUB/formatting.html).
- Lingard, ["The Art of Limitations"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4456466/).
- The neighbouring [Chapter 17 — Analysis](./17-analysis.md) and [Chapter 20 — Ethical Considerations](./20-ethics.md): a caveat first raised in analysis is consolidated here, and where a limitation also risks harm, that angle goes to ethics.
