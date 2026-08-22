# DRIP, 18 August 2026: Facilitator Run Sheet

## AI for Research and Academic Writing, Bayero University Kano

**Shamsuddeen: Gemini and Gemini Notebook. Idris: Claude.**
**68 slides, eight blocks, three hours.**

---

## How to read this document

Each entry gives you the slide number, what is on screen, what you do, the exact text to paste, and the sentence that carries you to the next slide. Anything in a grey block is meant to be typed or pasted into a tool. Square brackets are what you replace.

Two conventions used throughout:

- **HANDOFF** marks a point where Idris takes the room. Say the handoff line, step away from the laptop, and let him drive.
- **PASTE** blocks are ready to run. They are also collected in Appendix A so you can work from one page if the projector is showing slides.

---

## Pre-flight, thirty minutes before

**Tabs open, in this order, left to right, signed in with @buk.edu.ng:**

1. gemini.google.com, empty chat, model set to Pro
2. gemini.google.com, second chat, for the side-by-side
3. notebook.google, with the pre-built notebook **DRIP demo** already loaded
4. Google Scholar
5. The slide deck
6. Idris on his own machine with claude.ai open

**The pre-built notebook must contain**, uploaded and processed before the room fills:

- Three to five papers from your own field that you know well
- One paper you disagree with, so the comparison question has something to bite on
- Nothing confidential and nothing under review

**Also ready:**

- The shared doc link on the board or in the chat
- Screenshots of the Gemini and Notebook demos in case the network fails
- One audio overview pre-generated in the demo notebook
- Timer visible to you, not to the room

**Running example for the day.** Use one thread across every demo so the exercises compound rather than restarting. The recommended thread, given a Software Engineering and DRIP audience:

> **AI code assistants in Nigerian software engineering education.**

It is thin in the published literature, which makes the fabrication demonstration reliable. Alternates if the room is not computing: AI adoption among Nigerian university lecturers, or Hausa language technology in public services.

---

## Run of show

| Block | Slides | Minutes | Lead |
|---|---|---|---|
| Opening and framing | 1 to 13 | 20 | Shams |
| 01 Understanding AI | 14 to 29 | 28 | Shams, Idris on 21 |
| 02 Prompting | 30 to 34 | 15 | Both |
| Break | | 10 | |
| 03 Brainstorming | 35 to 41 | 25 | Shams |
| 04 Reading and synthesis | 42 to 45 | 25 | Shams, Idris on 45 |
| 05 Writing and revision | 46 to 51 | 25 | Both |
| 06 Agents | 52 to 57 | 12 | Both |
| 07 Ethics | 58 to 63 | 15 | Idris |
| 08 Workflow and close | 64 to 68 | 10 | Shams |

**If you are fifteen minutes behind at the break**, cut slides 56 and 57 entirely and run the ethics debate on two scenarios instead of four. Do not cut Block 04. It is the reason people came.

---

# OPENING: SLIDES 1 TO 13 (20 min)

## Slides 1 to 4: welcome and the three questions

Run these as written in the speaker notes. The only thing to add is the laptop instruction, which must be given at slide 1 and repeated at slide 4, because half the room will not have opened anything.

**Transition into slide 5:** "Hold those four objections in your head. Here is the map of where AI actually touches your work, and then we answer every objection you just gave me."

## Slides 5 to 11: the frame

**Slide 8, your grant credibility slide.** Have one concrete critique ready to name. Something like: the model pointed out that two of the aims collapsed if the first one failed, and the panel would have said the same thing. Concrete beats impressive.

**Transition into slide 12:** "That is the whole argument. Here is how we spend the next three hours."

## Slides 12 to 13: agenda and groups

Form groups here, not later. Three or four people, mixed disciplines. Nominate a note-taker per group for the shared doc.

Give the four roles out loud and write them on the board:

