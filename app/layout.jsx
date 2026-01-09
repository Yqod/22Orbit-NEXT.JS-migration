import "../src/index.css";

export const metadata = {
  metadataBase: new URL("https://22orbit.de"),
  title: {
    default: "22Orbit - Webentwicklung & Digitale Lösungen aus Magdeburg",
    template: "%s | Webentwicklung Magdeburg",
  },
  description:
    "Moderne Webseiten, Online-Shops & Software-Lösungen von 22Orbit. Maßgeschneidert, schnell, mobilfreundlich und sicher.",
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
      <body>{children}</body>
    </html>
  );
}
