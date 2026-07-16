import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Locale } from "@/lib/i18n/dictionary";

type Props = {
  children: ReactNode;
  params: Promise<{
    locale: Locale;
  }>;
};

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  return (
    <>
      <Navbar locale={locale} />

      {children}

      <Footer locale={locale} />
    </>
  );
}