"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle, CircleNotch } from "@phosphor-icons/react/dist/ssr";

type Status = "idle" | "loading" | "success" | "error";

const subjects = [
  "Question generale",
  "Reservation groupe",
  "Concerts et evenements",
  "Presse",
  "Autre",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    // NOTE: demonstration only. Brancher sur un service d'envoi d'email
    // (Resend, Formspree, route API interne...) avant mise en production.
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-mustard-700/50 bg-mustard-500/10 p-8 text-center">
        <CheckCircle className="mx-auto h-9 w-9 text-mustard-400" weight="fill" />
        <p className="mt-4 font-display text-xl font-bold text-paper-100">Message envoye</p>
        <p className="mt-2 text-sm leading-relaxed text-paper-300">
          Merci, nous revenons vers vous rapidement.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-mustard-400 hover:text-mustard-300"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-paper-200">
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-2 w-full rounded-xl border border-ink-600 bg-ink-800 px-4 py-3 text-paper-100 placeholder:text-paper-500 focus:border-mustard-500 focus:outline-none"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-paper-200">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-xl border border-ink-600 bg-ink-800 px-4 py-3 text-paper-100 placeholder:text-paper-500 focus:border-mustard-500 focus:outline-none"
            placeholder="vous@exemple.fr"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-paper-200">
          Sujet
        </label>
        <select
          id="subject"
          name="subject"
          required
          defaultValue=""
          className="mt-2 w-full rounded-xl border border-ink-600 bg-ink-800 px-4 py-3 text-paper-100 focus:border-mustard-500 focus:outline-none"
        >
          <option value="" disabled>
            Choisissez un sujet
          </option>
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-paper-200">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-xl border border-ink-600 bg-ink-800 px-4 py-3 text-paper-100 placeholder:text-paper-500 focus:border-mustard-500 focus:outline-none"
          placeholder="Votre message"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-mustard-500 px-6 py-3 text-sm font-semibold text-ink-900 transition-colors hover:bg-mustard-400 disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <CircleNotch className="h-4 w-4 animate-spin" />
            Envoi en cours
          </>
        ) : (
          "Envoyer le message"
        )}
      </button>
    </form>
  );
}
