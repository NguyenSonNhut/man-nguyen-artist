"use client";

import { useState } from "react";

import { Locale, dictionaries } from "@/lib/i18n/dictionary";

type Props = {
  locale: Locale;
};

export default function ContactForm({ locale }: Props) {
  const t = dictionaries[locale].contact;

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setStatus("idle");

    const formElement = e.currentTarget;

    const body = {
      name: (formElement.elements.namedItem("name") as HTMLInputElement).value,
      email: (formElement.elements.namedItem("email") as HTMLInputElement).value,
      message: (formElement.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error();
      }

      setStatus("success");
      formElement.reset();
    } catch {
      setStatus("error");
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
        className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900"
      />

      <input
        name="email"
        type="email"
        required
        placeholder={t.form.email}
        className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900"
      />

      <textarea
        name="message"
        required
        rows={6}
        placeholder={t.form.message}
        className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900"
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-stone-900 px-8 py-3 text-white hover:bg-stone-700 disabled:opacity-60"
      >
        {loading ? "Sending..." : t.form.submit}
      </button>

      {status === "success" && (
        <p className="text-green-600">
          Message sent successfully.
        </p>
      )}

      {status === "error" && (
        <p className="text-red-600">
          Something went wrong.
        </p>
      )}
    </form>
  );
}