import Kontakt from "../../src/views/Kontakt.jsx";
import { buildMetadata } from "../../src/lib/metadata.js";
import { seoConfig } from "../../src/seo/seoConfig.js";

export const metadata = buildMetadata({
  ...seoConfig.kontakt,
  canonicalPath: "/kontakt",
});

export default function Page() {
  return <Kontakt />;
}
