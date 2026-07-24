"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

type Language = "en" | "es";

interface AvailabilityBadgeProps {
  language: Language;
}

const DISMISS_KEY = "availabilityBadgeDismissed";

function getQuarterLabel(language: Language) {
  const now = new Date();
  const quarter = Math.floor(now.getMonth() / 3) + 1;
  const year = now.getFullYear();
  return language === "es" ? `T${quarter} ${year}` : `Q${quarter} ${year}`;
}

export default function AvailabilityBadge({ language }: AvailabilityBadgeProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem(DISMISS_KEY) !== "1") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
    }
  }, []);

  if (!visible) {
    return null;
  }

  const label =
    language === "es"
      ? `Abriendo espacio para ${getQuarterLabel(language)}`
      : `Booking new projects for ${getQuarterLabel(language)}`;

  const dismiss = () => {
    window.sessionStorage.setItem(DISMISS_KEY, "1");
    setVisible(false);
  };

  return (
    <div className="fixed bottom-5 left-5 z-30 hidden sm:block">
      <div className="card-surface flex items-center gap-2 rounded-full py-2 pl-4 pr-2 shadow-lg">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="aura absolute inline-flex h-full w-full rounded-full bg-accent-bright" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-bright" />
        </span>
        <Link
          href="/#contact"
          className="text-sm font-medium text-ink transition hover:text-accent-bright"
        >
          {label}
        </Link>
        <button
          type="button"
          aria-label={language === "es" ? "Cerrar" : "Dismiss"}
          onClick={dismiss}
          className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-ink-dim transition hover:bg-white/10 hover:text-ink"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
