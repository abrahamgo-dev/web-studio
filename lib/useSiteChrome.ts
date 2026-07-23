"use client";

import { useEffect, useState } from "react";

export type Language = "en" | "es";
export type ThemeMode = "dark" | "light";

export function useSiteChrome() {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "es";
    }

    const savedLanguage = window.localStorage.getItem("language");
    return savedLanguage === "en" || savedLanguage === "es"
      ? savedLanguage
      : "es";
  });
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    return savedTheme === "dark" || savedTheme === "light"
      ? savedTheme
      : prefersDark
        ? "dark"
        : "light";
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Hydration-safe mount flag: no way to detect "mounted" other than an effect.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
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

  return { language, theme, mounted, toggleLanguage, toggleTheme };
}
