import Link from "next/link";
import { PostMeta, formatDate } from "@/lib/posts";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group border border-[var(--border)] rounded-xl p-6 bg-[var(--surface)] hover:border-[var(--accent)] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--tag-bg)] text-[var(--tag-text)]"
          >
            {tag}
          </span>
        ))}
        <span className="text-xs text-[var(--text-muted)] ml-auto">
          {formatDate(post.date)}
        </span>
      </div>

      <h2
        className="text-xl font-bold mb-2 text-[var(--text)] group-hover:text-[var(--accent)] transition-colors leading-snug"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        <Link href={`/blog/${post.slug}`} className="block">
          {post.title}
        </Link>
      </h2>

      <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
        {post.excerpt}
      </p>

      <Link
        href={`/blog/${post.slug}`}
        className="text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors inline-flex items-center gap-1 group/link"
      >
        Read more
        <span className="inline-block transition-transform group-hover/link:translate-x-1">
          →
        </span>
      </Link>
    </article>
  );
}
