"use client";

import Reveal from "@/components/Reveal";

type Language = "en" | "es";

interface ProcessProps {
  language: Language;
}

const STEPS = [
  {
    n: "01",
    title: "Discovery",
    titleEs: "Descubrimiento",
    duration: "Week 1",
    durationEs: "Semana 1",
    description:
      "A working session on the actual problem — audience, competitors, and the one metric this project needs to move.",
    descriptionEs:
      "Una sesión para entender el problema real: audiencia, competencia y la métrica clave que debe moverse.",
  },
  {
    n: "02",
    title: "Design",
    titleEs: "Diseño",
    duration: "Weeks 2–3",
    durationEs: "Semanas 2–3",
    description:
      "Token system, layout concepts, and a full design file, reviewed together before a single line of code is written.",
    descriptionEs:
      "Sistema de tokens, conceptos de layout y un diseño completo, revisado antes de escribir una sola línea de código.",
  },
  {
    n: "03",
    title: "Build",
    titleEs: "Construcción",
    duration: "Weeks 3–5",
    durationEs: "Semanas 3–5",
    description:
      "Next.js implementation, staged for review as it's built — not delivered as one surprise at the end.",
    descriptionEs:
      "Implementación en Next.js, presentada por etapas para revisión en vez de entregarse de golpe al final.",
  },
  {
    n: "04",
    title: "Launch",
    titleEs: "Lanzamiento",
    duration: "Week 6",
    durationEs: "Semana 6",
    description:
      "Domain, hosting, analytics, and a handoff doc you can actually read.",
    descriptionEs:
      "Dominio, hosting, analytics y una guía de entrega que realmente puedas leer.",
  },
  {
    n: "05",
    title: "Iterate",
    titleEs: "Iterar",
    duration: "Ongoing",
    durationEs: "Continuo",
    description:
      "Monthly care plan for edits, fixes, and small builds as the product keeps moving.",
    descriptionEs:
      "Plan mensual de cuidado para cambios, ajustes y mejoras pequeñas mientras el producto sigue creciendo.",
  },
];

export default function Process({ language }: ProcessProps) {
  const heading =
    language === "es"
      ? "Así es como realmente funciona un proyecto"
      : "How a project actually runs";

  return (
    <section id="process" className="relative border-t border-white/10">
      <div className="mx-auto max-w-4xl px-6 py-28 md:px-10 md:py-36">
        <Reveal>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
            {heading}
          </h2>
        </Reveal>

        <div className="mt-14 space-y-5 md:mt-16">
          {STEPS.map((step, index) => (
            <Reveal key={step.n} delayMs={index * 80}>
              <div className="card-surface grid grid-cols-[3rem_1fr] gap-x-6 rounded-[2rem] border-white/10 bg-white/5 p-8 first:border-t-0 md:grid-cols-[4rem_12rem_1fr] md:gap-x-8">
                <span className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.2em] text-ink-dim">
                  {step.n}
                </span>
                <div className="col-start-2 md:col-start-2">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink">
                    {language === "es" ? step.titleEs : step.title}
                  </h3>
                  <span className="text-sm text-accent-bright">
                    {language === "es" ? step.durationEs : step.duration}
                  </span>
                </div>
                <p className="col-span-2 mt-4 text-sm leading-7 text-ink-dim md:col-span-1 md:col-start-3 md:mt-0">
                  {language === "es" ? step.descriptionEs : step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
