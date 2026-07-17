import Image from "next/image";
import Link from "next/link";

import {
  Locale,
  dictionaries,
} from "@/lib/i18n/dictionary";

type Props = {
  locale: Locale;
};

export default function Hero({ locale }: Props) {
  const t = dictionaries[locale].hero;

  return (
    <section className="mx-auto max-w-7xl px-8">

      <div className="grid min-h-[85vh] items-center gap-20 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <p className="mb-5 uppercase tracking-[0.35em] text-stone-500">
            {t.badge}
          </p>

          <h1 className="text-6xl font-bold tracking-tight text-stone-900">
            {t.title}
          </h1>

          <h2 className="mt-5 text-3xl font-light leading-relaxed text-stone-700">
            {t.subtitle}
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-9 text-stone-600">
            {t.description}
          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              href={`/${locale}/gallery`}
              className="rounded-xl bg-stone-900 px-8 py-4 text-white transition duration-300 hover:bg-stone-700"
            >
              {t.galleryButton}
            </Link>

            <Link
              href={`/${locale}/artist`}
              className="rounded-xl border border-stone-300 px-8 py-4 transition duration-300 hover:bg-stone-100"
            >
              {t.aboutButton}
            </Link>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex justify-center">

          <div className="relative h-170 w-130 overflow-hidden rounded-4xl shadow-2xl">

            <Image
              src="/images/hero/aocam-doinon.webp"
              alt={t.title}
              fill
              priority
              draggable={false}
              className="select-none object-cover transition duration-700 hover:scale-105"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
            
          </div>

        </div>

      </div>

    </section>
  );
}