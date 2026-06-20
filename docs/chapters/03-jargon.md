---
sidebar_position: 3
title: "3. Decoding the jargon"
---

Every field talks to itself in shorthand. \*ACL is no exception: reviews, hallway conversations, and threads on social media are thick with terms a newcomer is assumed to already know — *desk reject*, *Reviewer 2*, *salami-slicing*, *SOTA*, *stochastic parrots*. Nobody defines them for you, and asking can feel like admitting you do not belong.

This chapter is the glossary nobody hands you. It collects the jargon, in-jokes, and named failure modes of research culture, weighted toward NLP and machine learning. For each term we give a short definition, where it came from when that is documented, and how people actually use it — because tone carries as much meaning as the words do. We flag the difference between terms with a real, citable origin and terms that are pure folklore; knowing which is which is itself part of fitting in.

One warning the rest of the guide also makes: many of these terms are *critiques*. Aim them at patterns and at your own work, not at named people. The author whose paper you wave away as "cargo-cult science" may be reviewing your next submission.

## The publishing game

The incentive structure of an academic career has its own vocabulary, most of it faintly cynical — because the incentives are.

**Publish or perish.** The pressure to produce a steady stream of publications to get hired, funded, and promoted. The phrase is older than it feels: it appears in academic writing by 1928 and was popularized by Logan Wilson's 1942 book *The Academic Man* ([overview](https://en.wikipedia.org/wiki/Publish_or_perish)). Used wearily, usually to explain why a field rewards quantity over depth.

**Least publishable unit (LPU), and salami-slicing.** The LPU is the smallest sliver of a research project that can still get past peer review on its own; *salami-slicing* is the practice of carving one study into several such slivers to inflate a publication count. The terms trace to William Broad's 1981 *Science* article "The Publishing Game: Getting More for Less" ([reference](https://en.wikipedia.org/wiki/Least_publishable_unit)). Always pejorative — reviewers who suspect salami-slicing ask "where is the rest of this paper?"

**The h-index.** A single number summarizing a researcher's output: you have an h-index of *h* if *h* of your papers each have at least *h* citations. Proposed by physicist Jorge Hirsch in 2005 ([PNAS](https://www.pnas.org/doi/10.1073/pnas.0507655102)). Loved because it is simple, distrusted because it is gameable — through self-citation, salami-slicing, and citation trading — and biased by career length and field size.

**Citation cartel.** A group of authors, journals, or venues that cite each other heavily to pump everyone's metrics, beyond what the scholarship warrants ([overview](https://en.wikipedia.org/wiki/Citation_cartel)). The lighter, individual version is *self-citation inflation*: across one large study, roughly a third of citations in a paper's first three years are self-citations, concentrated among the least-cited work. A documented accusation, not a casual one.

