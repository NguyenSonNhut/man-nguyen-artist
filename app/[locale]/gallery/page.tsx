import type { Metadata } from "next";

import ArtworkCard from "@/components/gallery/ArtworkCard";
import { artworks } from "@/data/artworks";
import { Locale, dictionaries } from "@/lib/i18n/dictionary";

export const metadata: Metadata = {
  title: "Gallery",
};

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function GalleryPage({ params }: Props) {
  const { locale } = await params;

  const currentLocale = locale as Locale;

  const t = dictionaries[currentLocale].gallery;

  return (
    <main className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <h1 className="mb-4 text-3xl font-bold lg:text-5xl">
        {t.title}
      </h1>

      <p className="mb-12 max-w-2xl text-stone-600">
        {t.description}
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {artworks.map((artwork) => (
          <ArtworkCard
            key={artwork.slug}
            artwork={artwork}
            locale={currentLocale}
          />
        ))}
      </div>
    </main>
  );
}