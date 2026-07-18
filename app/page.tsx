"use client";

import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Why from "@/components/Why";
import Work from "@/components/Work";
import Showcase from "@/components/Showcase";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

type Language = "en" | "es";
type ThemeMode = "dark" | "light";

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<ThemeMode>("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const savedLanguage = window.localStorage.getItem("language");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
    } else {
      setTheme(prefersDark ? "dark" : "light");
    }

    if (savedLanguage === "en" || savedLanguage === "es") {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem("language", language);
  }, [language]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  const toggleLanguage = () => {
    setLanguage((current) => (current === "en" ? "es" : "en"));
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
