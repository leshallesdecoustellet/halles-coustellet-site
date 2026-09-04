import type { Metadata } from "next";
import Image from "next/image";
import { CookingPot } from "@phosphor-icons/react/dist/ssr";
import { LinkButton } from "@/components/Button";
import { stands } from "@/content/stands";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[85dvh] items-center overflow-hidden bg-ink-950 pb-16 pt-32 sm:pt-40">
      <span className="pointer-events-none absolute -left-32 top-1/2 block h-[32rem] w-[32rem] -translate-y-1/2 overflow-hidden rounded-full opacity-10 sm:h-[42rem] sm:w-[42rem]">
        <Image
          src="/images/logo/les-halles-logo.jpg"
          alt=""
          fill
          sizes="672px"
          className="object-contain mix-blend-screen"
        />
      </span>
      <div className="container-page relative">
        <div className="max-w-2xl">
          <CookingPot className="h-12 w-12 text-mustard-500" weight="duotone" />
          <p className="mt-6 font-display text-7xl font-bold tracking-tight text-paper-100 sm:text-8xl">
            404
          </p>
          <h1 className="mt-3 text-balance font-display text-2xl font-bold tracking-tight text-paper-100 sm:text-3xl">
            Ce stand n&apos;existe pas (encore).
          </h1>
          <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-paper-300">
            La page que vous cherchez a disparu ou n&apos;a jamais existé. Retournez à l&apos;accueil ou allez directement découvrir nos cuisines.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <LinkButton href="/">Retour à l&apos;accueil</LinkButton>
            <LinkButton href="/cuisines" variant="secondary">
              Voir nos cuisines
            </LinkButton>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {stands.map((stand) => (
              <LinkButton
                key={stand.slug}
                href={`/cuisines#${stand.slug}`}
                variant="ghost"
                className="!px-4 !py-2 text-xs"
              >
                {stand.cuisine}
              </LinkButton>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
