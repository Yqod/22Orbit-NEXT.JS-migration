import SoftwareLeistung from "../../src/views/software.jsx";
import { buildMetadata } from "../../src/lib/metadata.js";
import { seoConfig } from "../../src/seo/seoConfig.js";

export const metadata = buildMetadata({
  ...seoConfig.software,
  canonicalPath: "/software",
});

export default function Page() {
  return <SoftwareLeistung />;
}
