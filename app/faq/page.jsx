import FAQ from "../../src/views/FAQ.jsx";
import { buildMetadata } from "../../src/lib/metadata.js";
import { seoConfig } from "../../src/seo/seoConfig.js";

export const metadata = buildMetadata({
  ...seoConfig.faq,
  canonicalPath: "/faq",
});

export default function Page() {
  return <FAQ />;
}
