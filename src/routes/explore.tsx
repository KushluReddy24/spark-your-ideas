import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AuroraBackground } from "@/components/AuroraBackground";
import { SiteHeader } from "@/components/SiteHeader";
import { OpportunityCard } from "@/components/OpportunityCard";
import {
  CATEGORIES,
  OPPORTUNITIES,
  OPPORTUNITY_TYPES,
  STREAMS,
} from "@/data/opportunities";

interface ExploreSearch {
  q: string;
  category: string;
  stream: string;
  type: string;
  status: string;
}

export const Route = createFileRoute("/explore")({
  validateSearch: (search: Record<string, unknown>): ExploreSearch => ({
    q: typeof search["q"] === "string" ? search["q"] : "",
    category: typeof search["category"] === "string" ? search["category"] : "",
    stream: typeof search["stream"] === "string" ? search["stream"] : "",
    type: typeof search["type"] === "string" ? search["type"] : "",
    status: typeof search["status"] === "string" ? search["status"] : "",
  }),
  head: () => ({
    meta: [
      { title: "Explore opportunities — Opportunity Radar" },
      {
        name: "description",
        content:
          "Search and filter exams, olympiads, scholarships and programs by category, class, stream, type and status.",
      },
      { property: "og:title", content: "Explore opportunities" },
      {
        property: "og:description",
        content: "Every major opportunity for Class 11–12 students, filterable by your stage.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Explore,
});

function FilterGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <p className="mb-2 text-[10px] font-medium tracking-[0.15em] text-muted-foreground uppercase">
        {label}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {["All", ...options].map((opt) => {
          const v = opt === "All" ? "" : opt;
          const active = value === v;
          return (
            <button
              key={opt}
              onClick={() => onChange(v)}
              className={`rounded-full px-3 py-1 text-[12px] font-medium transition-colors ${
                active
                  ? "bg-foreground text-background"
                  : "border border-border bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Explore() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/explore" });

  const setFilter = (patch: Partial<ExploreSearch>) =>
    navigate({ search: (prev) => ({ ...prev, ...patch }), replace: true });

  const results = OPPORTUNITIES.filter((o) => {
    if (
      search.q &&
      !`${o.name} ${o.category} ${o.summary}`
        .toLowerCase()
        .includes(search.q.toLowerCase())
    )
      return false;
    if (search.category && o.category !== search.category) return false;
    if (
      search.stream &&
      !o.stream.includes(search.stream) &&
      !o.stream.includes("Any")
    )
      return false;
    if (search.type && o.opportunity_type !== search.type) return false;
    if (search.status && o.status !== search.status) return false;
    return true;
  });

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <AuroraBackground />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-6">
        <SiteHeader />

        <div className="mt-10 mb-8">
          <p className="text-[12px] font-medium tracking-[0.15em] text-primary uppercase">
            Explore
          </p>
          <h1 className="font-display mt-2 text-[34px] font-semibold tracking-tight">
            Every opportunity, filtered to your stage
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          <aside className="space-y-6">
            <input
              type="text"
              value={search.q}
              onChange={(e) => setFilter({ q: e.target.value })}
              placeholder="Search exams, programs…"
              className="glass w-full rounded-xl bg-transparent px-4 py-2.5 text-[13px] text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/50"
            />
            <FilterGroup
              label="Category"
              options={CATEGORIES}
              value={search.category}
              onChange={(v) => setFilter({ category: v })}
            />
            <FilterGroup
              label="Stream"
              options={STREAMS}
              value={search.stream}
              onChange={(v) => setFilter({ stream: v })}
            />
            <FilterGroup
              label="Opportunity type"
              options={OPPORTUNITY_TYPES}
              value={search.type}
              onChange={(v) => setFilter({ type: v })}
            />
            <FilterGroup
              label="Status"
              options={["Open", "Upcoming", "Closed", "Unknown"]}
              value={search.status}
              onChange={(v) => setFilter({ status: v })}
            />
          </aside>

          <div>
            <p className="mb-4 text-[12px] text-muted-foreground">
              {results.length} opportunit{results.length === 1 ? "y" : "ies"}{" "}
              found
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {results.map((o) => (
                <OpportunityCard key={o.id} opportunity={o} />
              ))}
              {results.length === 0 && (
                <div className="glass col-span-full rounded-2xl p-10 text-center text-[13px] text-muted-foreground">
                  No opportunities match these filters. Try widening your
                  search.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
