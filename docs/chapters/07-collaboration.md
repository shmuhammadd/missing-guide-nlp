---
sidebar_position: 7
title: "7. Working with advisors and co-authors"
---

A first \*ACL paper is almost never solo work. You will have an advisor and usually one or more co-authors. Who does what, whose name goes where, how to give and take feedback, how to disagree: nobody teaches this, and it decides whether the project is a good experience or a miserable one. This chapter covers that human half of the job.

## Who earns a place on the byline

Seniority, funding and friendship do not earn authorship. The widely used standard, from the [ICMJE](https://www.icmje.org/recommendations/browse/roles-and-responsibilities/defining-the-role-of-authors-and-contributors.html), sets four conditions, *all* required: a substantial contribution to the work; drafting it or revising it critically; approving the final version; and agreeing to be accountable for it. By that bar, someone who only secured the grant, ran the lab or proofread the English does not qualify. Such people "should not be listed as authors, but they should be acknowledged." A language model is never an author either ([Chapter 23](./23-ai-assistance.md)), because it cannot be accountable for anything.

Two failure modes have names ([Chapter 5](./05-jargon.md)). *Gift* (or *guest*) *authorship* adds someone who did not contribute, to flatter them or to look impressive. *Ghost authorship* omits someone who did. Both are misconduct. In NLP the advisor is normally a real author: they shaped the idea and revised the paper, which clears the bar. They are an author *by contribution*, and never by default.

## Author order, and what it signals

NLP and ML read author order as a signal, so get it right:

- **First author**: the primary contributor, usually the student who did most of the work and writing.
- **Last author**: the senior researcher who supervised, your advisor or PI.
- **Middle authors**: meaningful contributions in between, roughly in decreasing order.
- **Co-first authorship**: when two people contributed equally, both are marked first with a footnote ("\* Equal contribution"). It is legitimate and common. Use it instead of forcing a false ranking.

Conventions vary, and a few communities order strictly alphabetically, so ask your advisor what your group does. One rule holds everywhere: **decide order early, out loud, and revisit it if contributions shift.** Disputes over order are common and bitter. Talking before submission, instead of on deadline day, prevents almost all of them.

## Make contributions explicit

Many venues now ask for an author-contribution statement. The standard vocabulary is [CRediT](https://credit.niso.org/), an ANSI/NISO taxonomy of 14 roles: *conceptualization, methodology, software, data curation, validation, investigation, writing – original draft, writing – review & editing, supervision,* and so on. Write a CRediT-style statement early in the project even when the venue does not require one. It is the cheapest insurance against a later credit dispute, because everyone has to say who is doing what while there is still time to rebalance the load.

## Working with your advisor

Some advisors want a meeting a week and a draft two weeks ahead; some you will see twice a semester. Learn how yours works and adapt to it.

- **Ask how they work.** Meeting frequency, how much detail they want, when they expect drafts. Guessing wastes your time and theirs.
- **Come prepared.** Bring a specific question, a result, or a decision to make, not "what should I do next?" Use the meeting for things you cannot resolve alone.
- **Manage up on time.** A draft sent to a busy advisor the night before the deadline gets a rushed read and worse feedback. Send it with real lead time, and say what kind of feedback you want.
- **Disagree with evidence.** "I tried X; it failed because Y; I propose Z" is a contribution, and a good advisor welcomes it. A reasoned case beats silent compliance and silent defiance alike.

## Giving and taking feedback

Comments on your draft are about the draft. Keep your ego out of it and the process gets easier.

- **Address every comment.** Fix it, or push back with a reason. Never ignore a co-author's note in silence.
- **Welcome a harsh internal review.** Better a co-author finds the hole now than [Reviewer 2](./05-jargon.md) later. Get the toughest reading you can before submission.
- **When you are the one giving feedback,** be specific and kind, the standard the [reviewing chapter](./26-reviewing.md) asks of reviewers. These people are your collaborators.

## Co-writing logistics

- **Keep one source of truth.** Agree on Overleaf, or git plus LaTeX, and stop emailing versions around before someone overwrites someone else's edits.
- **Divide by expertise, unify by one voice.** Let people draft the sections they know best. Have one author own the final pass, so the paper reads in one voice ([Chapter 8](./08-writing-clearly.md)) instead of five.
- **Share the bibliography.** One `.bib` file, one reference manager, and every entry verified ([Chapter 24](./24-references-and-appendices.md)).
- **Write down who owns what,** with dates. A shared task list prevents the deadline-week discovery that nobody wrote the related work.

## When things go wrong

- **Authorship disputes:** raise them early and in person, with the contributions statement as your evidence. If the two of you cannot resolve it, bring in a neutral senior person *before* submission.
- **An unresponsive collaborator:** set explicit deadlines and follow up. If a co-author goes dark near a deadline, tell your advisor early instead of absorbing their work in silence.
- **Serious cases** (credit theft, coercion, misconduct) are what the [ACL Policy on Publication Ethics](https://www.aclweb.org/adminwiki/index.php/ACL_Policy_on_Publication_Ethics) and its ethics committee exist for. You are allowed to use them.

## Common mistakes

- **Leaving the authorship and order conversation until submission day.** It is the most preventable source of conflict in a research group.
- **Gift authorship** to flatter a senior, or **ghosting** a junior who did real work. Both are misconduct, whatever the motive.
- **The midnight draft.** Sending your advisor the paper hours before the deadline and expecting a careful read.
- **Taking writing feedback personally,** or ignoring comments without a word of reply.
- **No single owner for the final voice,** so the paper reads as stitched together from different hands.
- **Treating an internal critique as an attack.** It is the cheapest, kindest review you will ever get.

## Further reading

- ICMJE, ["Defining the Role of Authors and Contributors"](https://www.icmje.org/recommendations/browse/roles-and-responsibilities/defining-the-role-of-authors-and-contributors.html). The standard criteria for who counts as an author, and who should be acknowledged instead.
- [CRediT (Contributor Roles Taxonomy)](https://credit.niso.org/). The 14-role vocabulary many venues now use for contribution statements.
- The [ACL Policy on Publication Ethics](https://www.aclweb.org/adminwiki/index.php/ACL_Policy_on_Publication_Ethics). What ACL expects of authors, and where to turn when it is breached.
- [Chapter 5, Decoding the Jargon](./05-jargon.md), on gift, guest and ghost authorship and the incentives behind them.