| Role | Job |
|---|---|
| Driver | Types. Only the Driver touches the keyboard. |
| Skeptic | Challenges every output. Owns the verification checks. |
| Scribe | Writes the group's output in their own words. |
| Reporter | Speaks for the group at each share-out. |

Say the rotation rule once: **the Driver changes at every block.**

**Transition into slide 14:** "Before you use it, ten minutes on what it actually is. Every failure you meet today comes from the mechanism on the next slide."

---

# BLOCK 01: UNDERSTANDING AI, SLIDES 14 TO 29 (28 min)

## Slide 15: the mechanism (4 min)

Deliver as the notes say. One addition that lands with a technical audience: the model is not storing the internet, it is storing what usually follows what. Ask them what usually follows "the capital of Nigeria is" in Nigerian text, then ask what usually follows a sentence about Hausa morphology. The thinner the text, the more the model is guessing.

**Transition into slide 16:** "That mechanism is the same in every tool on the next slide. What changes is the wrapper."

## Slide 16 to 17: the landscape and your account (5 min)

Name three, move. At slide 17, get the show of hands on who has signed in with the university address and give the room sixty seconds to do it while the slide is up.

**Transition into slide 18:** "Now watch what that mechanism means in practice. Same question, two tools."

## Slide 18: LIVE DEMONSTRATION, Gemini against Gemini Notebook (6 min)

**You drive. Both tabs already open.**

Step 1, in Gemini:

```
List the five most important peer-reviewed studies on the effect of AI code
assistants on the quality of code written by undergraduate software
engineering students in Africa. For each give authors, year, title, journal
and DOI.
```

Read the output aloud. Note how confident it is. Do not check anything yet.

Step 2, same question in Gemini Notebook, on your pre-built notebook:

```
What do these sources say about the effect of AI code assistants on student
code quality?
```

Point at the citation chips. Click one live so the room watches the source passage open.

Step 3, the killer move. Ask the notebook something the PDFs do not cover:

```
What is the current enrolment in the software engineering programme at
Bayero University Kano?
```

It refuses or answers without a chip. Say the rule:

> A sentence without a chip is not grounded in your sources. Do not cite it.

Step 4, back in Gemini. Take two of the five references from step 1 and check them in Google Scholar on screen. Expect at least one to be wrong or missing. Do not rush this; the room needs to see the search box come back empty.

**Transition into slide 19:** "You have both tools open on your own machines. Sign in now and we do this together."

## Slides 19 and 20: setup, everyone follows along (8 min)

Walk the five steps of each slide while people follow. Do not talk over them.

At **slide 19, step 5**, everyone runs this on their own topic:

```
Give me three peer-reviewed papers on [your topic], published in the last
five years, with authors, year, journal and DOI.
```

Then everyone checks all three in Google Scholar. Ask for a show of hands: who got a reference that does not exist? This is the hallucination hunt, and it works better here than as a separate game because it uses their own topic.

At **slide 20, step 3**, ask everyone to upload three PDFs they already have on their machine. Anyone with no PDFs uses a groupmate's or the shared corpus link.

At **slide 20, step 4**, have them run:

```
What question does each of these papers ask, and what did each find?
Answer in a table with one row per paper.
```

Then have them click a chip.

**Transition into slide 21:** "That is the Google side. Claude is the other tool we use today, and Idris will set you up."

## Slide 21: Claude setup

**HANDOFF.** Say: "Idris runs Claude for the rest of the day. Everything we do in Gemini has a Claude equivalent, and he will show you where they differ."

Idris takes slide 21 (2 min) and keeps the Claude tab for the demos on slides 34, 45, 54 and 56.

## Slides 22 to 24: limits and sycophancy (6 min)

At **slide 22**, give one African-context example from your own work rather than describing the limitation abstractly. A model asked about Hausa or Yoruba resources will confidently name datasets and papers that do not exist, and the room should hear that from someone who has checked.

At **slide 24**, let them read the numbers before you speak. Then run this live if you have ninety seconds, because it is more convincing than the slide:

