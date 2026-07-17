import Link from "next/link";

import ArtworkCard from "@/components/gallery/ArtworkCard";
import { artworks } from "@/data/artworks";

import {
  Locale,
  dictionaries,
} from "@/lib/i18n/dictionary";

type Props = {
  locale: string;
};

export default function FeaturedGallery({
  locale,
}: Props) {
  const currentLocale = locale as Locale;

  const t = dictionaries[currentLocale].home;

  const featured = artworks.filter(
    (artwork) => artwork.featured
  );

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-3xl font-bold lg:text-4xl">
          {t.featuredGallery}
        </h2>

        <Link
          href={`/${currentLocale}/gallery`}
          className="font-medium text-amber-700 transition hover:text-amber-900"
        >
          {t.viewAll}
        </Link>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((artwork) => (
          <ArtworkCard
            key={artwork.slug}
            artwork={artwork}
            locale={currentLocale}
          />
        ))}
      </div>
    </section>
  );
}