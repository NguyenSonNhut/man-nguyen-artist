import type { Metadata } from "next";
import Image from "next/image";

import { artistGallery } from "@/data/artist";
import { Locale, dictionaries } from "@/lib/i18n/dictionary";

export const metadata: Metadata = {
  title: "Artist",
};

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function ArtistPage({ params }: Props) {
  const { locale } = await params;

  const currentLocale = locale as Locale;

  const t = dictionaries[currentLocale].artist;

  return (
    <main className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">

      {/* Hero */}

      <section className="grid items-center gap-12 lg:grid-cols-2">

        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">

          <Image
            src="/images/artist/ao-tdt.webp"
            alt={t.title}
            fill
            sizes="(max-width:768px)100vw,(max-width:1200px)50vw,40vw"
            className="object-cover"
          />

        </div>

        <div>

          <p className="uppercase tracking-[0.35em] text-stone-500">
            {t.badge}
          </p>

          <h1 className="mt-4 text-4xl font-bold lg:text-6xl">
            {t.title}
          </h1>

          <p className="mt-8 text-lg leading-9 text-stone-600">
            {t.description}
          </p>

        </div>

      </section>

      {/* Gallery */}

      <section className="mt-24">

        <div className="grid gap-6 md:grid-cols-2">

          {artistGallery.map((item) => (

            <div
              key={item.image}
              className={`relative overflow-hidden rounded-3xl ${
                item.aspect === "portrait"
                  ? "aspect-[4/5]"
                  : item.aspect === "square"
                  ? "aspect-square"
                  : "aspect-video md:col-span-2"
              }`}
            >

              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width:768px)100vw,(max-width:1200px)50vw,100vw"
                className="object-cover transition duration-700 hover:scale-105"
              />

            </div>

          ))}

        </div>

      </section>

      {/* Statement */}

      <section className="mx-auto mt-24 max-w-4xl">

        <h2 className="text-3xl font-bold">
          {t.statementTitle}
        </h2>

        <p className="mt-8 leading-9 text-stone-600">
          {t.statement}
        </p>

      </section>

      {/* Specialities */}

      <section className="mt-24">

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {t.specialities.map((item) => (

            <div
              key={item.title}
              className="rounded-3xl bg-stone-100 p-8"
            >

              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-stone-600">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}