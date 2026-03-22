import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Shane from Florida, living in NYC — writing at shanesblog.com.",
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
          Hi, I&apos;m Shane. I&apos;m just a guy from Florida who lives in New York
          City and loves life. I love everything about life .. the good and the
          bad. I like to work hard and do cool stuff.
        </p>

        <p>
          I made this blog because I feel compelled to write. It&apos;s just nice
          to have a place to put thoughts that don&apos;t really feel like they
          belong anywhere else.
        </p>

        <p>
          It&apos;s simply meant to be an expression of me, and whatever I&apos;m
          feeling. To be honest, I&apos;m not really sure what it will turn into
          .. but it will always be shanesblog.com.
        </p>

        <p>Enjoy the ride.</p>
      </div>
    </div>
  );
}
