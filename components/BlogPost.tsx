"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useSiteChrome } from "@/lib/useSiteChrome";
import type { Post } from "@/lib/posts";

interface BlogPostProps {
  post: Post;
}

function formatDate(dateStr: string, language: "en" | "es") {
  const date = new Date(`${dateStr}T00:00:00`);
  return date.toLocaleDateString(language === "es" ? "es-ES" : "en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPost({ post }: BlogPostProps) {
  const { language, theme, mounted, toggleLanguage, toggleTheme } =
    useSiteChrome();

  if (!mounted) {
    return <div className="min-h-screen bg-bg" />;
  }

  const copy =
    language === "es"
      ? {
          back: "Notas del estudio",
          ctaTitle: "¿Tu sitio necesita este tipo de atención?",
          ctaText: "Cuéntanos qué tienes hoy y hacia dónde quieres llegar.",
          ctaButton: "Empezar un proyecto",
        }
      : {
          back: "Notes from the studio",
          ctaTitle: "Does your site need this kind of attention?",
          ctaText: "Tell us what you have today and where you want to end up.",
          ctaButton: "Start a project",
        };

  const title = language === "es" ? post.titleEs : post.title;
  const body = language === "es" ? post.bodyEs : post.body;
  const paragraphs = body.split("\n\n");

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
          <div className="mx-auto max-w-3xl px-6 pt-16 pb-16 md:px-10 md:pt-24 md:pb-20">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-dim transition hover:text-ink"
            >
              <ArrowLeft className="h-4 w-4" />
              {copy.back}
            </Link>

            <div className="mt-8 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-accent-bright">
              <span>{language === "es" ? post.tagEs : post.tag}</span>
              <span className="h-1 w-1 rounded-full bg-accent-bright/60" />
              <span className="text-ink-dim">
                {formatDate(post.date, language)}
              </span>
            </div>

            <h1 className="text-balance mt-6 font-[family-name:var(--font-display)] text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-ink">
              {title}
            </h1>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-20">
            <div className="flex flex-col gap-6">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base leading-8 text-ink-dim"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center md:px-10 md:py-32">
            <h2 className="text-balance font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
              {copy.ctaTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-ink-dim">
              {copy.ctaText}
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(111,140,255,0.24)] transition hover:bg-accent/90"
            >
              {copy.ctaButton}
            </Link>
          </div>
        </section>
      </main>
      <Footer language={language} />
    </div>
  );
}
