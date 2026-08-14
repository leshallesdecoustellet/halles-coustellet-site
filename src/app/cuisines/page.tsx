import type { Metadata } from "next";
import Image from "next/image";
import { FacebookLogo, InstagramLogo, Phone } from "@phosphor-icons/react/dist/ssr";
import { Section, SectionHeading } from "@/components/Section";
import { LinkButton } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { LogoMark } from "@/components/Logo";
import { stands, type Stand } from "@/content/stands";

export const metadata: Metadata = {
  title: "Nos cuisines",
  description:
    "Les 6 cuisines independantes des Halles de Coustellet : gastronomique, libanaise, thailandaise, creperie, burger & tacos, tapas espagnoles.",
};

function StandSection({ stand, index }: { stand: Stand; index: number }) {
  return (
    <Section tone={index % 2 === 0 ? "base" : "surface"} id={stand.slug} className="scroll-mt-24 sm:scroll-mt-28">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-denim-300">
          {stand.cuisine}
          {stand.brandName ? ` - ${stand.brandName}` : ""}
        </p>
        <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-paper-100 sm:text-4xl">
          {stand.title}
        </h2>
        <p className="mt-3 max-w-[60ch] text-base leading-relaxed text-paper-300">{stand.subtitle}</p>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl">
          <Image
            src={stand.heroImage}
            alt={stand.heroImageAlt}
            fill
            sizes="(min-width: 1024px) 80vw, 100vw"
            className={`object-cover ${stand.heroObjectPosition ?? ""}`}
          />
        </div>
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <Reveal delay={0.05}>
          <div className="flex flex-col items-center rounded-3xl border border-ink-700 bg-ink-800/60 p-6 text-center">
            {stand.logoImage ? (
              <div className="relative h-32 w-32 overflow-hidden rounded-2xl border border-ink-600 bg-ink-900">
                <Image
                  src={stand.logoImage}
                  alt={stand.logoImageAlt ?? `Logo ${stand.title}`}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="flex flex-col items-center gap-3 py-4">
                <LogoMark className="h-10 w-10 text-mustard-500" />
                <p className="font-display text-lg font-bold text-paper-100">
                  {stand.brandName ?? stand.title}
                </p>
              </div>
            )}
            <p className="mt-4 text-xs uppercase tracking-[0.14em] text-paper-500">
              Aux Halles de Coustellet - {stand.position}
            </p>
            {stand.phone ? (
              <a
                href={`tel:${stand.phone}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-paper-200 transition-colors hover:text-mustard-400"
              >
                <Phone className="h-4 w-4" weight="fill" />
                {stand.phoneDisplay}
              </a>
            ) : null}
            {stand.social?.instagram || stand.social?.facebook ? (
              <div className="mt-4 flex items-center gap-4">
                {stand.social.instagram ? (
                  <a
                    href={stand.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${stand.title} sur Instagram`}
                    className="text-paper-300 transition-colors hover:text-mustard-400"
                  >
                    <InstagramLogo className="h-5 w-5" />
                  </a>
                ) : null}
                {stand.social.facebook ? (
                  <a
                    href={stand.social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${stand.title} sur Facebook`}
                    className="text-paper-300 transition-colors hover:text-mustard-400"
                  >
                    <FacebookLogo className="h-5 w-5" />
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          {stand.paragraph.map((p) => (
            <p key={p} className="mb-4 text-base leading-relaxed text-paper-300 last:mb-0">
              {p}
            </p>
          ))}
          <div className="mt-6 rounded-2xl border border-ink-700 bg-ink-800/40 p-5">
            <p className="font-display text-base font-bold text-paper-100">{stand.whyTitle}</p>
            <p className="mt-2 text-sm leading-relaxed text-paper-300">{stand.why}</p>
          </div>
        </Reveal>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {stand.gallery.map((image, imgIndex) => (
          <Reveal key={image.alt} delay={imgIndex * 0.05}>
            {image.src ? (
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <PlaceholderImage label={image.alt} className="aspect-[4/5] rounded-2xl" />
            )}
          </Reveal>
        ))}
      </div>

      <div className="mt-14">
        <h3 className="font-display text-xl font-bold text-paper-100">La carte</h3>
        {stand.menuNote ? <p className="mt-1 text-sm text-paper-500">{stand.menuNote}</p> : null}
        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          {stand.menu.map((section, sectionIndex) => (
            <Reveal key={section.title} delay={(sectionIndex % 2) * 0.06}>
              <h4 className="font-display text-lg font-bold text-paper-100">{section.title}</h4>
              {section.note ? <p className="mt-1 text-sm text-paper-500">{section.note}</p> : null}
              <ul className="mt-4 divide-y divide-ink-700/70">
                {section.items.map((item) => (
                  <li key={item.name} className="py-3 first:pt-0">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-semibold text-paper-100">{item.name}</span>
                      {item.price ? (
                        <span className="whitespace-nowrap font-mono text-sm text-mustard-400">
                          {item.price}
                        </span>
                      ) : null}
                    </div>
                    {item.description ? (
                      <p className="mt-1 text-sm leading-relaxed text-paper-300">{item.description}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-sm text-paper-500">
          Carte et prix indicatifs, releves sur place. A confirmer avant publication.
        </p>
      </div>
    </Section>
  );
}

export default function CuisinesPage() {
  return (
    <>
      <section className="bg-ink-950 pb-14 pt-32 sm:pt-40">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-denim-300">
            Nos cuisines
          </p>
          <h1 className="mt-3 max-w-2xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-paper-100 sm:text-5xl">
            Six chefs, six univers
          </h1>
          <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-paper-300 sm:text-lg">
            Chaque stand raconte une histoire differente. Explorez les cartes, ou laissez-vous porter d&apos;un plat a l&apos;autre.
          </p>
        </div>
      </section>

      <div className="sticky top-16 z-40 border-b border-ink-700 bg-ink-900/95 backdrop-blur sm:top-[72px]">
        <div className="container-page">
          <div className="flex gap-2 overflow-x-auto py-3">
            {stands.map((stand) => (
              <a
                key={stand.slug}
                href={`#${stand.slug}`}
                className="whitespace-nowrap rounded-full border border-ink-600 px-4 py-2 text-sm text-paper-300 transition-colors hover:border-mustard-500 hover:text-mustard-400"
              >
                {stand.cuisine}
              </a>
            ))}
          </div>
        </div>
      </div>

      {stands.map((stand, index) => (
        <StandSection key={stand.slug} stand={stand} index={index} />
      ))}

      <Section>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              align="center"
              title="Une question sur une carte ou un evenement ?"
              lede="Ecrivez-nous, nous revenons vers vous rapidement."
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
