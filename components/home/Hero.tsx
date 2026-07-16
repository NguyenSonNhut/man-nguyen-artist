import { Locale, dictionaries } from "@/lib/i18n/dictionary";

type HeroProps = {
  locale: Locale;
};

export default function Hero({ locale }: HeroProps) {
  const t = dictionaries[locale].hero;

  return (
    <section className="mx-auto max-w-7xl px-8">
      <div className="grid min-h-[80vh] items-center gap-16 lg:grid-cols-2">
        {/* LEFT COLUMN */}
        <div className="max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-stone-500">
            {t.badge}
          </p>

          <h1 className="text-6xl font-bold leading-tight text-stone-900">
            {t.title}
          </h1>

          <h2 className="mt-2 text-4xl font-light text-stone-600">
            {t.subtitle}
          </h2>

          <p className="mt-8 text-lg leading-8 text-stone-600">
            {t.description}
          </p>

          <div className="mt-10 flex gap-5">
            <button className="rounded-lg bg-stone-900 px-7 py-4 text-white transition hover:bg-stone-700">
              {t.galleryButton}
            </button>

            <button className="rounded-lg border border-stone-300 px-7 py-4 transition hover:bg-stone-100">
              {t.aboutButton}
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex justify-center">
          <div className="flex h-137.5 w-112.5 items-center justify-center rounded-2xl border border-dashed border-stone-300 bg-white text-stone-400 shadow-lg">
            Featured Painting
          </div>
        </div>
      </div>
    </section>
  );
}