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
  /** Client's Instagram profile, shown as a link on the case study page. */
  instagramUrl?: string;
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
  {
    slug: "once-fc",
    name: "Once FC",
    year: "2026",
    kind: "Sports & fitness training",
    kindEs: "Entrenamiento deportivo",
    summary:
      "A booking-first site for an adult soccer training club, so signing up stops happening over WhatsApp DMs.",
    summaryEs:
      "Un sitio centrado en reservas para un club de entrenamiento de fútbol para adultos, para dejar de inscribirse por WhatsApp.",
    problem:
      "Once FC runs six different training levels across five cities, but nothing explained the system to a new player — figuring out which level, city, and schedule fit meant messaging around on WhatsApp or Instagram before ever setting foot on the field.",
    problemEs:
      "Once FC maneja seis niveles de entrenamiento en cinco ciudades, pero nada explicaba el sistema a un jugador nuevo — saber qué nivel, ciudad y horario le quedaba significaba escribir por WhatsApp o Instagram antes de siquiera pisar la cancha.",
    approach:
      "Built a site around self-selection: a clear level system with schedules for each one, a method section explaining what separates it from casual pickup soccer, and a per-city landing page with a free trial-session form instead of one generic contact box.",
    approachEs:
      "Construimos un sitio pensado para que el jugador se ubique solo: un sistema de niveles claro con horarios para cada uno, una sección de método que explica qué lo distingue de una cascarita, y una página por ciudad con un formulario de sesión de prueba gratuita en vez de un solo contacto genérico.",
    result:
      "A prospective player can now find their city, pick a level based on schedule and intensity, and request a free trial session in under two minutes — with a reply promised inside 24 hours instead of an open-ended DM.",
    resultEs:
      "Un jugador nuevo ahora puede encontrar su ciudad, elegir un nivel según horario e intensidad, y pedir una sesión de prueba gratuita en menos de dos minutos — con respuesta prometida en 24 horas en vez de un mensaje directo sin fecha.",
    services: ["Design", "Build", "Care plan"],
    servicesEs: ["Diseño", "Construcción", "Plan de cuidado"],
    image: "/once-fc/once-fc-1.png",
    url: "https://www.once-fc.com",
    instagramUrl: "https://www.instagram.com/oncefcmx/",
    isExample: false,
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
