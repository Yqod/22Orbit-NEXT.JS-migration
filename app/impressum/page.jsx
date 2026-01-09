import Impressum from "../../src/views/legal/Impressum.jsx";
import { buildMetadata } from "../../src/lib/metadata.js";
import { seoConfig } from "../../src/seo/seoConfig.js";

export const metadata = buildMetadata({
  ...seoConfig.impressum,
  canonicalPath: "/impressum",
});

export default function Page() {
  return <Impressum />;
}
