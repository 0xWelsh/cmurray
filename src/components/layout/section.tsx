import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "warm" | "white" | "cyan" | "charcoal" | "cyan-light";
};

const backgroundMap = {
  warm: "bg-warm",
  white: "bg-white",
  cyan: "bg-cyan",
  charcoal: "bg-charcoal",
  "cyan-light": "bg-cyan-light",
};

export function Section({
  children,
  className,
  id,
  background = "warm",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-20 lg:py-24",
        backgroundMap[background],
        className
      )}
    >
      {children}
    </section>
  );
}
