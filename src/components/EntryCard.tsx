import type { ScrapbookEntry } from "@/data/scrapbook";
import { removeEntry } from "@/data/scrapbook";

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
    <article className="glass group flex flex-col rounded-2xl p-5 transition-transform duration-200 hover:-translate-y-1">
      <div className="flex items-center justify-between gap-3">
        <span className="flex items-center gap-2 text-[11px] font-medium text-muted-foreground">
          <span
            className={`h-2 w-2 rounded-full ${CATEGORY_DOT[entry.category] ?? "bg-muted-foreground"}`}
          />
          {entry.category} · {date}
        </span>
        <button
          onClick={() => removeEntry(entry.id)}
          className="text-[11px] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 hover:text-rose"
          aria-label="Delete entry"
        >
          Remove
        </button>
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
