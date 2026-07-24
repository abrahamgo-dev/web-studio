"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { useSiteChrome } from "@/lib/useSiteChrome";
import type { Post } from "@/lib/posts";

interface BlogIndexProps {
  posts: Post[];
}

function formatDate(dateStr: string, language: "en" | "es") {
  const date = new Date(`${dateStr}T00:00:00`);
  return date.toLocaleDateString(language === "es" ? "es-ES" : "en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogIndex({ posts }: BlogIndexProps) {
  const { language, theme, mounted, toggleLanguage, toggleTheme } =
    useSiteChrome();

  if (!mounted) {
    return <div className="min-h-screen bg-bg" />;
  }

  const copy =
    language === "es"
      ? {
          eyebrow: "Notas del estudio",
          title: "Notas cortas, cuando hay algo que vale la pena decir.",
          intro:
            "No publicamos por publicar. Cada nota sale cuando aprendemos algo específico que le sirve a un negocio pequeño construyendo o cuidando su sitio.",
          readMore: "Leer",
        }
      : {
          eyebrow: "Notes from the studio",
          title: "Short notes, published only when there's something to say.",
          intro:
            "We don't post on a schedule for its own sake. Each note goes up when we've learned something specific that's useful to a small business building or caring for a site.",
          readMore: "Read",
        };

  return (
    <div className="min-h-screen bg-bg">
      <Nav
        language={language}
        onToggleLanguage={toggleLanguage}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main>
        <section className="relative border-b border-white/10">
          <div className="mx-auto max-w-4xl px-6 pt-20 pb-16 md:px-10 md:pt-28 md:pb-20">
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-accent-bright">
                {copy.eyebrow}
              </p>
              <h1 className="text-balance mt-6 font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.02] tracking-tight text-ink">
                {copy.title}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-ink-dim">
                {copy.intro}
              </p>
            </Reveal>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
            <div className="flex flex-col divide-y divide-white/10 border-t border-white/10">
              {posts.map((post, index) => (
                <Reveal key={post.slug} delayMs={Math.min(index * 60, 300)}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col gap-3 py-8 transition hover:pl-2 md:flex-row md:items-baseline md:justify-between md:gap-8"
                  >
                    <div>
                      <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-accent-bright">
                        <span>
                          {language === "es" ? post.tagEs : post.tag}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-accent-bright/60" />
                        <span className="text-ink-dim">
                          {formatDate(post.date, language)}
                        </span>
                      </div>
                      <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold text-ink">
                        {language === "es" ? post.titleEs : post.title}
                      </h2>
                      <p className="mt-2 max-w-xl text-sm leading-7 text-ink-dim">
                        {language === "es" ? post.excerptEs : post.excerpt}
                      </p>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-ink transition group-hover:text-accent-bright">
                      {copy.readMore}
                      <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer language={language} />
    </div>
  );
}
