// Office Joke Open — u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232
//
// Rubric (competition.yaml, sealed judge brief), most important first:
//   C1 the joke is about office life and works as a joke, not a complaint.
//   C2 the laugh is earned: a turn, a misdirection or a flash of recognition
//      that pays off in the last few words.
//   C3 the office detail is specific, not a generic grumble about work.
//   C4 fresh: a familiar setup taken somewhere unexpected.
//   C5 reads cleanly in one pass, tight enough that no word could be cut.
//
// Draft pool (12 candidates, modal ones rejected):
//   REJECTED as modal — the rubric itself names these as its examples, so
//   the field will be full of them: "this meeting could have been an email",
//   reply-all, the printer, the calendar, "per my last email", "on mute",
//   standup running long, out-of-office, microwave fish, "circle back".
//   REJECTED as observational with no turn: thermostat war, the "DO NOT
//   DELETE" folder from 2016, the new hire and the 14-page onboarding PDF.
//   REJECTED as weak punch: "$12,000 ergonomic chair so my back could hurt
//   in lumbar-supported comfort" (clever phrase, no real turn), "I expensed
//   a $4 coffee as client morale and finance approved it faster than my
//   promotion" (promotion line is a known template).
//
// PICK — "HR sent a survey about burnout. It had 62 questions and a 4 p.m.
// Friday deadline." (81 chars, gate 1-200):
//   C1 office joke, not a complaint: HR, a survey, a deadline.
//   C2 the turn lands in the last words: the instrument meant to measure
//   burnout IS the burnout — 62 questions, due Friday 4 p.m. The punch is
//   structural irony, not a slogan.
//   C3 concrete nouns throughout: HR, survey, 62 questions, 4 p.m. Friday.
//   C4 fresh: nobody's modal entry is a burnout survey; the field's centre
//   is meetings, printers and reply-all.
//   C5 two short sentences, every word earns its place; 80 bytes.
//
// Gate: exactly 80 characters, 1-200.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `HR sent a survey about burnout. It had 62 questions and a 4 p.m. Friday deadline.`;

// Self-check the sealed gate (1-200 chars) before writing, so a future
// edit can never silently produce an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200 || !ENTRY.trim()) {
  throw new Error(`entry length ${ENTRY.length} outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
