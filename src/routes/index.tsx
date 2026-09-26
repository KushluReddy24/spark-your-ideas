import { createFileRoute, Link } from "@tanstack/react-router";
import { AuroraBackground } from "@/components/AuroraBackground";
import { SiteHeader } from "@/components/SiteHeader";
import { StageBadge } from "@/components/StageBadge";
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
        <section className="glass-strong animate-rise mt-8 overflow-hidden rounded-[28px] p-8 md:p-10">
          <div className="flex flex-wrap items-end justify-between gap-10">
            <div className="max-w-[560px]">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-[12px] font-medium text-accent">
                <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
                Built for Class 11–12 students in India
              </div>
              <h1 className="font-display text-[40px] leading-[1.05] font-semibold tracking-tight md:text-[52px]">
                Discover opportunities you shouldn't miss
              </h1>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                Exams, olympiads, scholarships and programs are scattered
                everywhere. Opportunity Radar turns your class, stream and
                interests into one living map — and a scrapbook for the story
                you're building along the way.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  to="/onboarding"
                  className="rounded-xl bg-gradient-to-r from-primary to-[oklch(0.66_0.17_285)] px-6 py-3 text-[14px] font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Build my opportunity map →
                </Link>
                <Link
                  to="/explore"
                  className="rounded-xl border border-border bg-secondary px-6 py-3 text-[14px] font-medium text-foreground transition-colors hover:bg-muted"
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
            <div className="w-full max-w-[380px] overflow-hidden rounded-2xl border border-border bg-secondary">
              <img
                src={heroRadar}
                alt="Opportunity radar visualization"
                width={960}
                height={688}
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="flex items-center justify-between px-5 py-4">
                <div>
                  <div className="text-[11px] tracking-wider text-muted-foreground uppercase">
                    Opportunities tracked
                  </div>
                  <div className="font-display text-[24px] font-semibold">
                    10<span className="text-[14px] text-accent">+</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] tracking-wider text-muted-foreground uppercase">
                    Categories
                  </div>
                  <div className="font-display text-[24px] font-semibold">7</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Two pillars */}
        <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="glass animate-rise rounded-[24px] p-7 [animation-delay:80ms]">
            <p className="text-[12px] font-medium tracking-[0.15em] text-primary uppercase">
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
                  className="flex items-center justify-between rounded-xl bg-secondary px-4 py-3"
                >
                  <span className="text-[13px] font-medium text-foreground">
                    {names}
                  </span>
                  <span className="text-[11px] text-muted-foreground">{cat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass animate-rise rounded-[24px] p-7 [animation-delay:160ms]">
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
                ["Built my first website", "Technology · Aug 2026"],
                ["Won inter-school debate", "Communication · Jun 2026"],
                ["Started volunteering initiative", "Community · Sep 2026"],
              ].map(([title, meta]) => (
                <div
                  key={title}
                  className="flex items-center justify-between rounded-xl bg-secondary px-4 py-3"
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
              className="mt-5 inline-block rounded-xl border border-border bg-secondary px-5 py-2.5 text-[13px] font-medium text-foreground transition-colors hover:bg-muted"
            >
              Open the scrapbook →
            </Link>
          </div>
        </section>

        {/* How it works */}
        <section className="glass animate-rise mt-6 rounded-[24px] p-7 [animation-delay:240ms]">
          <h2 className="font-display text-[20px] font-semibold">The loop</h2>
          <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              ["01", "Discover", "Find opportunities matched to your class and interests."],
              ["02", "Prepare", "Know what each one takes — start early, not late."],
              ["03", "Participate", "Apply, compete, build, volunteer, show up."],
              ["04", "Document", "Add it to your scrapbook and showcase your story."],
            ].map(([num, title, body]) => (
              <div key={num} className="rounded-2xl bg-secondary p-5">
                <p className="font-display text-[12px] font-semibold text-primary">
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
