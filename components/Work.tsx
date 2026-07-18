"use client";

type Language = "en" | "es";

interface WorkProps {
  language: Language;
}

const PROJECTS = [
  {
    name: "Northbeam Finance",
    kind: "Fintech dashboard",
    kindEs: "Dashboard fintech",
    year: "2026",
  },
  {
    name: "Loom & Co.",
    kind: "E-commerce rebuild",
    kindEs: "Reconstrucción e-commerce",
    year: "2025",
  },
  {
    name: "Halcyon Health",
    kind: "Marketing site + booking",
    kindEs: "Sitio marketing + reservas",
    year: "2025",
  },
  {
    name: "Ferrous Logistics",
    kind: "Internal ops tool",
    kindEs: "Herramienta interna de operaciones",
    year: "2025",
  },
];

export default function Work({ language }: WorkProps) {
  const heading = language === "es" ? "Trabajo seleccionado" : "Selected work";
  const intro =
    language === "es"
      ? "Casos de ejemplo — reemplázalos por tus propios proyectos o úsalos como plantilla mientras construyes tu primera historia."
      : "Placeholder case studies — swap these for your own projects, or leave them as a template while you build your first case study.";

  return (
    <section id="work" className="relative border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-36">
        <div className="mb-14 md:mb-20">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {heading}
          </h2>
          <p className="mt-3 max-w-md text-sm text-ink-dim">{intro}</p>
        </div>

        <div className="space-y-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8">
          {PROJECTS.map((project) => (
            <a
              key={project.name}
              href="#contact"
              className="group flex flex-col items-start justify-between gap-3 rounded-3xl border border-white/5 bg-black/15 p-6 transition hover:border-accent-bright/50 hover:bg-white/5 sm:flex-row sm:items-center"
            >
              <div className="flex flex-col gap-1">
                <span className="font-[family-name:var(--font-display)] text-2xl font-semibold text-ink transition group-hover:text-accent-bright">
                  {project.name}
                </span>
                <span className="text-sm text-ink-dim">
                  {language === "es" ? project.kindEs : project.kind}
                </span>
              </div>
              <span className="text-sm text-ink-dim">{project.year}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
