type LogoProps = {
  className?: string;
  markOnly?: boolean;
  variant?: "full" | "compact";
};

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M78 26C69 14 53 8 38 11C18 15 5 34 8 54C11 74 30 88 50 86C66 84.5 79 73 83 58"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({ className, variant = "full" }: LogoProps) {
  if (variant === "compact") {
    return (
      <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
        <LogoMark className="h-7 w-7 text-mustard-500 shrink-0" />
        <span className="font-display font-bold tracking-tight text-paper-100 leading-none">
          Les Halles
          <span className="block text-[0.6em] font-medium tracking-[0.08em] text-paper-300">
            de Coustellet
          </span>
        </span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-4 ${className ?? ""}`}>
      <LogoMark className="h-14 w-14 text-mustard-500 shrink-0" />
      <span className="font-display font-bold leading-[0.95] text-paper-100">
        <span className="block text-2xl sm:text-3xl tracking-tight">Les Halles</span>
        <span className="block text-2xl sm:text-3xl tracking-tight">de Coustellet</span>
        <span className="mt-1 block text-xs font-semibold tracking-[0.22em] text-mustard-500">
          FOODCOURT
        </span>
      </span>
    </span>
  );
}
