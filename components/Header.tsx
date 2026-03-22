import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)] backdrop-blur-sm bg-opacity-90">
      <div className="max-w-3xl mx-auto px-5 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="group inline-flex items-center leading-none hover:opacity-90 transition-opacity"
        >
          <span
            className="font-bold text-xl tracking-tight text-[var(--text)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            shanesblog
            <span className="text-[var(--accent)]">.com</span>
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden sm:flex items-center gap-5 text-sm text-[var(--text-muted)]">
            <Link
              href="/"
              className="hover:text-[var(--accent)] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-[var(--accent)] transition-colors"
            >
              About
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
