import "../src/index.css";

export const metadata = {
  metadataBase: new URL("https://22orbit.de"),
  title: {
    default: "22Orbit - Webentwicklung & Digitale Lösungen aus Magdeburg",
    template: "%s | Webentwicklung Magdeburg",
  },
  description:
    "Moderne Webseiten, Online-Shops & Software-Lösungen von 22Orbit. Maßgeschneidert, schnell, mobilfreundlich und sicher.",
  icons: {
    icon: "/22Orbit4X4Logo.jpg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "22Orbit",
    url: "/",
    images: ["/22Orbit4X4Logo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/22Orbit4X4Logo.jpg"],
  },
};

export default function RootLayout({ children }) {
  const organizationLdJson = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "22Orbit",
    alternateName: "22Orbit Webentwicklung",
    url: "https://22orbit.de",
    logo: "https://22orbit.de/22Orbit4X4Logo.jpg",
    description:
      "Premium Webentwicklung und digitale Lösungen. Spezialisiert auf moderne Webseiten, Online-Shops und maßgeschneiderte Software-Entwicklung.",
    foundingDate: "2020",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+4917664637327",
      contactType: "customer service",
      email: "info@22orbit.de",
      availableLanguage: "German",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nicolaistraße 5",
      addressLocality: "Magdeburg",
      postalCode: "39124",
      addressCountry: "DE",
    },
    sameAs: [
      "https://github.com/22orbit",
      "https://linkedin.com/company/22orbit",
      "https://twitter.com/22orbit",
    ],
    service: [
      {
        "@type": "Service",
        name: "Webentwicklung",
        description: "Moderne Webseiten und Web-Anwendungen",
      },
      {
        "@type": "Service",
        name: "Online-Shop Entwicklung",
        description: "E-Commerce Lösungen und Online-Shops",
      },
      {
        "@type": "Service",
        name: "Software-Entwicklung",
        description: "Maßgeschneiderte Software-Lösungen",
      },
    ],
  };

  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationLdJson),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
