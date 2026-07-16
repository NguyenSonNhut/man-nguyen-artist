import { Locale, dictionaries } from "@/lib/i18n/dictionary";

type Props = {
  params: Promise<{
    locale: Locale;
  }>;
};
export const metadata = {
  title: "Artist",
};

export default async function ArtistPage({ params }: Props) {
  const { locale } = await params;
  const t = dictionaries[locale].artist;

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-8 py-24">
      <h1 className="text-5xl font-bold">{t.title}</h1>

      <p className="mt-6 text-lg text-stone-600">{t.description}</p>
    </main>
  );
}
