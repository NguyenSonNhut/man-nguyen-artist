import ArtworkCard from "@/components/gallery/ArtworkCard";
import { artworks } from "@/data/artworks";
import { Locale } from "@/lib/i18n/dictionary";
import type { Metadata } from "next";

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

  return (
    <main className="mx-auto max-w-7xl px-8 py-20">

      <h1 className="mb-12 text-5xl font-bold">
        Gallery
      </h1>

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