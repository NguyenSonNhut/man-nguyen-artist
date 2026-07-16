"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale, dictionaries } from "@/lib/i18n/dictionary";

type NavbarProps = {
  locale: Locale;
};

export default function Navbar({ locale }: NavbarProps) {
  const t = dictionaries[locale].navbar;

  const pathname = usePathname();

  const switchLocale = (newLocale: Locale) => {
    return pathname.replace(/^\/(vi|en)/, `/${newLocale}`);
  };

  const navigation = [
    {
      label: t.home,
      href: `/${locale}`,
    },
    {
      label: t.gallery,
      href: `/${locale}/gallery`,
    },
    {
      label: t.artist,
      href: `/${locale}/artist`,
    },
    {
      label: t.contact,
      href: `/${locale}/contact`,
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="text-2xl font-bold tracking-wide text-stone-900 transition hover:text-amber-700"
        >
          Mẫn Nguyễn Artist
        </Link>

        <div className="flex items-center gap-12">

          {/* Navigation */}
          <ul className="flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`font-medium transition ${
                    pathname === item.href
                      ? "text-amber-700"
                      : "text-stone-700 hover:text-amber-700"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Language Switcher */}
          <div className="flex items-center rounded-lg border border-stone-300 p-1">
            <Link
              href={switchLocale("vi")}
              className={`rounded-md px-3 py-1 text-sm transition ${
                locale === "vi"
                  ? "bg-stone-900 text-white"
                  : "text-stone-600 hover:bg-stone-100"
              }`}
            >
              VN
            </Link>

            <Link
              href={switchLocale("en")}
              className={`rounded-md px-3 py-1 text-sm transition ${
                locale === "en"
                  ? "bg-stone-900 text-white"
                  : "text-stone-600 hover:bg-stone-100"
              }`}
            >
              EN
            </Link>
          </div>

        </div>

      </nav>
    </header>
  );
}