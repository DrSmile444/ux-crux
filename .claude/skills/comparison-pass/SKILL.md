---
name: comparison-pass
description: Comparison pass — compare a new book, video, talk, article, or set of research notes against the ux-crux rule catalog, corroborate each claim against primary sources, and ship the genuine gaps as new rules (explore, propose, apply, archive, commit). Use when the user supplies a source, or notes extracted from one, to improve the ux-crux skills.
license: MIT
metadata:
  internal: true
---

A comparison pass turns one source into the few rules the catalog is missing, each standing on a foundation beyond whoever voiced it. The catalog holds named-source rules in `src/skills/<domain>/references/*.md`; the specs in `openspec/specs/ux-crux/<domain>/spec.md` mirror them. Each pass follows the same path, and each step ends on a checkable criterion.

## 1. Read the source as claims

The user supplies extracted notes (items with category, when it applies, reviewer lens, exceptions, example) and often the original. Treat every item as a claim to verify, including its apparent novelty. Open the original at the cited place whenever an item looks doubtful.

When the source is a YouTube video and the user gives only the link, fetch the transcript yourself. Work in the session scratchpad directory, never inside the repository:

1. Read the title and channel: `curl -s "https://www.youtube.com/oembed?url=<video-url>&format=json"`. `WebFetch` on the watch page returns only the title.
2. Fetch the captions with the first tool that works:
   - `yt-dlp --skip-download --write-auto-subs --sub-langs en -o v "<video-url>"`
   - `npm init -y && npm i youtube-transcript`, then `node -e "import('youtube-transcript').then(async m=>{const t=await m.YoutubeTranscript.fetchTranscript('<video-id>');require('fs').writeFileSync('t.txt',t.map(x=>x.text).join(' '))})"`. This worked where `pip` and `venv` failed.
   - `youtube_transcript_api` (Python), when `pip` works.
3. Read `t.txt` and restate each principle as one claim. Captions are auto-generated, so check numbers, names and study titles against the primary source in step 4.
4. If no captions exist, ask the user for notes or a transcript. Do not guess the content from the title.

The transcript is working material. Shipped files name the video's title and author, never the transcript.

Done when each item is restated as one testable claim.

## 2. Triage

- **Gap**: concrete, checkable from static evidence (screenshot, code, design, copy), and absent from the catalog after step 3.
- **Covered**: an existing rule already expresses it. Add at most a citation to that rule's `Sources` cell.
- **Scoped out**: team process, testing and research methodology, advocacy and ROI, organisational dynamics, physical-hardware design, single-industry verticals. The source's own process chapters land here.

## 3. Verify each candidate against the catalog

Search the concept under several wordings across `src/skills` (`grep -rniE '<a|b|c>' src/skills --include='*.md'`, quoted so zsh keeps the glob literal) and the matching spec files. Read the nearest rule in full. A candidate that differs from an existing rule only in emphasis is covered (for example, "floating placeholder labels" was already `F01`, "placeholder is not the only label").

Done when each gap names its nearest existing rule ID and the one sentence that distinguishes it, and each covered item names the rule that covers it.

## 4. Corroborate each surviving gap

A rule needs a foundation beyond the person who stated it. Search for it, using the available web search and fetch tools, for every gap that survived step 3 (covered and scoped-out items need no search). Search the claim's core effect rather than the speaker's phrasing, in this order: standards and guidelines (WCAG, ISO, Apple HIG, Material, W3C), peer-reviewed papers and meta-analyses, research organisations (NN/g, Baymard), then the source's own citations.

- **Book**: when it cites a primary source, locate that source and confirm it says what the book says (effect, population, conditions). When it cites none, the book is the reference for its author's published method, adopted at `Contextual` evidence once one corroboration search finds nothing contradicting it.
- **Video, talk, post, thread**: the speaker's authority does not stand in for evidence, so a gap is adopted only with independent corroboration from the order above. When the speaker cites a study, open the original and word the rule to what that study tested (precedent: advice to pad instant tasks with waiting was dropped because the cited experiments tested something else). When the speaker's own published book documents the method, handle it as the book case.
- **Contested findings** (replication disputes, meta-analyses that disagree): adopt the qualified part the evidence supports and name the dispute in the rule or in `ethics.md` (precedent: choice overload).
- **Cite what was opened**: every `Sources` entry comes from a page or paper read during this pass, recorded as authors, title, venue, year. When no search tool is available or a source cannot be reached, mark the gap `uncorroborated` and hand the decision to the user.
- **Evidence level**: `Strong` for a confirmed standard or study (replicated where replication is known); `Contextual` for a book author's documented method without independent study. A claim with neither is `rejected`, recorded in the CHANGELOG entry with its reason (precedent: the unsourced primary-colors and golden-ratio claims in 0.1.20).
- **Sources cell**: the primary source first, then `(via <Author, Title>)` naming the work that surfaced it. Shipped files name the work, never how its content was retrieved (transcript, notes) and never a private research folder path.

