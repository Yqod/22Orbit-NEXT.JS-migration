import Landingpage from "../src/views/Landingpage.jsx";
import { buildMetadata } from "../src/lib/metadata.js";
import { seoConfig } from "../src/seo/seoConfig.js";

export const metadata = buildMetadata({
  ...seoConfig.home,
  canonicalPath: "/",
});

export default function Page() {
  return <Landingpage />;
}
