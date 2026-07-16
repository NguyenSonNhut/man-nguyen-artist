import Hero from "@/components/home/Hero";
import FeaturedGallery from "@/components/home/FeaturedGallery";
import AboutPreview from "@/components/home/AboutPreview";
import { Locale } from "@/lib/i18n/dictionary";

type Props = {
  params: Promise<{
    locale: Locale;
  }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;

  return (
    <main>
      <Hero locale={locale} />

      <FeaturedGallery locale={locale} />

      <AboutPreview locale={locale} />
    </main>
  );
}