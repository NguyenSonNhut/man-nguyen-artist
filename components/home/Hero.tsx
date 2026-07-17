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
    <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

      <div className="grid min-h-[calc(100vh-80px)] items-center gap-12 py-10 lg:grid-cols-2 lg:gap-20">

        {/* LEFT */}

        <div className="order-2 lg:order-1">

          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-stone-500 sm:text-sm">
            {t.badge}
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
            {t.title}
          </h1>

          <h2 className="mt-4 text-xl font-light leading-relaxed text-stone-700 sm:text-2xl lg:text-3xl">
            {t.subtitle}
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-stone-600 sm:text-lg">
            {t.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <Link
              href={`/${locale}/gallery`}
              className="rounded-xl bg-stone-900 px-8 py-4 text-center text-white transition hover:bg-stone-700"
            >
              {t.galleryButton}
            </Link>

            <Link
              href={`/${locale}/artist`}
              className="rounded-xl border border-stone-300 px-8 py-4 text-center transition hover:bg-stone-100"
            >
              {t.aboutButton}
            </Link>

          </div>

        </div>

        {/* RIGHT */}

        <div className="order-1 flex justify-center lg:order-2">

          <div className="relative aspect-[3/4] w-full max-w-xs overflow-hidden rounded-3xl shadow-2xl sm:max-w-md lg:max-w-xl">

            <Image
              src="/images/hero/aocam-doinon.webp"
              alt={t.title}
              fill
              priority
              sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,40vw"
              className="object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  );
}