import Datenschutz from "../../src/views/legal/Datenschutz.jsx";
import { buildMetadata } from "../../src/lib/metadata.js";
import { seoConfig } from "../../src/seo/seoConfig.js";

export const metadata = buildMetadata({
  ...seoConfig.datenschutz,
  canonicalPath: "/datenschutz",
});

export default function Page() {
  return <Datenschutz />;
}
