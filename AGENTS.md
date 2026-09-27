<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# AGENTS.md

## Architecture decisions

- **Seeded data in-module**: opportunities live in `src/data/opportunities.ts`, scrapbook entries seed in `src/data/scrapbook.ts`. Shapes mirror future DB tables so a backend can replace them without UI changes. Why: V1 proves the loop before a database is connected.
- **localStorage for profile/saved/scrapbook**: `src/lib/profile.ts` and `src/data/scrapbook.ts` persist via localStorage with an `or:storage` event + `useSyncExternalStore` for reactivity. Why: no backend yet; DTO shapes are DB-ready.
- **Never invent dates/fees/eligibility**: unknown opportunity fields are `null` and render as "Needs verification". Why: core product rule from the brief.
- **Design**: "Electric contrast grid" — ink filter rail, light reading surfaces, lime actions, teal supporting type; Sora headings and Manrope body. Why: matches the selected UI direction while keeping dense opportunity browsing scannable.
- **Routes**: `/` landing, `/onboarding`, `/dashboard`, `/explore` (URL search-param filters), `/opportunity/$id`, `/scrapbook`, `/showcase`.
