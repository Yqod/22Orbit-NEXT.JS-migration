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
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
