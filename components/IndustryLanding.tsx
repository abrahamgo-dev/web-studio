"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { useSiteChrome } from "@/lib/useSiteChrome";
import { getProject } from "@/lib/projects";
import type { LandingPage } from "@/lib/landingPages";

interface IndustryLandingProps {
  page: LandingPage;
}

export default function IndustryLanding({ page }: IndustryLandingProps) {
  const { language, theme, mounted, toggleLanguage, toggleTheme } =
    useSiteChrome();

  if (!mounted) {
    return <div className="min-h-screen bg-bg" />;
  }

  const project = page.projectSlug ? getProject(page.projectSlug) : undefined;

  const copy =
    language === "es"
      ? {
          painPointsLabel: "Lo que solemos ver",
          approachLabel: "Cómo lo resolvemos",
          caseStudyLabel: page.caseStudyLabelEs,
          ctaTitle: "¿Listo para un sitio que haga esto por ti?",
          ctaText:
            "Cuéntanos qué tienes hoy y hacia dónde quieres llegar — respuesta breve, normalmente en un día.",
          ctaButton: "Empezar un proyecto",
        }
      : {
          painPointsLabel: "What we usually see",
          approachLabel: "How we fix it",
          caseStudyLabel: page.caseStudyLabel,
          ctaTitle: "Ready for a site that does this for you?",
          ctaText:
            "Tell us what you have today and where you want to end up — a short reply, usually within a day.",
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
              style={{ backgroundImage: `url('${page.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-bg" />
          </div>

          <div className="relative mx-auto max-w-4xl px-6 pt-16 pb-20 md:px-10 md:pt-24 md:pb-28">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide text-white/80 backdrop-blur-sm">
              {language === "es" ? page.eyebrowEs : page.eyebrow}
            </div>

            <h1 className="text-balance mt-6 font-[family-name:var(--font-display)] text-[clamp(2.25rem,5.5vw,3.75rem)] font-bold leading-[1.02] tracking-tight text-white">
              {language === "es" ? page.titleEs : page.title}
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-base leading-8 text-white/75 md:text-lg">
              {language === "es" ? page.introEs : page.intro}
            </p>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20">
            <Reveal>
              <h2 className="text-sm font-medium uppercase tracking-[0.28em] text-accent-bright">
                {copy.painPointsLabel}
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {page.painPoints.map((point, index) => (
                <Reveal key={point.title} delayMs={index * 80}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-ink">
                      {language === "es" ? point.titleEs : point.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-ink-dim">
                      {language === "es" ? point.bodyEs : point.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20">
            <Reveal>
              <h2 className="text-sm font-medium uppercase tracking-[0.28em] text-accent-bright">
                {copy.approachLabel}
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {page.approachPoints.map((point, index) => (
                <Reveal key={point.title} delayMs={index * 80}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-ink">
                      {language === "es" ? point.titleEs : point.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-ink-dim">
                      {language === "es" ? point.bodyEs : point.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {project && (
          <section className="border-b border-white/10">
            <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20">
              <Reveal>
                <Link
                  href={`/work/${project.slug}`}
                  className="group flex flex-col gap-6 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 transition hover:border-white/20 md:flex-row md:items-center"
                >
                  <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden rounded-[1.5rem] md:w-80">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 320px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 items-center justify-between gap-4 px-4 pb-4 md:px-2 md:pb-2 md:pr-8">
                    <div>
                      <p className="text-sm font-semibold text-accent-bright">
                        {copy.caseStudyLabel}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-ink-dim">
                        {language === "es" ? project.summaryEs : project.summary}
                      </p>
                    </div>
                    <ArrowUpRight className="h-6 w-6 shrink-0 text-ink transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </Link>
              </Reveal>
            </div>
          </section>
        )}

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
