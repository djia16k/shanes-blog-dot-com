import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "A bit about Shane and why this blog exists.",
};

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-14">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors mb-10 group"
      >
        <span className="inline-block transition-transform group-hover:-translate-x-1">←</span>
        Back
      </Link>

      <h1
        className="text-4xl font-bold text-[var(--text)] mb-6"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        About <span className="text-[var(--accent)]">Shane</span>
      </h1>

      <div className="prose">
        <p>
          Hi. I&apos;m Shane. I built this blog because I have thoughts, and
          thoughts without an outlet tend to accumulate in ways that are
          generally not healthy for anyone involved.
        </p>

        <p>
          I&apos;m a professional who takes their work seriously. I&apos;m also a
          person who will absolutely spend twenty minutes debating the optimal
          way to load a dishwasher and feel genuinely good about that use of
          time. Both things are true. This blog is both of those things.
        </p>

        <p>
          You&apos;ll find posts about ideas, observations, whatever I happen to
          be thinking about. Sometimes sharp. Sometimes silly. Occasionally both
          in the same sentence.
        </p>

        <p>
          No ads. No newsletter (yet). No algorithm telling me what to write.
          Just a person with a keyboard and opinions.
        </p>

        <hr />

        <p>
          Want to get in touch? You probably know how to find me. If you
          don&apos;t, that&apos;s probably fine too.
        </p>
      </div>
    </div>
  );
}
