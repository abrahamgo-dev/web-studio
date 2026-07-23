"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/projects";
import Reveal from "@/components/Reveal";

type Language = "en" | "es";

interface WorkProps {
  language: Language;
}

export default function Work({ language }: WorkProps) {
  const heading = language === "es" ? "Trabajo seleccionado" : "Selected work";
  const intro =
    language === "es"
      ? "Ejemplos de plantilla mientras sumamos proyectos reales — cada uno tiene su propia página de caso."
      : "Template examples while real projects get added — each one has its own case study page.";
  const cta = language === "es" ? "Ver caso" : "View case";

  return (
    <section id="work" className="relative border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-36">
        <Reveal>
          <div className="mb-12 flex flex-col gap-3 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-ink md:text-6xl">
                {heading}
              </h2>
              <p className="mt-3 text-sm leading-7 text-ink-dim">{intro}</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-ink-dim">
              <span className="h-2 w-2 rounded-full bg-accent" />
              {language === "es" ? "Casos presentados" : "Featured examples"}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, index) => {
            const services =
              language === "es" ? project.servicesEs : project.services;

            return (
              <Reveal key={project.slug} delayMs={index * 100}>
                <Link href={`/work/${project.slug}`} className="group block">
                  <article className="card-surface overflow-hidden rounded-[2rem] p-0">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                      <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-white/80 backdrop-blur">
                        <span className="h-2 w-2 rounded-full bg-accent-bright" />
                        {language === "es" ? "Caso" : "Case"}
                      </div>

                      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-8">
                        <div className="max-w-[80%]">
                          <p className="text-sm uppercase tracking-[0.28em] text-white/70">
                            {language === "es" ? project.kindEs : project.kind}
                          </p>
                          <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight text-white md:text-[1.7rem]">
                            {project.name}
                          </h3>
                        </div>
                        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 px-6 py-5 md:px-8">
                      <div className="flex flex-wrap gap-2">
                        {services.slice(0, 2).map((service) => (
                          <span
                            key={service}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-ink-dim"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                      <span className="text-sm font-medium text-ink-dim">
                        {project.year}
                      </span>
                    </div>

                    <div className="px-6 pb-6 text-sm leading-7 text-ink-dim md:px-8 md:pb-8">
                      {language === "es" ? project.summaryEs : project.summary}
                    </div>
                  </article>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
