import { Locale, dictionaries } from "@/lib/i18n/dictionary";

type FooterProps = {
  locale: Locale;
};

export default function Footer({ locale }: FooterProps) {
  const t = dictionaries[locale];

  return (
    <footer className="border-t border-stone-200 py-10">
      <div className="mx-auto max-w-7xl px-8 text-center text-sm text-stone-500">
        © 2026 {t.brand.name} {t.brand.subtitle}
      </div>
    </footer>
  );
}