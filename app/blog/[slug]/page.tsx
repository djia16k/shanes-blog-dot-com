import { getAllPosts, getPostBySlug, formatDate } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return {
      title: post.title,
      description: post.excerpt,
    };
  } catch {
    return { title: "Post not found" };
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-5 py-14">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors mb-10 group"
      >
        <span className="inline-block transition-transform group-hover:-translate-x-1">←</span>
        Back to all posts
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--tag-bg)] text-[var(--tag-text)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1
          className="text-3xl sm:text-4xl font-bold text-[var(--text)] leading-tight mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {post.title}
        </h1>

        <p className="text-[var(--text-muted)] text-sm">
          {formatDate(post.date)}
        </p>
      </header>

      {/* Divider */}
      <div className="h-px bg-[var(--border)] mb-10" />

      {/* Content */}
      <div className="prose">
        <MDXRemote source={post.content} />
      </div>

      {/* Footer nav */}
      <div className="mt-16 pt-8 border-t border-[var(--border)]">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors group"
        >
          <span className="inline-block transition-transform group-hover:-translate-x-1">←</span>
          All posts
        </Link>
      </div>
    </div>
  );
}
