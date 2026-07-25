import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export interface LandingPagePoint {
  title: string;
  titleEs: string;
  body: string;
  bodyEs: string;
}

export interface LandingPage {
  slug: string;
  projectSlug: string;
  image: string;
  industry: string;
  industryEs: string;
  metaTitle: string;
  metaTitleEs: string;
  metaDescription: string;
  metaDescriptionEs: string;
  eyebrow: string;
  eyebrowEs: string;
  title: string;
  titleEs: string;
  intro: string;
  introEs: string;
  painPoints: LandingPagePoint[];
  approachPoints: LandingPagePoint[];
  caseStudyLabel: string;
  caseStudyLabelEs: string;
}

export const LANDING_PAGES: LandingPage[] = [
  {
    slug: "website-design-for-restaurants",
    projectSlug: "rosewood-table",
    image: "/arch-skyline-dusk.jpg",
    industry: "Restaurants",
    industryEs: "Restaurantes",
    metaTitle: "Website Design for Restaurants — Fen Web Studio",
    metaTitleEs: "Diseño de Sitios Web para Restaurantes — Fen Web Studio",
    metaDescription:
      "Menu-first restaurant websites that are easy to update and easy to book from — built once, cared for every month. See how we replaced a stale PDF menu with a real site.",
    metaDescriptionEs:
      "Sitios web para restaurantes centrados en el menú, fáciles de actualizar y reservar — construidos una vez, cuidados cada mes. Mira cómo reemplazamos un menú en PDF por un sitio real.",
    eyebrow: "For restaurants and cafés",
    eyebrowEs: "Para restaurantes y cafés",
    title: "A website that keeps up with your menu, not the other way around.",
    titleEs: "Un sitio web que se actualiza con tu menú, no al revés.",
    intro:
      "Most restaurant sites are a splash page linking to a PDF nobody bothers to open on a phone. We build the menu as an actual page — readable, current, and easy for you to update the same week a dish changes — with reservations one tap away instead of buried in a footer.",
    introEs:
      "La mayoría de los sitios de restaurantes son una página de bienvenida que enlaza a un PDF que nadie abre bien desde el teléfono. Construimos el menú como una página real — legible, actualizada, y fácil de modificar la misma semana que cambia un platillo — con reservas a un toque de distancia en vez de escondidas en el pie de página.",
    painPoints: [
      {
        title: "The menu is a PDF nobody can read on a phone",
        titleEs: "El menú es un PDF que nadie puede leer bien en el celular",
        body: "Tiny text, sideways scrolling, and a file that's months out of date because updating it means calling whoever built the site.",
        bodyEs: "Texto diminuto, scroll horizontal, y un archivo desactualizado por meses porque cambiarlo significa llamar a quien hizo el sitio.",
      },
      {
        title: "Reservations happen by phone during service",
        titleEs: "Las reservas se hacen por teléfono durante el servicio",
        body: "Every call during a dinner rush is a distraction your staff doesn't need, and a guest who could've booked in ten seconds online.",
        bodyEs: "Cada llamada durante la hora pico es una distracción que tu equipo no necesita, y un cliente que pudo reservar en línea en diez segundos.",
      },
      {
        title: "The photos don't match the room",
        titleEs: "Las fotos no reflejan el lugar",
        body: "A stock-photo hero image or a decade-old interior shot undersells a space that looks great in person.",
        bodyEs: "Una imagen genérica de stock o una foto del interior de hace diez años no le hace justicia a un lugar que se ve muy bien en persona.",
      },
    ],
    approachPoints: [
      {
        title: "Menu as a real page, not a download",
        titleEs: "Menú como página real, no como descarga",
        body: "You edit it like a document — no developer required — and it renders cleanly on every phone.",
        bodyEs: "Lo editas como un documento — sin necesitar desarrollador — y se ve bien en cualquier celular.",
      },
      {
        title: "Booking built into the design",
        titleEs: "Reservas integradas al diseño",
        body: "Reservations live inside your site's own look, not a mismatched third-party widget that breaks the mood.",
        bodyEs: "Las reservas viven dentro del diseño de tu propio sitio, no en un widget externo que no combina y rompe el ambiente.",
      },
      {
        title: "A monthly care plan",
        titleEs: "Un plan de cuidado mensual",
        body: "Seasonal menu swaps, new photography, small copy edits — handled without another agency invoice.",
        bodyEs: "Cambios de menú por temporada, fotos nuevas, ajustes de texto — resueltos sin otra factura de agencia.",
      },
    ],
    caseStudyLabel: "See how we did this for Rosewood Table",
    caseStudyLabelEs: "Mira cómo lo hicimos para Rosewood Table",
  },
  {
    slug: "website-design-for-wellness-studios",
    projectSlug: "halcyon-health",
    image: "/arch-skyline-silhouette.jpg",
    industry: "Wellness Studios",
    industryEs: "Estudios de Bienestar",
    metaTitle: "Website Design for Wellness Studios — Fen Web Studio",
    metaTitleEs: "Diseño de Sitios Web para Estudios de Bienestar — Fen Web Studio",
    metaDescription:
      "Calm, editorial websites for wellness studios with booking built in — so new clients stop calling to schedule and start booking online instead.",
    metaDescriptionEs:
      "Sitios web calmados y editoriales para estudios de bienestar con reservas integradas — para que los clientes nuevos dejen de llamar y reserven en línea.",
    eyebrow: "For studios, spas, and practitioners",
    eyebrowEs: "Para estudios, spas y profesionales",
    title: "A site as calm as the space it represents.",
    titleEs: "Un sitio tan tranquilo como el espacio que representa.",
    intro:
      "A wellness brand lives or dies on trust and tone before a client ever walks in. We build sites that read as an extension of the studio itself — with booking woven into the design instead of bolted on as a separate, brand-mismatched tool.",
    introEs:
      "Una marca de bienestar depende de la confianza y el tono antes de que un cliente cruce la puerta. Construimos sitios que se sienten como una extensión del estudio mismo — con reservas integradas al diseño en vez de una herramienta aparte que no combina con la marca.",
    painPoints: [
      {
        title: "Booking links out to a mismatched third-party tool",
        titleEs: "Las reservas enlazan a una herramienta externa que no combina",
        body: "The calm, considered feeling of the site breaks the moment someone clicks 'Book' and lands somewhere generic.",
        bodyEs: "La sensación calmada y cuidada del sitio se rompe en el momento en que alguien hace clic en 'Reservar' y llega a algo genérico.",
      },
      {
        title: "New clients still call to ask basic questions",
        titleEs: "Los clientes nuevos siguen llamando para preguntas básicas",
        body: "Pricing, what to expect in a first session, how to prepare — if it's not clearly on the site, it becomes a phone call.",
        bodyEs: "Precios, qué esperar en la primera sesión, cómo prepararse — si no está claro en el sitio, se convierte en una llamada.",
      },
      {
        title: "The design feels clinical instead of calming",
        titleEs: "El diseño se siente clínico en vez de calmado",
        body: "A generic template undersells a practice built around care, attention, and a specific feeling.",
        bodyEs: "Un template genérico no le hace justicia a una práctica construida sobre cuidado, atención y una sensación específica.",
      },
    ],
    approachPoints: [
      {
        title: "Booking in the site's own visual language",
        titleEs: "Reservas en el propio lenguaje visual del sitio",
        body: "No jarring redirect to a third-party scheduler — the flow looks and feels like the rest of the brand.",
        bodyEs: "Sin redirección brusca a un sistema externo — el flujo se ve y se siente como el resto de la marca.",
      },
      {
        title: "An editorial, unhurried homepage",
        titleEs: "Una página de inicio editorial y sin prisa",
        body: "Fewer, better sections that let the space and the practice speak for themselves.",
        bodyEs: "Menos secciones, pero mejores, que dejan que el espacio y la práctica hablen por sí mismos.",
      },
      {
        title: "A monthly care plan",
        titleEs: "Un plan de cuidado mensual",
        body: "New offerings, updated bios, seasonal promotions — kept current without you touching any code.",
        bodyEs: "Nuevos servicios, biografías actualizadas, promociones de temporada — al día sin que toques ningún código.",
      },
    ],
    caseStudyLabel: "See how we did this for Halcyon Health",
    caseStudyLabelEs: "Mira cómo lo hicimos para Halcyon Health",
  },
  {
    slug: "website-design-for-boutiques",
    projectSlug: "loom-and-co",
    image: "/arch-geometric-lines.jpg",
    industry: "Boutiques & Retail",
    industryEs: "Boutiques y Retail",
    metaTitle: "Website Design for Boutiques & Retail Shops — Fen Web Studio",
    metaTitleEs: "Diseño de Sitios Web para Boutiques y Tiendas — Fen Web Studio",
    metaDescription:
      "A lookbook-first website for your boutique — real product photography, a handful of collections, and a clear way to get in touch. No bloated e-commerce template required.",
    metaDescriptionEs:
      "Un sitio web centrado en el lookbook para tu boutique — fotografía real de producto, unas pocas colecciones, y una forma clara de contactar. Sin templates de e-commerce inflados.",
    eyebrow: "For boutiques and small shops",
    eyebrowEs: "Para boutiques y tiendas pequeñas",
    title: "A lookbook first, a store second.",
    titleEs: "Un lookbook primero, una tienda después.",
    intro:
      "Generic e-commerce templates bury a small shop's actual taste under navigation menus built for a thousand SKUs. We build a single, elegant scroll instead — a handful of collections, real photography, and one clear way to reach you — that reads as a brand, not a warehouse.",
    introEs:
      "Los templates genéricos de e-commerce esconden el gusto real de una tienda pequeña bajo menús de navegación pensados para mil productos. En su lugar, construimos un solo scroll elegante — unas pocas colecciones, fotografía real, y una forma clara de contactarte — que se lee como marca, no como bodega.",
    painPoints: [
      {
        title: "More navigation than products",
        titleEs: "Más navegación que productos",
        body: "A generic store template ships with menus, filters, and category pages built for a catalog ten times the size of yours.",
        bodyEs: "Un template genérico de tienda viene con menús, filtros y páginas de categoría pensados para un catálogo diez veces más grande que el tuyo.",
      },
      {
        title: "Customers can't tell what you actually sell",
        titleEs: "Los clientes no saben qué vendes realmente",
        body: "The homepage leads with a slideshow and a newsletter popup instead of the products people came to see.",
        bodyEs: "La página de inicio empieza con un carrusel y un popup de newsletter en vez de los productos que la gente vino a ver.",
      },
      {
        title: "Carts get abandoned mid-checkout",
        titleEs: "Los carritos se abandonan a medio pago",
        body: "A clunky, multi-step checkout built for a big-box retailer loses sales a boutique can't afford to lose.",
        bodyEs: "Un proceso de pago torpe y de varios pasos, pensado para una gran cadena, pierde ventas que una boutique no puede permitirse perder.",
      },
    ],
    approachPoints: [
      {
        title: "One scroll, a handful of collections",
        titleEs: "Un solo scroll, unas pocas colecciones",
        body: "No account creation, no ten-item mega menu — just the pieces you actually want to sell, shown well.",
        bodyEs: "Sin crear cuenta, sin menús de diez niveles — solo las piezas que realmente quieres vender, bien presentadas.",
      },
      {
        title: "Real product photography, front and center",
        titleEs: "Fotografía real de producto, al frente",
        body: "The site is built around your images, not a stock template that could belong to any shop.",
        bodyEs: "El sitio se construye alrededor de tus imágenes, no de un template genérico que podría ser de cualquier tienda.",
      },
      {
        title: "A monthly care plan",
        titleEs: "Un plan de cuidado mensual",
        body: "New collections, seasonal refreshes, and small copy changes — handled for you, month to month.",
        bodyEs: "Nuevas colecciones, renovaciones de temporada y pequeños cambios de texto — resueltos por nosotros, mes a mes.",
      },
    ],
    caseStudyLabel: "See how we did this for Loom & Co.",
    caseStudyLabelEs: "Mira cómo lo hicimos para Loom & Co.",
  },
  {
    slug: "website-design-for-professional-services",
    projectSlug: "marlow-and-row",
    image: "/arch-geometric-bw.jpg",
    industry: "Professional Services",
    industryEs: "Servicios Profesionales",
    metaTitle: "Website Design for Professional Services Firms — Fen Web Studio",
    metaTitleEs: "Diseño de Sitios Web para Firmas de Servicios Profesionales — Fen Web Studio",
    metaDescription:
      "A quiet, credible website for consultants, advisors, and small firms — answers 'are these people legitimate' in the first five seconds, without needing a CMS to maintain.",
    metaDescriptionEs:
      "Un sitio web sobrio y creíble para consultores, asesores y firmas pequeñas — responde '¿es gente seria?' en los primeros cinco segundos, sin necesitar un CMS para mantenerlo.",
    eyebrow: "For consultants, advisors, and small firms",
    eyebrowEs: "Para consultores, asesores y firmas pequeñas",
    title: "The site that shows up before the first call.",
    titleEs: "El sitio que aparece antes de la primera llamada.",
    intro:
      "Prospective clients Google a firm before they ever pick up the phone. If what they find is a LinkedIn page or nothing at all, the call often doesn't happen. We build a small, credible site — what you do, who's behind it, how engagements work — with nothing that needs a CMS to keep current.",
    introEs:
      "Los clientes potenciales buscan una firma en Google antes de siquiera marcar. Si lo que encuentran es una página de LinkedIn o nada, la llamada muchas veces no sucede. Construimos un sitio pequeño y creíble — qué hacen, quién está detrás, cómo funcionan los proyectos — sin nada que requiera un CMS para mantenerse al día.",
    painPoints: [
      {
        title: "There's no site at all — just a LinkedIn page",
        titleEs: "No hay sitio — solo una página de LinkedIn",
        body: "A prospective client searches the firm's name and finds a profile, not a homepage, and quietly moves on.",
        bodyEs: "Un cliente potencial busca el nombre de la firma y encuentra un perfil, no una página de inicio, y sigue de largo sin decir nada.",
      },
      {
        title: "The old site reads as generic and dated",
        titleEs: "El sitio anterior se ve genérico y desactualizado",
        body: "A template built for any small business undersells a practice built on specific expertise and trust.",
        bodyEs: "Un template pensado para cualquier negocio pequeño no le hace justicia a una práctica construida sobre experiencia y confianza específicas.",
      },
      {
        title: "Nobody wants to maintain a CMS",
        titleEs: "Nadie quiere mantener un CMS",
        body: "A two-partner practice doesn't have time to fight with a page builder for a site that rarely needs to change.",
        bodyEs: "Una práctica de dos socios no tiene tiempo para pelear con un constructor de páginas para un sitio que rara vez necesita cambiar.",
      },
    ],
    approachPoints: [
      {
        title: "Four sections, nothing more",
        titleEs: "Cuatro secciones, nada más",
        body: "What the firm does, who's behind it, how engagements work, and how to reach you — the entire brief.",
        bodyEs: "Qué hace la firma, quién está detrás, cómo funcionan los proyectos y cómo contactarlos — todo el encargo.",
      },
      {
        title: "Built to answer 'are these people legitimate'",
        titleEs: "Construido para responder '¿es gente seria?'",
        body: "In the first five seconds, before a prospective client reads a single word of copy.",
        bodyEs: "En los primeros cinco segundos, antes de que un cliente potencial lea una sola palabra.",
      },
      {
        title: "A monthly care plan",
        titleEs: "Un plan de cuidado mensual",
        body: "Small updates as the practice evolves, handled for you — no CMS login required on your end.",
        bodyEs: "Pequeñas actualizaciones conforme la práctica evoluciona, resueltas por nosotros — sin necesitar acceso a ningún CMS.",
      },
    ],
    caseStudyLabel: "See how we did this for Marlow & Row",
    caseStudyLabelEs: "Mira cómo lo hicimos para Marlow & Row",
  },
];

export function getLandingPage(slug: string): LandingPage | undefined {
  return LANDING_PAGES.find((page) => page.slug === slug);
}

export function getLandingPageByProject(projectSlug: string): LandingPage | undefined {
  return LANDING_PAGES.find((page) => page.projectSlug === projectSlug);
}

export function buildLandingMetadata(page: LandingPage): Metadata {
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      type: "website",
      url: `/${page.slug}`,
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
    },
  };
}

export function buildLandingJsonLd(page: LandingPage) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `Website design for ${page.industry.toLowerCase()}`,
    name: page.metaTitle,
    description: page.metaDescription,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    url: `${SITE_URL}/${page.slug}`,
  };
}
