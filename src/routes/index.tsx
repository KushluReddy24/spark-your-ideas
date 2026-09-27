import { createFileRoute, Link } from "@tanstack/react-router";
import { AuroraBackground } from "@/components/AuroraBackground";
import { SiteHeader } from "@/components/SiteHeader";
import { StageBadge } from "@/components/StageBadge";
import { CATEGORIES, OPPORTUNITIES } from "@/data/opportunities";
import heroRadar from "@/assets/hero-radar.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Opportunity Radar — Discover opportunities you shouldn't miss" },
      {
        name: "description",
        content:
          "Opportunity Radar helps Indian Class 11–12 students discover exams, olympiads, scholarships and programs — and document their journey. Your story is bigger than your score.",
      },
      { property: "og:title", content: "Opportunity Radar" },
      {
        property: "og:description",
        content:
          "A personalized opportunity map for Class 11–12 students in India. Discover what to prepare for, and document your journey.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <AuroraBackground />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-6">
        <SiteHeader />

        {/* Hero */}
        <section className="relative isolate mt-5 flex min-h-[520px] items-end overflow-hidden bg-ink text-ink-foreground md:min-h-[560px]">
          <img src={heroRadar} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-55" />
          <div className="absolute inset-0 -z-10 bg-ink/50" />
          <div className="w-full p-7 pb-10 md:p-12">
            <div className="max-w-[650px]">
              <div className="mb-5 inline-flex items-center gap-2 border border-ink-foreground/30 px-3 py-1.5 text-[12px] font-medium text-ink-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Built for Class 11–12 students in India
              </div>
              <h1 className="font-display text-[40px] leading-[1.12] font-semibold md:text-[52px]">
                Opportunity Radar
              </h1>
              <p className="mt-4 max-w-[55ch] text-[15px] leading-relaxed text-ink-foreground/90">
                Exams, olympiads, scholarships and programs are scattered
                everywhere. Opportunity Radar turns your class, stream and
                interests into one living map — and a scrapbook for the story
                you're building along the way.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  to="/onboarding"
                  className="rounded-md bg-primary px-6 py-3 text-[14px] font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Build my opportunity map →
                </Link>
                <Link
                  to="/explore" search={{ q: "", category: "", stream: "", type: "", status: "" }}
                  className="rounded-md border border-ink-foreground/50 bg-ink/60 px-6 py-3 text-[14px] font-medium text-ink-foreground transition-colors hover:bg-ink"
                >
                  Explore opportunities
                </Link>
              </div>
              <div className="mt-7 flex flex-wrap gap-2">
                <StageBadge stage="explore" />
                <StageBadge stage="prepare" />
                <StageBadge stage="apply" />
                <StageBadge stage="plan" />
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-wrap gap-x-8 gap-y-2 border-b border-border py-5 text-[12px] font-semibold text-accent">
          <span>{OPPORTUNITIES.length} opportunities tracked</span>
          <span>{CATEGORIES.length} categories</span>
        </div>

        {/* Two pillars */}
        <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="animate-rise border-t-4 border-t-accent py-7 [animation-delay:80ms]">
            <p className="text-[12px] font-medium tracking-[0.15em] text-accent uppercase">
              Pillar 01 — Discover
            </p>
            <h2 className="font-display mt-2 text-[22px] font-semibold">
              Know what to prepare for, at your stage
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
              A Class 11 student often needs to prepare now for an exam they
              apply for only in Class 12. Every opportunity carries a stage
              badge so you always know what to do next.
            </p>
            <div className="mt-5 space-y-2.5">
              {[
                ["JEE Main · JEE Advanced · BITSAT", "Engineering"],
                ["IISER Aptitude Test · NEST", "Science & Research"],
                ["ISI · CMI · CUET-UG · NID DAT · UCEED", "Math, Design & more"],
              ].map(([names, cat]) => (
                <div
                  key={cat}
                  className="flex items-center justify-between rounded-md bg-secondary px-4 py-3"
                >
                  <span className="text-[13px] font-medium text-foreground">
                    {names}
                  </span>
                  <span className="text-[11px] text-muted-foreground">{cat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-rise border-t-4 border-t-primary py-7 [animation-delay:160ms]">
            <p className="text-[12px] font-medium tracking-[0.15em] text-accent uppercase">
              Pillar 02 — Document
            </p>
            <h2 className="font-display mt-2 text-[22px] font-semibold">
              Your story is bigger than your score
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
              Keep a scrapbook of everything you build, win, organise and
              learn — academic and beyond. Watch your journey grow on a
              timeline, and showcase it when you're ready.
            </p>
            <div className="mt-5 space-y-2.5">
              {[
                ["Built my first website", "Technology"],
                ["Won inter-school debate", "Communication"],
                ["Started volunteering initiative", "Community"],
              ].map(([title, meta]) => (
                <div
                  key={title}
                  className="flex items-center justify-between rounded-md bg-secondary px-4 py-3"
                >
                  <span className="text-[13px] font-medium text-foreground">
                    {title}
                  </span>
                  <span className="text-[11px] text-muted-foreground">{meta}</span>
                </div>
              ))}
            </div>
            <Link
              to="/scrapbook"
              className="mt-5 inline-block rounded-md border border-border bg-secondary px-5 py-2.5 text-[13px] font-medium text-foreground transition-colors hover:bg-muted"
            >
              Open the scrapbook →
            </Link>
          </div>
        </section>

        {/* How it works */}
        <section className="animate-rise mt-6 border-t border-border py-7 [animation-delay:240ms]">
          <h2 className="font-display text-[20px] font-semibold">The loop</h2>
          <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              ["01", "Discover", "Find opportunities matched to your class and interests."],
              ["02", "Prepare", "Know what each one takes — start early, not late."],
              ["03", "Participate", "Apply, compete, build, volunteer, show up."],
              ["04", "Document", "Add it to your scrapbook and showcase your story."],
            ].map(([num, title, body]) => (
              <div key={num} className="rounded-lg bg-secondary p-5">
                <p className="font-display text-[12px] font-semibold text-accent">
                  {num}
                </p>
                <p className="font-display mt-1 text-[15px] font-semibold text-foreground">
                  {title}
                </p>
                <p className="mt-1.5 text-[12px] leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <footer className="flex flex-col justify-between gap-3 border-t border-border px-2 py-10 sm:flex-row">
          <span className="text-[12px] text-muted-foreground">
            Opportunity Radar · your opportunity map
          </span>
          <span className="text-[12px] text-muted-foreground">
            We never invent deadlines or fees — unverified fields are always
            flagged.
          </span>
        </footer>
      </div>
    </div>
  );
}
