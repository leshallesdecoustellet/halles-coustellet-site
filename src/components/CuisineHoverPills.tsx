"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type MouseEvent } from "react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

type CuisinePill = {
  slug: string;
  cuisine: string;
  image: string;
  imageAlt: string;
};

const MIN_CLEARANCE_ABOVE = 220;

export function CuisineHoverPills({ pills }: { pills: CuisinePill[] }) {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [showAbove, setShowAbove] = useState(true);
  const reduce = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 28, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 28, mass: 0.5 });

  const active = pills.find((pill) => pill.slug === hoveredSlug);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
    setShowAbove(event.clientY > MIN_CLEARANCE_ABOVE);
  }

  return (
    <div className="relative flex flex-wrap gap-3" onMouseMove={handleMouseMove}>
      {pills.map((pill) => (
        <Link
          key={pill.slug}
          href={`/cuisines#${pill.slug}`}
          onMouseEnter={() => setHoveredSlug(pill.slug)}
          onMouseLeave={() => setHoveredSlug((current) => (current === pill.slug ? null : current))}
          className="rounded-full border border-ink-600 px-4 py-2 text-sm text-paper-300 transition-colors hover:border-mustard-500 hover:text-mustard-400"
        >
          {pill.cuisine}
        </Link>
      ))}

      {!reduce ? (
        <AnimatePresence>
          {active ? (
            <motion.div
              key={active.slug}
              aria-hidden="true"
              className={`pointer-events-none absolute z-50 h-28 w-28 -translate-x-1/2 overflow-hidden rounded-2xl border border-ink-600 shadow-glow sm:h-32 sm:w-32 ${
                showAbove ? "-translate-y-[85%]" : "translate-y-[15%]"
              }`}
              style={{ left: springX, top: springY }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.18 }}
            >
              <Image
                src={active.image}
                alt={active.imageAlt}
                fill
                sizes="160px"
                className="object-cover"
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
      ) : null}
    </div>
  );
}
