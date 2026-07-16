import Link from "next/link";
import Image from "next/image";

import { Artwork } from "@/data/artworks";
import { Locale } from "@/lib/i18n/dictionary";

type ArtworkCardProps = {
  artwork: Artwork;
  locale: Locale;
};

export default function ArtworkCard({
  artwork,
  locale,
}: ArtworkCardProps) {
  return (
    <Link
      href={`/${locale}/gallery/${artwork.slug}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-square overflow-hidden">

        <Image
          src={artwork.thumbnail}
          alt={artwork.title[locale]}
          fill
          draggable={false}
          className="select-none object-cover transition duration-500 group-hover:scale-105"
        />

        <div
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur ${
            artwork.available
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {artwork.available
            ? locale === "vi"
              ? "Còn bán"
              : "Available"
            : locale === "vi"
            ? "Đã bán"
            : "Sold"}
        </div>

      </div>

      <div className="space-y-2 p-5">

        <h3 className="text-xl font-semibold text-stone-900 transition group-hover:text-amber-700">
          {artwork.title[locale]}
        </h3>

        <p className="text-sm text-stone-500">
          {artwork.medium[locale]}
        </p>

        <div className="flex items-center justify-between text-sm text-stone-400">

          <span>{artwork.year}</span>

          <span>
            {artwork.width} × {artwork.height} cm
          </span>

        </div>

      </div>
    </Link>
  );
}