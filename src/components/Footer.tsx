import Link from "next/link";
import { InstagramLogo, FacebookLogo, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "./Logo";
import { stands } from "@/content/stands";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-ink-700 bg-ink-950">
      <div className="container-page grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo variant="compact" />
          <p className="mt-5 max-w-[38ch] text-sm leading-relaxed text-paper-300">
            Six cuisines independantes, une terrasse commune, en plein air au coeur du Luberon.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Les Halles de Coustellet sur Instagram"
              className="text-paper-300 transition-colors hover:text-mustard-400"
            >
              <InstagramLogo className="h-5 w-5" />
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Les Halles de Coustellet sur Facebook"
              className="text-paper-300 transition-colors hover:text-mustard-400"
            >
              <FacebookLogo className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-paper-500">
            Nos cuisines
          </p>
          <ul className="mt-4 space-y-2.5">
            {stands.map((stand) => (
              <li key={stand.slug}>
                <Link
                  href={`/cuisines#${stand.slug}`}
                  className="text-sm text-paper-300 transition-colors hover:text-mustard-400"
                >
                  {stand.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-paper-500">
            Nous trouver
          </p>
          <ul className="mt-4 space-y-3 text-sm text-paper-300">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-mustard-500" />
              <span>
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.city}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-mustard-500" />
              <a href={`tel:${site.phone}`} className="hover:text-mustard-400">
                {site.phoneDisplay}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex flex-col gap-2">
            <Link
              href="/infos-pratiques"
              className="text-sm font-semibold text-mustard-400 hover:text-mustard-300"
            >
              Horaires et acces
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold text-mustard-400 hover:text-mustard-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-ink-700">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-paper-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {site.shortName}</p>
          <p>Site vitrine de demonstration. Contenus et horaires a confirmer avant publication.</p>
        </div>
      </div>
    </footer>
  );
}
