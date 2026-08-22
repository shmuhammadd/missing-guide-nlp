# Gemini and Gemini Notebook: A Practical Research Manual

## Every feature, what it is for in research, and exactly what to click and paste

**Companion document to the DRIP session. Verified against the product as of August 2026.**

---

## Part 0: Names, access and what is actually free

### The naming, because the room will be confused

On 16 July 2026 Google renamed NotebookLM to **Gemini Notebook**. It is the same standalone research product. In late July the address moved from notebooklm.google.com to **notebook.google.com**, and the old address redirects.

There are now three things called notebooks. Say this once at the start of the demo and the confusion stops:

| Surface | What it is | Use it for |
|---|---|---|
| **Gemini Notebook** at notebook.google.com | The standalone research app, formerly NotebookLM. Full Studio feature set. | All the research work in this manual. |
| **Notebooks inside the Gemini app** | A section added in April 2026 for organising chats and files. Syncs with the above, but the feature sets differ. | Light organisation only. Google's documentation has said this feature needs a personal account and does not support work or school accounts, so check whether it appears under @buk.edu.ng before you promise it. |
| **Notebooks in AI Mode in Search** | Announced, not yet shipped. | Nothing yet. |

### What is free and what is not

Your @buk.edu.ng Google account covers the core of both tools. Some features are tied to paid Google AI plans or to a staged rollout, and they will be missing from some machines in the room. Check before you promise them:

| Feature | Availability note |
|---|---|
| Gemini chat, file upload, Canvas, Gems | Broadly available |
| Deep Research | Available, with usage caps that vary by plan |
| Gemini Notebook chat, citations, mind map, audio overview, reports, flashcards, quizzes | Broadly available |
| Scheduled Actions | Requires Google AI Pro or Ultra, up to ten active actions |
| Native code execution in Gemini Notebook (the secure cloud computer, shipped 8 June 2026) | Started with Ultra and eligible Workspace business accounts, with Pro web access following. Availability still varies. |
| Cinematic Video Overviews | Launched on Ultra, expanded later. Varies. |

**Source limits follow your Google AI plan, not which door you enter by.** When notebooks reached free Gemini users in April 2026 the reported limits were 50 sources per notebook on free, 100 on AI Plus, 300 on Pro and 600 on Ultra.

### Demo run order

If you are showing this live and have twenty minutes, do these twelve things in this order and nothing else:

1. Gemini: ask for five references on a thin topic. Do not verify yet.
2. Gemini: attach a PDF and ask one question about it.
3. Gemini: switch to Canvas and edit a paragraph in place.
4. Gemini: open the Gems manager and show one research Gem you built earlier.
5. Gemini: launch Deep Research and leave it running.
6. Gemini Notebook: create a notebook, add three sources.
7. Notebook: ask a cross-source question, click a citation chip.
8. Notebook: ask something outside the corpus and show the refusal.
9. Notebook: Studio, generate a mind map.
10. Notebook: open the pre-generated audio overview, play thirty seconds.
11. Notebook: build a data table and export to Sheets.
12. Back to Gemini: verify two references from step 1 in Scholar. Land the rule.

---

# Part 1: Gemini, feature by feature

## 1.1 The model picker

**Where:** drop-down at the top of the chat.

**For research:** Pro for anything requiring reasoning across a long document or a multi-step argument. Flash for quick lookups and reformatting. The default is fine for most of what you do today.

**Pitfall:** people stay on Flash for a task that needs Pro and conclude the tool is weak. If an answer is shallow, change the model before you change the prompt.

## 1.2 The chat, with files attached

**Where:** the **+** button, then upload. PDFs, images, spreadsheets, documents.

**For research:** this is your fast path when you have one or two papers and a specific question. For more than about five papers, or when you need citations you can click, move to Gemini Notebook.

**Try this:**

```
Attached is a paper I am reviewing for a course, not for a journal.
Extract: the research question, the data, the identification strategy,
the main result with its effect size, and every limitation the authors
state themselves. Table format, one row per item, with the page number
for each.
```

Asking for page numbers is what makes the output checkable.

**Pitfall:** long PDFs get skimmed. If the answer feels thin on a 40-page paper, ask about one section at a time.

## 1.3 Personalisation and saved information

**Where:** Settings, then the personalisation or saved information controls.

**For research:** save your field, your institution, your data constraints and your writing register once, and stop retyping them. A line like "I am a lecturer at a Nigerian university, my empirical work uses survey and administrative data, I write in British English for social science journals" changes the default answer materially.

