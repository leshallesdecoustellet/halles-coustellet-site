import Image from "next/image";
import Link from "next/link";
import { stands } from "@/content/stands";

const nodePosition = [
  { left: "3%", top: "64%" },
  { left: "21%", top: "28%" },
  { left: "39%", top: "4%" },
  { left: "61%", top: "4%" },
  { left: "79%", top: "28%" },
  { left: "97%", top: "64%" },
];

export function StandsDiagram() {
  return (
    <div>
      {/* Desktop / tablet: semi-circle diagram matching the real layout */}
      <div className="relative mx-auto hidden aspect-[21/10] w-full max-w-4xl sm:block">
        <svg
          viewBox="0 0 1000 480"
          className="absolute inset-0 h-full w-full text-ink-600"
          aria-hidden="true"
          fill="none"
        >
          <path
            d="M40 320C120 120 280 20 500 20C720 20 880 120 960 320"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="2 10"
            strokeLinecap="round"
          />
        </svg>
        {stands.map((stand, index) => (
          <Link
            key={stand.slug}
            href={`/cuisines#${stand.slug}`}
            className="group absolute w-[15%] -translate-x-1/2 text-center"
            style={{ left: nodePosition[index].left, top: nodePosition[index].top }}
          >
            <span className="relative mx-auto block aspect-square w-full overflow-hidden rounded-full border-2 border-ink-600 bg-ink-800 shadow-glow transition-colors group-hover:border-mustard-500">
              <Image
                src={stand.cardImage ?? stand.heroImage}
                alt=""
                fill
                sizes="12vw"
                className={`object-cover ${stand.cardImage ? "" : stand.heroObjectPosition ?? ""}`}
              />
            </span>
            <span className="mt-2 block font-display text-sm font-bold text-paper-100 group-hover:text-mustard-400">
              {stand.title}
            </span>
            <span className="block text-[11px] text-paper-500">{stand.position}</span>
          </Link>
        ))}
      </div>

      {/* Mobile: stacked list, left to right order preserved */}
      <ul className="space-y-3 sm:hidden">
        {stands.map((stand) => (
          <li key={stand.slug}>
            <Link
              href={`/cuisines#${stand.slug}`}
              className="flex items-center gap-4 rounded-2xl bg-ink-800 p-3 transition-colors hover:bg-ink-700"
            >
              <span className="relative block h-16 w-16 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={stand.cardImage ?? stand.heroImage}
                  alt=""
                  fill
                  sizes="64px"
                  className={`object-cover ${stand.cardImage ? "" : stand.heroObjectPosition ?? ""}`}
                />
              </span>
              <span>
                <span className="block font-display text-base font-bold text-paper-100">
                  {stand.title}
                </span>
                <span className="block text-xs text-paper-500">{stand.position}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
