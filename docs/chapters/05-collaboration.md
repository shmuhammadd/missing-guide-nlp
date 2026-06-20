---
sidebar_position: 5
title: "5. Working with advisors and co-authors"
---

A first \*ACL paper is almost never solo work. You will have an advisor, and usually one or more co-authors, and the human side of that — who does what, whose name goes where, how to give and take feedback, how to disagree — is rarely taught and quietly decides whether the project is a good experience or a miserable one. The science is only half the job. This chapter is the other half.

## Who earns a place on the byline

Authorship is not a reward for seniority, funding, or friendship. The widely-used standard, from the [ICMJE](https://www.icmje.org/recommendations/browse/roles-and-responsibilities/defining-the-role-of-authors-and-contributors.html), is four conditions, *all* required: a substantial contribution to the work; drafting it or revising it critically; approving the final version; and agreeing to be accountable for it. By that bar, someone who only secured the grant, ran the lab, or proofread the English does not qualify — such people "should not be listed as authors, but they should be acknowledged." A language model, likewise, is never an author ([Chapter 21](./21-ai-assistance.md)): it cannot be accountable for anything.

Two failure modes have names ([Chapter 3](./03-jargon.md)): *gift* (or *guest*) *authorship* — adding someone who did not contribute, to flatter them or look impressive — and *ghost authorship* — omitting someone who did. Both are misconduct. Note that in NLP the advisor is normally a genuine author: they shaped the idea and revised the paper, which clears the bar. The principle is that they are an author *by contribution*, not by default.

## Author order, and what it signals

NLP and ML read author order as a signal, so it is worth getting right:

- **First author** — the primary contributor, usually the student who did most of the work and writing.
- **Last author** — the senior researcher who supervised: your advisor or PI.
- **Middle authors** — meaningful contributions in between, roughly in decreasing order.
- **Co-first authorship** — when two people contributed equally, both are marked first with a footnote ("\* Equal contribution"). Legitimate and common; use it rather than forcing a false ranking.

Conventions vary — a few communities order strictly alphabetically — so ask your advisor what your group does. The one rule that holds everywhere: **decide order early, out loud, and revisit it if contributions shift.** Disputes over authorship order are common, bitter, and almost entirely preventable by having the conversation before submission rather than on deadline day.

## Make contributions explicit

Many venues now ask for an author-contribution statement, and the standard vocabulary is [CRediT](https://credit.niso.org/), an ANSI/NISO taxonomy of 14 roles — *conceptualization, methodology, software, data curation, validation, investigation, writing – original draft, writing – review & editing, supervision,* and so on. Even when a venue does not require it, writing a CRediT-style statement early in the project is the cheapest insurance against a later credit dispute: it forces everyone to say who is doing what while there is still time to rebalance the load.

## Working with your advisor

Advisors vary enormously — some want a meeting a week and a draft a fortnight out, some you will see twice a semester. Diagnose yours and adapt rather than resent.

- **Ask how they work.** Meeting frequency, how much detail they want, when they expect drafts. Guessing wastes both your time and theirs.
- **Come prepared.** Bring a specific question, a result, or a decision to be made — not "what should I do next?" A meeting is for the things you cannot resolve alone.
- **Manage up on time.** Your advisor is busy; a draft sent the night before the deadline gets a rushed read and worse feedback. Send it with real lead time, and say what kind of feedback you want.
- **Disagree with evidence.** "I tried X; it failed because Y; I propose Z" is a contribution, and a good advisor welcomes it. Silent compliance and silent defiance are both worse than a reasoned case.

## Giving and taking feedback

Feedback on your writing is about the writing, not about you — separate your ego from the draft and the whole process gets easier.

- **Address every comment.** Fix it, or push back with a reason; never silently ignore a co-author's note.
- **A harsh internal review is a gift.** Far better that a co-author finds the hole now than [Reviewer 2](./03-jargon.md) finds it later. Invite the toughest reading you can get before submission, not after.
- **When you are the one giving feedback,** be specific and kind — the same standard the [reviewing chapter](./24-reviewing.md) asks of reviewers. These are your collaborators, not your adversaries.

## Co-writing logistics

- **Keep one source of truth.** Agree on Overleaf, or git-plus-LaTeX, and stop emailing versions around before someone overwrites someone else's edits.
- **Divide by expertise, unify by one voice.** Let people draft the sections they know best, but have a single author own the final pass so the paper reads in one voice ([Chapter 6](./06-writing-clearly.md)) rather than as a patchwork of five styles.
- **Share the bibliography.** One `.bib` file, one reference manager, and every entry verified ([Chapter 22](./22-references-and-appendices.md)).
- **Write down who owns what,** with dates. A shared task list prevents the deadline-week discovery that nobody wrote the related work.

## When things go wrong

- **Authorship disputes:** raise them early and in person, with the contributions statement as your evidence. If you cannot resolve it between you, bring in a neutral senior person *before* submission, not after.
- **An unresponsive collaborator:** set explicit deadlines and follow up; if a co-author goes dark near a deadline, tell your advisor early rather than absorbing their work in silence.
- **Serious cases** — credit theft, coercion, or misconduct — are exactly what the [ACL Policy on Publication Ethics](https://www.aclweb.org/adminwiki/index.php/ACL_Policy_on_Publication_Ethics) and its ethics committee exist for. You are allowed to use them.

## Common mistakes

- **Leaving the authorship and order conversation until submission day.** The single most preventable source of conflict in a research group.
- **Gift authorship** to flatter a senior, or **ghosting** a junior who did real work. Both are misconduct, not generosity or oversight.
- **The midnight draft.** Sending your advisor the paper hours before the deadline and expecting a careful read.
- **Taking writing feedback personally,** or ignoring comments without a word of reply.
- **No single owner for the final voice,** producing a paper visibly stitched together from different hands.
- **Treating an internal critique as an attack** instead of the cheapest, kindest review you will ever get.

## Further reading

- ICMJE, ["Defining the Role of Authors and Contributors"](https://www.icmje.org/recommendations/browse/roles-and-responsibilities/defining-the-role-of-authors-and-contributors.html). The standard criteria for who counts as an author, and who should be acknowledged instead.
- [CRediT — Contributor Roles Taxonomy](https://credit.niso.org/). The 14-role vocabulary many venues now use for contribution statements.
- The [ACL Policy on Publication Ethics](https://www.aclweb.org/adminwiki/index.php/ACL_Policy_on_Publication_Ethics). What ACL expects of authors, and where to turn when it is breached.
- [Chapter 3 — Decoding the Jargon](./03-jargon.md) on gift, guest, and ghost authorship, and the incentives behind them.
