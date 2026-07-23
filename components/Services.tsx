"use client";

import { Layers, Code2, GaugeCircle, LifeBuoy } from "lucide-react";
import Reveal from "@/components/Reveal";

type Language = "en" | "es";

interface ServicesProps {
  language: Language;
}

const SERVICES = [
  {
    icon: Layers,
    title: "Design",
    titleEs: "Diseño",
    description:
      "Clean, elegant layouts built around your brand — the kind of site that makes a small business look established the moment it loads.",
    descriptionEs:
      "Layouts limpios y elegantes construidos alrededor de tu marca — el tipo de sitio que hace que un negocio se vea establecido desde el primer segundo.",
    span: "md:col-span-3",
  },
  {
    icon: Code2,
    title: "Build",
    titleEs: "Construcción",
    description:
      "Fast, lightweight Next.js builds — no page-builder bloat, no plugins to keep updated.",
    descriptionEs:
      "Sitios en Next.js rápidos y livianos, sin constructores visuales pesados ni plugins que mantener.",
    span: "md:col-span-2",
  },
  {
    icon: GaugeCircle,
    title: "Just what you need",
    titleEs: "Solo lo necesario",
    description:
      "Contact forms, booking links, maps, reviews — the functionality small businesses actually use, nothing extra to maintain.",
    descriptionEs:
      "Formularios de contacto, reservas, mapas, reseñas — la funcionalidad que un negocio realmente usa, sin nada extra que mantener.",
    span: "md:col-span-2",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing care",
    titleEs: "Cuidado continuo",
    description:
      "A monthly plan covers edits, small updates, and fixes — so the site stays current without a redesign invoice every couple of years.",
    descriptionEs:
      "Un plan mensual cubre ediciones, pequeños cambios y arreglos, para que el sitio se mantenga al día sin una factura de rediseño cada par de años.",
    span: "md:col-span-3",
  },
];

export default function Services({ language }: ServicesProps) {
  const heading =
    language === "es"
      ? "Todo lo que un sitio necesita. Nada de más."
      : "Everything a small business site needs. Nothing it doesn't.";
  const intro =
    language === "es"
      ? "La mayoría de estudios vende un proyecto de una sola vez. Nosotros construimos algo que puedes conservar por años — pulido en el lanzamiento y cuidado cada mes después."
      : "Most studios sell you a one-time project. We build something you keep for years — polished at launch, cared for every month after.";

  return (
    <section id="services" className="relative border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-36">
        <Reveal>
          <div className="mb-14 flex flex-col gap-4 md:mb-20 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-md font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
              {heading}
            </h2>
            <p className="max-w-sm text-sm text-ink-dim md:text-right">{intro}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-5">
          {SERVICES.map(
            (
              { icon: Icon, title, titleEs, description, descriptionEs, span },
              index,
            ) => (
              <Reveal key={title} delayMs={index * 90} className={span}>
                <div className="card-surface group h-full rounded-[2rem] p-8">
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
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