```
I believe the strongest baseline for African language sentiment analysis is
AfriBERTa. Am I right?
```

Then open a fresh chat and ask blind:

```
What is the strongest baseline for African language sentiment analysis, and
what is the evidence?
```

Compare. Say: the second answer is the one you can use.

**Transition into slide 25:** "Sycophancy bends the answer toward you. The next failure invents the evidence outright."

## Slides 25 to 27: hallucination and the one rule (4 min)

Deliver as written. Slide 26 is the sentence you want repeated on the way out. Slide 27 is six words and a silence.

## Slides 28 and 29: detectors and the HKU case (5 min)

Expect strong feelings. Give the supervisors in the room the practical line: never open a misconduct conversation with a detector score, ask the student to walk you through their process instead.

**Transition into slide 30:** "So the tool is unreliable and the responsibility is yours. The rest of today is about getting more out of it while carrying that responsibility. That starts with how you ask."

---

# BLOCK 02: PROMPTING, SLIDES 30 TO 34 (15 min)

## Slide 31: the four-part recipe (3 min)

Persona, task, context, format. Say each with a two-word example.

The line to add for this room: **context is where Nigerian researchers gain the most**, because the default answer assumes a US or European setting and quietly gives you the wrong baseline.

## Slides 32 and 33: worked examples (4 min)

The deck has an economics example and a medical one. Add a third out loud for the software and AI people, since it is your own field:

> Vague: "How do I evaluate my model?"
>
> Better: "You are a reviewer for an ACL-track venue with experience in low-resource NLP evaluation. I have fine-tuned a multilingual model for Hausa sentiment classification on 4,000 labelled tweets. Tell me what evaluation my reviewers will expect beyond accuracy and macro-F1, what baselines I must include, and what ablation would be considered missing. Format as a checklist grouped under evaluation, baselines and ablations."

**Transition into slide 34:** "Same recipe, two tools. Watch which part of the recipe changes the answer most."

## Slide 34: LIVE DEMONSTRATION, Gemini and Claude (5 min)

**You run Gemini. Idris runs Claude. Same prompt, side by side.**

Take a topic from a volunteer in the room. If nobody volunteers within ten seconds, use the running example.

Round 1, the vague prompt, in both tools:

```
How should I evaluate my model?
```

Round 2, the full four-part prompt, in both tools:

```
You are a reviewer for a software engineering conference, experienced in
empirical studies with student participants.

I ran a study where 60 undergraduate students at a Nigerian university
completed two programming tasks, half with an AI code assistant and half
without. I measured completion time and defect count.

Tell me the three threats to validity a reviewer will raise first, and for
each say what additional analysis or reporting would answer it.

Format as a table: threat, why it matters, what I should add.
```

Ask the room afterwards: which part of the recipe made the difference? The answer is usually context. Then ask Idris to say in one sentence where Claude's answer differed from Gemini's, so the room learns that the recipe travels but the tools have personalities.

**Transition into the break:** "Ten minutes. When you come back, we stop demonstrating and you start working on your own question."

---

# BREAK (10 min)

Use it to load the brainstorming chat and check that the notebook for Block 04 is still responsive.

---

# BLOCK 03: BRAINSTORMING, SLIDES 35 TO 41 (25 min)

## Slides 36 and 37: why, and the three moves (3 min)

Say the pattern once: **diverge, attack, converge.** Then the operational instruction that people forget: **all three moves in one chat**, so the model keeps the earlier ideas in view.

## Slides 38 to 40: demonstrate the three moves live (8 min)

Run all three on the running example before the room does it. One chat, three prompts.

**Move 1, generate:**

```
You are a senior researcher in software engineering education with a strong
publication record in empirical studies. I am a lecturer at a Nigerian
university interested in how students use AI code assistants.

Help me brainstorm 8 candidate research questions I could study, ranging
from safe to ambitious. For each, name the data it would need.

Do not evaluate them yet.
```

