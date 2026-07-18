export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-12 text-sm text-ink-dim md:flex-row md:px-10">
        <span>
          © {new Date().getFullYear()} Fen Studio. All rights reserved.
        </span>
        <div className="flex flex-col gap-3 text-center md:flex-row md:items-center md:text-right">
          <a href="#top" className="transition hover:text-ink">
            Back to top
          </a>
          <a href="#contact" className="transition hover:text-ink">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