**Pitfall:** it also makes the model agree with you more, because it now knows what you believe. For any question about the strength of an idea, start a fresh chat and ask blind.

## 1.4 Connected apps: Gmail, Drive, Docs

**Where:** the connected apps or tools menu, then reference a file with **@**.

**For research:** pull a draft straight out of Drive instead of copy-pasting, and search your own mail for a thread you half remember.

**Try this:**

```
@[name of your draft in Drive] Find every claim in the introduction that
has no citation attached, and list them with the sentence they appear in.
```

**Pitfall:** what you connect becomes visible to the model. Do not connect a Drive folder holding manuscripts you are reviewing, examiner reports or unpublished data.

## 1.5 Canvas

**Where:** the Canvas button under the prompt box, or ask for it by name.

**What it is:** an editable side workspace for a document, a slide deck, a quiz, an infographic, a web page or code, which you refine in place instead of regenerating the whole answer each time.

**For research:** the single most useful place to do revision work, because you can select one paragraph and act on it without disturbing the rest.

**Try this:** paste your section into Canvas, then:

```
Select nothing else. For this paragraph only: mark every sentence where
the verb is stronger than the evidence cited. Do not rewrite. Add your
marks as comments alongside.
```

**Pitfall:** a public Canvas app is not a private Google document. If you share one, treat it as a third-party application, because whoever created it may be able to see what is entered into it.

## 1.6 Deep Research

**Where:** the Deep Research toggle, or select it in the model picker.

**What it is:** an agent that plans, runs many searches, reads what it finds and writes a cited report. Minutes, not seconds. You can now add your own uploaded files, Drive and Gmail as sources alongside the web, and turn the finished report into a Canvas artefact.

**For research:** scoping a new area, mapping a debate, finding out what exists before you commit to a question.

**Try this:**

```
Survey the empirical evidence since 2018 on [your question]. Organise by
identification strategy rather than by year. For each strand give the
main finding, the setting and sample, and the principal criticism made
of it in later work.

State explicitly where evidence from African or other low-resource
settings is missing rather than filling the gap with evidence from
elsewhere.

List every source with a working link.
```

That last instruction is the one worth teaching. Without it, the report quietly presents US and European evidence as if it were general.

**Pitfall:** twenty sources feels more trustworthy than three, so people verify less exactly when they should verify more. **Spot-check five sources at random. If two fail, distrust the whole report.**

## 1.7 Gems

**Where:** expand the left menu, click **Gems**, then **New Gem**. You get pre-made Gems from Google, your own saved Gems, and the option to build one.

**What it is:** a saved instruction set plus optional uploaded files and a default tool. It is not a different model. It is you not retyping your context every morning.

**How to build one, four fields:**

1. **Name.** Something you will recognise in a list.
2. **Instructions.** Role, what it should always do, what it must never do, and the output format.
3. **Knowledge files.** Upload your style guide, a target journal's author guidelines, your own two best papers as a voice sample, your methods notes.
4. **Default tool.** Set Deep Research on a scoping Gem, Canvas on a writing Gem.

Four Gems worth building before the session, with instruction text you can paste directly. These are in Part 4 in full.

- **The Sceptical Reviewer.** Attacks your draft before a real reviewer does.
- **The Methods Critic.** Interrogates identification and validity.
- **The Language Editor.** Corrects English without touching your argument.
- **The Grant Reader.** Reads a proposal the way a panel member does.

**Pitfall:** a Gem inherits every limitation of the underlying model, including sycophancy. Write "do not be encouraging" into the instructions, or it will drift back to praise within three exchanges.

## 1.8 Scheduled Actions

**Where:** the scheduled actions section, on Pro or Ultra only, up to ten active at a time.

**For research:** a weekly brief on new preprints in your area, or a Monday reminder that regenerates your reading list.

**Try this as the action text:**

```
Every Monday at 07:00, search for work published in the last seven days
on [your topic]. Give me at most five items, each with the title, the
authors, one sentence on what is new, and a link. If nothing substantial
appeared, say so in one line rather than padding the list.
```

**Pitfall:** it will not have found everything, and it cannot tell you what is important. Treat it as an alert, not a literature review.

## 1.9 Guided Learning

**Where:** the tools menu.

**For research:** learning a method you have not used before. It works by questioning you rather than answering you, which is exactly what you want when the goal is to understand rather than to produce.

**Try this:**

