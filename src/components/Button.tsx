import Link from "next/link";
import type { ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "bg-mustard-500 text-ink-900 hover:bg-mustard-400 active:bg-mustard-600",
  secondary:
    "border border-paper-100/25 text-paper-100 hover:border-mustard-500 hover:text-mustard-400",
  ghost: "text-paper-100 hover:text-mustard-400",
};

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 active:translate-y-px focus-visible:outline-2 focus-visible:outline-mustard-400";

export function LinkButton({
  href,
  children,
  variant = "primary",
  className,
  ...rest
}: BaseProps &
  { href: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className ?? ""}`} {...rest}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${variants[variant]} ${className ?? ""}`} {...props}>
      {children}
    </button>
  );
}