Point at the last line. Judging too early kills the wide options.

**Move 2, attack:**

```
Now act as a devil's advocate. For each question: state the strongest
objection to it, name the data it would need that I may not be able to get
in a Nigerian university setting, and say why a reviewer might call it not
novel.

Do not be encouraging.
```

Say the line from the slide: questions that die here would have died at month six.

**Move 3, evaluate:**

```
Evaluate each surviving question. Format your response as a table with
these columns: Question, Data availability (low/medium/high), Feasibility
within 12 months (low/medium/high), Novelty (low/medium/high), Biggest risk.

Then recommend the top two and explain why. Do not average the scores into
a single ranking.
```

Then the fourth move, which is not on the slide but is where the value is. Say "one more, to make it usable":

```
Take question [N]. Give me a working title, the research question in one
sentence, three sub-questions each answerable by a separate analysis, and
the null result that would still be worth publishing.
```

## Slide 41: exercise, 12 minutes, timer visible

Groups run all three moves on their own area. Seed areas for anyone stuck:

| | Seed area |
|---|---|
| A | AI code assistants and student learning outcomes |
| B | AI adoption among Nigerian university lecturers and its effect on research output |
| C | Language technology for Hausa in public service delivery |
| D | Detecting AI-generated text in student submissions in a multilingual setting |
| E | Data availability as a constraint on empirical research in Nigerian universities |

The Skeptic's final check is the one to enforce: is the winning question **searchable, feasible, and yours?**

Share-out: three Reporters, one sentence each, questions only. Do not let this run long.

**Everything goes in the shared doc.** The next two blocks start from this question.

**Transition into slide 42:** "You have a question. Now we go to the literature, and this is where the fabrication risk was. So we ground it in papers you actually hold."

---

# BLOCK 04: READING AND SYNTHESIS, SLIDES 42 TO 45 (25 min)

**Rotate the Driver before anything else.** This block uses the second group member's topic.

## Slide 43: reading with Gemini Notebook (5 min demo)

Demonstrate on your notebook, then let them work. Show three things and no more:

1. Upload and wait for the source guide.
2. The citation chip, clicked.
3. The comparison question, which is the one people never think to ask.

**The four questions to give the room**, in this order. They move from description to synthesis:

```
What question does each source ask, what data does it use, and what does it
find? One row per source, in a table.
```

```
Where do these sources disagree? For each disagreement, state the point at
issue, which sources fall on each side, and the reason each gives.
Ignore disagreements that are only differences in wording.
```

```
What do these authors themselves say remains unresolved? Quote the sentence
where each says it and attribute it to the source.
```

```
Build a synthesis matrix as a table with one row per source and these
columns: research question, context and period, data, method, main finding,
stated limitation. Where a source does not report something, write "not
reported" rather than inferring it.
```

Then the one that produces the literature review structure:

```
Group these sources into three to five themes based on the substance of
their findings, not their methods. Name each theme as a phrase that could
be a subsection heading. For each theme, say which sources support it and
which complicate it.
```

Show them **Save to note** so the matrix survives the session, and show the **audio overview** with a custom instruction if the timing allows:

```
Focus on where these papers disagree about method. Assume the listener is a
doctoral student in this field, not a general audience. Do not summarise
each paper in turn.
```

## Slide 44: the verify checklist (3 min)

Four checks. Spend the time on check three, because it is the one nobody does: AI summaries strip the "in this specific population" qualifier, and that qualifier is usually the whole finding.

Run the click-through drill here, two minutes, everyone at once:

> Take the disagreement answer. Click every chip. Find one place where the summary is supported but has dropped a condition the original sentence carried.

Ask for one example out loud. There is always one.

## Slide 45: LIVE DEMONSTRATION, the same PDFs two ways (5 min)

**You run Gemini Notebook. HANDOFF to Idris for the same PDFs attached to Claude.**

Say: "Same three papers, same question, two tools. Notebook gives you provenance. Idris will show you what Claude gives you instead."

