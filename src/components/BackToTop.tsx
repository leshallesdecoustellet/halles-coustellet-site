"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "@phosphor-icons/react/dist/ssr";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 600);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })}
          aria-label="Remonter en haut de la page"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-mustard-500 text-ink-900 shadow-glow transition-colors hover:bg-mustard-400 sm:bottom-8 sm:right-8"
        >
          <ArrowUp className="h-5 w-5" weight="bold" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
