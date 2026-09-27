import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AuroraBackground } from "@/components/AuroraBackground";
import { SiteHeader } from "@/components/SiteHeader";
import { EntryCard } from "@/components/EntryCard";
import {
  ENTRY_CATEGORIES,
  addEntry,
  groupByMonth,
  useEntries,
  type EntryCategory,
} from "@/data/scrapbook";

export const Route = createFileRoute("/scrapbook")({
  head: () => ({
    meta: [
      { title: "Your scrapbook — Opportunity Radar" },
      {
        name: "description",
        content:
          "Document achievements, projects and experiences across academics and beyond. Your story is bigger than your score.",
      },
      { property: "og:title", content: "Your scrapbook" },
      {
        property: "og:description",
        content: "A personal memory book of everything you build, win and learn.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Scrapbook,
});

const inputCls =
  "glass w-full rounded-md bg-transparent px-4 py-2.5 text-[13px] text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/50";

function Scrapbook() {
  const entries = useEntries();
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState<EntryCategory>("Technology");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");
  const [learned, setLearned] = useState("");
  const [role, setRole] = useState("");
  const [result, setResult] = useState("");
  const [link, setLink] = useState("");

  const canSave = title.trim() && date && description.trim();

  function submit() {
    if (!canSave) return;
    addEntry({
      title: title.trim(),
      date,
      category,
      description: description.trim(),
      skills: skills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      learned: learned.trim(),
      role: role.trim(),
      result: result.trim(),
      link: link.trim(),
      isPublic: true,
    });
    setTitle("");
    setDate("");
    setDescription("");
    setSkills("");
    setLearned("");
    setRole("");
    setResult("");
    setLink("");
    setShowForm(false);
  }

  const timeline = groupByMonth(entries);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <AuroraBackground />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-6">
        <SiteHeader />

        <div className="mt-10 mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[12px] font-medium tracking-[0.15em] text-accent uppercase">
              Document
            </p>
            <h1 className="font-display mt-2 text-[34px] font-semibold tracking-tight">
              Your scrapbook
            </h1>
            <p className="mt-2 max-w-[52ch] text-[14px] text-muted-foreground">
              Your story is bigger than your score. Capture what you build,
              win, organise and learn — each entry is a memory card, not a
              resume row.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/showcase"
              className="rounded-md border border-border bg-secondary px-5 py-2.5 text-[13px] font-medium text-foreground transition-colors hover:bg-muted"
            >
              View showcase
            </Link>
            <button
              onClick={() => setShowForm((s) => !s)}
              className="rounded-md bg-primary px-5 py-2.5 text-[13px] font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              {showForm ? "Cancel" : "+ Add a memory"}
            </button>
          </div>
        </div>

        {showForm && (
          <div className="glass animate-rise mb-8 rounded-lg p-7">
            <h2 className="font-display text-[18px] font-semibold">
              New memory
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input
                className={inputCls}
                placeholder="Title — e.g. Built my first website"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                className={inputCls}
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <select
                className={inputCls}
                value={category}
                onChange={(e) => setCategory(e.target.value as EntryCategory)}
              >
                {ENTRY_CATEGORIES.map((c) => (
                  <option key={c} value={c} className="bg-popover">
                    {c}
                  </option>
                ))}
              </select>
              <input
                className={inputCls}
                placeholder="Skills demonstrated (comma separated)"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
              <textarea
                className={`${inputCls} sm:col-span-2`}
                rows={3}
                placeholder="What happened? Describe the experience."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <input
                className={inputCls}
                placeholder="My role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
              <input
                className={inputCls}
                placeholder="Achievement / result"
                value={result}
                onChange={(e) => setResult(e.target.value)}
              />
              <input
                className={inputCls}
                placeholder="What I learned"
                value={learned}
                onChange={(e) => setLearned(e.target.value)}
              />
              <input
                className={inputCls}
                placeholder="Link (project, certificate, photos…)"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            <div className="mt-5 flex justify-end">
              <button
                onClick={submit}
                disabled={!canSave}
                className="rounded-md bg-primary px-6 py-2.5 text-[13px] font-semibold text-primary-foreground disabled:opacity-40"
              >
                Save memory
              </button>
            </div>
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          {/* Memory cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {entries.map((e) => (
              <EntryCard key={e.id} entry={e} />
            ))}
            {entries.length === 0 && (
              <div className="glass col-span-full rounded-lg p-10 text-center text-[13px] text-muted-foreground">
                No memories yet — add your first one.
              </div>
            )}
          </div>

          {/* Journey timeline */}
          <aside className="glass h-fit rounded-lg p-6 lg:sticky lg:top-24">
            <h2 className="font-display text-[16px] font-semibold">
              Your journey
            </h2>
            <div className="mt-5 space-y-6">
              {timeline.map(([month, items]) => (
                <div key={month}>
                  <p className="text-[11px] font-medium tracking-[0.15em] text-accent uppercase">
                    {month}
                  </p>
                  <div className="mt-2 space-y-2 border-l border-border pl-4">
                    {items.map((e) => (
                      <p key={e.id} className="text-[12px] text-muted-foreground">
                        → <span className="text-foreground">{e.title}</span>
                      </p>
                    ))}
                  </div>
                </div>
              ))}
              {timeline.length === 0 && (
                <p className="text-[12px] text-muted-foreground">
                  Your timeline fills in as you add memories.
                </p>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
