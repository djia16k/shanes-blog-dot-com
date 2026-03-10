import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-5 py-14">
      {/* Hero */}
      <div className="mb-14">
        <h1
          className="text-4xl sm:text-5xl font-bold tracking-tight text-[var(--text)] mb-4 leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Hey. I&apos;m Shane.
          <br />
          <span className="text-[var(--accent)]">This is my blog.</span>
        </h1>
        <p className="text-[var(--text-muted)] text-lg leading-relaxed max-w-xl">
          I write about whatever&apos;s on my mind.
        </p>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-10">
        <span
          className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]"
        >
          Latest Posts
        </span>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </div>

      {/* Post Grid */}
      {posts.length === 0 ? (
        <p className="text-[var(--text-muted)] text-center py-20">
          No posts yet. The thoughts are brewing. ☕
        </p>
      ) : (
        <div className="grid gap-5">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
