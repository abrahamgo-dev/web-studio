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
  /** True until this is swapped for a real client project. */
  isExample: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: "loom-and-co",
    name: "Loom & Co.",
    year: "2026",
    kind: "Boutique retail",
    kindEs: "Retail boutique",
    summary: "A single-page lookbook site that replaced a cluttered store template.",
    summaryEs: "Un sitio de una sola página que reemplazó un template de tienda saturado.",
    problem:
      "The old site was a generic e-commerce template with more navigation than products, and customers couldn't tell what the shop actually sold from the homepage.",
    problemEs:
      "El sitio anterior era un template de e-commerce genérico con más navegación que productos, y los clientes no podían saber qué vendía la tienda desde el inicio.",
    approach:
      "Cut the site down to one elegant scroll: a handful of collections, real product photography, and a single clear way to get in touch — no account creation, no cart abandoned mid-checkout.",
    approachEs:
      "Reducimos el sitio a un solo scroll elegante: unas pocas colecciones, fotografía real de producto y una sola forma clara de contactar — sin crear cuenta, sin carritos abandonados.",
    result:
      "A site that reads as a lookbook first and a store second, matching how the brand actually wants to be seen.",
    resultEs:
      "Un sitio que se lee primero como lookbook y después como tienda, alineado con cómo la marca quiere presentarse.",
    services: ["Design", "Build", "Care plan"],
    servicesEs: ["Diseño", "Construcción", "Plan de cuidado"],
    image: "/arch-geometric-lines.jpg",
    isExample: true,
  },
  {
    slug: "halcyon-health",
    name: "Halcyon Health",
    year: "2026",
    kind: "Wellness studio",
    kindEs: "Estudio de bienestar",
    summary: "A marketing site with booking built in, so calls stopped happening.",
    summaryEs: "Un sitio de marketing con reservas integradas, para dejar de recibir llamadas.",
    problem:
      "New clients were calling to book sessions because the old site only linked out to a third-party scheduler that didn't match the brand.",
    problemEs:
      "Los clientes nuevos llamaban para reservar sesiones porque el sitio anterior solo enlazaba a un sistema de citas externo que no encajaba con la marca.",
    approach:
      "Built the booking flow directly into the site's own design language, alongside a calmer, more editorial homepage that matches the in-studio experience.",
    approachEs:
      "Integramos el flujo de reservas directamente en el diseño del sitio, junto a una página de inicio más calmada y editorial que refleja la experiencia en el estudio.",
    result:
      "Bookings now happen without a phone call, and the site feels like a continuation of the studio instead of a separate tool bolted on.",
    resultEs:
      "Las reservas ahora ocurren sin llamada, y el sitio se siente como una continuación del estudio en vez de una herramienta aparte.",
    services: ["Design", "Build", "Booking integration", "Care plan"],
    servicesEs: ["Diseño", "Construcción", "Integración de reservas", "Plan de cuidado"],
    image: "/arch-skyline-silhouette.jpg",
    isExample: true,
  },
  {
    slug: "marlow-and-row",
    name: "Marlow & Row",
    year: "2025",
    kind: "Professional services",
    kindEs: "Servicios profesionales",
    summary: "A quiet, credible site for a two-partner consulting practice.",
    summaryEs: "Un sitio sobrio y creíble para una práctica de consultoría de dos socios.",
    problem:
      "Prospective clients were googling the firm before a first call and finding nothing — no site at all, just a LinkedIn page.",
    problemEs:
      "Los clientes potenciales buscaban la firma en Google antes de una primera llamada y no encontraban nada — ningún sitio, solo una página de LinkedIn.",
    approach:
      "Kept it to four sections: what the firm does, who's behind it, how engagements work, and how to reach them — nothing that needed a CMS to maintain.",
    approachEs:
      "Lo redujimos a cuatro secciones: qué hace la firma, quién está detrás, cómo funcionan los proyectos y cómo contactarlos — nada que requiriera un CMS para mantener.",
    result:
      "A site that answers 'are these people legitimate' in the first five seconds, which was the entire brief.",
    resultEs:
      "Un sitio que responde '¿es gente seria?' en los primeros cinco segundos, que era exactamente el encargo.",
    services: ["Design", "Build", "Care plan"],
    servicesEs: ["Diseño", "Construcción", "Plan de cuidado"],
    image: "/arch-geometric-bw.jpg",
    isExample: true,
  },
  {
    slug: "rosewood-table",
    name: "Rosewood Table",
    year: "2025",
    kind: "Restaurant",
    kindEs: "Restaurante",
    summary: "A menu-first site that finally matched the room.",
    summaryEs: "Un sitio centrado en el menú que finalmente estuvo a la altura del lugar.",
    problem:
      "The restaurant's site was a PDF menu linked from a single splash page, and it hadn't been updated in over a year.",
    problemEs:
      "El sitio del restaurante era un menú en PDF enlazado desde una sola página, y no se había actualizado en más de un año.",
    approach:
      "Built a site the owner can update seasonally without calling anyone, with the menu as an actual page instead of a downloadable file, and reservations one tap away.",
    approachEs:
      "Construimos un sitio que el dueño puede actualizar por temporada sin llamar a nadie, con el menú como página real en vez de un archivo descargable, y reservas a un toque de distancia.",
    result:
      "The site now gets updated the same week the menu changes, instead of months later.",
    resultEs:
      "El sitio ahora se actualiza la misma semana que cambia el menú, en vez de meses después.",
    services: ["Design", "Build", "Booking integration", "Care plan"],
    servicesEs: ["Diseño", "Construcción", "Integración de reservas", "Plan de cuidado"],
    image: "/arch-skyline-dusk.jpg",
    isExample: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
