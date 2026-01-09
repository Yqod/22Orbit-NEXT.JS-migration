import FAQ from "../../src/views/FAQ.jsx";
import { buildMetadata } from "../../src/lib/metadata.js";

export const metadata = buildMetadata({
  title: "FAQ | 22Orbit Magdeburg",
  description:
    "Antworten auf häufige Fragen rund um Webseiten, Online-Shops, SEO und Zusammenarbeit mit 22Orbit.",
  keywords: "FAQ, Fragen, Webdesign, SEO, 22Orbit",
  canonicalPath: "/faq",
});

export default function Page() {
  return <FAQ />;
}
