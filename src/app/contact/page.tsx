import type { Metadata } from "next";
import { MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import { Section, SectionHeading } from "@/components/Section";
import { LinkButton } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Les Halles de Coustellet, foodcourt à Oppède dans le Luberon : adresse, téléphone et formulaire de contact.",
};

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address.street}, ${site.address.postalCode} ${site.address.city}`
)}`;

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink-950 pb-14 pt-32 sm:pt-40">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-denim-300">
            Contact
          </p>
          <h1 className="mt-3 max-w-2xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-paper-100 sm:text-5xl">
            Nous contacter
          </h1>
          <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-paper-300 sm:text-lg">
            Une question, une réservation pour un groupe, une demande d&apos;événement ? Écrivez-nous ou appelez directement.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-mustard-500" weight="duotone" />
              <div>
                <p className="font-display text-lg font-bold text-paper-100">Adresse</p>
                <p className="mt-1 text-sm leading-relaxed text-paper-300">
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.city}
                </p>
              </div>
            </div>
            <div className="mt-5 flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-mustard-500" weight="duotone" />
              <a href={`tel:${site.phone}`} className="text-sm font-semibold text-mustard-400 hover:text-mustard-300">
                {site.phoneDisplay}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <LinkButton href={mapsHref} variant="secondary" target="_blank" rel="noreferrer">
                Voir l&apos;itinéraire
              </LinkButton>
              <LinkButton href="/infos-pratiques" variant="ghost">
                Horaires et accès -&gt;
              </LinkButton>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <SectionHeading title="Nous écrire" />
            <div className="mt-6">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
