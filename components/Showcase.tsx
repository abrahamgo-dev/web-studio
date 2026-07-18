"use client";

import Image from "next/image";
import { Layers3, Sparkles, WandSparkles } from "lucide-react";

type Language = "en" | "es";

interface ShowcaseProps {
  language: Language;
}

export default function Showcase({ language }: ShowcaseProps) {
  const content =
    language === "es"
      ? {
          eyebrow: "Editorial showcase",
          title: "Una sola pieza que demuestra el nivel.",
          intro:
            "Esta sección reúne textura, imagen y movimiento en un bloque más editorial y sofisticado, sin depender de demasiados efectos dispersos.",
          cardTitle: "Materiality",
          cardText:
            "Aire, profundidad y una paleta más neutra que se siente orgánica, intensa y premium.",
          statTitle: "Visual story",
          statText:
            "Un bloque premium con textura sutil, movimiento delicado y una presencia más refinada.",
          galleryTitle: "Imágenes de alto impacto",
          galleryText:
            "Cada panel funciona como una pieza editorial: limpio, brillante y pensado para impresionar.",
        }
      : {
          eyebrow: "Editorial showcase",
          title: "One dedicated showcase, done beautifully.",
          intro:
            "Instead of scattering effects across the page, this section concentrates the visual energy into a more editorial and elevated experience.",
          cardTitle: "Materiality",
          cardText:
            "Air, depth, and a neutral palette that feels sculptural, calm, and premium.",
          statTitle: "Visual story",
          statText:
            "A premium block with subtle motion, tactile texture, and a more refined sense of presence.",
          galleryTitle: "High-impact imagery",
          galleryText:
            "Each panel reads like a premium editorial frame: clean, luminous, and crafted to impress.",
        };

  return (
    <section id="showcase" className="relative border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="card-surface rounded-[2rem] p-8 md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.28em] text-ink-dim">
              <Sparkles className="h-3.5 w-3.5 text-accent-bright" />
              {content.eyebrow}
            </div>

            <h2 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {content.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-ink-dim">
              {content.intro}
            </p>

            <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-black/10 p-6 backdrop-blur-xl">
              <div className="metallic-gradient group relative overflow-hidden rounded-[1.5rem] p-8 transition duration-500 hover:-translate-y-1">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.38),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.18),transparent_38%)]" />
                <div className="absolute inset-0 bg-[url('/vinicius-amnx-amano-OHPdgstNFGs-unsplash.jpg')] bg-cover bg-center opacity-20 transition duration-500 group-hover:scale-105" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-white/80">
                        {content.cardTitle}
                      </p>
                      <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
                        {content.cardTitle}
                      </h3>
                    </div>
                    <div className="rounded-full border border-white/20 bg-white/10 p-3 text-white">
                      <WandSparkles className="h-5 w-5" />
                    </div>
                  </div>

                  <p className="mt-6 max-w-xl text-sm leading-7 text-white/80">
                    {content.cardText}
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {[
                      { label: "Motion", value: "01" },
                      { label: "Texture", value: "02" },
                      { label: "Depth", value: "03" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-white/20 bg-white/10 px-4 py-4 text-left backdrop-blur"
                      >
                        <p className="text-xs uppercase tracking-[0.28em] text-white/70">
                          {item.label}
                        </p>
                        <p className="mt-2 text-xl font-semibold text-white">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="card-surface overflow-hidden rounded-[2rem] border-white/10">
              <div className="group relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/egor-litvinov-Epjx67LMVqY-unsplash.jpg"
                  alt="Abstract premium product concept"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-[0.95fr_1.05fr]">
              <div className="card-surface rounded-[2rem] p-6">
                <div className="flex items-center gap-2 text-accent-bright">
                  <Layers3 className="h-4 w-4" />
                  <span className="text-sm font-medium uppercase tracking-[0.28em]">
                    {content.statTitle}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-ink-dim">
                  {content.statText}
                </p>
              </div>
              <div className="card-surface rounded-[2rem] p-6">
                <div className="group aspect-[4/3] overflow-hidden rounded-[1.2rem] border border-white/10">
                  <Image
                    src="/conrad-crawford-EcWBgAdRqrQ-unsplash.jpg"
                    alt="Premium editorial composition"
                    width={600}
                    height={450}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <div className="card-surface rounded-[2rem] p-8">
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-ink">
                {content.galleryTitle}
              </h3>
              <p className="mt-3 text-sm leading-7 text-ink-dim">
                {content.galleryText}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="group overflow-hidden rounded-[1.25rem] border border-white/10">
                  <Image
                    src="/vinicius-amnx-amano-OHPdgstNFGs-unsplash.jpg"
                    alt="Luxury scene mockup"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="rounded-[1.25rem] border border-white/10 bg-gradient-to-br from-accent/15 via-white/5 to-accent/25 p-6">
                  <p className="text-sm uppercase tracking-[0.28em] text-accent-bright">
                    {language === "es" ? "Detalle" : "Detail"}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-ink-dim">
                    {language === "es"
                      ? "Materiales de lujo, contraste elegante y una sensación de exclusividad en cada bloque."
                      : "Luxury materials, elegant contrast, and a sense of exclusivity in every block."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
