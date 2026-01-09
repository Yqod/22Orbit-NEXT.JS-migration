import Pricing from "../../src/views/Pricing.jsx";
import { buildMetadata } from "../../src/lib/metadata.js";
import { seoConfig } from "../../src/seo/seoConfig.js";

export const metadata = buildMetadata({
  ...seoConfig.preisliste,
  canonicalPath: "/preisliste",
});

export default function Page() {
  return <Pricing />;
}
