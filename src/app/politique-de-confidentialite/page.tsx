import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité du site Les Halles de Coustellet.",
};

const LAST_UPDATED = "8 septembre 2026";

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <section className="bg-ink-950 pb-14 pt-32 sm:pt-40">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-denim-300">
            Informations légales
          </p>
          <h1 className="mt-3 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-paper-100 sm:text-5xl">
            Politique de confidentialité
          </h1>
          <p className="mt-4 text-sm text-paper-500">Dernière mise à jour : {LAST_UPDATED}</p>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-[68ch] space-y-10">
          <Reveal>
            <h2 className="font-display text-lg font-bold text-paper-100">1. Qui sommes-nous</h2>
            <p className="mt-3 text-sm leading-relaxed text-paper-300">
              Cette politique de confidentialité s&apos;applique au site internet des Halles de Coustellet, édité par {site.legal.companyName} ({site.legal.legalForm}, {site.legal.rcs}), {site.legal.registeredOffice}.
            </p>
          </Reveal>

          <Reveal delay={0.04}>
            <h2 className="font-display text-lg font-bold text-paper-100">2. Données collectées</h2>
            <p className="mt-3 text-sm leading-relaxed text-paper-300">
              Ce site collecte uniquement les données que vous nous transmettez volontairement via le formulaire de contact :
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-paper-300">
              <li>Nom</li>
              <li>Adresse email</li>
              <li>Message</li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-paper-300">
              Aucune autre donnée personnelle n&apos;est collectée. Ce site n&apos;utilise pas de cookies de mesure d&apos;audience (type Google Analytics) ni de cookies publicitaires.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="font-display text-lg font-bold text-paper-100">3. Finalité et destinataire des données</h2>
            <p className="mt-3 text-sm leading-relaxed text-paper-300">
              Les informations transmises via le formulaire de contact sont envoyées directement par email à l&apos;adresse de contact des Halles de Coustellet, dans le seul but de répondre à votre demande (question, réservation de groupe, demande d&apos;information). Ces données ne sont ni stockées dans une base de données, ni revendues, ni transmises à un tiers autre que l&apos;outil technique utilisé pour l&apos;acheminement du formulaire (Web3Forms), qui ne fait que transmettre le message par email sans conserver de base de données consultable.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-lg font-bold text-paper-100">4. Durée de conservation</h2>
            <p className="mt-3 text-sm leading-relaxed text-paper-300">
              Les emails reçus via le formulaire de contact sont conservés dans la messagerie de {site.legal.companyName} pour la durée nécessaire au traitement de votre demande, puis archivés ou supprimés selon les pratiques habituelles de gestion de messagerie.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <h2 className="font-display text-lg font-bold text-paper-100">5. Vos droits</h2>
            <p className="mt-3 text-sm leading-relaxed text-paper-300">
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement et d&apos;opposition concernant vos données personnelles. Pour exercer ces droits, contactez-nous à l&apos;adresse :{" "}
              <a href={`mailto:${site.email}`} className="text-mustard-400 hover:text-mustard-300">
                {site.email}
              </a>
              .
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <h2 className="font-display text-lg font-bold text-paper-100">6. Hébergement des données</h2>
            <p className="mt-3 text-sm leading-relaxed text-paper-300">
              Le site est hébergé par Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis), qui peut être amené à traiter des données techniques de connexion (adresse IP, journaux serveur) dans le cadre strict du fonctionnement du site.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <h2 className="font-display text-lg font-bold text-paper-100">7. Modification de la présente politique</h2>
            <p className="mt-3 text-sm leading-relaxed text-paper-300">
              Cette politique de confidentialité peut être modifiée à tout moment. Les utilisateurs sont invités à la consulter régulièrement.
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