The question to use in both:

```
Do these papers agree on what counts as evidence for the effect? Where they
differ, say which paper takes which position and why.
```

The point to land after both answers, in one sentence: Notebook shows you where every claim came from, Claude reasons more freely across the whole set, and you choose by whether you need provenance or reasoning.

## Exercise, 10 minutes

Groups run the four questions on their own uploaded PDFs and produce a synthesis matrix plus named themes in the shared doc.

Share-out: each Reporter names **one genuine disagreement in their literature.** A group that cannot name one has summarised, not synthesised. Send them back to the second question.

**Transition into slide 46:** "That disagreement you just found is your gap. Now you write about it, and the rule changes."

---

# BLOCK 05: WRITING AND REVISION, SLIDES 46 TO 51 (25 min)

**Rotate the Driver again.** This block needs a paragraph of their own prose, so remind them at slide 46 to open something they have written.

## Slides 47 and 48: the rule and the two columns (4 min)

State the rule of the block once: **structure, critique and edit. Never generate.** Then the left column of slide 48 is where the time saving is and none of it carries integrity risk.

## Slides 49 to 51: patterns, template and the reviewer prompt (6 min)

Demonstrate the sequence on your own paragraph, live. Four steps, in order.

**Step 1, outline only:**

```
Here is my synthesis of ten sources and the themes I found. Produce an
outline for the literature review section: headings, and one line per
paragraph stating what that paragraph argues and which sources it draws on.

Produce the outline only. Do not write any prose.
```

**Step 2, write the paragraph yourself.** Say plainly that you are not going to demonstrate this part because there is nothing to demonstrate.

**Step 3, critique without rewriting:**

```
Below is a paragraph from a literature review. Do not rewrite it and do not
produce an improved version.

Identify only:
- claims not supported by a cited source
- verbs stronger than the evidence behind them
- sentences longer than 40 words
- hedging that is vague rather than calibrated
- any place where two sources are treated as agreeing when they may not

Quote the phrase and state the problem in one line for each.

[paste paragraph]
```

Point at "do not rewrite". That clause is the whole difference between using a critic and using a ghostwriter.

**Step 4, the reviewer prompt from slide 51.** Run it exactly as it appears on the slide, then say the thing that sells it: this is the cheapest quality gain available to anyone in this room, it takes ninety seconds, and it carries no disclosure burden because nothing it produces goes into your paper.

**One more worth showing**, and for many in the room the highest-value use of the day:

```
This paragraph was written by a non-native English speaker. Correct grammar,
article use and prepositions only. Do not change the vocabulary, the sentence
structure or the argument. Show me what you changed and why.
```

Note the SAGE position from Block 07: assistive editing of your own words is exempt from disclosure under some publishers. Check yours.

## Exercise, 12 minutes

1. Outline from their Block 04 themes, then edit the outline by hand.
2. Write one paragraph, tools closed, six minutes.
3. Run the critique prompt.
4. Run the reviewer prompt from slide 51.
5. Revise.

**Idris runs the same exercise in Claude for anyone who wants the comparison.** Ask him to take the second half of the room.

Share-out: one person reads their sentence before and after. That is the whole share-out.

**Transition into slide 52:** "Everything so far, you supervised turn by turn. Now the tool works for ten minutes on its own, and the verification problem gets bigger, not smaller."

---

# BLOCK 06: AGENTS, SLIDES 52 TO 57 (12 min)

## Slide 53: what makes it agentic (2 min)

The line that matters: never watch an agent think. Launch it, then do something else.

## Slide 54: LIVE DEMONSTRATION, the Deep Research duel (5 min)

**Launch Gemini Deep Research first, then hand to Idris to launch Claude Research on the same question, then talk over both while they run.**

The question, using the room's own material if a volunteer offers one:

