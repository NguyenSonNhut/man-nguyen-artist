import { Locale } from "@/lib/i18n/dictionary";

type Props = {
  locale: Locale;
};

export default function AboutPreview({ locale }: Props) {
  return (
    <section className="mx-auto max-w-7xl px-8 py-28">
      <h2 className="mb-8 text-4xl font-bold">
        About Artist ({locale})
      </h2>

      <p className="text-stone-500">
        Coming soon...
      </p>
    </section>
  );
}