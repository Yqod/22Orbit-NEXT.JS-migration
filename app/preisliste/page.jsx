import Pricing from "../../src/views/Pricing.jsx";
import { buildMetadata } from "../../src/lib/metadata.js";

export const metadata = buildMetadata({
  title: "Preisliste | 22Orbit Magdeburg",
  description:
    "Preise und Pakete von 22Orbit: Webdesign, Online-Shops, Wartung und individuelle Lösungen.",
  keywords:
    "Preisliste, Webdesign Preise, Website Kosten, Online-Shop Preise, 22Orbit Magdeburg",
  canonicalPath: "/preisliste",
});

export default function Page() {
  return <Pricing />;
}