Done when each gap holds a confirmed primary source or a book-as-reference marker plus an evidence level, and each non-adopted claim holds its `rejected` or `uncorroborated` reason.

## 5. Report and wait

Present four sections: covered (with rule IDs), gaps grouped by domain (each with its source location, backing source, and evidence level), rejected or uncorroborated (with the reason), scoped out (with the reason). End with one question about scope. Write nothing before the user confirms. A confirmation message commonly lists the remaining steps (propose, apply, archive, commit, push); run exactly those.

## 6. Place each rule

- **Domain** follows what the rule reviews: `usability` (flows, controls, navigation, forms, search, visual hierarchy, affordances), `accessibility` (assistive technology, WCAG), `psychology` (mechanisms, ethics), `product` (purpose, content, information architecture, voice), `trust` (permissions, safety, cost, goodwill), `review` (cross-lens methodology).
- **File**: `core.md` holds platform-agnostic rules. `mobile.md` holds iOS/Android-specific minimums. `web.md` holds rules that are web-specific by nature.
- **Shared model**: a rule that changes how every skill scores or reports becomes a prose clarification in `src/shared/` using the existing levels and vocabulary.
- **Review standing checks** take the next `V` ID, modeled on `V07` and `V09` (run alongside lens selection, `NOT ASSESSABLE` when the precondition is absent).
- **IDs**: grep the target prefix for its highest ID and take the next. A prefix's numbering spans all files of its domain (accessibility `X` runs across `core.md` and `mobile.md`; grep both). Each ID lives in exactly one file. Introduce a new prefix only when no family fits (`GW` in `trust`).
- **Consolidation**: a taxonomy whose items share one mechanism becomes one framework rule that names every item in its text and scenarios (`AF01`, `GW01`). An item with a different mechanism or evidence type becomes its own rule (`GW02`). Aim for one to three rules per domain; a source that is unusually rule-dense can exceed that, with the count rationale stated in the proposal.
- **Rule text** is worded to what the corroborating source supports (its effect, population, conditions), and carries a "distinct from `<nearest rule>`" sentence, the condition under which it does not apply, and `NOT ASSESSABLE` guidance for evidence that cannot show it (markup-dependent rules report `NOT ASSESSABLE` from a screenshot alone). Its `Evidence` and `Sources` cells come from step 4.
- **Prose to update**: the domain's "How the skill should apply these" paragraph, and `SKILL.md` when its procedure enumerates rules.

Done when each new rule has a file, an ID verified free, a nearest-rule distinction, and an applying-prose mention.

## 7. Ship

Run `/opsx:propose` (include `design.md`: placement and consolidation choices are real decisions; the proposal's Why names what was covered, rejected, and scoped out), then `/opsx:apply`, then `/opsx:archive` with the delta-spec sync. The release gate and documentation tasks in `openspec/config.yaml` are part of apply. Details the config leaves implicit:

- **Version**: one patch bump per pass (`0.1.N` to `0.1.N+1`), whatever the rule count.
- **Rule count**: `grep -rhoE '^\| [A-Z]+[0-9]+[A-Z]? \|' src/skills --include='*.md' | wc -l`; the result goes into the README opening paragraph and must equal previous total plus new rules.
- **README**: one line in "Evidence base", matching the neighbouring entries.
- **CHANGELOG**: newest entry first, headed `## 0.1.N — <summary> from a <Source> comparison pass`. Body: the source and why the pass is large or small; what was confirmed covered (rule IDs); what was rejected or left uncorroborated, and why; what was scoped out and why; one bullet per new rule grouped by domain; a final bullet with the new total.
- **Commit**: one `feat: add <summary> from a <Source> comparison pass` commit holding source, regenerated `skills/` and `plugin/`, README, CHANGELOG, main specs, and the archived change. Push when the user's request includes it.
- **Generated trees** (`skills/`, `plugin/`) change through `npm run build` only.

Done when `npm run validate` passes, `openspec validate --specs` passes, the recount matches the README, and the working tree is clean after the commit.
