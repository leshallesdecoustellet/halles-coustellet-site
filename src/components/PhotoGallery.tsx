"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import { PlaceholderImage } from "./PlaceholderImage";

export type GalleryItem = { src?: string; alt: string };

type PhotoGalleryProps = {
  items: GalleryItem[];
  gridClassName?: string;
  itemClassName?: string;
  sizes?: string;
};

export function PhotoGallery({ items, gridClassName, itemClassName, sizes }: PhotoGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const photos = items.filter((item): item is { src: string; alt: string } => Boolean(item.src));

  useEffect(() => {
    if (openIndex === null) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenIndex(null);
      if (event.key === "ArrowRight") {
        setOpenIndex((i) => (i === null ? i : (i + 1) % photos.length));
      }
      if (event.key === "ArrowLeft") {
        setOpenIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
      }
    }

    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [openIndex, photos.length]);

  let photoIndex = -1;

  return (
    <>
      <div className={gridClassName}>
        {items.map((item, index) => {
          if (!item.src) {
            return (
              <PlaceholderImage key={`${item.alt}-${index}`} label={item.alt} className={itemClassName} />
            );
          }

          photoIndex += 1;
          const currentPhotoIndex = photoIndex;

          return (
            <button
              key={`${item.src}-${index}`}
              type="button"
              onClick={() => setOpenIndex(currentPhotoIndex)}
              aria-label={`Agrandir la photo : ${item.alt}`}
              className={`group relative block w-full cursor-zoom-in overflow-hidden text-left ${itemClassName ?? ""}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={sizes ?? "33vw"}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          );
        })}
      </div>

      {openIndex !== null && photos[openIndex] ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/95 p-4 backdrop-blur-sm sm:p-10"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            aria-label="Fermer"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-ink-800 text-paper-100 transition-colors hover:bg-ink-700"
          >
            <X className="h-5 w-5" />
          </button>

          {photos.length > 1 ? (
            <>
              <button
                type="button"
                aria-label="Photo précédente"
                onClick={(event) => {
                  event.stopPropagation();
                  setOpenIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
                }}
                className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink-800 text-paper-100 transition-colors hover:bg-ink-700"
              >
                <CaretLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Photo suivante"
                onClick={(event) => {
                  event.stopPropagation();
                  setOpenIndex((i) => (i === null ? i : (i + 1) % photos.length));
                }}
                className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink-800 text-paper-100 transition-colors hover:bg-ink-700"
              >
                <CaretRight className="h-5 w-5" />
              </button>
            </>
          ) : null}

          <div
            className="relative h-full max-h-[85vh] w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={photos[openIndex].src}
              alt={photos[openIndex].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
