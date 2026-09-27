import { createFileRoute, Link } from "@tanstack/react-router";
import { AuroraBackground } from "@/components/AuroraBackground";
import { SiteHeader } from "@/components/SiteHeader";
import { OpportunityCard } from "@/components/OpportunityCard";
import { StageBadge } from "@/components/StageBadge";
import {
  OPPORTUNITIES,
  STAGE_LABELS,
  type Stage,
} from "@/data/opportunities";
import { loadProfile, useSaved } from "@/lib/profile";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Your opportunity roadmap — Opportunity Radar" },
      {
        name: "description",
        content:
          "Your personalized opportunity roadmap: what to explore, prepare for, apply to, and plan for later.",
      },
      { property: "og:title", content: "Your opportunity roadmap" },
      {
        property: "og:description",
        content: "A stage-ordered map of the opportunities that matter for you.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Dashboard,
});

const STAGE_ORDER: Stage[] = ["apply", "prepare", "explore", "plan"];

const STAGE_ACCENT: Record<Stage, string> = {
  apply: "border-t-rose",
  prepare: "border-t-amber",
  explore: "border-t-primary",
  plan: "border-t-accent",
};

function Dashboard() {
  const profile = loadProfile();
  const saved = useSaved();
  const savedOpps = OPPORTUNITIES.filter((o) => saved.includes(o.id));

  const byStage = (stage: Stage) =>
    OPPORTUNITIES.filter((o) => o.stage === stage);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <AuroraBackground />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-6">
        <SiteHeader />

        {/* Greeting */}
        <section className="animate-rise mt-8 rounded-lg border border-border bg-card p-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-accent/30 bg-accent/10 px-3 py-1.5 text-[12px] font-medium text-accent">
                <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
                Your map is live
              </div>
              <h1 className="font-display text-[32px] font-semibold tracking-tight">
                Your opportunity roadmap
              </h1>
              <p className="mt-2 max-w-[52ch] text-[14px] leading-relaxed text-muted-foreground">
                {profile.classLevel
                  ? `Class ${profile.classLevel}${profile.stream ? ` · ${profile.stream}` : ""} — everything below is ordered by the stage you're in, not by deadlines alone.`
                  : "Everything below is ordered by student stage. Complete onboarding to personalize it further."}
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                to="/explore" search={{ q: "", category: "", stream: "", type: "", status: "" }}
                className="rounded-md bg-primary px-5 py-2.5 text-[13px] font-semibold text-primary-foreground"
              >
                Explore all
              </Link>
              <Link
                to="/scrapbook"
                className="rounded-md border border-border bg-secondary px-5 py-2.5 text-[13px] font-medium text-foreground"
              >
                My scrapbook
              </Link>
            </div>
          </div>
        </section>

        {/* Roadmap columns */}
        <section className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {STAGE_ORDER.map((stage, i) => (
            <div
              key={stage}
              className={`animate-rise rounded-lg border border-border border-t-4 bg-card p-5 ${STAGE_ACCENT[stage]}`}
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <p className="text-[11px] font-medium tracking-[0.15em] text-muted-foreground uppercase">
                {stage === "apply"
                  ? "Applications coming up"
                  : stage === "explore"
                    ? "Relevant for you"
                    : STAGE_LABELS[stage]}
              </p>
              <p className="font-display mt-1 text-[19px] font-semibold">
                {STAGE_LABELS[stage]}
              </p>
              <div className="mt-4 space-y-3">
                {byStage(stage).length === 0 && (
                  <p className="rounded-md bg-secondary p-3 text-[12px] text-muted-foreground">
                    Nothing here yet — check back as we add more.
                  </p>
                )}
                {byStage(stage).map((o) => (
                  <Link
                    key={o.id}
                    to="/opportunity/$id"
                    params={{ id: o.id }}
                    className="block rounded-md bg-secondary p-3 transition-colors hover:bg-muted"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[13px] font-semibold text-foreground">
                        {o.name}
                      </span>
                      <StageBadge stage={o.stage} />
                    </div>
                    <p className="mt-1 text-[11px] text-muted-foreground">
                      {o.typical_window ?? "Timeline needs verification"}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Saved + Prepare now */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="animate-rise rounded-lg border border-border bg-card p-6 lg:col-span-2 [animation-delay:120ms]">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-[16px] font-semibold">
                Prepare now
              </h2>
              <span className="text-[12px] text-muted-foreground">
                Start in Class 11, apply in Class 12
              </span>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {byStage("prepare")
                .slice(0, 4)
                .map((o) => (
                  <OpportunityCard key={o.id} opportunity={o} />
                ))}
            </div>
          </div>

          <div className="animate-rise rounded-lg border border-border bg-card p-6 [animation-delay:200ms]">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-[16px] font-semibold">
                Saved opportunities
              </h2>
              <span className="rounded-md bg-primary/20 px-2.5 py-0.5 text-[11px] font-medium text-foreground">
                {savedOpps.length} saved
              </span>
            </div>
            <div className="mt-5 space-y-3">
              {savedOpps.length === 0 && (
                <p className="rounded-md bg-secondary p-4 text-[12px] leading-relaxed text-muted-foreground">
                  Nothing saved yet. Tap "Save" on any opportunity to pin it
                  here.
                </p>
              )}
              {savedOpps.map((o) => (
                <Link
                  key={o.id}
                  to="/opportunity/$id"
                  params={{ id: o.id }}
                  className="block rounded-md bg-secondary p-4 transition-colors hover:bg-muted"
                >
                  <div className="flex items-center gap-2 text-[13px] font-medium text-foreground">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    {o.name}
                  </div>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    {o.category} · {o.opportunity_type}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Explore more */}
        <section className="animate-rise mt-6 rounded-lg border border-border bg-card p-6 [animation-delay:280ms]">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-[16px] font-semibold">
              Explore more
            </h2>
            <Link
              to="/explore" search={{ q: "", category: "", stream: "", type: "", status: "" }}
              className="text-[12px] text-muted-foreground transition-colors hover:text-foreground"
            >
              View all {OPPORTUNITIES.length} →
            </Link>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {OPPORTUNITIES.slice(0, 3).map((o) => (
              <OpportunityCard key={o.id} opportunity={o} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