```
Teach me difference-in-differences using Guided Learning. Assume I know
OLS and nothing about panel methods. Do not give me the parallel trends
assumption until you have made me try to derive why the design needs one.
```

**Pitfall:** slower than just being told. That is the point, and some of the room will resist it.

## 1.10 The Create menu: audio overviews, infographics, quizzes, web pages

**Where:** the Create menu inside the chat or from a Deep Research report.

**For research:** turning a report into a teaching artefact, or an audio overview you can listen to on the road to Kano. Also the fastest way to make a one-page visual summary for a supervisor.

**Pitfall:** a generated infographic is a presentation object, not evidence. Do not put one in a paper.

## 1.11 Image, video and music generation

**For research:** essentially nothing, and there is a policy trap here. **Elsevier prohibits AI-generated images outright and Springer Nature prohibits generative images.** Use these for teaching slides and outreach, never for a figure in a manuscript.

## 1.12 Gemini Live

**Where:** the microphone icon, mobile especially.

**For research:** thinking out loud on a walk. Ask it to interrogate your argument while you talk, then read the transcript afterwards.

**Pitfall:** nothing spoken is a record. Anything you want to keep, put in a chat or a Gem.

## 1.13 Gemini in Workspace

**Where:** the side panel in Docs, Sheets, Slides and Gmail.

**For research:** editing where the document already lives. In Sheets it will write formulas and explain them. In Gmail it drafts the reply to a co-author, which you then rewrite.

**Pitfall:** it sees the document it sits beside. Close the panel when the document is confidential.

---

# Part 2: Gemini Notebook, feature by feature

The whole product exists to do one thing: answer **only** from the sources you give it, and show you where each sentence came from. Everything below is in service of that.

## 2.1 Creating a notebook

**Where:** notebook.google.com, then **Create new**.

**Name it after the topic, not the date.** People end up with twelve notebooks called "August".

**One notebook per research question**, not one per project. A notebook holding your literature review and your teaching material will answer both badly.

## 2.2 Sources: what you can add

PDFs, Google Docs and Slides, pasted text, web pages, YouTube links, Microsoft Word documents, spreadsheets, images, EPUB.

**Two ways to fill a notebook:**

**Discover sources.** Type a topic in plain language and it suggests roughly ten web sources you can import selectively. Fast, but the Skeptic checks the publisher of each one before you trust it.

```
Empirical studies on [topic] in developing or emerging economies, 2015
onward, journal articles preferred over working papers.
```

**Deep Research inside the notebook.** Shipped November 2025. It searches the web and compiles a citation-backed report directly into the notebook, so the report and its sources sit alongside your own PDFs.

**Source selection.** Tick and untick sources to change what a question is answered from. This is underused and it is powerful: ask the same question of the three quantitative papers, then of the three qualitative ones, and the difference is your methods section.

## 2.3 The chat

**Citation chips.** Every grounded sentence carries a numbered chip. Click it and the source passage opens.

**The rule to teach:** a sentence without a chip is not grounded in your sources. Do not cite it.

**Chat goals and personas.** You can set a standing goal or role for the notebook's chat, so it answers as, for example, a methods examiner rather than a general assistant.

**Saved chat history and a one-million-token context.** Conversations persist and hold far more than they used to, so you can work through a corpus over several days without restarting.

**The five questions that do the actual work**, in this order:

```
What question does each source ask, what data does it use, and what does
it find? One row per source, in a table.
```

```
Where do these sources disagree? For each disagreement, state the point
at issue, which sources fall on each side, and the reason each gives.
Ignore disagreements that are only differences in wording.
```

```
What do these authors themselves say remains unresolved? Quote the
sentence where each says it and attribute it to the source.
```

```
Build a synthesis matrix, one row per source, with columns: research
question, context and period, data, method, main finding, stated
limitation. Where a source does not report something, write "not
reported" rather than inferring it.
```

```
Group these sources into three to five themes based on the substance of
their findings, not their methods. Name each theme as a phrase that could
be a subsection heading in a literature review. For each theme, say which
sources support it and which complicate it.
```

That fifth answer is the skeleton of your literature review, and every line of it is clickable back to a paper.

## 2.4 Studio outputs

Everything below is generated from your sources only.

**Audio Overview.** Two hosts discussing your material. Customise it or it will be generic:

```
Focus on where these papers disagree about identification. Assume the
listener is a doctoral student in this field, not a general audience. Do
not summarise each paper in turn.
```

Start it early. Generation takes minutes.

