"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { POSTS } from "@/lib/posts";

type Language = "en" | "es";

interface BlogProps {
  language: Language;
}

function formatDate(dateStr: string, language: Language) {
  const date = new Date(`${dateStr}T00:00:00`);
  return date.toLocaleDateString(language === "es" ? "es-ES" : "en-US", {
    month: "long",
    year: "numeric",
  });
}

export default function Blog({ language }: BlogProps) {
  const posts = POSTS.slice(0, 3);

  if (posts.length === 0) {
    return null;
  }

  const heading =
    language === "es" ? "Notas del estudio" : "Notes from the studio";
  const intro =
    language === "es"
      ? "Ideas cortas sobre diseño, mantenimiento y lo que realmente mueve la aguja en el sitio de un negocio pequeño."
      : "Short, occasional notes on design, upkeep, and what actually moves the needle for a small business site.";
  const viewAll = language === "es" ? "Ver todas las notas" : "View all notes";
  const readMore = language === "es" ? "Leer" : "Read";

  return (
    <section id="blog" className="relative border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-36">
        <Reveal>
          <div className="mb-14 flex flex-col gap-4 md:mb-20 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-md font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
              {heading}
            </h2>
            <p className="max-w-sm text-sm text-ink-dim md:text-right">
              {intro}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delayMs={index * 90}>
              <Link
                href={`/blog/${post.slug}`}
                className="card-surface group flex h-full flex-col rounded-[2rem] p-8"
              >
                <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-accent-bright">
                  <span>{language === "es" ? post.tagEs : post.tag}</span>
                  <span className="h-1 w-1 rounded-full bg-accent-bright/60" />
                  <span className="text-ink-dim">
                    {formatDate(post.date, language)}
                  </span>
                </div>
                <h3 className="mt-6 font-[family-name:var(--font-display)] text-xl font-semibold text-ink">
                  {language === "es" ? post.titleEs : post.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-ink-dim">
                  {language === "es" ? post.excerptEs : post.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition group-hover:text-accent-bright">
                  {readMore}
                  <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={200}>
          <div className="mt-10 flex justify-center md:justify-start">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-ink transition hover:border-accent-bright/60 hover:text-accent-bright"
            >
              {viewAll}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
