"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Why from "@/components/Why";
import Work from "@/components/Work";
import Showcase from "@/components/Showcase";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useSiteChrome } from "@/lib/useSiteChrome";

export default function Home() {
  const { language, theme, mounted, toggleLanguage, toggleTheme } =
    useSiteChrome();

  if (!mounted) {
    return <div className="min-h-screen bg-bg" />;
  }

  return (
    <div className="min-h-screen bg-bg">
      <Nav
        language={language}
        onToggleLanguage={toggleLanguage}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main>
        <Hero language={language} />
        <Services language={language} />
        <Why language={language} />
        <Showcase language={language} />
        <Work language={language} />
        <Process language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}
