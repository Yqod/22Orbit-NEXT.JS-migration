import { notFound } from "next/navigation";
import Navbar from "../../../src/components/Navbar.jsx";
import Footer from "../../../src/components/FooterLegal.jsx";
import { getBlogPostBySlug, getBlogSlugs } from "../../../src/lib/blog.js";
import { buildMetadata } from "../../../src/lib/metadata.js";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "../../../src/lib/mdx-components.jsx";

function formatDateLong(dateStr) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("de-DE", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(date);
}

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.excerpt || "Artikel im 22Orbit Blog.",
    canonicalPath: `/blog/${post.slug}`,
    type: "article",
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="bg-[#0d1321] min-h-screen">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 pt-28 pb-16">
        <div className="text-white/60 text-sm">{formatDateLong(post.date)}</div>
        <h1 className="text-white text-4xl md:text-5xl font-semibold tracking-tight mt-2">
          {post.title}
        </h1>
        {post.excerpt ? (
          <p className="text-white/80 mt-4 text-lg">{post.excerpt}</p>
        ) : null}

        <div className="mt-10">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
