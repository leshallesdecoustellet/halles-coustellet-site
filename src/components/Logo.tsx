import Image from "next/image";

type LogoProps = {
  className?: string;
  variant?: "full" | "compact";
};

export function LogoMark({ className }: { className?: string }) {
  return (
    <span className={`relative block shrink-0 ${className ?? ""}`}>
      <Image
        src="/images/logo/les-halles-logo.jpg"
        alt=""
        fill
        sizes="112px"
        className="object-contain mix-blend-screen"
      />
    </span>
  );
}

export function Logo({ className, variant = "full" }: LogoProps) {
  if (variant === "compact") {
    return (
      <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
        <LogoMark className="h-12 w-12" />
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
      <LogoMark className="h-16 w-16" />
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
