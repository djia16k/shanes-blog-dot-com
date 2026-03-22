export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-20">
      <div className="max-w-3xl mx-auto px-5 py-8 text-sm text-[var(--text-muted)] text-center sm:text-left">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-[var(--accent)] font-medium">shanesblog.com</span>
          {" "}— written by a real human.
        </p>
      </div>
    </footer>
  );
}
