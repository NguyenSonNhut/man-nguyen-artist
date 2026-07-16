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

      <div className="grid min-h-[82vh] items-center gap-16 lg:grid-cols-2">

        <div>

          <p className="mb-5 uppercase tracking-[0.35em] text-stone-500">
            {t.badge}
          </p>

          <h1 className="text-6xl font-bold text-stone-900">
            {t.title}
          </h1>

          <h2 className="mt-4 text-4xl font-light leading-snug text-stone-700">
            {t.subtitle}
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-stone-600">
            {t.description}
          </p>

          <div className="mt-12 flex gap-5">

            <Link
              href={`/${locale}/gallery`}
              className="rounded-lg bg-stone-900 px-8 py-4 text-white transition hover:bg-stone-700"
            >
              {t.galleryButton}
            </Link>

            <Link
              href={`/${locale}/artist`}
              className="rounded-lg border border-stone-300 px-8 py-4 transition hover:bg-stone-100"
            >
              {t.aboutButton}
            </Link>

          </div>

        </div>

        <div className="flex justify-center">

          <div className="flex h-140 w-107.5 items-center justify-center rounded-3xl border border-dashed border-stone-300 bg-stone-50 text-stone-400 shadow-xl">

            Portrait / Featured Painting

          </div>

        </div>

      </div>

    </section>
  );
}