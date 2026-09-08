import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Les Halles de Coustellet.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="bg-ink-950 pb-14 pt-32 sm:pt-40">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-denim-300">
            Informations légales
          </p>
          <h1 className="mt-3 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-paper-100 sm:text-5xl">
            Mentions légales
          </h1>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-[68ch] space-y-10">
          <Reveal>
            <h2 className="font-display text-lg font-bold text-paper-100">1. Éditeur du site</h2>
            <p className="mt-3 text-sm leading-relaxed text-paper-300">
              Le site {site.name} est édité par :
            </p>
            <ul className="mt-3 space-y-1 text-sm leading-relaxed text-paper-300">
              <li><span className="text-paper-100">Dénomination sociale :</span> {site.legal.companyName}</li>
              <li><span className="text-paper-100">Forme juridique :</span> {site.legal.legalForm}</li>
              <li><span className="text-paper-100">Capital social :</span> {site.legal.shareCapital}</li>
              <li><span className="text-paper-100">Siège social :</span> {site.legal.registeredOffice}</li>
              <li><span className="text-paper-100">RCS :</span> {site.legal.rcs}</li>
              <li><span className="text-paper-100">SIRET :</span> {site.legal.siret}</li>
              <li>
                <span className="text-paper-100">Email :</span>{" "}
                <a href={`mailto:${site.email}`} className="text-mustard-400 hover:text-mustard-300">
                  {site.email}
                </a>
              </li>
              <li>
                <span className="text-paper-100">Téléphone :</span>{" "}
                <a href={`tel:${site.phone}`} className="text-mustard-400 hover:text-mustard-300">
                  {site.phoneDisplay}
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.04}>
            <h2 className="font-display text-lg font-bold text-paper-100">2. Directeur de la publication</h2>
            <p className="mt-3 text-sm leading-relaxed text-paper-300">
              Le directeur de la publication du site est {site.legal.director}, gérant de {site.legal.companyName}.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="font-display text-lg font-bold text-paper-100">3. Hébergeur du site</h2>
            <ul className="mt-3 space-y-1 text-sm leading-relaxed text-paper-300">
              <li><span className="text-paper-100">Société :</span> Vercel Inc.</li>
              <li><span className="text-paper-100">Adresse :</span> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</li>
              <li><span className="text-paper-100">Site web :</span> vercel.com</li>
              <li><span className="text-paper-100">Contact :</span> privacy@vercel.com</li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-lg font-bold text-paper-100">4. Propriété intellectuelle</h2>
            <p className="mt-3 text-sm leading-relaxed text-paper-300">
              L&apos;ensemble des éléments présents sur ce site (textes, images, logos, graphismes, mise en page) sont la propriété exclusive de {site.legal.companyName} ou de ses partenaires, sauf mention contraire. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou procédé utilisé, est interdite sans autorisation écrite préalable.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <h2 className="font-display text-lg font-bold text-paper-100">5. Limitation de responsabilité</h2>
            <p className="mt-3 text-sm leading-relaxed text-paper-300">
              {site.legal.companyName} s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées sur ce site (horaires, coordonnées, présentation des cuisines) mais ne peut garantir qu&apos;elles soient exemptes d&apos;inexactitudes ou d&apos;omissions. Les informations sont données à titre indicatif et peuvent être modifiées sans préavis. Il est recommandé de vérifier les horaires directement auprès des Halles avant tout déplacement.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <h2 className="font-display text-lg font-bold text-paper-100">6. Droit applicable</h2>
            <p className="mt-3 text-sm leading-relaxed text-paper-300">
              Les présentes mentions légales sont soumises au droit français. En cas de litige et à défaut d&apos;accord amiable, les tribunaux français compétents seront seuls saisis.
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
