import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AuroraBackground } from "@/components/AuroraBackground";
import { SiteHeader } from "@/components/SiteHeader";
import { StageBadge } from "@/components/StageBadge";
import { fieldOrUnverified, getOpportunity } from "@/data/opportunities";
import { toggleSaved, useSaved } from "@/lib/profile";

export const Route = createFileRoute("/opportunity/$id")({
  loader: ({ params }) => {
    const opportunity = getOpportunity(params.id);
    if (!opportunity) throw notFound();
    return opportunity;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Opportunity"} — Opportunity Radar` },
      {
        name: "description",
        content: loaderData?.summary ?? "Opportunity details on Opportunity Radar.",
      },
      { property: "og:title", content: loaderData?.name ?? "Opportunity" },
      { property: "og:description", content: loaderData?.summary ?? "" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: OpportunityDetail,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="font-display text-2xl font-semibold text-foreground">
          Opportunity not found
        </h1>
        <Link
          to="/explore" search={{ q: "", category: "", stream: "", type: "", status: "" }}
          className="mt-4 inline-block rounded-xl bg-primary px-5 py-2.5 text-[13px] font-semibold text-primary-foreground"
        >
          Back to explore
        </Link>
      </div>
    </div>
  ),
});

function Field({
  label,
  value,
  unverified,
}: {
  label: string;
  value: string;
  unverified?: boolean;
}) {
  return (
    <div className="rounded-xl bg-secondary p-4">
      <p className="text-[10px] font-medium tracking-[0.15em] text-muted-foreground uppercase">
        {label}
      </p>
      <p
        className={`mt-1.5 text-[13px] leading-relaxed ${
          unverified ? "text-amber" : "text-foreground"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function OpportunityDetail() {
  const o = Route.useLoaderData();
  const saved = useSaved();
  const isSaved = saved.includes(o.id);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <AuroraBackground />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-6">
        <SiteHeader />

        <div className="mx-auto mt-10 max-w-3xl">
          <Link
            to="/explore" search={{ q: "", category: "", stream: "", type: "", status: "" }}
            className="text-[12px] text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to explore
          </Link>

          <div className="glass-strong animate-rise mt-4 rounded-[28px] p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <StageBadge stage={o.stage} />
                  <span className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                    {o.category}
                  </span>
                  <span className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                    {o.opportunity_type}
                  </span>
                </div>
                <h1 className="font-display mt-4 text-[34px] font-semibold tracking-tight">
                  {o.name}
                </h1>
                <p className="mt-2 max-w-[56ch] text-[14px] leading-relaxed text-muted-foreground">
                  {o.summary}
                </p>
              </div>
              <button
                onClick={() => toggleSaved(o.id)}
                className={`rounded-xl px-5 py-2.5 text-[13px] font-semibold transition-transform hover:-translate-y-0.5 ${
                  isSaved
                    ? "border border-accent/40 bg-accent/10 text-accent"
                    : "bg-gradient-to-r from-primary to-[oklch(0.66_0.17_285)] text-primary-foreground"
                }`}
              >
                {isSaved ? "Saved ✓" : "Save opportunity"}
              </button>
            </div>

            {!o.verified && (
              <p className="mt-6 rounded-xl border border-amber/30 bg-amber/10 px-4 py-3 text-[12px] text-amber">
                ⚠ Some details below still need verification against the
                official website. We never invent dates, fees or eligibility.
              </p>
            )}

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Field
                label="Who can participate"
                value={`Class ${o.class.join("–")} · ${o.stream.join(", ")}`}
              />
              <Field
                label="Eligibility"
                value={fieldOrUnverified(o.eligibility)}
                unverified={!o.verified}
              />
              <Field
                label="Deadline"
                value={fieldOrUnverified(o.deadline)}
                unverified
              />
              <Field
                label="Typical window"
                value={fieldOrUnverified(o.typical_window)}
                unverified
              />
              <Field label="Cost" value={fieldOrUnverified(o.cost)} unverified />
              <Field label="Status" value={o.status} />
            </div>

            <div className="mt-6 space-y-4">
              {(
                [
                  ["Benefits", o.benefits],
                  ["What it unlocks", o.what_it_unlocks],
                  ["Preparation required", o.preparation_needed],
                ] as const
              ).map(([label, body]) => (
                <div key={label} className="rounded-xl bg-secondary p-5">
                  <p className="text-[10px] font-medium tracking-[0.15em] text-muted-foreground uppercase">
                    {label}
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-foreground">
                    {body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
              <a
                href={o.official_link}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-border bg-secondary px-5 py-2.5 text-[13px] font-medium text-foreground transition-colors hover:bg-muted"
              >
                Official website ↗
              </a>
              <p className="text-[11px] text-muted-foreground">
                Last verified: {o.last_verified ?? "Never — verify before acting"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
