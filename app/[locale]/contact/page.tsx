import type { Metadata } from "next";

import ContactForm from "@/components/contact/ContactForm";
import { contactInformation } from "@/data/contact";
import { Locale, dictionaries } from "@/lib/i18n/dictionary";

export const metadata: Metadata = {
  title: "Contact",
};

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;

  const currentLocale = locale as Locale;

  const t = dictionaries[currentLocale].contact;

  return (
    <main className="mx-auto max-w-5xl px-5 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold lg:text-6xl">
          {t.title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-stone-600">
          {t.description}
        </p>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">

        {/* Contact Info */}

        <div className="space-y-6 rounded-3xl bg-stone-100 p-8">

          {contactInformation.map((item) => (

            <div key={item.key}>

              <h3 className="font-semibold">
                {t.information[item.key as keyof typeof t.information]}
              </h3>

              <p className="mt-2 break-all text-stone-600">
                {item.value}
              </p>

            </div>

          ))}

        </div>

        <ContactForm locale={currentLocale} />

      </div>
    </main>
  );
}