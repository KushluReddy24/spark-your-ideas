import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AuroraBackground } from "@/components/AuroraBackground";
import { SiteHeader } from "@/components/SiteHeader";
import { OpportunityCard } from "@/components/OpportunityCard";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";
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
      <p className="mb-3 text-[11px] font-extrabold uppercase text-ink-foreground/60">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {["All", ...options].map((opt) => {
          const v = opt === "All" ? "" : opt;
          const active = value === v;
          return (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              key={opt}
              onClick={() => onChange(v)}
              className={`h-auto min-h-8 whitespace-normal rounded-md px-2.5 py-1.5 text-left text-[11px] leading-tight font-semibold transition-colors ${
                active
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                  : "border border-ink-foreground/20 bg-ink-foreground/5 text-ink-foreground hover:border-primary hover:bg-ink-foreground/10 hover:text-ink-foreground"
              }`}
            >
              {opt}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

function Explore() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/explore" });
  const [filtersOpen, setFiltersOpen] = useState(false);

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
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-[1440px] px-0 pb-8 sm:px-5 sm:pt-5 xl:px-8">
        <SiteHeader />
        <div className="mx-auto mt-0 min-h-[calc(100vh-110px)] max-w-6xl overflow-hidden border border-border bg-card shadow-xl sm:mt-5 sm:rounded-lg lg:grid lg:grid-cols-[288px_minmax(0,1fr)]">
          <aside className={`${filtersOpen ? "block" : "hidden"} bg-ink text-ink-foreground lg:block`}>
            <div className="border-b border-ink-foreground/15 px-6 py-6">
              <div className="flex items-center justify-between"><p className="font-display text-[16px] font-bold">Find your next step</p><Button variant="ghost" size="icon" aria-label="Close filters" className="text-ink-foreground lg:hidden" onClick={() => setFiltersOpen(false)}><X /></Button></div>
              <p className="mt-1 text-[12px] text-ink-foreground/60">Filter opportunities by what matters to you.</p>
            </div>
            <div className="space-y-7 px-6 py-7">
            <label htmlFor="opportunity-search" className="mb-2 block text-[11px] font-extrabold uppercase text-ink-foreground/60">Search</label>
            <div className="relative"><Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-ink-foreground/60" />
            <input
              id="opportunity-search"
              type="text"
              value={search.q}
              onChange={(e) => setFilter({ q: e.target.value })}
              placeholder="Search opportunities..."
              className="w-full rounded-md border border-ink-foreground/30 bg-ink-foreground/10 py-2.5 pr-3 pl-10 text-[13px] text-ink-foreground outline-none placeholder:text-ink-foreground/50 focus:border-primary"
            />
            </div>
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
            </div>
          </aside>

          <main className="min-w-0 bg-background">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border bg-card px-5 py-7 sm:px-8">
              <div><p className="mb-1 text-[11px] font-extrabold uppercase text-accent">Class 11–12 hub</p><h1 className="font-display text-[25px] font-bold sm:text-[28px]">Explore opportunities</h1><p className="mt-1 text-[13px] text-muted-foreground">Showing {results.length} opportunit{results.length === 1 ? "y" : "ies"}</p></div>
              <Button variant="outline" className="gap-2 lg:hidden" onClick={() => setFiltersOpen((v) => !v)}><SlidersHorizontal className="h-4 w-4" /> Filters</Button>
            </div>
            <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2 lg:gap-5 lg:p-8">
              {results.map((o) => (
                <OpportunityCard key={o.id} opportunity={o} />
              ))}
              {results.length === 0 && (
                <div className="col-span-full rounded-lg border border-border bg-card p-10 text-center text-[13px] text-muted-foreground">
                  No opportunities match these filters. Try widening your
                  search.
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
