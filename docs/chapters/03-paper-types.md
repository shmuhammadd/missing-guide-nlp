---
sidebar_position: 3
title: "3. What kind of paper are you writing?"
---

Before you pick a title or open Overleaf, decide what *kind* of paper this is. NLP has many kinds: long and short, resource and survey, position and demo, reproduction and shared-task. Each has its own length limit, reviewing criteria, and idea of what counts as a contribution. The wrong frame is a quiet and common way to fail. A survey written as an experiments paper draws reviewers hunting for experiments that were never the point. A single crisp result padded into a long paper draws "thin contribution." Match your contribution to its form before you write a word.

\*ACL venues want more than "we beat the state of the art." The ACL 2025 call welcomes papers that "contribute negative findings, survey an area, announce the creation of a new resource, argue a position, report novel linguistic insights … and reproduce, or fail to reproduce, previous results" ([ACL 2025 main call](https://2025.aclweb.org/calls/main_conference_papers/)). Your contribution need not be a new model.

## Long or short?

The main conference takes two forms, and they differ in *scope* as well as page count. Under the [ARR call](https://aclrollingreview.org/cfp), a **long paper** gets "up to eight (8) pages of content" and a **short paper** "up to four (4) pages." Both get unlimited references, unlimited space after the conclusion for the required Limitations section (and optional Ethics), and appendices that do not count toward the limit. (Camera-ready versions get one extra content page. Exact numbers drift by venue and year, so read the current call.)

The line that trips up beginners is **"a short paper is not a shortened long paper."** A short paper "should have a small, focused contribution that can be made in a few pages": one clean result, a focused analysis, a negative finding, or a compact resource. If your idea needs four experiments to convince, it is a long paper. If it is a single self-contained point, do not inflate it, because a tight short paper beats a padded long one.

## Findings: the main conference's safety net

A submission to a \*ACL conference usually opts you into **Findings** as well: "papers submitted … but not selected for the main conference will … automatically be considered for publication in the Findings of the Association for Computational Linguistics" ([ACL 2025 main call](https://2025.aclweb.org/calls/main_conference_papers/)). A Findings paper is a citable, Anthology-indexed publication. It does not get a main-session presentation slot.

In the terms of the [ARR review form](./05-jargon.md), Findings is roughly the home of work that scores well on *soundness* but lower on *excitement*. Such work is solid and correct but not judged a headline. Treat a Findings offer as a result; for a first paper it is a good outcome.

## Choosing by your contribution

Start from what you claim, and let the claim pick the type.

- **The empirical research paper.** A new method, model, or finding, backed by experiments. The default, and the shape most of this guide assumes: Methods ([Chapter 17](./17-methods.md)), Experimental Setup, Results, Analysis.
- **Resource and data papers.** The dataset, benchmark, or corpus *is* the contribution. Reviewers judge it on different criteria, covered in [Dataset Construction](./16-dataset-construction.md): provenance, annotation, agreement, and leak-free splits. Homes include the main conference, Findings, dedicated data tracks, and venues like LREC.
- **Survey papers.** A map of a subfield: what has been tried, how the pieces relate, where the open problems are. Hard to do well, because it needs command of the area. It must make an *argument about structure*, which a pile of summaries does not. ACL invites surveys; longer treatments often go to the journals *Computational Linguistics* or *TACL*.
- **Position and theme-track papers.** An argued stance, such as "the field should rethink X", built from evidence and reasoning instead of experiments. Each year ACL runs a **theme track** that invites these on a chosen theme, with a Thematic Paper Award.
- **Negative-results and reproduction papers.** Reporting what did not work, or whether a published result holds up, is a contribution the calls invite by name. These are often short papers. The [Insights workshop](https://aclanthology.org/venues/insights/) exists for negative results, and reproducibility tracks take the rest.
- **System demonstration papers.** A working system reviewers can try. The demo track allows "up to 6 pages" with a small appendix ([ACL 2025 demo call](https://2025.aclweb.org/calls/system_demonstration/)). The bar is a useful, functioning artifact and a convincing live demo; methodological novelty matters less.
- **Industry-track papers.** Applied or deployed work: real-world constraints, scale, and the lessons of putting NLP into production. Practitioners do most of the reviewing, and they weigh impact and deployment over novelty.
- **Shared-task / system-description papers.** You entered a shared task (SemEval, WMT, CoNLL), and you describe your system and where it placed. The novelty bar is lower; the contribution is the participation and the honest analysis of what worked. These appear in the task's own proceedings.
- **Student Research Workshop (SRW) papers.** A first venue built for students, with mentorship and room for work-in-progress and thesis proposals. A good place to start.
- **Workshop papers.** Focused, community-sized venues, often less competitive and friendlier to early or in-progress work. Some are archival and some are not. Check, because you can later extend a non-archival workshop paper into a conference submission.
- **Journal papers (*TACL*, *Computational Linguistics*).** Longer, revision-based, and presented at conferences once accepted. The right home for mature, thorough work that needs the space and can survive a real revision cycle.

## A quick map

| Paper type | Typical length | The contribution is… | Where it goes |
|---|---|---|---|
| Long | 8 pages | A full method or finding, several experiments | Main conference, Findings |
| Short | 4 pages | One focused, complete point | Main conference, Findings |
| Resource / data | Long or short | A dataset, benchmark, or corpus | Main, Findings, LREC, data tracks |
| Survey | Long / journal | A structured map of a subfield | Main conference, *CL*, *TACL* |
| Position / theme | Long or short | An argued stance | Theme track |
| Negative / reproduction | Often short | What failed, or whether it replicates | Main, Insights, reproducibility tracks |
| Demonstration | ~6 pages | A working system to try | Demo track |
| Industry | Varies | Deployed, applied work | Industry track |
| Shared task | Short-ish | A system entered in a task | Task proceedings (SemEval, WMT…) |
| SRW | Short | Student / in-progress work | Student Research Workshop |
| Journal | No hard limit | Mature, thorough work | *TACL*, *Computational Linguistics* |

## How to choose

Work from contribution to form, never the reverse. [Chapter 4](./04-contribution.md) covers what the contribution can be.

- **Name the one thing you are claiming.** If proving it needs several experiments, you have a long paper; if it is a single self-contained result, a short paper; if it is data, a resource paper; if it is "the field is wrong about X," a position paper; if it is "does X hold up?", a reproduction.
- **Match the venue to maturity.** In-progress work fits a workshop or the SRW; complete work fits the main conference; thorough work that needs revision fits a journal.
- **Do not inflate, and do not slice.** Padding a short idea into a long paper reads as a thin contribution; carving one real contribution into several minimal papers is salami-slicing (see the [jargon chapter](./05-jargon.md)). Either way a reviewer notices.
- **Read the call.** Tracks, page limits, and special requirements (a demo needs a working system and often a video; the theme track needs that year's theme) change every cycle. The [Publication Landscape](./01-publication-landscape.md) chapter covers where these venues sit.

## Common mistakes

- **Writing a short paper as a compressed long paper.** Cramming four experiments into four pages gives you a worse long paper. Pick one point.
- **Framing a survey or position paper as empirical.** Reviewers go looking for the experiments and, finding none, undervalue the real contribution. Signal the type in the title and abstract.
- **Treating a Findings offer as a rejection.** It is a citable publication and, for a first paper, a win.
- **Ignoring track-specific rules.** The demo track wants a working artifact; the industry track wants deployment; shared-task papers want honest analysis and no invented novelty. Read the track's own call.
- **Choosing the venue before the contribution.** Deadlines tempt you to. Decide what you have first, and the right form usually follows.

## Further reading

- The [ACL Rolling Review call for papers](https://aclrollingreview.org/cfp): the authoritative source for long/short definitions and page limits.
- A current main-conference call (e.g. [ACL 2025](https://2025.aclweb.org/calls/main_conference_papers/)) for the theme track, Findings, and the full list of welcomed contribution types.
- [Chapter 1: The NLP Publication Landscape](./01-publication-landscape.md) for the venues these paper types live in, and [Chapter 16: Dataset Construction](./16-dataset-construction.md) if your contribution is a resource.
