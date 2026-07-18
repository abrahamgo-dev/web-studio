"use client";

type Language = "en" | "es";

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const backToTop = language === "es" ? "Volver arriba" : "Back to top";
  const contact = language === "es" ? "Contacto" : "Contact";
  const copyright =
    language === "es"
      ? `© ${new Date().getFullYear()} Fen Studio. Todos los derechos reservados.`
      : `© ${new Date().getFullYear()} Fen Studio. All rights reserved.`;

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-12 text-sm text-ink-dim md:flex-row md:px-10">
        <span>{copyright}</span>
        <div className="flex flex-col gap-3 text-center md:flex-row md:items-center md:text-right">
          <a href="#top" className="transition hover:text-ink">
            {backToTop}
          </a>
          <a href="#contact" className="transition hover:text-ink">
            {contact}
          </a>
        </div>
      </div>
    </footer>
  );
}
