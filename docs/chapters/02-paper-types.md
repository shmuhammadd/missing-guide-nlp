---
sidebar_position: 2
title: "2. What kind of paper are you writing?"
---

Before you pick a title or open Overleaf, settle one question: what *kind* of paper is this? NLP has many — long and short, resource and survey, position and demo, reproduction and shared-task — and each has its own length limit, its own reviewing criteria, and its own idea of what counts as a contribution. Choosing the wrong frame is a quiet but common way to fail: a survey written as if it were an experiments paper draws reviewers hunting for experiments that were never the point, and a single crisp result padded into a long paper draws "thin contribution." This chapter is the menu, so you can match your contribution to the right form before you write a word.

A note on what counts. \*ACL venues deliberately want more than "we beat the state of the art." The ACL 2025 call, for instance, explicitly welcomes papers that "contribute negative findings, survey an area, announce the creation of a new resource, argue a position, report novel linguistic insights … and reproduce, or fail to reproduce, previous results" ([ACL 2025 main call](https://2025.aclweb.org/calls/main_conference_papers/)). Your contribution does not have to be a new model.

## Long or short?

The main conference takes two forms, and the distinction is about *scope*, not page-count alone. Under the [ARR call](https://aclrollingreview.org/cfp), a **long paper** gets "up to eight (8) pages of content" and a **short paper** "up to four (4) pages." Both get unlimited references, unlimited space after the conclusion for the required Limitations section (and optional Ethics), and appendices that do not count toward the limit. (Camera-ready versions get one extra content page. Exact numbers drift by venue and year — always read the current call.)

The line that trips up beginners: **"a short paper is not a shortened long paper."** A short paper "should have a small, focused contribution that can be made in a few pages" — one clean result, a focused analysis, a negative finding, a compact resource. If your idea only works at full length because it needs four experiments to be convincing, it is a long paper. If it is a single, self-contained point, do not inflate it; a tight short paper beats a padded long one.

## Findings: the main conference's safety net

When you submit to a \*ACL conference, you are usually also opting into **Findings**: "papers submitted … but not selected for the main conference will … automatically be considered for publication in the Findings of the Association for Computational Linguistics" ([ACL 2025 main call](https://2025.aclweb.org/calls/main_conference_papers/)). A Findings paper is a real, citable, Anthology-indexed publication; it simply does not get a main-session presentation slot.

In the language of the [ARR review form](./03-jargon.md), Findings is roughly the home of work that scores well on *soundness* but lower on *excitement* — solid and correct, but judged not quite a headline. Treat an offer of Findings as a result, not a rejection; for a first paper it is a genuinely good outcome.

## Choosing by your contribution

Start from the thing you are actually claiming, and let it pick the type.

- **The empirical research paper.** A new method, model, or finding, backed by experiments. The default, and the shape most of this guide assumes — Methods ([Chapter 14](./14-methods.md)), Experimental Setup, Results, Analysis.
- **Resource and data papers.** The dataset, benchmark, or corpus *is* the contribution. Reviewed against different criteria — provenance, annotation, agreement, leak-free splits — covered in [Dataset Construction](./13-dataset-construction.md). Homes include the main conference, Findings, dedicated data tracks, and venues like LREC.
- **Survey papers.** A map of a subfield: what has been tried, how the pieces relate, where the open problems are. Hard to do well — it needs real command of the area — and it is an *argument about structure*, not a pile of summaries. ACL invites surveys; longer treatments often go to the journals *Computational Linguistics* or *TACL*.
- **Position and theme-track papers.** An argued stance — "the field should rethink X" — built from evidence and reasoning rather than experiments. Each year ACL runs a **theme track** soliciting these on a chosen theme, with a Thematic Paper Award.
- **Negative-results and reproduction papers.** Reporting what did not work, or whether a published result holds up, is an explicitly invited contribution. Often short papers; the [Insights workshop](https://aclanthology.org/venues/insights/) exists specifically for negative results, and reproducibility tracks for the rest.
- **System demonstration papers.** A working system reviewers can actually try. The demo track allows "up to 6 pages" with a small appendix ([ACL 2025 demo call](https://2025.aclweb.org/calls/system_demonstration/)); the bar is a useful, functioning artifact and a convincing live demo, not methodological novelty.
- **Industry-track papers.** Applied or deployed work — real-world constraints, scale, and the lessons of putting NLP into production. Reviewed largely by practitioners, who weigh impact and deployment over novelty.
- **Shared-task / system-description papers.** You entered a shared task (SemEval, WMT, CoNLL), and you describe your system and where it placed. The novelty bar is lower; the contribution is the participation and the honest analysis of what worked. These appear in the task's own proceedings.
- **Student Research Workshop (SRW) papers.** A first venue built for students, with mentorship and room for work-in-progress and thesis proposals. An excellent place to start.
- **Workshop papers.** Focused, community-sized venues, often less competitive and friendlier to early or in-progress work. Some are archival, some are not — check, because a non-archival workshop paper can later be extended into a conference submission.
- **Journal papers (*TACL*, *Computational Linguistics*).** Longer, revision-based, and presented at conferences once accepted. The right home for mature, thorough work that needs room to breathe and can survive a real revision cycle.

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

Work from contribution to form, never the reverse:

- **Name the one thing you are claiming.** If proving it needs several experiments, you have a long paper; if it is a single self-contained result, a short paper; if it is data, a resource paper; if it is "the field is wrong about X," a position paper; if it is "does X hold up?", a reproduction.
- **Match the venue to maturity.** In-progress work fits a workshop or the SRW; complete work fits the main conference; thorough work that needs revision fits a journal.
- **Do not inflate, and do not slice.** Padding a short idea into a long paper reads as a thin contribution; carving one real contribution into several minimal papers is salami-slicing (see the [jargon chapter](./03-jargon.md)). Either way a reviewer notices.
- **Read the call.** Tracks, page limits, and special requirements (a demo needs a working system and often a video; the theme track needs that year's theme) change every cycle. The [Publication Landscape](./01-publication-landscape.md) chapter covers where these venues sit.

## Common mistakes

- **Writing a short paper as a compressed long paper.** Cramming four experiments into four pages produces a worse long paper, not a short one. Pick one point.
- **Framing a survey or position paper as empirical.** Reviewers go looking for the experiments and, finding none, undervalue the real contribution. Signal the type in the title and abstract.
- **Treating a Findings offer as a rejection.** It is a citable publication and, for a first paper, a win.
- **Ignoring track-specific rules.** The demo track wants a working artifact; the industry track wants deployment; shared-task papers want honest analysis, not invented novelty. Read the track's own call.
- **Choosing the venue before the contribution.** Deadlines tempt this. Decide what you have first; the right form usually follows.

## Further reading

- The [ACL Rolling Review call for papers](https://aclrollingreview.org/cfp) — the authoritative source for long/short definitions and page limits.
- A current main-conference call (e.g. [ACL 2025](https://2025.aclweb.org/calls/main_conference_papers/)) for the theme track, Findings, and the full list of welcomed contribution types.
- [Chapter 1 — The NLP Publication Landscape](./01-publication-landscape.md) for the venues these paper types live in, and [Chapter 13 — Dataset Construction](./13-dataset-construction.md) if your contribution is a resource.
