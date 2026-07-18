"use client";

import { ArrowUpRight, Sparkle } from "lucide-react";

type Language = "en" | "es";

interface HeroProps {
  language: Language;
}

export default function Hero({ language }: HeroProps) {
  const content =
    language === "es"
      ? {
          badge: "Abriendo nuevos proyectos para Q4",
          heading: (
            <span
              className="hero-image-text block"
              data-text="Construimos las partes de internet que tu equipo usa."
            >
              Construimos las partes
              <br />
              de internet
              <br />
              que tu equipo usa.
            </span>
          ),
          paragraph:
            "Fen Studio diseña y construye sitios web, dashboards y herramientas internas para equipos que necesitan software que funcione con fluidez, no solo que se vea bien en una presentación.",
          primary: "Ver el trabajo",
          secondary: "Empezar un proyecto",
        }
      : {
          badge: "Booking new projects for Q4",
          heading: (
            <span
              className="hero-image-text block"
              data-text="We build the parts of the internet you run on."
            >
              We build the parts
              <br />
              of the internet
              <br />
              you run on.
            </span>
          ),
          paragraph:
            "Fen Studio designs and builds websites, dashboards, and internal tools for teams who need software that works quietly in the background — not just software that looks good in a pitch deck.",
          primary: "See the work",
          secondary: "Start a project",
        };

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/10"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/conrad-crawford-EcWBgAdRqrQ-unsplash.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-bg/70 via-bg/20 to-transparent" />
        <div className="aura absolute left-1/2 top-[62%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-accent/35 blur-[110px]" />
        <div className="aura-slow absolute left-[30%] top-[75%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-lavender/20 blur-[100px]" />
        <div className="noise absolute inset-0" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 pt-16 pb-28 text-center md:px-10 md:pt-24 md:pb-36">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-ink-dim backdrop-blur-sm">
          <Sparkle className="h-3.5 w-3.5 text-accent-bright" />
          {content.badge}
        </div>

        <h1 className="text-balance font-[family-name:var(--font-display)] text-[clamp(3.5rem,7vw,5.6rem)] font-semibold leading-[0.98] tracking-tight text-ink">
          {content.heading}
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-balance text-base text-ink-dim md:text-lg">
          {content.paragraph}
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#work"
            className="w-full rounded-full border border-white/10 bg-white/5 px-7 py-4 text-sm font-medium text-ink transition hover:bg-white/10 hover:text-ink sm:w-auto"
          >
            {content.primary}
          </a>
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-medium text-white shadow-[0_18px_55px_rgba(111,140,255,0.24)] transition hover:bg-accent/85 sm:w-auto"
          >
            {content.secondary}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
