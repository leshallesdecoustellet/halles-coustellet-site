type ArcMotifProps = {
  className?: string;
};

/**
 * Decorative brush-stroke arc, echoing the venue's real hand-painted signage
 * and the physical semi-circle layout of the six stands.
 */
export function ArcMotif({ className }: ArcMotifProps) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M340 110C310 55 220 25 150 45C65 70 20 155 35 235C50 315 130 365 210 355C275 347 325 300 345 240"
        stroke="currentColor"
        strokeWidth="26"
        strokeLinecap="round"
      />
    </svg>
  );
}
