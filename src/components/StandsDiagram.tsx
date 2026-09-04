"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { UsersThree, ForkKnife, Table, ShoppingBag } from "@phosphor-icons/react/dist/ssr";
import { stands, bar } from "@/content/stands";

const steps = [
  { icon: UsersThree, title: "On choisit", detail: "son stand" },
  { icon: ForkKnife, title: "On commande", detail: "sur place ou à emporter" },
  { icon: Table, title: "On s'installe", detail: "à la terrasse commune" },
  { icon: ShoppingBag, title: "On repart", detail: "à emporter si on veut" },
];

const nodePosition: { left: string; top: string; tip: "above" | "below" }[] = [
  { left: "6%", top: "76%", tip: "above" },
  { left: "22%", top: "40%", tip: "below" },
  { left: "34%", top: "6%", tip: "below" },
  { left: "66%", top: "6%", tip: "below" },
  { left: "78%", top: "40%", tip: "below" },
  { left: "94%", top: "76%", tip: "above" },
];

// AI-generated cutout illustrations for every stand (transparent background,
// full 3D container volume baked in).
const illustrations: Record<string, string> = {
  libanaise: "/images/stands/libanaise/illustration-ai.png",
  gastronomique: "/images/stands/gastronomique/illustration-ai.png",
  thailandaise: "/images/stands/thailandaise/illustration-ai.png",
  "burger-tacos": "/images/stands/burger-tacos/illustration-ai.png",
  grillades: "/images/stands/grillades/illustration-ai.png",
  espagnole: "/images/stands/espagnole/illustration-ai.png",
};
const BAR_ILLUSTRATION = "/images/venue/bar-illustration-ai.png";

// One accent color per stand, sampled from the client's reference artwork,
// used only for the hover glow so it still feels tied to each stand.
const standColors: Record<string, string> = {
  libanaise: "#8a9a2e",
  gastronomique: "#14969a",
  thailandaise: "#8a4aa8",
  "burger-tacos": "#f2790f",
  grillades: "#d4300f",
  espagnole: "#d94a72",
};

type ContainerTileProps = {
  href: string;
  illustrationSrc?: string;
  logoSrc?: string;
  fallbackSrc: string;
  isHovered: boolean;
  color?: string;
  /** True for a background-removed cutout: no box, no crop, just the container itself. */
  cutout?: boolean;
  onEnter: () => void;
  onLeave: () => void;
};

/** A single illustrated container - the artwork itself, not a redrawn frame. */
function ContainerTile({
  href,
  illustrationSrc,
  logoSrc,
  fallbackSrc,
  isHovered,
  color,
  cutout = false,
  onEnter,
  onLeave,
}: ContainerTileProps) {
  const src = illustrationSrc ?? logoSrc ?? fallbackSrc;

  if (cutout) {
    return (
      <Link
        href={href}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onFocus={onEnter}
        onBlur={onLeave}
        className="group relative block aspect-[4/3] w-full transition-transform duration-300 hover:-translate-y-1"
        style={{ filter: isHovered && color ? `drop-shadow(0 8px 18px ${color}99)` : undefined }}
      >
        <Image
          src={src}
          alt=""
          fill
          sizes="18vw"
          className="object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ring-ink-950/40 transition-transform duration-300 hover:-translate-y-1"
      style={{ boxShadow: isHovered && color ? `0 0 0 3px ${color}, 0 12px 30px -8px ${color}99` : undefined }}
    >
      <Image
        src={src}
        alt=""
        fill
        sizes="18vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-ink-950/25 via-transparent to-transparent" />
    </Link>
  );
}

function StandLabel({ number, title }: { number?: number; title: string }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 -top-8 z-10 flex justify-center sm:-top-9">
      <div className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-ink-900 bg-paper-50 px-3 py-1 shadow-glow">
        {number ? (
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mustard-500 text-[10px] font-display font-bold text-ink-900">
            {number}
          </span>
        ) : null}
        <span className="font-display text-xs font-bold text-ink-900">{title}</span>
      </div>
    </div>
  );
}

export function StandsDiagram() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div>
      {/* Desktop / tablet: plan de la halle, les stands côte à côte */}
      <div className="relative mx-auto hidden aspect-[1.55/1] w-full max-w-4xl sm:block">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full text-mustard-500/60"
          aria-hidden="true"
        >
          <polyline
            points={nodePosition
              .map((pos) => `${parseFloat(pos.left)},${parseFloat(pos.top) + 15}`)
              .join(" ")}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.7"
            strokeLinecap="round"
            strokeDasharray="0.2 2.4"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {stands.map((stand, index) => {
          const pos = nodePosition[index];
          const isHovered = hovered === stand.slug;
          const preview = stand.menu[0]?.items.slice(0, 2) ?? [];

          return (
            <div
              key={stand.slug}
              className={`absolute w-[23%] -translate-x-1/2 text-center ${isHovered ? "z-20" : "z-0"}`}
              style={{ left: pos.left, top: pos.top }}
            >
              <StandLabel number={index + 1} title={stand.title} />
              <ContainerTile
                href={`/cuisines#${stand.slug}`}
                illustrationSrc={illustrations[stand.slug]}
                logoSrc={stand.logoImage}
                fallbackSrc={stand.cardImage ?? stand.heroImage}
                isHovered={isHovered}
                color={standColors[stand.slug]}
                cutout
                onEnter={() => setHovered(stand.slug)}
                onLeave={() => setHovered((v) => (v === stand.slug ? null : v))}
              />

              <AnimatePresence>
                {isHovered && preview.length > 0 ? (
                  <motion.div
                    initial={{ opacity: 0, y: pos.tip === "below" ? 8 : -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: pos.tip === "below" ? 8 : -8, scale: 0.97 }}
                    transition={{ duration: 0.18 }}
                    className={`pointer-events-none absolute left-1/2 z-10 w-48 -translate-x-1/2 rounded-xl border border-mustard-700/50 bg-ink-900 p-3 text-left shadow-glow ${
                      pos.tip === "below" ? "top-full mt-2" : "bottom-full mb-2"
                    }`}
                  >
                    <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-mustard-400">
                      {stand.brandName ?? stand.cuisine}
                    </p>
                    <ul className="space-y-0.5 text-xs text-paper-300">
                      {preview.map((item) => (
                        <li key={item.name}>{item.name}</li>
                      ))}
                    </ul>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}

        {/* Central bar, set slightly lower to read as the heart of the terrace */}
        <div className="absolute w-[23%] -translate-x-1/2 text-center" style={{ left: "50%", top: "88%" }}>
          <StandLabel title="Bar" />
          <ContainerTile
            href={`/cuisines#${bar.slug}`}
            illustrationSrc={BAR_ILLUSTRATION}
            fallbackSrc="/images/logo/les-halles-logo.jpg"
            isHovered={hovered === "bar"}
            cutout
            onEnter={() => setHovered("bar")}
            onLeave={() => setHovered((v) => (v === "bar" ? null : v))}
          />
        </div>
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

      {/* How it works, in four steps */}
      <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-ink-700 sm:rounded-2xl sm:border sm:border-ink-700 sm:bg-ink-900/60">
        {steps.map(({ icon: Icon, title, detail }) => (
          <div key={title} className="flex flex-col items-center gap-1.5 rounded-2xl bg-ink-900/60 p-4 text-center sm:rounded-none sm:bg-transparent">
            <Icon className="h-5 w-5 text-mustard-500" weight="duotone" />
            <p className="font-display text-sm font-bold text-paper-100">{title}</p>
            <p className="text-xs text-paper-400">{detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