```
Survey the empirical evidence since 2020 on whether AI code assistants
improve or degrade the quality of code produced by novice programmers.
Organise by study design. For each strand give the main finding, the
setting, and the principal criticism made of it. List every source with a
working link. Note explicitly where evidence from African or other
low-resource settings is missing.
```

While it runs, cover the verification point: an agent produces twenty sources instead of three, which makes people verify less exactly when they should verify more. State the rule for agent output: **spot-check five sources at random, and if two fail, distrust the whole report.**

When they finish, compare on three axes out loud: coverage, source quality, and whether either one noticed the missing African evidence.

## Slide 55: your own agent run (3 min)

Everyone launches Deep Research on their question card from Block 03, then closes the tab and moves on. Tell them it will be waiting after the ethics block.

## Slides 56 and 57 (2 min, or cut)

Show a Gem and a Claude Project only if you are on time. One sentence each: this is how you stop re-pasting your context every morning.

**Transition into slide 58:** "You now have output from four tools with your name about to go on it. Idris will take the rules that decide whether that is fine or a problem."

---

# BLOCK 07: ETHICS, SLIDES 58 TO 63 (15 min)

**HANDOFF: Idris leads this block.** You take questions from the floor while he runs the debate.

The debate on slide 62 is the point. Ten minutes, one verdict per scenario per group, then defend. Expect disagreement on A and D, and let it run.

Two things to make sure are said before the block closes, since they answer the show of hands from slide 3:

- Concealment is the offence, not use.
- The disclosure sentence on slide 61 is directly usable. Fill the brackets and it is done.

Add the log instruction with a concrete form, because "keep a log" is too vague to act on:

> One row per use: date, tool, what you asked it to do, what you did with the output. A spreadsheet is enough. Start it on day one of a project, not at submission.

**Transition into slide 64:** "Last stretch. Here is the whole day on one screen, and what you do with it on Monday."

---

# BLOCK 08: CLOSE, SLIDES 64 TO 68 (10 min)

## Slide 65: the five commitments

Tell them to photograph it.

## Slide 66: the pipeline

Read the five rows slowly. Point out that the Publish row has no tool in the middle column, and say why: nothing verifies for you.

## Slide 67 and 68

Pause on 67. Then the close.

**The final ask, which is not on a slide.** Before people leave, get each group to write one line in the shared doc:

> One thing we will do differently on Monday.

Read two of them aloud. That is the ending.

---

# APPENDIX A: EVERY PROMPT, IN ORDER

**Block 01, the demo**
1. Five most important peer-reviewed studies on [thin topic], with DOIs. (Gemini, to fail)
2. What do these sources say about [topic]? (Notebook, to succeed)
3. A question outside the corpus. (Notebook, to refuse)
4. Three papers on your topic, then verify all three. (Everyone)
5. Ask blind, then ask again after stating your belief. (Sycophancy demo)

**Block 02, prompting**
6. The vague prompt, then the four-part prompt, same question, both tools.

**Block 03, brainstorming, one chat**
7. Persona plus broad area, 8 questions, do not evaluate yet.
8. Devil's advocate: strongest objection, data you cannot get, why not novel.
9. Evaluation table: data, feasibility, novelty, biggest risk. Do not average.
10. Title, one-sentence question, three sub-questions, publishable null result.

**Block 04, reading and synthesis, in Notebook**
11. What does each source ask, use and find? Table.
12. Where do these sources disagree, who is on each side, and why?
13. What do the authors say remains unresolved? Quote and attribute.
14. Synthesis matrix, six columns, "not reported" where absent.
15. Group into three to five themes by substance, named as subsection headings.
16. Audio overview with a custom focus instruction.

**Block 05, writing**
17. Outline only, no prose.
18. Critique without rewriting, five specific faults.
19. The sceptical reviewer prompt from slide 51.
20. Grammar and article correction only, vocabulary and structure preserved.

**Block 06, agents**
21. The Deep Research survey prompt, organised by study design, with the missing-evidence clause.

---

