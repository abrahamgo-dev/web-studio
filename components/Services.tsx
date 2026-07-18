import { Layers, Code2, GaugeCircle, LifeBuoy } from "lucide-react";

const SERVICES = [
  {
    icon: Layers,
    title: "Web design",
    description:
      "Identity, layout, and interaction design for marketing sites and product front-ends — built to hold your brand's voice, not a template's.",
    span: "md:col-span-3",
  },
  {
    icon: Code2,
    title: "Development",
    description:
      "Next.js builds that ship fast and stay maintainable — no page-builder debt to inherit later.",
    span: "md:col-span-2",
  },
  {
    icon: GaugeCircle,
    title: "Digital solutions",
    description:
      "Dashboards, client portals, and internal tools — the software layer behind the website that most agencies skip.",
    span: "md:col-span-2",
  },
  {
    icon: LifeBuoy,
    title: "Care & growth",
    description:
      "Ongoing edits, monitoring, and iteration after launch, billed monthly instead of quoted per request.",
    span: "md:col-span-3",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-36">
        <div className="mb-14 flex flex-col gap-4 md:mb-20 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-md font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            One studio, the whole stack.
          </h2>
          <p className="max-w-sm text-sm text-ink-dim md:text-right">
            Most agencies stop at the homepage. We stay for the system
            underneath it.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-5">
          {SERVICES.map(({ icon: Icon, title, description, span }) => (
            <div
              key={title}
              className={`card-surface group rounded-[2rem] p-8 ${span}`}
            >
              <Icon className="h-7 w-7 text-accent-bright" strokeWidth={1.75} />
              <h3 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-ink-dim">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
