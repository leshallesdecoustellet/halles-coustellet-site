import Image from "next/image";
import Link from "next/link";
import { CalendarStar, CaretDown, Clock, FacebookLogo, InstagramLogo, MapPin } from "@phosphor-icons/react/dist/ssr";
import { Section, SectionHeading } from "@/components/Section";
import { LinkButton } from "@/components/Button";
import { StandsDiagram } from "@/components/StandsDiagram";
import { Reveal } from "@/components/Reveal";
import { RevealText } from "@/components/RevealText";
import { ParallaxImage } from "@/components/ParallaxImage";
import { PhotoGallery } from "@/components/PhotoGallery";
import { BackToTop } from "@/components/BackToTop";
import { CuisineHoverPills } from "@/components/CuisineHoverPills";
import { stands } from "@/content/stands";
import { site } from "@/lib/site";

type PhotoSlot = { label: string; src: string };

const photoSlots: PhotoSlot[] = stands.flatMap((stand) =>
  stand.gallery
    .filter((image): image is { src: string; alt: string } => Boolean(image.src))
    .slice(0, 2)
    .map((image) => ({ label: image.alt, src: image.src }))
);

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address.street}, ${site.address.postalCode} ${site.address.city}`
)}`;

const cuisinePills = stands.map((stand) => ({
  slug: stand.slug,
  cuisine: stand.cuisine,
  image: stand.cardImage ?? stand.heroImage,
  imageAlt: stand.cardImageAlt ?? stand.heroImageAlt,
}));

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[92dvh] items-end overflow-hidden bg-ink-950 pb-16 pt-24 sm:min-h-[100dvh]">
        <div className="absolute inset-0">
          <ParallaxImage
            src="/images/venue/table-partagee.jpg"
            alt="Une table partagée aux Halles de Coustellet, avec tacos, pad thaï, mezze libanais et grillades"
            className="h-full w-full"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/75 via-45% to-ink-950/15" />
        <div className="container-page relative">
          <div className="max-w-3xl">
            <RevealText
              as="h1"
              text="Six cuisines, une seule adresse."
              className="text-balance font-display text-4xl font-bold leading-[1.02] tracking-tight text-paper-100 sm:text-7xl"
            />
            <Reveal delay={0.3}>
              <p className="mt-5 max-w-[48ch] text-base leading-relaxed text-paper-300 sm:text-lg">
                Grillades, tapas, mezze, curry, burgers et cuisine gastronomique, réunis en plein air au cœur du Luberon.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <LinkButton href="#cuisines">Découvrir les cuisines</LinkButton>
                <LinkButton href="/infos-pratiques" variant="secondary">
                  Infos pratiques
                </LinkButton>
              </div>
            </Reveal>
          </div>
        </div>
        <Link
          href="#intro"
          aria-label="Défiler vers le contenu"
          className="absolute inset-x-0 bottom-6 hidden justify-center text-paper-300 transition-colors hover:text-mustard-400 sm:flex"
        >
          <CaretDown className="h-6 w-6 animate-bounce" />
        </Link>
      </section>

      <section id="intro" className="relative overflow-hidden bg-ink-900 py-20 sm:py-28">
        <span className="pointer-events-none absolute -right-24 -top-24 block h-[28rem] w-[28rem] overflow-hidden rounded-full opacity-10 sm:h-[36rem] sm:w-[36rem]">
          <Image
            src="/images/logo/les-halles-logo.jpg"
            alt=""
            fill
            sizes="576px"
            className="object-contain mix-blend-screen"
          />
        </span>
        <div className="container-page relative">
          <RevealText
            as="h2"
            text="Un food court, pas un restaurant comme les autres."
            className="max-w-4xl text-balance font-display text-3xl font-bold leading-[1.08] tracking-tight text-paper-100 sm:text-5xl lg:text-6xl"
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-16">
            <Reveal delay={0.1}>
              <p className="max-w-[52ch] text-base leading-relaxed text-paper-300 sm:text-lg">
                Six chefs et food trucks indépendants partagent un même lieu, une même terrasse en plein air, à l&apos;ombre des arbres, entre tables en bois et guirlandes lumineuses. Chacun garde sa carte, son savoir-faire et son caractère.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="max-w-[56ch] text-base leading-relaxed text-paper-300">
                On vient en famille, entre amis, ou en solo pour tester une nouvelle carte. On peut composer son repas en piochant chez plusieurs stands, s&apos;installer en terrasse ou repartir à emporter.
              </p>
              <div className="mt-6">
                <CuisineHoverPills pills={cuisinePills} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="cuisines" className="relative overflow-hidden border-y border-paper-500/20 py-14 sm:py-20">
        <div className="absolute inset-0">
          <ParallaxImage
            src="/images/venue/terrasse-illustration.jpg"
            alt="Illustration de la terrasse commune des Halles de Coustellet, sous les arbres"
            className="h-full w-full"
          />
        </div>
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-paper-50/95 via-paper-50/60 to-transparent sm:h-96" />
        <div className="container-page relative">
          <Reveal>
            <div className="mb-4 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-mustard-600/40 bg-paper-50/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-mustard-700 backdrop-blur-sm">
                6 cuisines · 1 seul lieu
              </span>
            </div>
            <SectionHeading align="center" title="Comment ça s'organise sur place" tone="light" />
          </Reveal>
          <div className="mt-6">
            <StandsDiagram />
          </div>
        </div>
      </section>

      <section className="relative flex min-h-[70dvh] items-end overflow-hidden bg-ink-950">
        <div className="absolute inset-0">
          <ParallaxImage
            src="/images/venue/entree.jpg"
            alt="Entrée des Halles de Coustellet au coucher du soleil, guirlandes lumineuses et terrasse"
            className="h-full w-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/10" />
        <div className="container-page relative py-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-denim-300">
              Concerts et événements
            </p>
            <h2 className="mt-3 max-w-xl text-balance font-display text-3xl font-bold tracking-tight text-paper-100 sm:text-5xl">
              Un lieu qui vit aussi le soir
            </h2>
            <p className="mt-4 max-w-[56ch] text-base leading-relaxed text-paper-300 sm:text-lg">
              Concerts, soirées à thème et rendez-vous conviviaux rythment la saison. Les Halles accueillent les familles comme les groupes d&apos;amis, dans une ambiance festive et multiculturelle, ouverte à toutes les cultures qui font la richesse de la carte.
            </p>
            <div className="mt-7">
              <LinkButton href="/contact" variant="secondary">
                Nous contacter
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <Reveal>
          <SectionHeading
            title="Un aperçu en images"
            lede="Un avant-goût de chaque stand, en attendant les photos des concerts et soirées à venir."
          />
        </Reveal>
        <Reveal delay={0.05}>
          <PhotoGallery
            items={photoSlots.map((slot) => ({ src: slot.src, alt: slot.label }))}
            gridClassName="mt-12 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6"
            itemClassName="aspect-square rounded-xl"
            sizes="(min-width: 1024px) 16vw, (min-width: 640px) 25vw, 33vw"
          />
        </Reveal>
      </Section>

      <section className="relative overflow-hidden bg-ink-800 py-20 sm:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-denim-300">
              L&apos;histoire du food court
            </p>
            <RevealText
              as="h2"
              text="Genèse du Food Court"
              className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-paper-100 sm:text-4xl"
            />
            <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-paper-300">
              Les food courts, aussi appelés food halls, révolutionnent l&apos;expérience culinaire en offrant une diversité gastronomique sous un même toit, où manger, boire, et vivre des moments culturels deviennent une aventure collective.
            </p>
            <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-paper-300">
              Nés dans les années 70 en Amérique et en Asie, ils visaient à nourrir rapidement les foules dans les centres commerciaux. Cette notion a évolué : aujourd&apos;hui, ces lieux sont des points de rencontre où l&apos;on peut savourer un repas, prendre un verre, profiter d&apos;un concert ou d&apos;une exposition, enrichissant la vie sociale et culturelle des visiteurs.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ParallaxImage
              src="/images/venue/disposition-1.jpg"
              alt="Disposition des stands et de la terrasse aux Halles de Coustellet"
              className="aspect-[4/3] rounded-3xl"
            />
          </Reveal>
        </div>
      </section>

      <Section tone="surface">
        <Reveal>
          <SectionHeading
            title="La vie des Halles, en images"
            lede="Suivez le quotidien des Halles, les nouveautés et les prochains événements sur Facebook."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer"
              className="group relative block aspect-[4/3] overflow-hidden rounded-3xl sm:aspect-[10/9]"
            >
              <Image
                src="/images/venue/disposition-2.jpg"
                alt="Stands des Halles de Coustellet en soirée, guirlandes lumineuses"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover object-left transition-transform duration-500 group-hover:scale-105"
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

            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="group relative block aspect-[4/3] overflow-hidden rounded-3xl sm:aspect-[10/9]"
            >
              <Image
                src="/images/venue/disposition-2.jpg"
                alt="Stands des Halles de Coustellet en soirée, guirlandes lumineuses"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover object-right transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-4 p-6 sm:p-8">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mustard-500 text-ink-900">
                  <InstagramLogo className="h-6 w-6" weight="fill" />
                </span>
                <div>
                  <p className="font-display text-lg font-bold text-paper-100">
                    Suivez-nous sur Instagram
                  </p>
                  <p className="text-sm text-paper-300">Les Halles de Coustellet</p>
                </div>
              </div>
            </a>
          </div>
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
                  11h30-14h et 18h30-21h
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
                <p className="font-display text-lg font-bold text-paper-100">Sur place ou à emporter</p>
                <p className="mt-1 text-sm leading-relaxed text-paper-300">
                  Terrasse, intérieur et vente à emporter selon les stands.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <LinkButton href={mapsHref} target="_blank" rel="noreferrer">
            Voir l&apos;itinéraire
          </LinkButton>
          <LinkButton href="/infos-pratiques" variant="ghost">
            Voir toutes les infos pratiques -&gt;
          </LinkButton>
        </div>
      </Section>

      <BackToTop />
    </>
  );
}
