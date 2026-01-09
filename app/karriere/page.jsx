import Karriere from "../../src/views/Karriere.jsx";
import { buildMetadata } from "../../src/lib/metadata.js";
import { seoConfig } from "../../src/seo/seoConfig.js";

export const metadata = buildMetadata({
  ...seoConfig.karriere,
  canonicalPath: "/karriere",
});

export default function Page() {
  return <Karriere />;
}