# APPENDIX B: SEED RESEARCH QUESTIONS FOR STUCK GROUPS

Give these out only when a group has stalled for more than two minutes.

**Computing and software engineering**
- Do AI code assistants reduce defect density in novice code, or move defects from syntax to logic?
- How do final-year students in Nigerian universities actually verify code an assistant produced?
- What proportion of AI-suggested library imports in student projects are unmaintained or vulnerable?

**AI and language**
- How much does multilingual pre-training help Hausa sentiment classification once training data size is held constant?
- Can machine-generated text detectors trained on English transfer to Hausa, Yoruba or Igbo?
- What is lost when a low-resource language dataset is built by translation rather than by native annotation?

**AI in higher education**
- How do lecturers at Nigerian universities decide whether student work is AI-assisted, and how accurate are those judgements?
- Does requiring disclosure change how students use AI, or only what they say about it?
- What is the effect of AI availability on the range of research questions postgraduates attempt?

**Cross-disciplinary, for non-computing groups**
- Take the deck's economics example: transmission of a rate change in an import-dependent economy.
- Take the deck's clinical example: differential diagnosis and first-line tests, as a triage table.
- Data availability itself as a research constraint: what proportion of published Nigerian empirical work relies on data that cannot be obtained again?

---

# APPENDIX C: THE VERIFICATION TABLE

Put this on the board for Block 01 and reuse it in Block 06.

| Reference as given | Exists | Authors right | Year right | DOI resolves | Verdict |
|---|---|---|---|---|---|
| | | | | | real / distorted / fabricated |

**Real.** Everything matches. Use it.
**Distorted.** The paper exists, the details are wrong. The dangerous category, because it passes a glance and fails a copy-editor.
**Fabricated.** No such paper.

The tally is what each Reporter states at the close of Block 01.

---

# APPENDIX D: TROUBLESHOOTING

| Problem | What you do |
|---|---|
| Sign-in fails | Almost always a personal Gmail rather than @buk.edu.ng, or the workspace prompt was not accepted. Take names for IT and pair the person up. Do not spend session time on it. |
| Gemini does not fabricate on your demo topic | Switch to a thinner topic on the spot. Hausa or Kano-specific queries almost always produce a fabrication. |
| Notebook is slow to process uploads | Move to the questions on the pre-built notebook and let theirs process in the background. |
| Network fails during a demo | Use the screenshots and narrate. Do not stall the room and do not retry twice. |
| Deep Research still running at the end of the block | That is expected. Tell them to check it after the ethics block. |
| A group has no PDFs | Shared corpus link, or a groupmate's papers. Nobody watches only. |
| Someone challenges the sycophancy numbers | The references are on slide 24. Offer to send them rather than defending figures from memory. |
| Someone asks whether their journal allows this | Slide 59 gives the publisher, then tell them to check the specific journal. Requirements differ under one imprint. |
| You are running long | Cut slides 56 and 57, and run the ethics debate on scenarios A and D only. |

---

# APPENDIX E: THE HANDOFF POINTS WITH IDRIS

| Slide | What Idris does | Your line |
|---|---|---|
| 21 | Claude setup, free tier, daily limit | "That is the Google side. Idris runs Claude for the rest of the day." |
| 34 | Same four-part prompt in Claude | "Same recipe, different tool. Idris, run it in Claude." |
| 45 | Same PDFs attached to Claude | "Notebook gives provenance. Idris will show you what Claude gives you instead." |
| 54 | Claude Research, against Deep Research | "Both launched. Idris, take us through what yours came back with." |
| 56 | Claude Projects, against Gems | "Two ways to stop re-pasting your context. Idris has the Claude one." |
| 58 to 63 | Leads the ethics block and the debate | "You now have output from four tools with your name about to go on it. Idris has the rules." |

Agree one thing with him before the session: when the two tools disagree in a demo, **neither of you defends your tool.** The disagreement is the teaching point, and the room should leave choosing by task rather than by brand.
