export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-20">
      <div className="max-w-3xl mx-auto px-5 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[var(--text-muted)]">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-[var(--accent)] font-medium">shanesblog.com</span>
          {" "}— written by a real human, for better or worse.
        </p>
        <p className="text-xs">No algorithms were harmed in the making of these opinions.</p>
      </div>
    </footer>
  );
}