**Video Overview**, including Cinematic Video Overviews using Gemini 3, Nano Banana Pro and Veo 3 on eligible plans, with several visual styles and a shorter Brief format. Useful for teaching, rarely for research.

**Mind Map.** An expandable map of how your sources relate. Use it to check whether the themes you named in 2.3 actually hold up, and to find the branch with only one source under it, which is usually your gap.

**Reports.** Briefing document, study guide, and other formats. The briefing document is the one to generate before a supervision meeting.

**Data Tables.** Shipped December 2025. Pulls facts scattered across sources into a structured table and exports to Google Sheets. This is the fastest route to a real synthesis matrix you can keep working in.

```
Build a data table with one row per study and these columns: author and
year, country, sample size, method, outcome measured, effect direction,
whether the effect was statistically significant. Leave a cell empty if
the source does not report it.
```

Then export to Sheets and sort by method. That is a literature review's evidence table, produced in two minutes and traceable to source.

**Flashcards and quizzes.** Grounded in your uploads rather than general knowledge. For supervisors: generate a quiz from a paper you have assigned and you will find out in one minute whether the student read it.

**Slide decks and infographics.** Generate a deck from the notebook and export as PPTX, then finish it in Slides or PowerPoint. Useful for a lab meeting; still needs your judgement about what matters.

**Notes.** Save any chat answer as a note. Notes become sources for later questions, which is how you build a synthesis on top of a synthesis.

## 2.5 Code execution and the secure cloud computer

Shipped 8 June 2026. Each notebook can run code against your uploaded data and produce charts, spreadsheets and other downloadable outputs, grounded in your sources. Rolled out to Ultra and eligible Workspace business accounts first, with Pro web access following, so check whether it appears in your own notebook before relying on it in a demo.

**For research:** upload your survey data as a spreadsheet, then:

```
Using only the attached dataset, produce descriptive statistics for every
variable, flag any variable with more than 10% missing, and chart the
distribution of [outcome] by [group]. Show me the code you ran.
```

**Pitfall:** "show me the code you ran" is not optional. An analysis you cannot inspect is an analysis you cannot defend, and this is exactly the case the slides warn about, where the output is fluent and the error is invisible.

## 2.6 Sharing and collaboration

Notebooks can be shared. For a supervisor and student, a shared notebook of the thesis literature is a better artefact than a reading list, because the student's questions and your answers stay attached to the sources.

## 2.7 Mobile

The mobile app carries the chat, flashcards and quizzes, and audio overviews. Download an audio overview before a journey; you can play what you already downloaded offline, but you cannot ask new questions without a connection.

## 2.8 Limits and privacy

- Source limits follow your plan, from 50 sources per notebook upward.
- Grounded is not the same as correct. The tool will not invent a paper, but it can misread one, and it will happily reproduce a bad paper's bad claim with a citation chip attached.
- Do not upload manuscripts you are reviewing, examiner reports, student submissions, or data covered by an ethics approval that did not anticipate this. A manuscript under review is confidential and you are its custodian.

---

# Part 3: Four end-to-end workflows

## 3.1 Literature review, from nothing to a structured section

1. **Gemini:** persona prompt, eight candidate questions, do not evaluate yet.
2. **Gemini:** devil's advocate on the best three.
3. **Gemini:** criteria table, then pick.
4. **Gemini Deep Research:** survey the area, organised by method, with the missing-evidence clause.
5. **Google Scholar:** verify five references. Record real, distorted, fabricated.
6. **Gemini Notebook:** create the notebook, add the verified papers plus Discover results.
7. **Notebook:** the five questions in 2.3.
8. **Notebook:** data table, export to Sheets.
9. **Notebook:** mind map, find the thin branch.
10. **Gemini Canvas:** outline only, no prose.
11. **You:** write it.
12. **Gemini:** critique without rewriting, then the Sceptical Reviewer Gem.

## 3.2 Reading one hard paper properly

Attach it in Gemini, then:

```
Extract the research question, data, identification strategy, main result
with effect size, and every limitation the authors state. Give page
numbers for each.
```

```
What would a hostile referee attack first in this paper, and does the
paper already answer it?
```

```
Explain the identification strategy to me as if I know OLS but have never
used this method. Then tell me the assumption that would break it.
```

Then open the paper and check all three against it. The AI's job here is to tell you where to look, not to save you from looking.

## 3.3 Writing and revision

