import Image from "next/image";
import Link from "next/link";
import { CalendarStar, Clock, FacebookLogo, MapPin } from "@phosphor-icons/react/dist/ssr";
import { Section, SectionHeading } from "@/components/Section";
import { LinkButton } from "@/components/Button";
import { StandCard } from "@/components/StandCard";
import { StandsDiagram } from "@/components/StandsDiagram";
import { Reveal } from "@/components/Reveal";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { HeroImage } from "@/components/HeroImage";
import { stands } from "@/content/stands";
import { site } from "@/lib/site";

const photoSlots = [
  { label: "Terrasse en journee", src: "/images/venue/bar-terrasse.jpg" },
  { label: "Ambiance en soiree" },
  { label: "Les six stands", src: "/images/venue/interieur-ambiance.jpg" },
  { label: "Concerts et evenements" },
  { label: "Vue d'ensemble du lieu", src: "/images/venue/entree-signage.jpg" },
  { label: "Coulisses des food trucks", src: "/images/stands/gastronomique/stand-facade.jpg" },
];

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address.street}, ${site.address.postalCode} ${site.address.city}`
)}`;

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[92dvh] items-end overflow-hidden bg-ink-950 pb-16 pt-24 sm:min-h-[100dvh]">
        <HeroImage
          src="/images/venue/table-partagee.jpg"
          alt="Une table partagee aux Halles de Coustellet, avec tacos, pad thai, mezze libanais et crepes"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/75 via-45% to-ink-950/15" />
        <div className="container-page relative">
          <div className="max-w-2xl">
            <h1 className="text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-paper-100 sm:text-6xl">
              Six cuisines, une seule terrasse.
            </h1>
            <p className="mt-5 max-w-[48ch] text-base leading-relaxed text-paper-300 sm:text-lg">
              Crepes, tapas, mezze, curry, burgers et cuisine gastronomique, reunis en plein air au coeur du Luberon.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <LinkButton href="#cuisines">Decouvrir les cuisines</LinkButton>
              <LinkButton href="/infos-pratiques" variant="secondary">
                Infos pratiques
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-2">
            <SectionHeading
              title="Un food court, pas un restaurant comme les autres"
              lede="Six chefs et food trucks independants partagent un meme lieu, une meme terrasse en plein air, a l'ombre des arbres, entre tables en bois et guirlandes lumineuses. Chacun garde sa carte, son savoir-faire et son caractere."
            />
            <div>
              <p className="max-w-[56ch] text-base leading-relaxed text-paper-300">
                On vient en famille, entre amis, ou en solo pour tester une nouvelle carte. On peut composer son repas en piochant chez plusieurs stands, s&apos;installer en terrasse ou repartir a emporter.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {stands.map((stand) => (
                  <Link
                    key={stand.slug}
                    href={`/cuisines#${stand.slug}`}
                    className="rounded-full border border-ink-600 px-4 py-2 text-sm text-paper-300 transition-colors hover:border-mustard-500 hover:text-mustard-400"
                  >
                    {stand.cuisine}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionHeading
            title="L'histoire du food court"
            lede="Les food courts, aussi appeles food halls, revolutionnent l'experience culinaire en offrant une diversite gastronomique sous un meme toit, ou manger, boire, et vivre des moments culturels deviennent une aventure collective. Finie l'hesitation interminable pour choisir un restaurant : ces espaces gourmands satisfont toutes les papilles, simplifiant la vie des groupes aux gouts varies."
          />
        </Reveal>
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h3 className="font-display text-xl font-bold text-paper-100">Genese du Food Court</h3>
            <p className="mt-3 text-base leading-relaxed text-paper-300">
              Nes dans les annees 70 en Amerique et en Asie, les food courts visaient initialement a nourrir rapidement les foules dans les centres commerciaux, favorisant l&apos;efficacite au detriment de la diversite. Cependant, cette notion a evolue, donnant naissance a des lieux ou la nourriture celebre la culture et la convivialite.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h3 className="font-display text-xl font-bold text-paper-100">
              Le Food Court aujourd&apos;hui : un carrefour culturel
            </h3>
            <p className="mt-3 text-base leading-relaxed text-paper-300">
              Ces dernieres annees, le food court s&apos;est transforme en un espace ou la gastronomie est une experience partagee et culturelle, loin de l&apos;idee d&apos;un simple besoin primaire. Ces lieux deviennent des points de rencontre ou a tout moment, il est possible de savourer un repas, prendre un verre, profiter d&apos;un concert ou d&apos;une exposition, enrichissant ainsi la vie sociale et culturelle des visiteurs.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="surface" id="cuisines">
        <Reveal>
          <SectionHeading
            title="Nos 6 cuisines"
            lede="Disposees en demi-cercle autour de la terrasse, de la creperie a gauche jusqu'aux tapas espagnoles a droite."
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {stands.map((stand, index) => (
            <Reveal key={stand.slug} delay={index * 0.05}>
              <StandCard stand={stand} index={index} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHeading
            align="center"
            title="Six stands, un demi-cercle"
            lede="De la creperie a gauche jusqu'aux tapas espagnoles a droite, les six food trucks s'organisent en arc de cercle autour de la terrasse."
          />
        </Reveal>
        <div className="mt-14">
          <StandsDiagram />
        </div>
      </Section>

      <Section tone="surface" className="relative overflow-hidden">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-denim-300">
              Concerts et evenements
            </p>
            <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-paper-100 sm:text-4xl">
              Un lieu qui vit aussi le soir
            </h2>
            <p className="mt-4 max-w-[56ch] text-base leading-relaxed text-paper-300">
              Concerts, soirees a theme et rendez-vous conviviaux rythment la saison. Les Halles accueillent les familles comme les groupes d&apos;amis, dans une ambiance festive et multiculturelle, ouverte a toutes les cultures qui font la richesse de la carte.
            </p>
            <div className="mt-7">
              <LinkButton href="/contact" variant="secondary">
                Nous contacter
              </LinkButton>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/venue/entree.jpg"
                alt="Entree des Halles de Coustellet au coucher du soleil, guirlandes lumineuses et terrasse"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHeading
            title="Un apercu en images"
            lede="Les photos des concerts et soirees seront ajoutees ici avant la mise en ligne definitive."
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {photoSlots.map((slot, index) => (
            <Reveal key={slot.label} delay={(index % 3) * 0.05}>
              {slot.src ? (
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image src={slot.src} alt={slot.label} fill sizes="(min-width: 640px) 33vw, 50vw" className="object-cover" />
                </div>
              ) : (
                <PlaceholderImage label={slot.label} className="aspect-[4/5] rounded-2xl" />
              )}
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <Reveal>
          <SectionHeading
            title="La vie des Halles, en images"
            lede="Suivez le quotidien des Halles, les nouveautes et les prochains evenements sur Facebook."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <a
            href={site.social.facebook}
            target="_blank"
            rel="noreferrer"
            className="group relative mt-10 block aspect-[21/9] overflow-hidden rounded-3xl"
          >
            <Image
              src="/images/venue/disposition-2.jpg"
              alt="Stands des Halles de Coustellet en soiree, guirlandes lumineuses"
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-center gap-4 p-6 sm:p-8">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mustard-500 text-ink-900">
                <FacebookLogo className="h-6 w-6" weight="fill" />
              </span>
              <div>
                <p className="font-display text-lg font-bold text-paper-100">
                  Suivez-nous sur Facebook
                </p>
                <p className="text-sm text-paper-300">Les Halles de Coustellet</p>
              </div>
            </div>
          </a>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionHeading
            title="Envie de passer ?"
            lede="Horaires, adresse et stationnement pour organiser votre visite aux Halles de Coustellet."
          />
        </Reveal>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          <Reveal>
            <div className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-mustard-500" weight="duotone" />
              <div>
                <p className="font-display text-lg font-bold text-paper-100">Horaires</p>
                <p className="mt-1 text-sm leading-relaxed text-paper-300">
                  Mardi - samedi
                  <br />
                  11h30-14h et 18h30-21h30
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
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
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex items-start gap-3">
              <CalendarStar className="mt-1 h-5 w-5 shrink-0 text-mustard-500" weight="duotone" />
              <div>
                <p className="font-display text-lg font-bold text-paper-100">Sur place ou a emporter</p>
                <p className="mt-1 text-sm leading-relaxed text-paper-300">
                  Terrasse, interieur et vente a emporter selon les stands.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <LinkButton href={mapsHref} target="_blank" rel="noreferrer">
            Voir l&apos;itineraire
          </LinkButton>
          <LinkButton href="/infos-pratiques" variant="ghost">
            Voir toutes les infos pratiques -&gt;
          </LinkButton>
        </div>
      </Section>
    </>
  );
}
