import { Link } from "@tanstack/react-router";
import { fieldOrUnverified, type Opportunity } from "@/data/opportunities";
import { StageBadge } from "@/components/StageBadge";
import { toggleSaved, useSaved } from "@/lib/profile";

export function OpportunityCard({ opportunity }: { opportunity: Opportunity }) {
  const saved = useSaved();
  const isSaved = saved.includes(opportunity.id);

  return (
    <div className="glass flex flex-col rounded-2xl p-5 transition-transform duration-200 hover:-translate-y-1">
      <div className="flex items-start justify-between gap-3">
        <StageBadge stage={opportunity.stage} />
        <span className="text-[11px] text-muted-foreground">
          {opportunity.category}
        </span>
      </div>
      <h3 className="font-display mt-3 text-[17px] font-semibold text-foreground">
        {opportunity.name}
      </h3>
      <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-muted-foreground">
        {opportunity.summary}
      </p>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[10px]">
        <div className="rounded-lg bg-secondary p-2">
          <p className="text-muted-foreground">Cost</p>
          <p className="mt-0.5 font-medium text-foreground">
            {fieldOrUnverified(opportunity.cost)}
          </p>
        </div>
        <div className="rounded-lg bg-secondary p-2">
          <p className="text-muted-foreground">Deadline</p>
          <p className="mt-0.5 font-medium text-foreground">
            {fieldOrUnverified(opportunity.deadline)}
          </p>
        </div>
        <div className="rounded-lg bg-secondary p-2">
          <p className="text-muted-foreground">Class</p>
          <p className="mt-0.5 font-medium text-foreground">
            {opportunity.class.join(", ")}
          </p>
        </div>
      </div>
      {!opportunity.verified && (
        <p className="mt-3 text-[11px] text-amber">
          ⚠ Dates and fees need verification
        </p>
      )}
      <div className="mt-4 flex gap-2">
        <Link
          to="/opportunity/$id"
          params={{ id: opportunity.id }}
          className="flex-1 rounded-xl bg-gradient-to-r from-primary to-[oklch(0.66_0.17_285)] px-4 py-2 text-center text-[13px] font-semibold text-primary-foreground"
        >
          View details
        </Link>
        <button
          onClick={() => toggleSaved(opportunity.id)}
          className="rounded-xl border border-border px-3 py-2 text-[13px] font-medium text-foreground transition-colors hover:bg-secondary"
        >
          {isSaved ? "Saved ✓" : "Save"}
        </button>
      </div>
    </div>
  );
}
