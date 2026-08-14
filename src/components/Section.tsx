import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  tone?: "base" | "surface";
  id?: string;
};

export function Section({ children, className, tone = "base", id }: SectionProps) {
  return (
    <section
      id={id}
      className={`${tone === "surface" ? "bg-ink-800" : "bg-ink-900"} py-16 sm:py-24 ${className ?? ""}`}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  title,
  lede,
  align = "left",
}: {
  title: string;
  lede?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-paper-100 sm:text-4xl">
        {title}
      </h2>
      {lede ? (
        <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-paper-300">
          {lede}
        </p>
      ) : null}
    </div>
  );
}
