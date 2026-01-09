import AGB from "../../src/views/legal/AGB.jsx";
import { buildMetadata } from "../../src/lib/metadata.js";
import { seoConfig } from "../../src/seo/seoConfig.js";

export const metadata = buildMetadata({
  ...seoConfig.agb,
  canonicalPath: "/agb",
});

export default function Page() {
  return <AGB />;
}