Outline in Canvas, write yourself, then in order: critique without rewriting, the Sceptical Reviewer Gem, your revision, and finally the Language Editor Gem for grammar only.

Never in the other order. Running the language editor first polishes prose you are about to throw away.

## 3.4 Responding to reviewers

Paste the reviewer report and your paper into a notebook, then:

```
List every distinct request in these reviews, including the ones buried
inside a comment about something else. For each: state what change would
satisfy it, and whether the paper already contains material that answers
it. Table format, one row per request.
```

The value here is completeness. The comment people miss is always the one embedded in the middle of a paragraph about something else.

---

# Part 4: Four Gems, with instruction text to paste

## The Sceptical Reviewer

```
You are a sceptical but fair reviewer for a well-regarded journal in the
social sciences. You have read this literature closely and you are not
easily impressed.

When I give you a passage, produce the three strongest objections to it.
For each: state the objection, say precisely what evidence would answer
it, and say whether the passage as written contains that evidence.

Never comment on writing quality. Never rewrite my text. Never open with
praise and never end with encouragement. If the passage is strong, say
which specific claim carries it and stop.

British English.
```

## The Methods Critic

```
You are an examiner assessing empirical methods. You care about
identification, measurement and validity, in that order.

When I describe a design, ask me the questions an examiner would ask
before you offer any assessment. Ask them one at a time and wait for my
answer.

Then state: the strongest threat to internal validity, the strongest
threat to external validity, and the single robustness check whose
absence a referee would notice first.

Do not propose a different design unless I ask. Do not be encouraging.
```

## The Language Editor

```
You correct English in academic writing by non-native speakers.

Correct grammar, article use, prepositions, tense agreement and
punctuation. Preserve my vocabulary, my sentence structure, my hedging
and my argument exactly. If a sentence is long but correct, leave it.

Never add citations. Never strengthen a claim. Never insert transition
words I did not write.

Output the corrected text, then a list of what you changed and why, one
line per change.

British English. No em-dashes.
```

## The Grant Reader

```
You are a panel member reading a proposal you did not choose to read, in
a field adjacent to your own, with nine others to get through today.

Read what I give you and answer only these questions:
1. After the first page, what do you think this proposal is for?
2. What is the gap it claims, and did you believe it?
3. Which aim is the one the panel will argue about, and why?
4. Where did your attention drop?
5. What would you write in the one-line summary a panel expects?

Do not suggest improvements unless I ask. Do not be encouraging.
```

---

# Part 5: The rules that do not change

1. **Nothing either tool says enters your work until you have verified it.** Verified means you opened the source, not that the answer sounded right.
2. **A sentence with no citation chip is not grounded.** In Gemini there are no chips at all, so everything is unverified by default.
3. **Grounded is not correct.** The notebook faithfully reports what a weak paper claims.
4. **Ask blind.** Never state your view before you ask whether it is right. The model agrees with confidence, not with evidence.
5. **Keep confidential material out.** Manuscripts under review, examiner reports, unpublished data, anything under an ethics approval that did not anticipate this.
6. **Disclose meaningful use.** Fill in the standard sentence, put writing assistance in the acknowledgements and analysis in the methods, and keep a log from day one: date, tool, what you asked, what you did with the output.
7. **Features move.** This document is accurate for August 2026. Rollouts are staged, so check inside your own account rather than assuming a feature exists because someone else has it.

---

# Appendix: every prompt in this manual, in one list

**Gemini**
1. Extract question, data, strategy, result, limitations, with page numbers.
2. Find claims in my introduction with no citation attached.
3. Canvas: mark verbs stronger than their evidence, do not rewrite.
4. Deep Research: survey by identification strategy, state where African evidence is missing.
5. Scheduled action: weekly five items on my topic, say so if nothing appeared.
6. Guided Learning: teach me the method, withhold the assumption until I try to derive it.

**Gemini Notebook**
7. What does each source ask, use and find? Table.
8. Where do these sources disagree, who is on each side, and why?
9. What do the authors say remains unresolved? Quote and attribute.
10. Synthesis matrix, six columns, "not reported" where absent.
11. Three to five themes by substance, named as subsection headings.
12. Audio overview with a custom focus.
13. Data table for export to Sheets, one row per study.
14. Descriptive statistics on my uploaded data, and show me the code.
15. Every distinct request in these reviewer reports, and whether the paper already answers it.

**Gems**
16. The Sceptical Reviewer.
17. The Methods Critic.
18. The Language Editor.
19. The Grant Reader.
