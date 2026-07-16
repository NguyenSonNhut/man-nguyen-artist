import type { Metadata } from "next";

import ArtworkCard from "@/components/gallery/ArtworkCard";
import { artworks } from "@/data/artworks";
import { Locale, dictionaries } from "@/lib/i18n/dictionary";

export const metadata: Metadata = {
  title: "Gallery",
};

type Props = {
  params: Promise<{
    locale: Locale;
  }>;
};

export default async function GalleryPage({ params }: Props) {
  const { locale } = await params;

  const t = dictionaries[locale].gallery;

  return (
    <main className="mx-auto max-w-7xl px-8 py-20">
      <h1 className="mb-4 text-5xl font-bold">
        {t.title}
      </h1>

      <p className="mb-14 max-w-2xl text-stone-600">
        {t.description}
      </p>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {artworks.map((artwork) => (
          <ArtworkCard
            key={artwork.slug}
            artwork={artwork}
            locale={locale}
          />
        ))}
      </div>
    </main>
  );
}