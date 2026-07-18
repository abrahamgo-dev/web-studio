const STEPS = [
  {
    n: "01",
    title: "Discovery",
    duration: "Week 1",
    description:
      "A working session on the actual problem — audience, competitors, and the one metric this project needs to move.",
  },
  {
    n: "02",
    title: "Design",
    duration: "Weeks 2–3",
    description:
      "Token system, layout concepts, and a full design file, reviewed together before a single line of code is written.",
  },
  {
    n: "03",
    title: "Build",
    duration: "Weeks 3–5",
    description:
      "Next.js implementation, staged for review as it's built — not delivered as one surprise at the end.",
  },
  {
    n: "04",
    title: "Launch",
    duration: "Week 6",
    description:
      "Domain, hosting, analytics, and a handoff doc you can actually read.",
  },
  {
    n: "05",
    title: "Iterate",
    duration: "Ongoing",
    description:
      "Monthly care plan for edits, fixes, and small builds as the product keeps moving.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative border-t border-white/10">
      <div className="mx-auto max-w-4xl px-6 py-28 md:px-10 md:py-36">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          How a project actually runs
        </h2>

        <div className="mt-14 space-y-5 md:mt-16">
          {STEPS.map((step) => (
            <div
              key={step.n}
              className="card-surface grid grid-cols-[3rem_1fr] gap-x-6 rounded-[2rem] border-white/10 bg-white/5 p-8 first:border-t-0 md:grid-cols-[4rem_12rem_1fr] md:gap-x-8"
            >
              <span className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.2em] text-ink-dim">
                {step.n}
              </span>
              <div className="col-start-2 md:col-start-2">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <span className="text-sm text-accent-bright">
                  {step.duration}
                </span>
              </div>
              <p className="col-span-2 mt-4 text-sm leading-7 text-ink-dim md:col-span-1 md:col-start-3 md:mt-0">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
