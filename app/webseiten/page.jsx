import WebseitenLeistung from "../../src/views/webseiten.jsx";
import { buildMetadata } from "../../src/lib/metadata.js";
import { seoConfig } from "../../src/seo/seoConfig.js";

export const metadata = buildMetadata({
  ...seoConfig.webseiten,
  canonicalPath: "/webseiten",
});

export default function Page() {
  return <WebseitenLeistung />;
}
