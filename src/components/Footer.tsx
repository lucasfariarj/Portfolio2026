import { nav } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <a href="#top" className="font-heading text-base font-bold text-foreground">
          alex<span className="text-accent">.</span>dev
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-muted-dim">
          © {year} Alexandre Costa. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
