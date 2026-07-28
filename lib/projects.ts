export interface Project {
  slug: string;
  name: string;
  year: string;
  kind: string;
  kindEs: string;
  summary: string;
  summaryEs: string;
  problem: string;
  problemEs: string;
  approach: string;
  approachEs: string;
  result: string;
  resultEs: string;
  services: string[];
  servicesEs: string[];
  image: string;
  /** Live site URL, shown as a link on the case study page. Omit for template examples. */
  url?: string;
  /** True until this is swapped for a real client project. */
  isExample: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: "apaoil",
    name: "ApaOil",
    year: "2026",
    kind: "Industrial B2B / lubricant import",
    kindEs: "B2B industrial / importación de lubricantes",
    summary:
      "A B2B catalog site that turns a multi-brand lubricant import business into one place to request a quote.",
    summaryEs:
      "Un sitio B2B que convierte un negocio de importación de lubricantes multimarca en un solo lugar para cotizar.",
    problem:
      "APAOIL sources premium lubricant brands from a dozen international manufacturers, but buyers had no single place to see the catalog, understand consolidated order minimums, or request a quote — every relationship ran through email and spreadsheets.",
    problemEs:
      "APAOIL importa marcas de lubricantes premium de una docena de fabricantes internacionales, pero los compradores no tenían un solo lugar para ver el catálogo, entender los mínimos de pedido consolidado o pedir una cotización — todo se manejaba por correo y hojas de cálculo.",
    approach:
      "Built a site structured around the actual buying process: a multi-brand portfolio, a dedicated page for their in-house German Gold line, and a quote-request flow built for consolidated B2B orders — not a generic product-listing template.",
    approachEs:
      "Construimos un sitio estructurado alrededor del proceso real de compra: un portafolio multimarca, una página dedicada a su línea propia German Gold, y un flujo de cotización pensado para pedidos B2B consolidados — no un template genérico de listado de productos.",
    result:
      "Prospective buyers can now browse APAOIL's full portfolio — 12+ international brands — and submit a quote request in minutes, with order minimums and lead times presented up front instead of negotiated cold over email.",
    resultEs:
      "Los compradores ahora pueden navegar el portafolio completo de APAOIL — más de 12 marcas internacionales — y enviar una cotización en minutos, con mínimos de pedido y tiempos de entrega claros desde el inicio en vez de negociarse en frío por correo.",
    services: ["Design", "Build", "Care plan"],
    servicesEs: ["Diseño", "Construcción", "Plan de cuidado"],
    image: "/apaoil/apaoil-2.png",
    url: "https://www.apaoil.com",
    isExample: false,
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
