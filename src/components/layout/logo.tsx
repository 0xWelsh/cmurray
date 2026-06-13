// Replace this component with <Image> once /public/logo.webp exists.
// For now it renders the brand name as text.

export function Logo({ className, inverted }: { className?: string; inverted?: boolean }) {
  const textClass = `font-heading text-xl font-semibold tracking-tight ${inverted ? "text-white" : "text-charcoal"}`;

  return (
    <span className={`${textClass} ${className || ""}`}>
      Murray<span className="text-cyan"> Optician</span>
    </span>
  );
}
