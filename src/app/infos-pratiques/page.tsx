import type { Metadata } from "next";
import { Clock, MapPin, Warning, Car, Umbrella } from "@phosphor-icons/react/dist/ssr";
import { Section, SectionHeading } from "@/components/Section";
import { LinkButton } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Infos pratiques",
  description:
    "Horaires, adresse et acces des Halles de Coustellet, foodcourt a Oppede dans le Luberon.",
};

function ToConfirm({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-mustard-700/50 bg-mustard-500/10 p-4">
      <Warning className="mt-0.5 h-5 w-5 shrink-0 text-mustard-400" weight="fill" />
      <p className="text-sm leading-relaxed text-paper-200">{children}</p>
    </div>
  );
}

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address.street}, ${site.address.postalCode} ${site.address.city}`
)}`;

export default function InfosPratiquesPage() {
  return (
    <>
      <section className="bg-ink-950 pb-14 pt-32 sm:pt-40">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-denim-300">
            Infos pratiques
          </p>
          <h1 className="mt-3 max-w-2xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-paper-100 sm:text-5xl">
            Horaires et adresse
          </h1>
          <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-paper-300 sm:text-lg">
            Tout ce qu&apos;il faut savoir avant de passer aux Halles de Coustellet.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-mustard-500" weight="duotone" />
              <h2 className="font-display text-2xl font-bold text-paper-100">Horaires</h2>
            </div>
            <ul className="mt-6 divide-y divide-ink-700">
              {site.hoursDisplay.map((row) => (
                <li key={row.label} className="flex items-center justify-between py-3">
                  <span className="text-paper-300">{row.label}</span>
                  <span className="font-mono text-sm text-paper-100">{row.value}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <ToConfirm>
                Horaires confirmes par la signaletique officielle du lieu. Cas particuliers (services traiteur, jours feries, periode hivernale) a verifier avec l&apos;exploitant avant mise en ligne definitive.
              </ToConfirm>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-mustard-500" weight="duotone" />
              <h2 className="font-display text-2xl font-bold text-paper-100">Adresse</h2>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-paper-100">
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}
            </p>
            <p className="mt-3 text-paper-300">
              <a href={`tel:${site.phone}`} className="font-semibold text-mustard-400 hover:text-mustard-300">
                {site.phoneDisplay}
              </a>
            </p>
            <div className="mt-6">
              <LinkButton href={mapsHref} variant="secondary" target="_blank" rel="noreferrer">
                Ouvrir dans Google Maps
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading title="Acces et stationnement" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <Reveal>
            <div className="flex items-start gap-3">
              <Car className="mt-1 h-5 w-5 shrink-0 text-mustard-500" weight="duotone" />
              <p className="text-sm leading-relaxed text-paper-300">
                Coustellet se trouve sur la route entre Cavaillon et Gordes, dans le Luberon.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <ToConfirm>
              Modalites de stationnement, accessibilite PMR et desserte en transport en commun a confirmer avec le client avant publication.
            </ToConfirm>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading title="La terrasse" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <Reveal>
            <div className="flex items-start gap-3">
              <Umbrella className="mt-1 h-5 w-5 shrink-0 text-mustard-500" weight="duotone" />
              <p className="text-sm leading-relaxed text-paper-300">
                Les Halles se vivent en plein air, avec un espace terrasse et un espace interieur pres des stands.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <ToConfirm>
              Capacite d&apos;accueil, presence d&apos;un espace couvert, animaux acceptes : informations a confirmer avec le client avant publication.
            </ToConfirm>
          </Reveal>
        </div>
      </Section>

      <Section tone="surface">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              align="center"
              title="Une question ?"
              lede="Pour nous ecrire, une reservation de groupe ou une demande d'evenement, direction la page contact."
            />
            <div className="mt-7 flex justify-center">
              <LinkButton href="/contact">Nous contacter</LinkButton>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
