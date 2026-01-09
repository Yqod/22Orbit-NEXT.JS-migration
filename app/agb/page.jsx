import AGB from "../../src/views/legal/AGB.jsx";
import { buildMetadata } from "../../src/lib/metadata.js";

export const metadata = buildMetadata({
  title: "AGB | 22Orbit Magdeburg",
  description:
    "Allgemeine Geschäftsbedingungen (AGB) von 22Orbit – Informationen zu Leistungen, Vertragsbedingungen und Haftung.",
  keywords: "AGB, Allgemeine Geschäftsbedingungen, 22Orbit",
  canonicalPath: "/agb",
});

export default function Page() {
  return <AGB />;
}
