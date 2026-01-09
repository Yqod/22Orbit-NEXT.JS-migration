const BASE_URL = "https://22orbit.de";

import { getAllBlogPosts } from "../src/lib/blog.js";

const ROUTES = [
  "",
  "/services",
  "/webseiten",
  "/software",
  "/socialmediamarketing",
  "/preisliste",
  "/kontakt",
  "/blog",
  "/faq",
  "/karriere",
  "/datenschutz",
  "/impressum",
  "/agb",
];

export default function sitemap() {
  const now = new Date();
  const posts = getAllBlogPosts();

  const staticUrls = ROUTES.map((path) => ({
    url: `${BASE_URL}${path || "/"}`,
    lastModified: now,
  }));

  const blogUrls = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : now,
  }));

  return [...staticUrls, ...blogUrls];
}
