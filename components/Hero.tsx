"use client";

import { ArrowUpRight, Sparkle } from "lucide-react";
import Reveal from "@/components/Reveal";

type Language = "en" | "es";

interface HeroProps {
  language: Language;
}

export default function Hero({ language }: HeroProps) {
  const content =
    language === "es"
      ? {
          badge: "Abriendo espacio para nuevos proyectos",
          heading: (
            <span className="block">
              Tu sitio debe
              <br />
              <span className="text-accent-bright">convertir</span>
              <br />
              desde el primer clic.
            </span>
          ),
          paragraph:
            "Creamos páginas web elegantes, rápidas y enfocadas en resultados para negocios que quieren captar clientes, ganar confianza y cerrar más oportunidades sin complicaciones.",
          primary: "Ver proyectos",
          secondary: "Reservar una llamada",
          bullets: [
            "Diseño premium y claro",
            "Optimizado para móvil",
            "Mantenimiento continuo",
          ],
        }
      : {
          badge: "Opening space for new projects",
          heading: (
            <span className="block">
              Your website should
              <br />
              <span className="text-accent-bright">convert</span>
              <br />
              from the first click.
            </span>
          ),
          paragraph:
            "We create elegant, fast, conversion-focused websites for businesses that want to attract clients, build trust, and close more opportunities without the usual complexity.",
          primary: "See projects",
          secondary: "Book a call",
          bullets: [
            "Premium, clear design",
            "Mobile optimized",
            "Ongoing care",
          ],
        };

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/10"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="aura absolute -top-32 right-[-12%] h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-[130px]" />
        <div className="noise absolute inset-0" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-20 text-center md:px-10 md:pt-24 md:pb-28">
        <Reveal>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-4 py-2 text-xs font-semibold tracking-wide text-accent-bright backdrop-blur-sm">
            <Sparkle className="h-3.5 w-3.5 text-accent-bright" />
            {content.badge}
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          <h1 className="text-balance font-[family-name:var(--font-display)] text-[clamp(3.8rem,8vw,6.8rem)] font-extrabold leading-[0.92] tracking-tight text-ink">
            {content.heading}
          </h1>
        </Reveal>

        <Reveal delayMs={220}>
          <p className="mx-auto mt-8 max-w-3xl text-balance text-base text-ink-dim md:text-lg">
            {content.paragraph}
          </p>
        </Reveal>

        <Reveal delayMs={340}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#work"
              className="w-full rounded-full border border-[color:var(--line)] bg-transparent px-7 py-4 text-sm font-medium text-ink transition hover:bg-white/5 sm:w-auto"
            >
              {content.primary}
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-bold text-white shadow-[0_18px_55px_rgba(255,106,46,0.3)] transition hover:bg-accent/90 sm:w-auto"
            >
              {content.secondary}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <Reveal delayMs={460}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-ink-dim">
            {content.bullets.map((bullet) => (
              <div
                key={bullet}
                className="rounded-full border border-white/10 bg-white/6 px-4 py-2 backdrop-blur-sm"
              >
                {bullet}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
