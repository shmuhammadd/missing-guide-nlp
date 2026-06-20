---
sidebar_position: 20
title: "20. Ethical Considerations"
---

Optional but strongly encouraged. Like the Limitations section, it does not count toward the page limit. It sits before the references.

**Ethics, not limitations.** Where [Limitations](./19-limitations.md) asks where your claims break, this section asks *who could be affected, and how.* The two meet at data and bias — a skewed training set both bounds your claims (limitations) and risks downstream harm (ethics) — so split the sentence by its question, not its topic. Almost every paper has something real to say here: even a syntax parser has training-data provenance, and the [Responsible NLP Checklist](https://aclrollingreview.org/cfp) will ask regardless. "Not applicable" is rarely true and reads as not having looked.

## What goes in

- **Data.** Was personal or sensitive data used? How was consent obtained? What are the licenses?
- **Annotators.** If you used human annotators or crowd workers, what were they paid? What demographics? Were they warned about offensive content?
- **Models and biases.** What biases might your model exhibit or amplify? Did you test for any? What are the deployment risks?
- **Dual use.** Could your method be misused (e.g., for surveillance, disinformation, scams)? Acknowledge it honestly.
- **Environmental.** Compute use, especially for very large models.

## Phrasebook: the moves of an ethics section

An ethical considerations section names who could be affected and how — concretely. Like the limitations phrasebook, every entry here is an **adaptable template**, not a quotation; fill each with the specifics of your data, annotators, and model. The cardinal sin is the boilerplate sentence that signals concern without content, so each template forces a specific. Several moves overlap the [Dataset Construction](./13-dataset-construction.md) phrasebook — report the procedure there, the ethical judgement here. Two entries sit in the open under each move; expand **Show more** for the rest.

### Data, consent, and privacy (templates)

- *"Our data contains [personal / sensitive] information about [whom]; we [obtained consent / anonymised / used only public data] and [what you did about residual risk]."* — States what is sensitive and the concrete step taken.
- *"The data is collected under [license / terms]; we redistribute [what] and not [what], to respect [the constraint]."* — Ties the release decision to a named basis.

<details>
<summary>**Show 3 more**</summary>

- *"We removed [PII types] before release; residual risk remains in [where], mitigated by [how]."* — Honest that anonymisation is imperfect, with the mitigation.
- *"Subjects [were / were not] informed their data would be used for research; the implication is [X]."* — Faces the consent question directly rather than skipping it.
- *"The corpus may contain [harmful / private] content; we [filtered / warned / restricted access] accordingly."* — Names the content risk and the handling.

</details>

### Annotators and labor (templates)

- *"Annotators were paid [rate], [at or above] the [local minimum / living] wage in [region]."* — The pay sentence, with the benchmark that makes it judgeable.
- *"Annotators were warned that content could be [offensive / distressing] and could opt out; we provided [support]."* — States the duty-of-care step for harmful content.

<details>
<summary>**Show 3 more**</summary>

- *"Annotators were recruited from [where] and are [demographics relevant to the task]."* — Discloses who produced the labels, which bears on bias.
- *"Annotation was [voluntary / compensated / part of employment]; we obtained [IRB / ethics] approval ([ref])."* — Links labor to ethics approval.
- *"We report annotator demographics in a data statement; they shape what the labels represent."* — Connects labor to representational validity.

</details>

### Model bias and deployment risk (templates)

- *"Our model may [exhibit / amplify] [specific bias]; we [tested for it / did not], finding [result]."* — Names a concrete bias and whether you measured it.
- *"In deployment, [failure mode] could harm [group] by [mechanism]; we recommend [safeguard]."* — A specific harm with a specific mitigation, not a vague gesture.

<details>
<summary>**Show 3 more**</summary>

- *"Performance is worse on [subgroup] ([numbers]); deploying without [safeguard] would [harm]."* — Ties a measured disparity to a deployment consequence.
- *"We evaluate bias along [dimensions]; other dimensions ([list]) are untested and may also matter."* — Honest about the limits of your bias evaluation.
- *"This system is intended for [use]; we explicitly discourage [misuse] and document why."* — Sets an intended-use boundary.

</details>

### Dual use and environmental cost (templates)

- *"This method could be misused for [surveillance / disinformation / scams] by [how]; we weigh this against [the benefit] and [what you did]."* — Acknowledges dual use honestly and states your judgement.
- *"Training consumed approximately [GPU-hours / energy / CO2e]; we report this so the cost is visible, and [what you did to reduce it]."* — The environmental sentence, with a number.

<details>
<summary>**Show 2 more**</summary>

- *"We release [weights / data] despite [risk] because [reason]; access is [open / gated] to balance benefit and harm."* — Owns a release decision as an ethical trade-off.
- *"We do not release [component] because [the misuse it would enable] outweighs [the research benefit]."* — The withhold decision, justified.

</details>

## Common mistakes

- **Boilerplate.** "We followed standard ethical guidelines." That tells the reader nothing. Be specific.
- **Pretending it does not apply.** Almost every NLP paper has *some* ethical dimension. Even a syntax-parser paper has training-data provenance.
- **Performative ethics.** Long, vague paragraphs that signal concern without substantive engagement. Be concrete.

## Five examples

1. *Stanford Alpaca* (Taori et al., 2023). Discusses misuse risk of instruction-tuned models honestly.
2. *Whose Opinions Do Language Models Reflect?* (Santurkar et al., ICML 2023). Ethics tied to the methodology.
3. *The BigScience ROOTS Corpus* (Laurençon et al., NeurIPS 2022). Substantial treatment of data ethics for a large corpus.
4. *On the Dangers of Stochastic Parrots* (Bender et al., FAccT 2021) — the paper is itself an ethical analysis; useful as a model for depth of engagement.
5. *Dolma: an Open Corpus for Language Model Pretraining* (Soldaini et al., ACL 2024). Discusses tradeoffs in data filtering and licensing.

## Further reading

- ACL Code of Ethics: [https://www.aclweb.org/portal/content/acl-code-ethics](https://www.aclweb.org/portal/content/acl-code-ethics).
- Bender & Friedman, ["Data Statements for NLP"](https://aclanthology.org/Q18-1041/), TACL 2018. The original "what should a dataset paper disclose" reference.
- The companion phrasebook in [Chapter 13 — Dataset Construction](./13-dataset-construction.md) and the neighbouring [Chapter 19 — Limitations](./19-limitations.md): report the data and annotation procedure in the first, the validity boundary in the second, and the question of harm here.
