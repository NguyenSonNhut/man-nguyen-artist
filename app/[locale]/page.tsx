import Hero from "@/components/home/Hero";
import FeaturedGallery from "@/components/home/FeaturedGallery";
import AboutArtist from "@/components/home/AboutArtist";

import { Locale } from "@/lib/i18n/dictionary";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Home({
  params,
}: Props) {

  const { locale } = await params;

  const currentLocale = locale as Locale;

  return (
    <main>
      <Hero locale={currentLocale} />
      <FeaturedGallery locale={currentLocale} />
      <AboutArtist locale={currentLocale} />
    </main>
  );
}