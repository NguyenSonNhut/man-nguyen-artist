import Link from "next/link";

import {
  Locale,
  dictionaries,
} from "@/lib/i18n/dictionary";

type Props = {
  locale: string;
};

export default function AboutArtist({
  locale,
}: Props) {
  const currentLocale = locale as Locale;

  const t = dictionaries[currentLocale].home;

  return (
    <section className="bg-stone-100">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-24">

        {/* Image */}

        <div className="order-2 flex justify-center lg:order-1">
          <div className="aspect-[4/5] w-full max-w-sm rounded-3xl border border-dashed border-stone-300 bg-white flex items-center justify-center text-stone-400">
            Artist Portrait
          </div>
        </div>

        {/* Content */}

        <div className="order-1 flex flex-col justify-center lg:order-2">

          <h2 className="text-3xl font-bold lg:text-5xl">
            {t.aboutArtist}
          </h2>

          <p className="mt-6 text-base leading-8 text-stone-600 lg:text-lg lg:leading-9">
            Nguyễn Mẫn là họa sĩ với nhiều năm sáng tác trong các chất liệu như
            sơn dầu, màu nước, ký họa bút sắt, chân dung và phong cảnh.
          </p>

          <Link
            href={`/${currentLocale}/artist`}
            className="mt-10 w-fit rounded-xl bg-stone-900 px-8 py-4 text-white transition hover:bg-stone-700"
          >
            {t.learnMore}
          </Link>

        </div>

      </div>
    </section>
  );
}