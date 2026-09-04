import Image from "next/image";
import Link from "next/link";
import type { Stand } from "@/content/stands";

export function StandCard({
  stand,
  index,
  featured = false,
}: {
  stand: Stand;
  index: number;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/cuisines#${stand.slug}`}
      className={`group relative block overflow-hidden rounded-2xl bg-ink-800 transition-transform duration-300 hover:-translate-y-1 lg:aspect-auto lg:h-full ${
        featured ? "aspect-[16/10] sm:aspect-[21/9]" : "aspect-square"
      }`}
    >
      <Image
        src={stand.cardImage ?? stand.heroImage}
        alt={stand.cardImageAlt ?? stand.heroImageAlt}
        fill
        sizes={featured ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 20vw, 50vw"}
        className={`object-cover transition-transform duration-500 group-hover:scale-105 ${stand.cardImage ? "" : stand.heroObjectPosition ?? ""}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/25 to-transparent" />
      {stand.openingNote ? (
        <span className="absolute left-4 top-4 rounded-full border border-mustard-700/50 bg-ink-950/80 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-mustard-400 backdrop-blur">
          Bientôt
        </span>
      ) : null}
      <span
        className={`absolute right-4 top-4 font-display font-bold text-paper-100/30 ${
          featured ? "text-3xl sm:text-5xl" : "text-lg"
        }`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-denim-300">
          {stand.cuisine}
        </p>
        <p
          className={`mt-1 font-display font-bold leading-tight text-paper-100 ${
            featured ? "text-2xl sm:text-3xl" : "text-base sm:text-lg"
          }`}
        >
          {stand.title}
        </p>
      </div>
    </Link>
  );
}
