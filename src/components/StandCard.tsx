import Image from "next/image";
import Link from "next/link";
import type { Stand } from "@/content/stands";

const arcOffset: Record<number, string> = {
  0: "lg:translate-y-10",
  1: "lg:translate-y-0",
  2: "lg:-translate-y-8",
  3: "lg:-translate-y-8",
  4: "lg:translate-y-0",
  5: "lg:translate-y-10",
};

export function StandCard({ stand, index }: { stand: Stand; index: number }) {
  return (
    <Link
      href={`/cuisines#${stand.slug}`}
      className={`group relative block overflow-hidden rounded-2xl bg-ink-800 transition-transform duration-300 hover:-translate-y-1 ${arcOffset[index] ?? ""}`}
    >
      <div className="relative aspect-[3/4] w-full">
        <Image
          src={stand.cardImage ?? stand.heroImage}
          alt={stand.cardImageAlt ?? stand.heroImageAlt}
          fill
          sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
          className={`object-cover transition-transform duration-500 group-hover:scale-105 ${stand.cardImage ? "" : stand.heroObjectPosition ?? ""}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/25 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-denim-300">
          {stand.cuisine}
        </p>
        <p className="mt-1 font-display text-lg font-bold leading-tight text-paper-100">
          {stand.title}
        </p>
      </div>
    </Link>
  );
}
