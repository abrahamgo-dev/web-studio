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
          badge: "Abriendo espacio para nuevos proyectos en Q4",
          heading: (
            <span className="block">
              Un sitio web tan
              <br />
              <span className="text-accent-bright">confiable</span> como
              <br />
              tu negocio.
            </span>
          ),
          paragraph:
            "Fen Web Studio diseña sitios elegantes y sin relleno para negocios pequeños y medianos — y luego los mantiene al día con un plan de cuidado mensual. Sin rediseños cada dos años, sin buscar quién arregle un texto.",
          primary: "Ver el trabajo",
          secondary: "Empezar un proyecto",
        }
      : {
          badge: "Booking new projects for Q4",
          heading: (
            <span className="block">
              A website as
              <br />
              <span className="text-accent-bright">trustworthy</span> as
              <br />
              your business.
            </span>
          ),
          paragraph:
            "Fen Web Studio designs elegant, no-clutter websites for small and medium businesses — then keeps them polished with a monthly care plan. No redesign every two years, no developer to chase down for a typo fix.",
          primary: "See the work",
          secondary: "Start a project",
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

      <div className="relative mx-auto max-w-5xl px-6 pt-16 pb-28 text-center md:px-10 md:pt-24 md:pb-36">
        <Reveal>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-4 py-2 text-xs font-semibold tracking-wide text-accent-bright backdrop-blur-sm">
            <Sparkle className="h-3.5 w-3.5 text-accent-bright" />
            {content.badge}
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          <h1 className="text-balance font-[family-name:var(--font-display)] text-[clamp(4rem,9vw,7.5rem)] font-extrabold leading-[0.92] tracking-tight text-ink">
            {content.heading}
          </h1>
        </Reveal>

        <Reveal delayMs={220}>
          <p className="mx-auto mt-8 max-w-3xl text-balance text-base text-ink-dim md:text-lg">
            {content.paragraph}
          </p>
        </Reveal>

        <Reveal delayMs={340}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
      </div>
    </section>
  );
}
