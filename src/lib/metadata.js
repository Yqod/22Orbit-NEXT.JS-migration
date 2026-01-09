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
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: canonicalPath ? { canonical: canonicalPath } : undefined,
    openGraph: {
      type,
      title,
      description,
      url: canonicalPath || undefined,
      siteName: "22Orbit",
      locale: "de_DE",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
