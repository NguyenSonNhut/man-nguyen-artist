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
    <section className="mx-auto max-w-7xl px-8 py-24">
      <div className="mb-12 flex items-center justify-between">
        <h2 className="text-4xl font-bold">
          {t.featuredGallery}
        </h2>

        <Link
          href={`/${currentLocale}/gallery`}
          className="font-medium text-amber-700 transition hover:text-amber-900"
        >
          {t.viewAll}
        </Link>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
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