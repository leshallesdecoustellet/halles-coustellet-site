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
  tone = "dark",
}: {
  title: string;
  lede?: string;
  align?: "left" | "center";
  /** "dark" (default) for the site's usual dark sections, "light" for a pale/photo background. */
  tone?: "dark" | "light";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <h2
        className={`text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl ${
          tone === "light" ? "text-ink-900" : "text-paper-100"
        }`}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={`mt-4 max-w-[60ch] text-base leading-relaxed ${
            tone === "light" ? "text-ink-600" : "text-paper-300"
          }`}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}
