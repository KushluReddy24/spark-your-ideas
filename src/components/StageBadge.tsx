import { STAGE_LABELS, type Stage } from "@/data/opportunities";
import { cn } from "@/lib/utils";

const STYLES: Record<Stage, string> = {
  explore: "border-accent/30 bg-accent/10 text-accent",
  prepare: "border-amber/40 bg-amber/10 text-amber",
  apply: "border-rose/40 bg-rose/10 text-rose",
  plan: "border-primary/40 bg-primary/20 text-foreground",
};

export function StageBadge({
  stage,
  className,
}: {
  stage: Stage;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded border px-2 py-1 text-[10px] font-bold",
        STYLES[stage],
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {STAGE_LABELS[stage]}
    </span>
  );
}
