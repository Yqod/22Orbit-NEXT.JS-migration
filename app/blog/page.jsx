import Link from "next/link";
import Navbar from "../../src/components/Navbar.jsx";
import Footer from "../../src/components/FooterLegal.jsx";
import { getAllBlogPosts } from "../../src/lib/blog.js";
import { buildMetadata } from "../../src/lib/metadata.js";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Aktuelle Artikel und Guides rund um Webseiten, Software und Online-Marketing von 22Orbit.",
  canonicalPath: "/blog",
});

function formatDate(dateStr) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("de-DE", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="bg-[#0d1321] min-h-screen">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 pt-28 pb-16">
        <h1 className="text-white text-4xl md:text-5xl font-semibold tracking-tight">
          Blog
        </h1>
        <p className="text-white/80 mt-4 max-w-3xl">
          Hier findest du Beiträge zu Webentwicklung, Webseiten-Strategie, Software und
          Online-Marketing.
        </p>

        <div className="mt-10 grid gap-6">
          {posts.length === 0 ? (
            <div className="text-white/80">Noch keine Beiträge vorhanden.</div>
          ) : (
            posts.map((post) => (
              <article
                key={post.slug}
                className="border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors"
              >
                <div className="text-white/60 text-sm">{formatDate(post.date)}</div>
                <h2 className="text-white text-2xl font-semibold mt-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-white/90 hover:text-white"
                  >
                    {post.title}
                  </Link>
                </h2>
                {post.excerpt ? (
                  <p className="text-white/80 mt-3">{post.excerpt}</p>
                ) : null}
              </article>
            ))
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
