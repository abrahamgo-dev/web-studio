"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";

type Language = "en" | "es";

interface ContactProps {
  language: Language;
}

export default function Contact({ language }: ContactProps) {
  const content =
    language === "es"
      ? {
          eyebrow: "¿Listo para empezar algo grande?",
          title: "Cuéntanos en qué estás trabajando.",
          paragraph:
            "Una respuesta breve, normalmente en un día, con la verdad sobre si somos el ajuste correcto.",
          workLabel: "Ver el trabajo",
        }
      : {
          eyebrow: "Ready to start something bold?",
          title: "Tell us what you're building.",
          paragraph:
            "A short reply, usually within a day — with the honest version of whether we're the right fit.",
          workLabel: "View the work",
        };

  return (
    <section id="contact" className="relative border-t border-white/10">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="aura absolute -top-24 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-[130px]" />
          <div className="noise absolute inset-0" />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent-bright">
              {content.eyebrow}
            </p>
            <h2 className="text-balance mt-6 font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[0.98] tracking-tight text-ink">
              {content.title}
            </h2>
            <p className="mt-6 max-w-xl text-balance text-lg leading-8 text-ink-dim">
              {content.paragraph}
            </p>
          </Reveal>

          <Reveal delayMs={150}>
            <div className="mt-14 divide-y divide-white/10 border-t border-white/10">
              <a
                href="mailto:hello@fenwebstudio.com"
                className="group flex items-center justify-between gap-4 py-6 text-ink transition hover:pl-2 hover:text-accent-bright"
              >
                <span className="flex items-center gap-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight md:text-3xl">
                  <Mail className="h-6 w-6 shrink-0 text-accent-bright" />
                  hello@fenwebstudio.com
                </span>
                <ArrowUpRight className="h-6 w-6 shrink-0 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a
                href="#work"
                className="group flex items-center justify-between gap-4 py-6 text-ink transition hover:pl-2 hover:text-accent-bright"
              >
                <span className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight md:text-3xl">
                  {content.workLabel}
                </span>
                <ArrowUpRight className="h-6 w-6 shrink-0 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
