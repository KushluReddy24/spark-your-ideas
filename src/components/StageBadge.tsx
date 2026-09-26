import { STAGE_LABELS, type Stage } from "@/data/opportunities";
import { cn } from "@/lib/utils";

const STYLES: Record<Stage, string> = {
  explore: "border-primary/40 bg-primary/15 text-primary",
  prepare: "border-amber/40 bg-amber/10 text-amber",
  apply: "border-rose/40 bg-rose/10 text-rose",
  plan: "border-accent/40 bg-accent/10 text-accent",
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
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium",
        STYLES[stage],
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {STAGE_LABELS[stage]}
    </span>
  );
}
