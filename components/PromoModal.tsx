"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";

type Language = "en" | "es";

interface PromoModalProps {
  language: Language;
}

const DISMISS_KEY = "promoModalDismissed";
const OPEN_DELAY_MS = 1600;

// Owner-editable: flip `enabled` off to turn the modal off entirely.
// `devMode` ignores the "already dismissed this session" check, so it
// pops up on every page load — handy for previewing copy/design changes.
const CONFIG = {
  enabled: true,
  devMode: false,
};

// Owner-editable: swap this for whatever's actually running this month.
const OFFER = {
  eyebrow: "Limited availability",
  eyebrowEs: "Cupo limitado",
  title: "Free 20-minute site audit",
  titleEs: "Auditoría de sitio gratis de 20 minutos",
  body: "No pitch, no obligation — just a short call where we point out what's costing you visitors on your current site.",
  bodyEs:
    "Sin venta, sin compromiso — solo una llamada corta donde te decimos qué le está costando visitantes a tu sitio actual.",
  cta: "Claim your slot",
  ctaEs: "Reservar mi lugar",
};

export default function PromoModal({ language }: PromoModalProps) {
  const [open, setOpen] = useState(false);

  const dismiss = useCallback(() => {
    if (!CONFIG.devMode) {
      window.sessionStorage.setItem(DISMISS_KEY, "1");
    }
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!CONFIG.enabled) {
      return;
    }

    if (!CONFIG.devMode && window.sessionStorage.getItem(DISMISS_KEY) === "1") {
      return;
    }

    const timer = window.setTimeout(() => {
      setOpen(true);
    }, OPEN_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dismiss();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, dismiss]);

  if (!CONFIG.enabled || !open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6 backdrop-blur-sm"
      onClick={dismiss}
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-bg-raised/95 p-8 shadow-2xl backdrop-blur-xl md:p-10"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="aura absolute -top-16 right-[-25%] h-56 w-56 rounded-full bg-accent/25 blur-[90px]" />
        </div>

        <button
          type="button"
          aria-label={language === "es" ? "Cerrar" : "Dismiss"}
          onClick={dismiss}
          className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-ink-dim transition hover:bg-white/10 hover:text-ink"
        >
          <X className="h-4 w-4" />
        </button>

        <p className="relative text-xs font-bold uppercase tracking-[0.28em] text-accent-bright">
          {language === "es" ? OFFER.eyebrowEs : OFFER.eyebrow}
        </p>
        <h2 className="text-balance relative mt-4 font-[family-name:var(--font-display)] text-3xl font-extrabold leading-[1.05] tracking-tight text-ink">
          {language === "es" ? OFFER.titleEs : OFFER.title}
        </h2>
        <p className="relative mt-4 text-sm leading-7 text-ink-dim">
          {language === "es" ? OFFER.bodyEs : OFFER.body}
        </p>

        <Link
          href="/#contact"
          onClick={dismiss}
          className="relative mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-accent/90"
        >
          {language === "es" ? OFFER.ctaEs : OFFER.cta}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
