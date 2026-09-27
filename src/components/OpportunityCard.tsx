import { Link } from "@tanstack/react-router";
import { fieldOrUnverified, type Opportunity } from "@/data/opportunities";
import { StageBadge } from "@/components/StageBadge";
import { toggleSaved, useSaved } from "@/lib/profile";
import { Bookmark, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function OpportunityCard({ opportunity }: { opportunity: Opportunity }) {
  const saved = useSaved();
  const isSaved = saved.includes(opportunity.id);

  return (
    <article className="group flex min-h-[300px] flex-col rounded-lg border border-border bg-card p-5 transition-[border-color,box-shadow] duration-200 hover:border-primary hover:shadow-lg sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded bg-primary/20 px-2.5 py-1 text-[10px] font-extrabold uppercase text-foreground">{opportunity.category}</span>
          <StageBadge stage={opportunity.stage} />
        </div>
        <Button variant="ghost" size="icon" onClick={() => toggleSaved(opportunity.id)} aria-label={isSaved ? `Remove ${opportunity.name} from saved` : `Save ${opportunity.name}`} title={isSaved ? "Remove from saved" : "Save opportunity"} className="shrink-0 text-muted-foreground hover:bg-secondary hover:text-foreground">
          <Bookmark className={isSaved ? "fill-current text-foreground" : ""} />
        </Button>
      </div>
      <h3 className="font-display mt-4 text-[18px] leading-snug font-bold text-foreground sm:text-[19px]">
        {opportunity.name}
      </h3>
      <p className="mt-2 line-clamp-3 flex-1 text-[13px] leading-relaxed text-muted-foreground">
        {opportunity.summary}
      </p>
      <div className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-4 text-[11px]">
        <div className="min-w-0"><p className="font-bold uppercase text-muted-foreground">Deadline</p><p className="mt-1 break-words font-semibold text-foreground">{fieldOrUnverified(opportunity.deadline)}</p></div>
        <div className="min-w-0"><p className="font-bold uppercase text-muted-foreground">Cost · Class</p><p className="mt-1 break-words font-semibold text-foreground">{fieldOrUnverified(opportunity.cost)} · {opportunity.class.length > 2 ? `${opportunity.class[0]}–${opportunity.class[opportunity.class.length - 1]}` : opportunity.class.join(", ")}</p></div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-3">
        {!opportunity.verified ? <p className="text-[11px] font-semibold text-amber">Dates and fees need verification</p> : <span />}
        <Link
          to="/opportunity/$id"
          params={{ id: opportunity.id }}
          className="inline-flex shrink-0 items-center gap-1 rounded-md bg-primary px-3 py-2 text-[12px] font-bold text-primary-foreground transition-colors hover:bg-foreground hover:text-background sm:px-4"
        >
          View details <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
