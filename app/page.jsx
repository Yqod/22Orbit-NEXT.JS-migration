import Landingpage from "../src/views/Landingpage.jsx";
import { buildMetadata } from "../src/lib/metadata.js";
import { seoConfig } from "../src/seo/seoConfig.js";
import { getAllBlogPosts } from "../src/lib/blog.js";

export const metadata = buildMetadata({
  ...seoConfig.home,
  canonicalPath: "/",
});

export default function Page() {
  const latestPosts = getAllBlogPosts()
    .slice(0, 3)
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      date: p.date,
    }));

  return <Landingpage latestPosts={latestPosts} />;
}
