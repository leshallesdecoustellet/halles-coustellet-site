"use client";

import type { ElementType } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealTextProps = {
  text: string;
  className?: string;
  delay?: number;
  as?: ElementType;
};

export function RevealText({ text, className, delay = 0, as: Component = "span" }: RevealTextProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <Component className={className}>{text}</Component>;
  }

  return (
    <Component className={`overflow-hidden ${className ?? ""}`}>
      <motion.span
        className="block"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {text}
      </motion.span>
    </Component>
  );
}
