"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CaretDown, List, X } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "./Logo";
import { stands } from "@/content/stands";
import { NAV_LINKS } from "@/lib/site";

export function Nav() {
  const pathname = usePathname();
  const [cuisinesOpen, setCuisinesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const cuisinesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setCuisinesOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (cuisinesRef.current && !cuisinesRef.current.contains(e.target as Node)) {
        setCuisinesOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setCuisinesOpen(false);
    }
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const linkClass = (href: string) =>
    `text-sm font-semibold tracking-wide transition-colors hover:text-mustard-400 ${
      pathname === href ? "text-mustard-400" : "text-paper-100"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-ink-700/80 bg-ink-900/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between sm:h-[72px]">
        <Link href="/" aria-label="Les Halles de Coustellet, accueil">
          <Logo variant="compact" />
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-7 lg:flex">
          <Link href="/" className={linkClass("/")}>
            Accueil
          </Link>

          <div ref={cuisinesRef} className="relative">
            <button
              type="button"
              aria-expanded={cuisinesOpen}
              aria-haspopup="true"
              onClick={() => setCuisinesOpen((v) => !v)}
              className="flex items-center gap-1 text-sm font-semibold tracking-wide text-paper-100 transition-colors hover:text-mustard-400"
            >
              Nos cuisines
              <CaretDown
                className={`h-3.5 w-3.5 transition-transform ${cuisinesOpen ? "rotate-180" : ""}`}
                weight="bold"
              />
            </button>
            {cuisinesOpen ? (
              <div className="absolute left-1/2 top-full mt-3 w-64 -translate-x-1/2 rounded-2xl border border-ink-600 bg-ink-800 p-2 shadow-glow">
                {stands.map((stand) => (
                  <Link
                    key={stand.slug}
                    href={`/cuisines#${stand.slug}`}
                    className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-paper-100 transition-colors hover:bg-ink-700 hover:text-mustard-400"
                  >
                    <span>{stand.title}</span>
                    <span className="text-xs text-paper-500">{stand.cuisine === stand.title ? "" : stand.cuisine}</span>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <Link href="/infos-pratiques" className={linkClass("/infos-pratiques")}>
            Infos pratiques
          </Link>

          <Link
            href="/contact"
            className="rounded-full bg-mustard-500 px-5 py-2.5 text-sm font-semibold text-ink-900 transition-colors hover:bg-mustard-400"
          >
            Contact
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-paper-100 lg:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <List className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen ? (
        <nav
          aria-label="Navigation mobile"
          className="border-t border-ink-700 bg-ink-900 px-5 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col divide-y divide-ink-700">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="block py-3 text-base font-semibold text-paper-100">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mb-2 mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-paper-500">
            Acces rapide aux cuisines
          </p>
          <ul className="grid grid-cols-2 gap-2">
            {stands.map((stand) => (
              <li key={stand.slug}>
                <Link
                  href={`/cuisines#${stand.slug}`}
                  className="block rounded-xl bg-ink-800 px-3 py-2.5 text-sm text-paper-100"
                >
                  {stand.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
