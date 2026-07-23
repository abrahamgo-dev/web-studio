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

  return (
    <section id="work" className="relative border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-36">
        <Reveal>
          <div className="mb-14 md:mb-20">
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-ink md:text-6xl">
              {heading}
            </h2>
            <p className="mt-3 max-w-md text-sm text-ink-dim">{intro}</p>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.slug} delayMs={index * 100}>
              <Link
                href={`/work/${project.slug}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                  <div className="flex flex-col gap-1">
                    <span className="font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight text-white">
                      {project.name}
                    </span>
                    <span className="text-sm text-white/70">
                      {language === "es" ? project.kindEs : project.kind} ·{" "}
                      {project.year}
                    </span>
                  </div>
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
