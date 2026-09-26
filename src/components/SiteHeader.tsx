import { Link } from "@tanstack/react-router";
import { hasProfile } from "@/lib/profile";

const NAV = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/explore", label: "Explore" },
] as const;

export function SiteHeader() {
  const profiled = typeof window !== "undefined" && hasProfile();

  return (
    <header className="glass sticky top-4 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-6 py-4">
      <Link to="/" className="flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-[15px] font-bold text-primary-foreground">
          ◈
        </div>
        <span className="font-display text-[15px] font-semibold tracking-tight">
          Opportunity Radar
        </span>
      </Link>
      <nav className="hidden items-center gap-8 text-[13px] font-medium text-muted-foreground md:flex">
        {NAV.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="transition-colors hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Link
        to={profiled ? "/dashboard" : "/onboarding"}
        className="rounded-xl bg-gradient-to-r from-primary to-[oklch(0.66_0.17_285)] px-4 py-2 text-[13px] font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
      >
        {profiled ? "My map" : "Build my map"}
      </Link>
    </header>
  );
}
