import { Locale, dictionaries } from "@/lib/i18n/dictionary";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};
export const metadata = {
  title: "Contact",
};

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const t = dictionaries[currentLocale].contact;

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-8 py-24">
      <h1 className="text-5xl font-bold">{t.title}</h1>

      <p className="mt-6 text-lg text-stone-600">{t.description}</p>
    </main>
  );
}