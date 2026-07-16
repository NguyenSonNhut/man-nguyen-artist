import Link from "next/link";

import {
  Locale,
  dictionaries,
} from "@/lib/i18n/dictionary";

type Props = {
  locale: Locale;
};

export default function AboutArtist({
  locale,
}: Props) {
  const t = dictionaries[locale].home;

  return (
    <section className="bg-stone-100">

      <div className="mx-auto grid max-w-7xl gap-16 px-8 py-24 lg:grid-cols-2">

        <div className="flex items-center justify-center">

          <div className="flex h-130 w-105 items-center justify-center rounded-3xl border border-dashed border-stone-300 bg-white text-stone-400">

            Artist Portrait

          </div>

        </div>

        <div className="flex flex-col justify-center">

          <h2 className="text-5xl font-bold">
            {t.aboutArtist}
          </h2>

          <p className="mt-8 text-lg leading-9 text-stone-600">
            Nguyễn Mẫn là họa sĩ với nhiều năm sáng tác
            trong các chất liệu như sơn dầu, màu nước,
            ký họa bút sắt, chân dung và phong cảnh.
          </p>

          <Link
            href={`/${locale}/artist`}
            className="mt-10 w-fit rounded-lg bg-stone-900 px-8 py-4 text-white transition hover:bg-stone-700"
          >
            {t.learnMore}
          </Link>

        </div>

      </div>

    </section>
  );
}