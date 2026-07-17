"use client";

import { useState } from "react";

import { Locale, dictionaries } from "@/lib/i18n/dictionary";

type Props = {
  locale: Locale;
};

export default function ContactForm({
  locale,
}: Props) {

  const t = dictionaries[locale].contact;

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [error, setError] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError(false);

    const form = new FormData(e.currentTarget);

    const body = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };

    try {

      const res = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error();

      setSuccess(true);

      e.currentTarget.reset();

    } catch {

      setError(true);

    } finally {

      setLoading(false);

    }
  }

  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl border border-stone-200 p-8"
    >

      <input
        name="name"
        required
        placeholder={t.form.name}
        className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-stone-900"
      />

      <input
        name="email"
        type="email"
        required
        placeholder={t.form.email}
        className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-stone-900"
      />

      <textarea
        name="message"
        required
        rows={6}
        placeholder={t.form.message}
        className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-stone-900"
      />

      <button
        disabled={loading}
        className="rounded-xl bg-stone-900 px-8 py-3 text-white transition hover:bg-stone-700 disabled:opacity-60"
      >
        {loading ? "Sending..." : t.form.submit}
      </button>

      {success && (
        <p className="text-sm text-green-600">
          Message sent successfully.
        </p>
      )}

      {error && (
        <p className="text-sm text-red-600">
          Something went wrong.
        </p>
      )}

    </form>
  );
}