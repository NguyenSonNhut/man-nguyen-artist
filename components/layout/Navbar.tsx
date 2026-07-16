"use client";

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

            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

                <Link
                    href={`/${locale}`}
                    className="flex items-center gap-4"
                >

                    <Image
                        src="/images/logo/logo-favicon.webp"
                        alt={t.brand.name}
                        width={44}
                        height={44}
                        priority
                    />

                    <div>

                        <p className="text-xl font-bold tracking-wide text-stone-900">

                            {t.brand.name}

                        </p>

                        <p className="text-xs uppercase tracking-[0.3em] text-stone-500">

                            {t.brand.subtitle}

                        </p>

                    </div>

                </Link>

                <div className="flex items-center gap-12">

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

                    <div className="flex items-center rounded-lg border border-stone-300 p-1">

                        <Link
                            href={switchLocale("vi")}
                            className={`rounded-md px-3 py-1 text-sm transition ${
                                locale === "vi"
                                    ? "bg-stone-900 text-white"
                                    : "hover:bg-stone-100"
                            }`}
                        >
                            VN
                        </Link>

                        <Link
                            href={switchLocale("en")}
                            className={`rounded-md px-3 py-1 text-sm transition ${
                                locale === "en"
                                    ? "bg-stone-900 text-white"
                                    : "hover:bg-stone-100"
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