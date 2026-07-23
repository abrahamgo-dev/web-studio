"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import Reveal from "@/components/Reveal";

type Language = "en" | "es";

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const content =
    language === "es"
      ? {
          tagline:
            "Sitios elegantes para negocios pequeños y medianos, diseñados una vez y cuidados siempre.",
          sectionsLabel: "Secciones",
          studioLabel: "Estudio",
          sections: [
            { label: "Trabajo", href: "/#work" },
            { label: "Servicios", href: "/#services" },
            { label: "Proceso", href: "/#process" },
            { label: "Contacto", href: "/#contact" },
          ],
          studio: [
            { label: "hello@fenwebstudio.com", href: "mailto:hello@fenwebstudio.com" },
            { label: "Empezar un proyecto", href: "/#contact" },
          ],
          backToTop: "Volver arriba",
          copyright: `© ${new Date().getFullYear()} Fen Web Studio. Todos los derechos reservados.`,
        }
      : {
          tagline:
            "Elegant websites for small and medium businesses, designed once and cared for always.",
          sectionsLabel: "Sections",
          studioLabel: "Studio",
          sections: [
            { label: "Work", href: "/#work" },
            { label: "Services", href: "/#services" },
            { label: "Process", href: "/#process" },
            { label: "Contact", href: "/#contact" },
          ],
          studio: [
            { label: "hello@fenwebstudio.com", href: "mailto:hello@fenwebstudio.com" },
            { label: "Start a project", href: "/#contact" },
          ],
          backToTop: "Back to top",
          copyright: `© ${new Date().getFullYear()} Fen Web Studio. All rights reserved.`,
        };

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <Reveal>
          <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
            <div>
              <Link
                href="/#top"
                className="flex items-center gap-2.5 font-[family-name:var(--font-display)] text-xl font-extrabold tracking-tight text-ink"
              >
                <Image
                  src="/icon.svg"
                  alt=""
                  width={32}
                  height={32}
                  className="rounded-[8px]"
                />
                fenwebstudio
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-6 text-ink-dim">
                {content.tagline}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink-dim">
                {content.sectionsLabel}
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                {content.sections.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-ink transition hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink-dim">
                {content.studioLabel}
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                {content.studio.map((item) =>
                  item.href.startsWith("mailto:") ? (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="text-sm text-ink transition hover:text-accent"
                      >
                        {item.label}
                      </a>
                    </li>
                  ) : (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-ink transition hover:text-accent"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-ink-dim md:flex-row">
          <span>{content.copyright}</span>
          <Link
            href="/#top"
            className="group inline-flex items-center gap-1.5 transition hover:text-ink"
          >
            {content.backToTop}
            <ArrowUp className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