**Gift (or honorary) authorship.** Listing someone as an author who did not substantively contribute — often a senior figure added by default, sometimes a junior researcher added as a favor. It is widespread and well documented; in extreme cases authorship has literally been bought and sold (Chapman et al., 2019, ["Games academics play and their consequences"](https://royalsocietypublishing.org/doi/10.1098/rspb.2019.2047)). The mirror problem, leaving off someone who did contribute, is *ghost authorship*.

**Impact factor.** The average citations per article for a journal over a window — routinely misused as a proxy for the quality of any single paper in it. The misuse is the point of the critique: citations concentrate so heavily in a few articles that the average says little about a given one (a much-cited illustration: 89% of *Nature*'s 2004 impact factor came from a quarter of its papers). \*ACL is conference-driven, so this matters less here than in journal fields — but the gaming instinct is the same.

**Goodhart's law.** "When a measure becomes a target, it ceases to be a good measure." Charles Goodhart stated the original (about monetary policy) in 1975; the crisp modern phrasing is Marilyn Strathern's, 1997 ([overview](https://en.wikipedia.org/wiki/Goodhart%27s_law)). The umbrella principle behind most of this section — and behind benchmark-chasing below. Once a number is what you optimize, it stops measuring what you cared about.

## Inside the review machine

The \*ACL review process has a precisely documented machinery and a layer of folklore around it. Get the machinery right; treat the folklore as folklore.

**ARR (ACL Rolling Review), and "commitment."** A centralized reviewing system that produces reviews and meta-reviews *not* tied to any one venue; authors then "commit" a reviewed paper to a specific conference (ACL, EMNLP, NAACL), which makes its own accept/reject call ([process](https://aclrollingreview.org/reviewing)). The structural fact to internalize: an ARR review is not an acceptance. The two are decoupled.

**Soundness, Excitement, Overall Assessment — and Confidence.** The ARR review form scores a paper on *Soundness* (is it technically valid?), *Excitement* (is it interesting? — explicitly orthogonal to soundness), and an *Overall Assessment*, each on a 1–5 scale, plus a separate *Confidence* score for how well the reviewer knows the area ([reviewer guidelines](https://aclrollingreview.org/reviewerguidelines)). A paper can be sound but unexciting, or exciting but shaky — the form is built to say so.

**Area chair (AC), senior area chair (SAC), and the meta-review.** The AC oversees a cluster of papers, manages reviewers, runs the author–reviewer discussion, and writes the *meta-review* — a summary that names the strongest pros and cons and explicitly judges whether the pros outweigh them. The SAC calibrates meta-reviews across an area ([AC guidelines](https://aclrollingreview.org/acguidelines)). Both *recommend*; program chairs and the committing venue *decide*.

**Desk reject.** A rejection made by an editor or chair before peer review even starts — usually for breaking a hard rule: over the page limit, missing the Limitations section, anonymity violation, formatting, or being out of scope. Avoidable, and entirely on you. The fastest way to waste a submission cycle.

**Rebuttal / author response.** The window in which authors reply to reviews — correcting misreadings, reporting a quick extra experiment, conceding fair points. Tone wins or loses rebuttals: address the substance, do not lecture the reviewer. ("Happy to address in the rebuttal" is the standard phrase for a concern you plan to answer there.)

**"Not novel."** The most common — and laziest — rejection rationale, asserting the contribution has been done before. ARR institutionally constrains it: a reviewer claiming a method is not novel **must cite the prior work**, and reproductions, re-implementations, and analyses are explicitly in scope as contributions ([reviewer guidelines](https://aclrollingreview.org/reviewerguidelines)). If you get a "not novel" with no citation, that is a point for your rebuttal.

**"Championing" a paper.** Informal shorthand for an AC or reviewer who argues hard to rescue a strong paper from negative scores. Useful to know as folklore, but it is *not* a formal ARR role — there is no documented "champion reviewer" status, despite how often the word gets used in committee talk.

**Reviewer 2.** The folk archetype of the hostile, dismissive referee — the one who wants a different paper than the one you wrote, demands their own work be cited, and rejects on vibes. Pure folklore: there is no origin event, just a shared grievance, immortalized in the 28,000-member "Reviewer 2 Must Be Stopped" group and a genre of academic humor ([scholarly treatment](https://doi.org/10.1515/ip-2020-5001)). Use it to commiserate, never as a description in an actual review.

## Ways to fool yourself

A cluster of named failure modes — most coined outside NLP, all alive inside it. Each names a way a result can look real without being real. Richard Feynman's framing covers them all: the easiest person to fool is yourself.

**p-hacking.** Trying analyses, subsets, or metrics until something clears the significance bar, then reporting only that. The term was coined in 2014 by the researchers behind the *Data Colada* blog (Simonsohn, Nelson, and Simmons) ([overview](https://en.wikipedia.org/wiki/Data_dredging)). In ML the equivalent is tweaking splits, seeds, or hyperparameters until a baseline loses — which is why [Chapter 15](./15-experimental-setup.md) insists on val/test separation and seeds.

**The garden of forking paths.** Coined by Andrew Gelman and Eric Loken in a 2013 working paper (its title nods to a Borges story) for a subtler problem than p-hacking: even a *single* analysis can be invalid if the choices that produced it were data-dependent, because many other reasonable choices were available ([paper](https://sites.stat.columbia.edu/gelman/research/unpublished/forking.pdf)). Crucially, the authors distance it from "p-hacking" — forking paths needs no conscious fishing, just ordinary judgement applied after seeing the data. The terms are not synonyms.

**HARKing.** *Hypothesizing After the Results are Known* — presenting a post-hoc finding as though it were your prediction all along. Coined by Norbert Kerr in 1998 and applied to machine learning in ["The HARK Side of Deep Learning"](https://arxiv.org/abs/1904.07633) (2019). The fix is the honesty [Chapter 14](./14-methods.md) asks for: say what you set out to test, and what you found by accident.

**Cargo-cult science.** Work that mimics every outward form of science — the equations, the tables, the significance tests — while missing the essential thing, which Feynman named as a "leaning over backwards" honesty about everything that might prove you wrong (Feynman, 1974 Caltech commencement address, ["Cargo Cult Science"](https://calteches.library.caltech.edu/3043/)). A sharp epithet, and a contested one — some argue it slides too easily into attacking people's character — so deploy it on practices, not persons.

**Clever Hans / shortcut learning.** Clever Hans was a 1900s horse that seemed to do arithmetic but was really reading its trainer's body language. In ML the analogy names a model that scores well by exploiting a dataset artifact rather than learning the task — popularized by Lapuschkin et al., 2019, ["Unmasking Clever Hans predictors"](https://www.nature.com/articles/s41467-019-08987-4). A model "pulls a Clever Hans" when a strong number hides a spurious shortcut; finding these is the job of [Chapter 17](./17-analysis.md).

**Graduate student descent.** A joke term — playing on *gradient descent* — for hyperparameter tuning done by hand, by a grad student running configs until something works. Folklore, but it names a real reproducibility hazard: numbers found this way are easy to HARK and hard to repeat.

**Ablation.** Removing one component of a system to measure its contribution — the term borrowed from experimental biology, where you lesion a part to learn its function. Not a failure mode but the standard cure for one: it is how you show *which* of your design choices actually earns its place ([Chapter 17](./17-analysis.md)).

**The replication (or reproducibility) crisis.** The broad finding, across many empirical fields, that a large share of published results do not hold up when re-run. In NLP it shows up as numbers that cannot be reproduced from the paper — which is why the field added reproducibility checklists and why [Chapter 22](./22-references-and-appendices.md) treats release and documentation as part of the contribution.

## The lore of NLP and machine learning

Terms born in our own subfield, mostly in the last decade, mostly on the internet.

**"X is all you need."** A snowclone — a fill-in-the-blank cliché — spawned by the 2017 Transformer paper's title ["Attention Is All You Need"](https://arxiv.org/abs/1706.03762) (itself echoing the Beatles). The template now signals, half-ironically, "this one idea is the whole story." When you are tempted to title a paper this way: don't. It was fresh once.

**The bitter lesson.** Richard Sutton's 2019 essay arguing that, over the history of AI, general methods that scale with computation (search and learning) have repeatedly beaten approaches that hand-build human knowledge in — and that this keeps surprising researchers, hence "bitter" ([overview](https://en.wikipedia.org/wiki/Bitter_lesson)). Invoked in every debate about whether cleverness or compute will win the next round.

**"Scale is all you need."** The maximalist reading of the bitter lesson: that bigger models and more data, not new ideas, drive progress. Said approvingly by scaling optimists and witheringly by skeptics — the same five words carry both. A live argument, not a settled fact.

**Stochastic parrots.** A model that stitches together plausible language from statistical patterns in its training data "without any reference to meaning." From Bender, Gebru, McMillan-Major, and Mitchell's 2021 paper ["On the Dangers of Stochastic Parrots"](https://dl.acm.org/doi/10.1145/3442188.3445922), a landmark critique of large language models. Used to puncture overclaims about machine "understanding" — and, by detractors, as a strawman. Know the paper before you use the phrase.

**SOTA, and SOTA-chasing.** *SOTA* = state of the art, the current best published number on a benchmark. *SOTA-chasing* is treating a higher number as the whole point of a paper. ARR explicitly rejects this as a review standard — "SOTA results are neither necessary nor sufficient for a scientific contribution" ([reviewer guidelines](https://aclrollingreview.org/reviewerguidelines)) — so a paper can contribute through efficiency, analysis, or fairness without topping a leaderboard. Goodhart's law, wearing a leaderboard.

**Benchmark contamination.** When test data leaks into a model's training set — increasingly likely when models are pretrained on scraped web text that includes the benchmarks themselves — making high scores meaningless. The contemporary reason resource papers now argue explicitly that their test set is clean ([Chapter 13](./13-dataset-construction.md)).

**GPU-poor vs GPU-rich.** Informal labels for the compute gap between groups with vast accelerator fleets and everyone else (students, most academics, most of the Global South). The terms entered wide use through 2023 industry commentary ([context](https://www.semianalysis.com/p/google-we-have-no-moat-and-neither)). More than a joke: the divide shapes which research questions are even askable on a given budget.

**"Vibes-based evaluation."** Folklore, and a self-aware confession: judging a model by eyeballing a few outputs rather than measuring anything. Sometimes an honest admission that no good metric exists yet, more often a warning sign. If your evaluation is vibes, [Chapter 15](./15-experimental-setup.md) is for you.

**Concurrent work.** Research released so close to yours that neither could have cited the other — a status that excuses the missing citation, under \*ACL norms, for work posted within roughly the last three months. Claim it honestly and you lose nothing; claim someone else's earlier work as concurrent and a reviewer will notice ([Chapter 11](./11-related-work.md)).

## Further reading

- The peer-review machinery, from the source: the ACL Rolling Review [reviewer](https://aclrollingreview.org/reviewerguidelines) and [area-chair](https://aclrollingreview.org/acguidelines) guidelines. Read them before you review, and before you rebut.
- Feynman, ["Cargo Cult Science"](https://calteches.library.caltech.edu/3043/) (1974). Still the best short statement of what scientific integrity actually demands.
- Chapman et al., ["Games academics play and their consequences"](https://royalsocietypublishing.org/doi/10.1098/rspb.2019.2047) (2019). A sober catalogue of the incentive pathologies in the first section above.
