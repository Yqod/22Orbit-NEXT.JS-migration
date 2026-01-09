import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function ensureBlogDirExists() {
  if (!fs.existsSync(BLOG_DIR)) return false;
  return true;
}

function normalizeSlug(filename) {
  return filename.replace(/\.(md|mdx)$/i, "");
}

export function getBlogSlugs() {
  if (!ensureBlogDirExists()) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => /\.(md|mdx)$/i.test(f))
    .map(normalizeSlug);
}

export function getBlogPostBySlug(slug) {
  if (!ensureBlogDirExists()) return null;

  const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const mdPath = path.join(BLOG_DIR, `${slug}.md`);

  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);

  const title = parsed.data.title?.toString()?.trim() || slug;
  const excerpt = parsed.data.excerpt?.toString()?.trim() || "";
  const date = parsed.data.date?.toString()?.trim() || "";
  const tags = Array.isArray(parsed.data.tags) ? parsed.data.tags : [];

  return {
    slug,
    title,
    excerpt,
    date,
    tags,
    content: parsed.content,
  };
}

export function getAllBlogPosts() {
  const slugs = getBlogSlugs();
  const posts = slugs
    .map((slug) => getBlogPostBySlug(slug))
    .filter(Boolean);

  posts.sort((a, b) => {
    const da = a.date ? Date.parse(a.date) : 0;
    const db = b.date ? Date.parse(b.date) : 0;
    return db - da;
  });

  return posts;
}
