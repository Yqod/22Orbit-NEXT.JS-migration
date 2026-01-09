const DEFAULT_OG_IMAGE = "https://22orbit.de/22Orbit4X4Logo.jpg";

export function buildMetadata({
  title,
  description,
  keywords,
  canonicalPath,
  ogImage = DEFAULT_OG_IMAGE,
  type = "website",
}) {
  return {
    title,
    description,
    keywords,
    alternates: canonicalPath ? { canonical: canonicalPath } : undefined,
    openGraph: {
      type,
      title,
      description,
      url: canonicalPath || undefined,
      images: [ogImage],
    },
    twitter: {
      title,
      description,
      images: [ogImage],
    },
  };
}
