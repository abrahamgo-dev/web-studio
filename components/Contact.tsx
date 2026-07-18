"use client";

import { ArrowUpRight, Mail } from "lucide-react";

type Language = "en" | "es";

interface ContactProps {
  language: Language;
}

export default function Contact({ language }: ContactProps) {
  const content =
    language === "es"
      ? {
          badge: "¿Listo para empezar algo grande?",
          title: "Cuéntanos en qué estás trabajando.",
          paragraph:
            "Una respuesta breve, normalmente en un día, con la verdad sobre si somos el ajuste correcto.",
          cta: "Ver el trabajo",
        }
      : {
          badge: "Ready to start something bold?",
          title: "Tell us what you're building.",
          paragraph:
            "A short reply, usually within a day — with the honest version of whether we're the right fit.",
          cta: "View the work",
        };

  return (
    <section id="contact" className="relative border-t border-white/10">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="aura absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 py-28 text-center md:px-10 md:py-36">
        <div className="mx-auto mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-ink-dim backdrop-blur-sm">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
          {content.badge}
        </div>

        <h2 className="text-balance font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          {content.title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-8 text-ink-dim">
          {content.paragraph}
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:hello@fenstudio.com"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(111,140,255,0.24)] transition hover:bg-accent/90 sm:w-auto"
          >
            <Mail className="h-4 w-4" />
            hello@fenstudio.com
          </a>
          <a
            href="#work"
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-ink transition hover:border-accent-bright/60 hover:bg-white/10 sm:w-auto"
          >
            {content.cta}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
