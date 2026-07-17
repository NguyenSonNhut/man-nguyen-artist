"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Locale,
  dictionaries,
} from "@/lib/i18n/dictionary";

type NavbarProps = {
  locale: Locale;
};

export default function Navbar({
  locale,
}: NavbarProps) {

  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const t = dictionaries[locale];

  const switchLocale = (newLocale: Locale) =>
    pathname.replace(/^\/(vi|en)/, `/${newLocale}`);

  const navigation = [
    {
      label: t.navbar.gallery,
      href: `/${locale}/gallery`,
    },
    {
      label: t.navbar.artist,
      href: `/${locale}/artist`,
    },
    {
      label: t.navbar.contact,
      href: `/${locale}/contact`,
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur-md">

      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-6 lg:h-20 lg:px-8">

        {/* Logo */}

        <Link
          href={`/${locale}`}
          className="flex items-center gap-3"
        >
          <Image
            src="/images/logo/logo-favicon.webp"
            alt={t.brand.name}
            width={42}
            height={42}
            priority
          />

          <div>

            <p className="text-lg font-bold lg:text-xl">
              {t.brand.name}
            </p>

            <p className="hidden text-xs uppercase tracking-[0.25em] text-stone-500 sm:block">
              {t.brand.subtitle}
            </p>

          </div>

        </Link>

        {/* Desktop */}

        <div className="hidden items-center gap-12 lg:flex">

          <ul className="flex gap-8">

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

          <div className="flex rounded-lg border border-stone-300 p-1">

            <Link
              href={switchLocale("vi")}
              className={`rounded-md px-3 py-1 text-sm ${
                locale === "vi"
                  ? "bg-stone-900 text-white"
                  : "hover:bg-stone-100"
              }`}
            >
              VN
            </Link>

            <Link
              href={switchLocale("en")}
              className={`rounded-md px-3 py-1 text-sm ${
                locale === "en"
                  ? "bg-stone-900 text-white"
                  : "hover:bg-stone-100"
              }`}
            >
              EN
            </Link>

          </div>

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border lg:hidden"
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >

            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}

          </svg>

        </button>

      </nav>

      {/* Mobile Menu */}

      {open && (

        <div className="border-t bg-white lg:hidden">

          <div className="flex flex-col px-5 py-5">

            {navigation.map((item) => (

              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b py-4 text-lg text-stone-700"
              >
                {item.label}
              </Link>

            ))}

            <div className="mt-5 flex gap-3">

              <Link
                href={switchLocale("vi")}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-4 py-2 ${
                  locale === "vi"
                    ? "bg-stone-900 text-white"
                    : "border"
                }`}
              >
                VN
              </Link>

              <Link
                href={switchLocale("en")}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-4 py-2 ${
                  locale === "en"
                    ? "bg-stone-900 text-white"
                    : "border"
                }`}
              >
                EN
              </Link>

            </div>

          </div>

        </div>

      )}

    </header>
  );
}