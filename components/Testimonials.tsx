"use client";

import Reveal from "@/components/Reveal";

type Language = "en" | "es";

interface TestimonialsProps {
  language: Language;
}

const TESTIMONIALS = [
  {
    quote:
      "We finally have a site that reads as a lookbook first and a store second — which is exactly how we wanted to be seen.",
    quoteEs:
      "Por fin tenemos un sitio que se lee primero como lookbook y después como tienda — justo como queríamos que nos vieran.",
    name: "Owner",
    nameEs: "Dueña",
    company: "Loom & Co.",
    initials: "LC",
  },
  {
    quote:
      "Bookings happen without a phone call now. The site feels like a continuation of the studio, not a tool bolted onto it.",
    quoteEs:
      "Ahora las reservas ocurren sin llamada. El sitio se siente como una extensión del estudio, no una herramienta aparte.",
    name: "Studio Director",
    nameEs: "Directora del estudio",
    company: "Halcyon Health",
    initials: "HH",
  },
  {
    quote:
      "It answers 'are these people legitimate' in the first five seconds — which was the entire brief.",
    quoteEs:
      "Responde '¿es gente seria?' en los primeros cinco segundos — que era exactamente el encargo.",
    name: "Partner",
    nameEs: "Socio",
    company: "Marlow & Row",
    initials: "MR",
  },
] as const;

export default function Testimonials({ language }: TestimonialsProps) {
  const heading =
    language === "es" ? "Lo que dicen al lanzar" : "What they say at launch";
  const intro =
    language === "es"
      ? "Citas ilustrativas basadas en los proyectos de ejemplo de arriba — el tono real de conversación que buscamos con cada cliente."
      : "Illustrative quotes based on the example projects above — the kind of conversation we aim for with every client.";
  const exampleLabel = language === "es" ? "Cita de ejemplo" : "Example testimonial";

  return (
    <section className="relative border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-36">
        <Reveal>
          <div className="mb-14 flex flex-col gap-4 md:mb-20 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-md font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
              {heading}
            </h2>
            <p className="max-w-sm text-sm text-ink-dim md:text-right">
              {intro}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <Reveal key={item.company} delayMs={index * 90}>
              <div className="card-surface flex h-full flex-col rounded-[2rem] p-8">
                <span className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-wide text-ink-dim">
                  {exampleLabel}
                </span>
                <p className="mt-6 flex-1 text-base leading-7 text-ink">
                  &ldquo;{language === "es" ? item.quoteEs : item.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-lavender text-xs font-bold text-white">
                    {item.initials}
                  </span>
                  <div className="text-sm">
                    <p className="font-medium text-ink">
                      {language === "es" ? item.nameEs : item.name}
                    </p>
                    <p className="text-ink-dim">{item.company}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
