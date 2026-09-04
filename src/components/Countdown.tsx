"use client";

import { useEffect, useState } from "react";

type CountdownProps = {
  target: string;
  label?: string;
};

type TimeParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
};

function getTimeParts(target: string): TimeParts {
  const diff = Math.max(0, new Date(target).getTime() - Date.now());
  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    done: diff <= 0,
  };
}

export function Countdown({ target, label }: CountdownProps) {
  const [parts, setParts] = useState<TimeParts | null>(null);

  useEffect(() => {
    setParts(getTimeParts(target));
    const interval = setInterval(() => setParts(getTimeParts(target)), 1000);
    return () => clearInterval(interval);
  }, [target]);

  if (!parts) {
    return <div className="mt-4 h-[4.75rem]" aria-hidden="true" />;
  }

  if (parts.done) {
    return <p className="mt-4 text-sm font-semibold text-mustard-400">C&apos;est ouvert !</p>;
  }

  const units = [
    { value: parts.days, unitLabel: "jours" },
    { value: parts.hours, unitLabel: "heures" },
    { value: parts.minutes, unitLabel: "min" },
    { value: parts.seconds, unitLabel: "sec" },
  ];

  return (
    <div className="mt-4">
      {label ? (
        <p className="mb-2 text-xs uppercase tracking-[0.14em] text-paper-500">{label}</p>
      ) : null}
      <div className="flex gap-2.5">
        {units.map((unit) => (
          <div
            key={unit.unitLabel}
            className="flex w-16 flex-col items-center rounded-xl border border-ink-700 bg-ink-800/60 py-2.5"
          >
            <span className="font-display text-xl font-bold tabular-nums text-paper-100">
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="text-[0.65rem] uppercase tracking-[0.08em] text-paper-500">
              {unit.unitLabel}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
