import type { ScrapbookEntry } from "@/data/scrapbook";
import { removeEntry } from "@/data/scrapbook";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const CATEGORY_DOT: Record<string, string> = {
  Academics: "bg-primary",
  Creative: "bg-rose",
  "Leadership & Community": "bg-accent",
  Sports: "bg-amber",
  Entrepreneurship: "bg-amber",
  Technology: "bg-accent",
  Communication: "bg-primary",
  Other: "bg-muted-foreground",
};

export function EntryCard({ entry }: { entry: ScrapbookEntry }) {
  const date = new Date(entry.date).toLocaleDateString("en-IN", {
    month: "long",
    year: "numeric",
  });

  return (
    <article className="group flex flex-col rounded-lg border border-border bg-card p-5 transition-[border-color,box-shadow] duration-200 hover:border-accent hover:shadow-md">
      <div className="flex items-center justify-between gap-3">
        <span className="flex items-center gap-2 text-[11px] font-medium text-muted-foreground">
          <span
            className={`h-2 w-2 rounded-full ${CATEGORY_DOT[entry.category] ?? "bg-muted-foreground"}`}
          />
          {entry.category} · {date}
        </span>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => removeEntry(entry.id)}
          className="shrink-0 text-muted-foreground hover:text-rose"
          aria-label="Delete entry"
          title="Delete entry"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
      <h3 className="font-display mt-3 text-[17px] font-semibold text-foreground">
        {entry.title}
      </h3>
      <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-muted-foreground">
        {entry.description}
      </p>
      {entry.skills.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {entry.skills.map((s) => (
            <span
              key={s}
              className="rounded-md bg-secondary px-2 py-0.5 text-[11px] font-medium text-foreground"
            >
              {s}
            </span>
          ))}
        </div>
      )}
      <div className="mt-4 space-y-1.5 border-t border-border pt-3 text-[12px]">
        {entry.role && (
          <p className="text-muted-foreground">
            <span className="text-foreground">Role:</span> {entry.role}
          </p>
        )}
        {entry.result && (
          <p className="text-muted-foreground">
            <span className="text-foreground">Result:</span> {entry.result}
          </p>
        )}
        {entry.learned && (
          <p className="text-muted-foreground italic">
            “{entry.learned}”
          </p>
        )}
      </div>
    </article>
  );
}
