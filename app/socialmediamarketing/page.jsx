import SocialMediaMarketingLeistung from "../../src/views/socialmediamarketing.jsx";
import { buildMetadata } from "../../src/lib/metadata.js";
import { seoConfig } from "../../src/seo/seoConfig.js";

export const metadata = buildMetadata({
  ...seoConfig.socialmedia,
  canonicalPath: "/socialmediamarketing",
});

export default function Page() {
  return <SocialMediaMarketingLeistung />;
}
