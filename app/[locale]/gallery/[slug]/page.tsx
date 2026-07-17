import Image from "next/image";
import { notFound } from "next/navigation";

import { artworks } from "@/data/artworks";
import { Locale, dictionaries } from "@/lib/i18n/dictionary";

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export default async function ArtworkDetail({ params }: Props) {
  const { locale, slug } = await params;

  const currentLocale = locale as Locale;

  const artwork = artworks.find((item) => item.slug === slug);

  if (!artwork) {
    notFound();
  }

  const t = dictionaries[currentLocale].gallery;

  return (
    <main className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={artwork.image}
            alt={artwork.title[currentLocale]}
            width={900}
            height={1200}
            className="w-full rounded-2xl object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl lg:text-5xl font-bold">
            {artwork.title[currentLocale]}
          </h1>

          <p className="mt-6 text-lg leading-8 text-stone-600">
            {artwork.description[currentLocale]}
          </p>

          <div className="mt-10 space-y-4">
            <p>
              <strong>{t.category}:</strong> {artwork.category}
            </p>

            <p>
              <strong>{t.medium}:</strong>{" "}
              {artwork.medium[currentLocale]}
            </p>

            <p>
              <strong>{t.year}:</strong> {artwork.year}
            </p>

            <p>
              <strong>{t.size}:</strong>{" "}
              {artwork.width} × {artwork.height} cm
            </p>

            <p>
              <strong>{t.status}:</strong>{" "}
              {artwork.available ? t.available : t.sold}
            </p>
          </div>

          <div className="mt-12 rounded-xl bg-stone-100 p-6 text-stone-600">
            © Man Nguyen Artist

            <br />
            <br />

            {t.copyright}
          </div>
        </div>
      </div>
    </main>
  );
}