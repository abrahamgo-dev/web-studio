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
    window.sessionStorage.setItem(DISMISS_KEY, "1");
    setOpen(false);
  }, []);

  useEffect(() => {
    if (window.sessionStorage.getItem(DISMISS_KEY) === "1") {
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

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6 backdrop-blur-sm"
      onClick={dismiss}
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-[2rem] bg-gradient-to-br from-accent via-accent to-lavender p-8 shadow-2xl md:p-10"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label={language === "es" ? "Cerrar" : "Dismiss"}
          onClick={dismiss}
          className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/10 text-black transition hover:bg-black/20"
        >
          <X className="h-4 w-4" />
        </button>

        <p className="text-xs font-bold uppercase tracking-[0.28em] text-black/70">
          {language === "es" ? OFFER.eyebrowEs : OFFER.eyebrow}
        </p>
        <h2 className="text-balance mt-4 font-[family-name:var(--font-display)] text-3xl font-extrabold leading-[1.05] tracking-tight text-black">
          {language === "es" ? OFFER.titleEs : OFFER.title}
        </h2>
        <p className="mt-4 text-sm leading-7 text-black/70">
          {language === "es" ? OFFER.bodyEs : OFFER.body}
        </p>

        <Link
          href="/#contact"
          onClick={dismiss}
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-black/85"
        >
          {language === "es" ? OFFER.ctaEs : OFFER.cta}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
