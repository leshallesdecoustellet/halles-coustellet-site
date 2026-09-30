"use client";

import { useEffect, useState, type ReactNode } from "react";

const MAX_TIMEOUT = 2 ** 31 - 1;

export function BeforeOpening({ date, children }: { date?: string; children: ReactNode }) {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (!date) return;
    const remaining = new Date(date).getTime() - Date.now();
    if (remaining <= 0) {
      setOpened(true);
      return;
    }
    const timer = setTimeout(() => setOpened(true), Math.min(remaining, MAX_TIMEOUT));
    return () => clearTimeout(timer);
  }, [date]);

  return opened ? null : <>{children}</>;
}
