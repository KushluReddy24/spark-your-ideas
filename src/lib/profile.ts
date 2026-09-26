/*
 * Student profile + saved opportunities.
 *
 * V1 persists to localStorage so the full loop
 * (profile → discover → save) works without a backend. The shape is a plain
 * DTO so it can move to a database table later unchanged.
 */

import { useSyncExternalStore } from "react";

export interface StudentProfile {
  classLevel: number | null;
  stream: string | null;
  subjects: string[];
  interests: string[];
  careers: string[];
  opportunityTypes: string[];
}

export const EMPTY_PROFILE: StudentProfile = {
  classLevel: null,
  stream: null,
  subjects: [],
  interests: [],
  careers: [],
  opportunityTypes: [],
};

const PROFILE_KEY = "opportunity-radar:profile";
const SAVED_KEY = "opportunity-radar:saved";

function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key: string, value: unknown) {
  window.localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new Event("or:storage"));
}

export function loadProfile(): StudentProfile {
  return readJson<StudentProfile>(PROFILE_KEY, EMPTY_PROFILE);
}

export function saveProfile(profile: StudentProfile) {
  writeJson(PROFILE_KEY, profile);
}

export function hasProfile(): boolean {
  return loadProfile().classLevel !== null;
}

export function loadSaved(): string[] {
  return readJson<string[]>(SAVED_KEY, []);
}

export function toggleSaved(id: string): string[] {
  const saved = loadSaved();
  const next = saved.includes(id)
    ? saved.filter((s) => s !== id)
    : [...saved, id];
  writeJson(SAVED_KEY, next);
  return next;
}

function subscribe(callback: () => void) {
  window.addEventListener("or:storage", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("or:storage", callback);
    window.removeEventListener("storage", callback);
  };
}

export function useSavedIds(): string[] {
  return useSyncExternalStore(
    subscribe,
    () => JSON.stringify(loadSaved()),
    () => "[]",
  ) as unknown as string[] extends never ? never : string[];
}

export function useSaved(): string[] {
  const raw = useSyncExternalStore(
    subscribe,
    () => window.localStorage.getItem(SAVED_KEY) ?? "[]",
    () => "[]",
  );
  try {
    return JSON.parse(raw) as string[];
  } catch {
    return [];
  }
}
