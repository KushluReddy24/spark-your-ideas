export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      <div className="animate-drift-slow absolute -top-40 -left-24 h-[520px] w-[520px] rounded-full bg-primary/30 blur-[130px]" />
      <div className="animate-drift-slower absolute top-1/3 right-[-120px] h-[480px] w-[480px] rounded-full bg-accent/20 blur-[140px]" />
      <div className="animate-drift-slowest absolute bottom-[-160px] left-1/3 h-[560px] w-[560px] rounded-full bg-rose/20 blur-[150px]" />
    </div>
  );
}
