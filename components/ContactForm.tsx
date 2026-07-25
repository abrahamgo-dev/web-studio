"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { gtagEvent } from "@/lib/gtag";

type Language = "en" | "es";

interface ContactFormProps {
  language: Language;
}

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm({ language }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");

  const content =
    language === "es"
      ? {
          nameLabel: "Nombre",
          emailLabel: "Email",
          messageLabel: "Mensaje",
          namePlaceholder: "Tu nombre",
          emailPlaceholder: "tu@email.com",
          messagePlaceholder: "Cuéntanos sobre tu proyecto...",
          submit: "Enviar mensaje",
          sending: "Enviando...",
          sent: "¡Mensaje enviado! Te responderemos pronto.",
          error: "Algo salió mal. Intenta de nuevo en un momento.",
        }
      : {
          nameLabel: "Name",
          emailLabel: "Email",
          messageLabel: "Message",
          namePlaceholder: "Your name",
          emailPlaceholder: "you@email.com",
          messagePlaceholder: "Tell us about your project...",
          submit: "Send message",
          sending: "Sending...",
          sent: "Message sent! We'll get back to you soon.",
          error: "Something went wrong. Please try again in a moment.",
        };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (company) {
      setStatus("sent");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
      gtagEvent({ action: "generate_lead", category: "contact_form" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="mt-14 flex items-center gap-3 rounded-2xl border border-[color:var(--line)] bg-bg-raised/60 px-6 py-8">
        <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-bright" />
        <p className="text-sm leading-6 text-ink">{content.sent}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-14 flex flex-col gap-5">
      <input
        type="text"
        name="company"
        value={company}
        onChange={(event) => setCompany(event.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact-name"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-dim"
          >
            {content.nameLabel}
          </label>
          <input
            id="contact-name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder={content.namePlaceholder}
            className="rounded-xl border border-[color:var(--line)] bg-white/5 px-4 py-3 text-ink outline-none transition placeholder:text-ink-dim/60 focus:border-accent-bright"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact-email"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-dim"
          >
            {content.emailLabel}
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={content.emailPlaceholder}
            className="rounded-xl border border-[color:var(--line)] bg-white/5 px-4 py-3 text-ink outline-none transition placeholder:text-ink-dim/60 focus:border-accent-bright"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-message"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-dim"
        >
          {content.messageLabel}
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder={content.messagePlaceholder}
          className="resize-none rounded-xl border border-[color:var(--line)] bg-white/5 px-4 py-3 text-ink outline-none transition placeholder:text-ink-dim/60 focus:border-accent-bright"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">{content.error}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {content.sending}
          </>
        ) : (
          <>
            {content.submit}
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
          </>
        )}
      </button>
    </form>
  );
}
