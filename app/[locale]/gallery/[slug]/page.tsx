import Image from "next/image";
import { notFound } from "next/navigation";

import { artworks } from "@/data/artworks";
import { Locale } from "@/lib/i18n/dictionary";

type Props = {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>;
};

export default async function ArtworkDetail({
  params,
}: Props) {
  const { locale, slug } = await params;

  const artwork = artworks.find(
    (item) => item.slug === slug
  );

  if (!artwork) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-8 py-20">

      <div className="grid gap-16 lg:grid-cols-2">

        <div className="overflow-hidden rounded-2xl">

          <Image
            src={artwork.image}
            alt={artwork.title[locale]}
            width={900}
            height={1200}
            className="w-full rounded-2xl object-cover"
          />

        </div>

        <div>

          <h1 className="text-5xl font-bold">
            {artwork.title[locale]}
          </h1>

          <p className="mt-6 text-lg leading-8 text-stone-600">
            {artwork.description[locale]}
          </p>

          <div className="mt-10 space-y-4">

            <p>
              <strong>Category:</strong>{" "}
              {artwork.category}
            </p>

            <p>
              <strong>Medium:</strong>{" "}
              {artwork.medium[locale]}
            </p>

            <p>
              <strong>Year:</strong>{" "}
              {artwork.year}
            </p>

            <p>
              <strong>Size:</strong>{" "}
              {artwork.width} × {artwork.height} cm
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {artwork.available
                ? locale === "vi"
                  ? "Còn bán"
                  : "Available"
                : locale === "vi"
                ? "Đã bán"
                : "Sold"}
            </p>

          </div>

          <div className="mt-12 rounded-xl bg-stone-100 p-6 text-stone-600">

            © Mẫn Nguyễn Artist

            <br />

            Images are protected by copyright.

            <br />

            Unauthorized reproduction or commercial use is prohibited.

          </div>

        </div>

      </div>

    </main>
  );
}