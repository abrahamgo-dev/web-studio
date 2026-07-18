"use client";

import { CheckCircle2 } from "lucide-react";

type Language = "en" | "es";

interface WhyProps {
  language: Language;
}

const REASONS = [
  {
    title: "Built for clarity",
    titleEs: "Hecho para la claridad",
    description:
      "Product-first websites, landing pages, and tools with crystal-clear messaging, fast load time, and intuitive product hierarchy.",
    descriptionEs:
      "Sitios, landing pages y herramientas enfocadas en el producto, con mensajes claros, carga rápida y una jerarquía intuitiva.",
  },
  {
    title: "Launch-ready systems",
    titleEs: "Sistemas listos para lanzar",
    description:
      "Next.js architecture, CMS workflows, and polished handoff materials that make launch and scale feel easy.",
    descriptionEs:
      "Arquitectura en Next.js, flujos de CMS y materiales de entrega pulidos que hacen que lanzar y escalar se sienta simple.",
  },
  {
    title: "Long-term support",
    titleEs: "Soporte a largo plazo",
    description:
      "Ongoing maintenance, analytics reviews, and iterative improvements so your digital product stays modern and reliable.",
    descriptionEs:
      "Mantenimiento continuo, revisiones de analytics y mejoras iterativas para que tu producto digital se mantenga moderno y confiable.",
  },
];

export default function Why({ language }: WhyProps) {
  const eyebrow = language === "es" ? "Por qué Fen Studio" : "Why Fen Studio";
  const heading =
    language === "es"
      ? "Diseño, ingeniería y crecimiento trabajando juntos."
      : "Design, engineering, and growth working together.";
  const intro =
    language === "es"
      ? "Creamos sitios web, dashboards y herramientas que se mueven más rápido que el mercado, mantienen a los equipos alineados y ayudan a los fundadores a lanzar con confianza."
      : "We build websites, dashboards, and tools that move faster than the market, keep teams aligned, and help founders launch with confidence.";

  return (
    <section id="why" className="relative border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-accent-bright">
            {eyebrow}
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {heading}
          </h2>
          <p className="mx-auto mt-5 text-base leading-8 text-ink-dim md:max-w-2xl">
            {intro}
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {REASONS.map((reason) => (
            <div key={reason.title} className="card-surface rounded-[2rem] p-8">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/15 text-accent-bright">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-ink">
                {language === "es" ? reason.titleEs : reason.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-ink-dim">
                {language === "es" ? reason.descriptionEs : reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
