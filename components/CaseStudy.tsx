"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useSiteChrome } from "@/lib/useSiteChrome";
import type { Project } from "@/lib/projects";

interface CaseStudyProps {
  project: Project;
}

export default function CaseStudy({ project }: CaseStudyProps) {
  const { language, theme, mounted, toggleLanguage, toggleTheme } =
    useSiteChrome();

  if (!mounted) {
    return <div className="min-h-screen bg-bg" />;
  }

  const copy =
    language === "es"
      ? {
          back: "Trabajo",
          exampleBadge: "Ejemplo de plantilla",
          problem: "El problema",
          approach: "El enfoque",
          result: "El resultado",
          services: "Incluido",
          ctaTitle: "¿Tu negocio necesita algo así?",
          ctaText: "Cuéntanos qué tienes hoy y hacia dónde quieres llegar.",
          ctaButton: "Empezar un proyecto",
        }
      : {
          back: "Work",
          exampleBadge: "Template example",
          problem: "The problem",
          approach: "The approach",
          result: "The result",
          services: "Included",
          ctaTitle: "Need something like this?",
          ctaText: "Tell us what you have today and where you want to end up.",
          ctaButton: "Start a project",
        };

  return (
    <div className="min-h-screen bg-bg">
      <Nav
        language={language}
        onToggleLanguage={toggleLanguage}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-50"
              style={{ backgroundImage: `url('${project.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-bg" />
          </div>

          <div className="relative mx-auto max-w-4xl px-6 pt-16 pb-20 md:px-10 md:pt-24 md:pb-28">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              {copy.back}
            </Link>

            {project.isExample && (
              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide text-white/80 backdrop-blur-sm">
                {copy.exampleBadge}
              </div>
            )}

            <h1 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.02] tracking-tight text-white">
              {project.name}
            </h1>
            <p className="mt-4 text-base text-white/70 md:text-lg">
              {language === "es" ? project.kindEs : project.kind} ·{" "}
              {project.year}
            </p>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-4xl gap-10 px-6 py-16 md:grid-cols-2 md:px-10 md:py-20">
            <div>
              <h2 className="text-sm font-medium uppercase tracking-[0.28em] text-accent-bright">
                {copy.problem}
              </h2>
              <p className="mt-4 text-base leading-8 text-ink-dim">
                {language === "es" ? project.problemEs : project.problem}
              </p>
            </div>
            <div>
              <h2 className="text-sm font-medium uppercase tracking-[0.28em] text-accent-bright">
                {copy.approach}
              </h2>
              <p className="mt-4 text-base leading-8 text-ink-dim">
                {language === "es" ? project.approachEs : project.approach}
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
            <div className="card-surface overflow-hidden rounded-[2rem]">
              <div className="relative aspect-[16/9]">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-4xl gap-10 px-6 py-16 md:grid-cols-2 md:px-10 md:py-20">
            <div>
              <h2 className="text-sm font-medium uppercase tracking-[0.28em] text-accent-bright">
                {copy.result}
              </h2>
              <p className="mt-4 text-base leading-8 text-ink-dim">
                {language === "es" ? project.resultEs : project.result}
              </p>
            </div>
            <div>
              <h2 className="text-sm font-medium uppercase tracking-[0.28em] text-accent-bright">
                {copy.services}
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {(language === "es" ? project.servicesEs : project.services).map(
                  (service) => (
                    <li
                      key={service}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-ink-dim"
                    >
                      {service}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center md:px-10 md:py-32">
            <h2 className="text-balance font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
              {copy.ctaTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-ink-dim">
              {copy.ctaText}
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(111,140,255,0.24)] transition hover:bg-accent/90"
            >
              {copy.ctaButton}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer language={language} />
    </div>
  );
}
