"use client";

import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  blur?: boolean;
}

export default function Reveal({
  children,
  className,
  delayMs = 0,
  blur = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transitionProperty: blur ? "opacity, transform, filter" : "opacity, transform",
        transitionDuration: blur ? "1000ms" : "700ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delayMs}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${blur ? 18 : 28}px)`,
        filter: blur ? (visible ? "blur(0px)" : "blur(14px)") : undefined,
      }}
    >
      {children}
    </div>
  );
}
