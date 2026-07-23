"use client";

import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";

type Language = "en" | "es";

interface WhyProps {
  language: Language;
}

const REASONS = [
  {
    title: "Built to earn trust",
    titleEs: "Hecho para generar confianza",
    description:
      "Clean design, fast load times, and a clear message — a site that makes a small business look established, not homemade.",
    descriptionEs:
      "Diseño limpio, carga rápida y un mensaje claro — un sitio que hace ver a un negocio establecido, no improvisado.",
  },
  {
    title: "Right-sized, on purpose",
    titleEs: "Del tamaño justo, a propósito",
    description:
      "Only the functionality your business actually uses. Less to break, less to explain, less to pay to maintain.",
    descriptionEs:
      "Solo la funcionalidad que tu negocio realmente usa. Menos cosas que se rompan, menos que explicar, menos que pagar por mantener.",
  },
  {
    title: "Never goes stale",
    titleEs: "Nunca se queda desactualizado",
    description:
      "A monthly care plan covers edits, small updates, and fixes — included, not billed as a surprise invoice.",
    descriptionEs:
      "Un plan de cuidado mensual cubre ediciones, cambios pequeños y arreglos — incluido, no como una factura sorpresa.",
  },
];

export default function Why({ language }: WhyProps) {
  const eyebrow = language === "es" ? "Por qué Fen Web Studio" : "Why Fen Web Studio";
  const heading =
    language === "es"
      ? "Elegante por diseño. Cuidado por defecto."
      : "Elegant by design. Maintained by default.";
  const intro =
    language === "es"
      ? "Diseñamos y construimos sitios web para negocios pequeños y medianos que quieren verse establecidos en internet — y luego los mantenemos frescos con un plan de cuidado continuo, no con una factura de una sola vez."
      : "We design and build websites for small and medium businesses who want to look established online — then keep them fresh with an ongoing care plan, not a one-off invoice.";

  return (
    <section id="why" className="relative border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-36">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-accent-bright">
              {eyebrow}
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
              {heading}
            </h2>
            <p className="mx-auto mt-5 text-base leading-8 text-ink-dim md:max-w-2xl">
              {intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {REASONS.map((reason, index) => (
            <Reveal key={reason.title} delayMs={index * 100}>
              <div className="card-surface h-full rounded-[2rem] p-8">
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
