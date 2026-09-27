import { createFileRoute, Link } from "@tanstack/react-router";
import { AuroraBackground } from "@/components/AuroraBackground";
import { SiteHeader } from "@/components/SiteHeader";
import { EntryCard } from "@/components/EntryCard";
import { groupByMonth, useEntries } from "@/data/scrapbook";
import { OPPORTUNITIES } from "@/data/opportunities";
import { loadProfile, useSaved } from "@/lib/profile";

export const Route = createFileRoute("/showcase")({
  head: () => ({
    meta: [
      { title: "Showcase profile — Opportunity Radar" },
      {
        name: "description",
        content:
          "A public showcase: part portfolio, part scrapbook, part student resume — controlled by the student.",
      },
      { property: "og:title", content: "Showcase profile" },
      {
        property: "og:description",
        content: "Portfolio + scrapbook + student resume, in one luminous profile.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Showcase,
});

function Showcase() {
  const profile = loadProfile();
  const entries = useEntries().filter((e) => e.isPublic);
  const saved = useSaved();
  const participated = OPPORTUNITIES.filter((o) => saved.includes(o.id));
  const skills = [...new Set(entries.flatMap((e) => e.skills))];
  const timeline = groupByMonth(entries);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <AuroraBackground />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-6">
        <SiteHeader />

        {/* Profile header */}
        <section className="animate-rise mt-8 rounded-lg border border-border bg-card p-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="grid h-16 w-16 place-items-center rounded-lg bg-primary font-display text-[22px] font-bold text-primary-foreground">
                S
              </div>
              <div>
                <div className="inline-flex items-center gap-2 rounded-md border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-medium text-accent">
                  <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
                  Public showcase
                </div>
                <h1 className="font-display mt-2 text-[28px] font-semibold tracking-tight">
                  Student showcase
                </h1>
                <p className="mt-1 text-[13px] text-muted-foreground">
                  {profile.classLevel
                    ? `Class ${profile.classLevel}${profile.stream ? ` · ${profile.stream}` : ""}`
                    : "Class 11–12 student"}
                  {profile.interests.length > 0 &&
                    ` · ${profile.interests.slice(0, 3).join(" · ")}`}
                </p>
              </div>
            </div>
            <Link
              to="/scrapbook"
              className="rounded-md border border-border bg-secondary px-5 py-2.5 text-[13px] font-medium text-foreground transition-colors hover:bg-muted"
            >
              Edit in scrapbook
            </Link>
          </div>
          <p className="mt-6 max-w-[60ch] text-[14px] leading-relaxed text-muted-foreground">
            Part portfolio, part scrapbook, part resume — curated by the
            student. Curiosity, creativity, initiative and contribution count
            here as much as marks.
          </p>
        </section>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Featured achievements */}
          <div className="animate-rise rounded-lg border border-border bg-card p-6 lg:col-span-2 [animation-delay:80ms]">
            <h2 className="font-display text-[16px] font-semibold">
              Featured achievements
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {entries.slice(0, 4).map((e) => (
                <EntryCard key={e.id} entry={e} />
              ))}
              {entries.length === 0 && (
                <p className="col-span-full rounded-md bg-secondary p-6 text-[13px] text-muted-foreground">
                  Nothing public yet — add memories in the scrapbook.
                </p>
              )}
            </div>
          </div>

          {/* Skills + interests + opportunities */}
          <div className="space-y-6">
            <div className="animate-rise rounded-lg border border-border bg-card p-6 [animation-delay:120ms]">
              <h2 className="font-display text-[16px] font-semibold">Skills</h2>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-secondary px-2.5 py-1 text-[11px] font-medium text-foreground"
                  >
                    {s}
                  </span>
                ))}
                {skills.length === 0 && (
                  <p className="text-[12px] text-muted-foreground">
                    Skills appear as you document experiences.
                  </p>
                )}
              </div>
            </div>
            <div className="animate-rise rounded-lg border border-border bg-card p-6 [animation-delay:160ms]">
              <h2 className="font-display text-[16px] font-semibold">
                Opportunities participated in
              </h2>
              <div className="mt-4 space-y-2">
                {participated.map((o) => (
                  <div
                    key={o.id}
                    className="flex items-center gap-2 rounded-md bg-secondary px-3 py-2.5 text-[12px] text-foreground"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {o.name}
                  </div>
                ))}
                {participated.length === 0 && (
                  <p className="text-[12px] text-muted-foreground">
                    Saved opportunities show up here.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Journey */}
        <section className="animate-rise mt-6 rounded-lg border border-border bg-card p-7 [animation-delay:200ms]">
          <h2 className="font-display text-[16px] font-semibold">My journey</h2>
          <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map(([month, items]) => (
              <div key={month}>
                <p className="text-[11px] font-medium tracking-[0.15em] text-accent uppercase">
                  {month}
                </p>
                <div className="mt-2 space-y-2 border-l border-border pl-4">
                  {items.map((e) => (
                    <p key={e.id} className="text-[12px] text-muted-foreground">
                      → <span className="text-foreground">{e.title}</span>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
