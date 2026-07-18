"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, MoonStar, SunMedium, X } from "lucide-react";

type Language = "en" | "es";
type ThemeMode = "dark" | "light";

interface NavProps {
  language: Language;
  onToggleLanguage: () => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
}

export default function Nav({
  language,
  onToggleLanguage,
  theme,
  onToggleTheme,
}: NavProps) {
  const [open, setOpen] = useState(false);

  const links =
    language === "es"
      ? [
          { label: "Trabajo", href: "#work" },
          { label: "Servicios", href: "#services" },
          { label: "Proceso", href: "#process" },
          { label: "Contacto", href: "#contact" },
        ]
      : [
          { label: "Work", href: "#work" },
          { label: "Services", href: "#services" },
          { label: "Process", href: "#process" },
          { label: "Contact", href: "#contact" },
        ];

  const ctaLabel =
    language === "es" ? "Empezar un proyecto" : "Start a project";

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#top"
          className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-ink"
        >
          Fen<span className="text-accent-bright">.</span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-dim transition hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center rounded-full border border-[color:var(--line)] bg-bg-raised/80 p-1 shadow-sm md:inline-flex">
            <button
              type="button"
              onClick={onToggleLanguage}
              className={`rounded-full px-3 py-1.5 text-sm font-medium ${
                language === "en"
                  ? "bg-accent text-white"
                  : "text-ink-dim hover:text-ink"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={onToggleLanguage}
              className={`rounded-full px-3 py-1.5 text-sm font-medium ${
                language === "es"
                  ? "bg-accent text-white"
                  : "text-ink-dim hover:text-ink"
              }`}
            >
              ES
            </button>
          </div>

          <button
            type="button"
            aria-label={
              theme === "dark"
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
            onClick={onToggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] bg-bg-raised/80 text-ink shadow-sm transition hover:bg-white/10"
          >
            {theme === "dark" ? (
              <SunMedium className="h-4 w-4" />
            ) : (
              <MoonStar className="h-4 w-4" />
            )}
          </button>

          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-ink transition hover:border-accent-bright/60 hover:bg-white/10 hover:text-accent-bright md:inline-flex"
          >
            {ctaLabel}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink shadow-sm transition hover:bg-white/10 md:hidden"
        >
          {open ? (
            <X className="h-4.5 w-4.5" />
          ) : (
            <Menu className="h-4.5 w-4.5" />
          )}
        </button>
      </div>

      {open && (
        <div className="mx-6 mb-6 flex flex-col gap-2 rounded-2xl border border-white/10 bg-bg-raised/95 p-3 backdrop-blur-xl md:hidden">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleLanguage}
              className={`flex-1 rounded-xl px-3 py-2 text-sm font-medium ${
                language === "en"
                  ? "bg-accent text-white"
                  : "bg-white/10 text-ink"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={onToggleLanguage}
              className={`flex-1 rounded-xl px-3 py-2 text-sm font-medium ${
                language === "es"
                  ? "bg-accent text-white"
                  : "bg-white/10 text-ink"
              }`}
            >
              ES
            </button>
            <button
              type="button"
              onClick={onToggleTheme}
              className="rounded-xl border border-[color:var(--line)] bg-white/10 p-2 text-ink"
            >
              {theme === "dark" ? (
                <SunMedium className="h-4 w-4" />
              ) : (
                <MoonStar className="h-4 w-4" />
              )}
            </button>
          </div>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm text-ink-dim transition hover:bg-white/5 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-xl bg-accent px-4 py-3 text-center text-sm font-medium text-white"
          >
            {ctaLabel}
          </a>
        </div>
      )}
    </header>
  );
}
