"use client";

type Language = "en" | "es";

interface MarqueeStripProps {
  language: Language;
}

export default function MarqueeStrip({ language }: MarqueeStripProps) {
  const items =
    language === "es"
      ? [
          "Diseño que transmite confianza",
          "Mensajes claros que venden",
          "Experiencia premium en móvil",
          "Sitios rápidos y elegantes",
          "Marca sólida en cada pantalla",
        ]
      : [
          "Design that builds trust",
          "Clear copy that sells",
          "Premium mobile experience",
          "Fast, elegant websites",
          "A strong brand on every screen",
        ];

  const repeatedItems = [...items, ...items];

  return (
    <div className="border-b border-white/10 bg-black text-white">
      <div className="marquee-fade overflow-hidden">
        <div className="marquee-track flex items-center gap-4 px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] md:text-[0.78rem]">
          {repeatedItems.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="flex items-center gap-4 whitespace-nowrap"
            >
              <span>{item}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
