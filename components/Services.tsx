"use client";

import { Layers, Code2, GaugeCircle, LifeBuoy } from "lucide-react";

type Language = "en" | "es";

interface ServicesProps {
  language: Language;
}

const SERVICES = [
  {
    icon: Layers,
    title: "Web design",
    titleEs: "Diseño web",
    description:
      "Identity, layout, and interaction design for marketing sites and product front-ends — built to hold your brand's voice, not a template's.",
    descriptionEs:
      "Diseño de identidad, layout e interacción para sitios de marketing y productos digitales, pensado para reflejar la voz de tu marca y no un template.",
    span: "md:col-span-3",
  },
  {
    icon: Code2,
    title: "Development",
    titleEs: "Desarrollo",
    description:
      "Next.js builds that ship fast and stay maintainable — no page-builder debt to inherit later.",
    descriptionEs:
      "Proyectos en Next.js que se lanzan rápido y son fáciles de mantener, sin deuda técnica de constructores visuales.",
    span: "md:col-span-2",
  },
  {
    icon: GaugeCircle,
    title: "Digital solutions",
    titleEs: "Soluciones digitales",
    description:
      "Dashboards, client portals, and internal tools — the software layer behind the website that most agencies skip.",
    descriptionEs:
      "Dashboards, portales y herramientas internas: la capa de software que muchas agencias dejan atrás.",
    span: "md:col-span-2",
  },
  {
    icon: LifeBuoy,
    title: "Care & growth",
    titleEs: "Cuidado y crecimiento",
    description:
      "Ongoing edits, monitoring, and iteration after launch, billed monthly instead of quoted per request.",
    descriptionEs:
      "Ediciones, seguimiento e iteración continua tras el lanzamiento, con un plan mensual en lugar de cotizaciones por pedido.",
    span: "md:col-span-3",
  },
];

export default function Services({ language }: ServicesProps) {
  const heading =
    language === "es"
      ? "Un estudio, toda la pila."
      : "One studio, the whole stack.";
  const intro =
    language === "es"
      ? "La mayoría de agencias se detiene en la landing page. Nosotros seguimos con el sistema completo."
      : "Most agencies stop at the homepage. We stay for the system underneath it.";

  return (
    <section id="services" className="relative border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-36">
        <div className="mb-14 flex flex-col gap-4 md:mb-20 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-md font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {heading}
          </h2>
          <p className="max-w-sm text-sm text-ink-dim md:text-right">{intro}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-5">
          {SERVICES.map(
            ({
              icon: Icon,
              title,
              titleEs,
              description,
              descriptionEs,
              span,
            }) => (
              <div
                key={title}
                className={`card-surface group rounded-[2rem] p-8 ${span}`}
              >
                <Icon
                  className="h-7 w-7 text-accent-bright"
                  strokeWidth={1.75}
                />
                <h3 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-semibold text-ink">
                  {language === "es" ? titleEs : title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-ink-dim">
                  {language === "es" ? descriptionEs : description}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
