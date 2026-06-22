export function Logo({ className, inverted }: { className?: string; inverted?: boolean }) {
  return (
    <span className={`inline-flex flex-col leading-tight ${className || ""}`}>
      <span className={`font-heading text-2xl md:text-3xl font-semibold tracking-wide ${inverted ? "text-white" : "text-charcoal"}`}>
        O<span className="text-cyan">W</span>EN
      </span>
      <span className={`text-[10px] md:text-xs font-medium tracking-[0.25em] uppercase ${inverted ? "text-white/60" : "text-muted"}`}>
        Opticians
      </span>
    </span>
  );
}
