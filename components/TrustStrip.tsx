"use client";

import { Clock, MessageCircle, RefreshCw, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";

type Language = "en" | "es";

interface TrustStripProps {
  language: Language;
}

const ITEMS = [
  {
    icon: ShieldCheck,
    label: "Fixed-price projects",
    labelEs: "Proyectos a precio fijo",
  },
  {
    icon: MessageCircle,
    label: "Direct line to your builder",
    labelEs: "Línea directa con quien construye tu sitio",
  },
  {
    icon: RefreshCw,
    label: "Care plan included after launch",
    labelEs: "Plan de cuidado incluido tras el lanzamiento",
  },
  {
    icon: Clock,
    label: "Reply within 1 business day",
    labelEs: "Respuesta en 1 día hábil",
  },
];

export default function TrustStrip({ language }: TrustStripProps) {
  return (
    <section className="section-surface border-b border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-8 md:px-10">
        <Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {ITEMS.map(({ icon: Icon, label, labelEs }) => (
              <div
                key={label}
                className="flex items-center gap-3 text-sm text-ink-dim"
              >
                <Icon
                  className="h-4.5 w-4.5 shrink-0 text-accent-bright"
                  strokeWidth={1.75}
                />
                <span>{language === "es" ? labelEs : label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
