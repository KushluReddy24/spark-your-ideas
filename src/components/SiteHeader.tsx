import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { hasProfile } from "@/lib/profile";

const NAV = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/explore", label: "Explore" },
] as const;

export function SiteHeader() {
  const [profiled, setProfiled] = useState(false);
  useEffect(() => {
    const refresh = () => setProfiled(hasProfile());
    refresh();
    window.addEventListener("or:storage", refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener("or:storage", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 mx-auto flex max-w-6xl items-center justify-between gap-4 border-b border-border bg-card px-4 py-4 sm:px-6">
      <Link to="/" className="flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-md bg-primary text-[15px] font-bold text-primary-foreground">
          ◈
        </div>
        <span className="font-display text-[13px] font-bold sm:text-[15px]">
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
        className="rounded-md bg-primary px-3 py-2 text-[12px] font-bold text-primary-foreground transition-colors hover:bg-foreground hover:text-background sm:px-4 sm:text-[13px]"
      >
        {profiled ? "My map" : "Build my map"}
      </Link>
    </header>
  );
}
