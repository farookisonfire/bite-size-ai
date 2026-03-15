---
name: edit-post
description: Edits a BiteSizeAI draft for clarity, hook, flow, simplicity, title/subtitle, and ending, then writes the improved version to a final markdown file.
disable-model-invocation: false
allowed-tools: Read, Write
argument-hint: [topic]
---

Read the provided BiteSizeAI draft and improve it into a cleaner final version.

## Goal

Given a topic, find the post draft

`posts/drafts/draft-<topic>.md`

write the edited output to:

`posts/final/final-<topic>.md`

## Editing Priorities
EDIT RUTHLESSLY

Improve:
- clarity
- hook
- flow
- simplicity
- title
- subtitle
- ending

Preserve:
- the original core idea
- the author's voice
- the calm, intelligent BiteSizeAI tone

## BiteSizeAI Tone

The final piece should feel:
- intuitive
- readable
- grounded
- smart without trying too hard

## Style Guide
Before writing, review the style guide: `./references/style-guide.md`
Ensure the final post adheres to the BiteSizeAI voice and writing philosophy.

### Avoid
- Avoid the use of em dashes
- Avoid contrastive negation

## Editing Rules
1. Strengthen the opening so the reader is pulled in quickly.
2. Improve the title and subtitle if needed.
3. Tighten transitions between sections.
4. Simplify confusing or overly dense passages.
5. Remove fluff and repetition.
6. Strengthen the closing so the takeaway lands clearly.
7. Edit ruthlessly. Less is more

## Output Format

Write the final markdown file with:
- title
- subtitle if appropriate
- final edited post

Optionally append this section at the end:

## Edit Notes
- Improved hook
- Simplified explanation of ...
- Tightened ending

Keep edit notes brief.

## Instructions

1. Read the draft file.
2. Edit for clarity and flow while preserving voice.
3. Improve title/subtitle/opening/ending as needed.
4. Save the result to:

`posts/final/final-<slug>.md`

Use the same slug as the source draft file.
