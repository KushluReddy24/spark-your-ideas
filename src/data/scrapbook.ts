/*
 * Student Scrapbook — entries, categories and local persistence.
 *
 * V1 stores entries in localStorage; the shape is a plain DTO ready to move
 * to a database table later. Entries are "memory cards", not resume rows.
 */

import { useSyncExternalStore } from "react";

export const ENTRY_CATEGORIES = [
  "Academics",
  "Creative",
  "Leadership & Community",
  "Sports",
  "Entrepreneurship",
  "Technology",
  "Communication",
  "Other",
] as const;

export type EntryCategory = (typeof ENTRY_CATEGORIES)[number];

export interface ScrapbookEntry {
  id: string;
  title: string;
  date: string; // ISO date
  category: EntryCategory;
  description: string;
  skills: string[];
  learned: string;
  role: string;
  result: string;
  link: string;
  isPublic: boolean;
}

const KEY = "opportunity-radar:scrapbook";

const SEED: ScrapbookEntry[] = [
  {
    id: "seed-debate",
    title: "Won inter-school debate",
    date: "2026-06-14",
    category: "Communication",
    description:
      "Argued for the motion on AI in classrooms against 12 schools and took first place.",
    skills: ["Public speaking", "Research", "Rebuttal"],
    learned: "Preparation beats improvisation — every strong point started as a note.",
    role: "First speaker",
    result: "1st place",
    link: "",
    isPublic: true,
  },
  {
    id: "seed-ai-project",
    title: "Built my first AI project",
    date: "2026-07-22",
    category: "Technology",
    description:
      "Trained a small image classifier to sort my photo library and wrote up what worked.",
    skills: ["Python", "Machine learning", "Experimentation"],
    learned: "Real data is messy; most of the work was cleaning, not modelling.",
    role: "Solo project",
    result: "Working prototype",
    link: "",
    isPublic: true,
  },
  {
    id: "seed-hackathon",
    title: "Participated in a hackathon",
    date: "2026-08-09",
    category: "Technology",
    description:
      "Built a study-planner prototype in 24 hours with two classmates and demoed it.",
    skills: ["Teamwork", "Prototyping", "Time management"],
    learned: "Shipping something small and working beats a big unfinished idea.",
    role: "Frontend + pitch",
    result: "Finalist",
    link: "",
    isPublic: true,
  },
  {
    id: "seed-volunteering",
    title: "Started a volunteering initiative",
    date: "2026-09-05",
    category: "Leadership & Community",
    description:
      "Organised weekly math tutoring for Class 8 students at a nearby government school.",
    skills: ["Organising", "Teaching", "Commitment"],
    learned: "Showing up every week matters more than a perfect plan.",
    role: "Founder / coordinator",
    result: "Ongoing — 15 students",
    link: "",
    isPublic: true,
  },
];

function read(): ScrapbookEntry[] {
  if (typeof window === "undefined") return SEED;
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as ScrapbookEntry[]) : SEED;
  } catch {
    return SEED;
  }
}

function write(entries: ScrapbookEntry[]) {
  window.localStorage.setItem(KEY, JSON.stringify(entries));
  window.dispatchEvent(new Event("or:storage"));
}

export function loadEntries(): ScrapbookEntry[] {
  return read().sort((a, b) => b.date.localeCompare(a.date));
}

export function addEntry(entry: Omit<ScrapbookEntry, "id">) {
  const id = `entry-${Date.now().toString(36)}`;
  write([...read(), { ...entry, id }]);
}

export function removeEntry(id: string) {
  write(read().filter((e) => e.id !== id));
}

function subscribe(callback: () => void) {
  window.addEventListener("or:storage", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("or:storage", callback);
    window.removeEventListener("storage", callback);
  };
}

export function useEntries(): ScrapbookEntry[] {
  const raw = useSyncExternalStore(
    subscribe,
    () => window.localStorage.getItem(KEY) ?? "",
    () => "",
  );
  if (!raw) return SEED;
  try {
    return (JSON.parse(raw) as ScrapbookEntry[]).sort((a, b) =>
      b.date.localeCompare(a.date),
    );
  } catch {
    return SEED;
  }
}

/** Group entries by "Month Year" for the journey timeline. */
export function groupByMonth(entries: ScrapbookEntry[]) {
  const groups = new Map<string, ScrapbookEntry[]>();
  for (const e of entries) {
    const d = new Date(e.date);
    const key = d.toLocaleDateString("en-IN", {
      month: "long",
      year: "numeric",
    });
    groups.set(key, [...(groups.get(key) ?? []), e]);
  }
  return [...groups.entries()];
}
