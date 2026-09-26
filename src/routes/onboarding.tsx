import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AuroraBackground } from "@/components/AuroraBackground";
import { SiteHeader } from "@/components/SiteHeader";
import {
  OPPORTUNITY_TYPES,
  STREAMS,
} from "@/data/opportunities";
import { saveProfile, type StudentProfile } from "@/lib/profile";

export const Route = createFileRoute("/onboarding")({
  head: () => ({
    meta: [
      { title: "Build your opportunity map — Opportunity Radar" },
      {
        name: "description",
        content:
          "Tell us your class, stream, subjects and interests — Opportunity Radar builds your personalized opportunity roadmap.",
      },
      { property: "og:title", content: "Build your opportunity map" },
      {
        property: "og:description",
        content: "Six quick questions to personalize your opportunity roadmap.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Onboarding,
});

const SUBJECTS = [
  "Physics",
  "Chemistry",
  "Mathematics",
  "Biology",
  "Computer Science",
  "Economics",
  "Accountancy",
  "Business Studies",
  "History",
  "Political Science",
  "Psychology",
  "Fine Arts",
];

const INTERESTS = [
  "Robotics",
  "Astronomy",
  "Coding",
  "Design",
  "Writing",
  "Debate",
  "Music",
  "Sports",
  "Research",
  "Entrepreneurship",
  "Photography",
  "Social impact",
];

const CAREERS = [
  "Engineering",
  "Medicine",
  "Pure sciences / research",
  "Mathematics / statistics",
  "Design",
  "Law",
  "Management / economics",
  "Not sure yet",
];

interface Step {
  title: string;
  hint: string;
  multi: boolean;
  options: (string | number)[];
  get: (p: StudentProfile) => (string | number)[];
  set: (p: StudentProfile, values: (string | number)[]) => StudentProfile;
}

const STEPS: Step[] = [
  {
    title: "Which class are you in?",
    hint: "V1 is tuned for Class 11, with Class 12 support.",
    multi: false,
    options: [11, 12],
    get: (p) => (p.classLevel ? [p.classLevel] : []),
    set: (p, v) => ({ ...p, classLevel: (v[0] as number) ?? null }),
  },
  {
    title: "What's your stream?",
    hint: "Pick the one closest to your subjects.",
    multi: false,
    options: STREAMS,
    get: (p) => (p.stream ? [p.stream] : []),
    set: (p, v) => ({ ...p, stream: (v[0] as string) ?? null }),
  },
  {
    title: "Which subjects do you study?",
    hint: "Select all that apply.",
    multi: true,
    options: SUBJECTS,
    get: (p) => p.subjects,
    set: (p, v) => ({ ...p, subjects: v as string[] }),
  },
  {
    title: "What pulls you in?",
    hint: "Areas of interest — inside or outside the classroom.",
    multi: true,
    options: INTERESTS,
    get: (p) => p.interests,
    set: (p, v) => ({ ...p, interests: v as string[] }),
  },
  {
    title: "Any career directions you're curious about?",
    hint: "It's fine to pick 'Not sure yet'.",
    multi: true,
    options: CAREERS,
    get: (p) => p.careers,
    set: (p, v) => ({ ...p, careers: v as string[] }),
  },
  {
    title: "What kinds of opportunities interest you?",
    hint: "We'll weight these in your roadmap.",
    multi: true,
    options: OPPORTUNITY_TYPES,
    get: (p) => p.opportunityTypes,
    set: (p, v) => ({ ...p, opportunityTypes: v as string[] }),
  },
];

function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [profile, setProfile] = useState<StudentProfile>({
    classLevel: null,
    stream: null,
    subjects: [],
    interests: [],
    careers: [],
    opportunityTypes: [],
  });

  const current = STEPS[step]!;
  const selected = current.get(profile);
  const isLast = step === STEPS.length - 1;
  const canContinue = selected.length > 0;

  function toggle(option: string | number) {
    const next = current.multi
      ? selected.includes(option)
        ? selected.filter((s) => s !== option)
        : [...selected, option]
      : [option];
    setProfile(current.set(profile, next));
  }

  function finish() {
    saveProfile(profile);
    navigate({ to: "/dashboard" });
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <AuroraBackground />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-6">
        <SiteHeader />

        <div className="mx-auto mt-14 max-w-2xl">
          <div className="glass animate-rise rounded-[24px] p-8">
            <p className="text-[12px] font-medium tracking-[0.15em] text-muted-foreground uppercase">
              Onboarding · step {step + 1} of {STEPS.length}
            </p>
            <div className="mt-4 flex gap-2">
              {STEPS.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 flex-1 rounded-full ${
                    i <= step ? "bg-primary" : "bg-secondary"
                  }`}
                />
              ))}
            </div>

            <h1 className="font-display mt-7 text-[26px] font-semibold tracking-tight">
              {current.title}
            </h1>
            <p className="mt-1.5 text-[13px] text-muted-foreground">
              {current.hint}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {current.options.map((option) => {
                const active = selected.includes(option);
                return (
                  <button
                    key={String(option)}
                    onClick={() => toggle(option)}
                    className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                      active
                        ? "bg-foreground text-background"
                        : "border border-border bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {String(option)}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="rounded-xl border border-border px-5 py-2.5 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground disabled:opacity-40"
              >
                Back
              </button>
              <button
                onClick={() => (isLast ? finish() : setStep((s) => s + 1))}
                disabled={!canContinue}
                className="rounded-xl bg-gradient-to-r from-primary to-[oklch(0.66_0.17_285)] px-6 py-2.5 text-[13px] font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-40"
              >
                {isLast ? "Build my map →" : "Continue"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
