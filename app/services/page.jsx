import WorkflowPage from "../../src/views/services.jsx";
import { buildMetadata } from "../../src/lib/metadata.js";
import { seoConfig } from "../../src/seo/seoConfig.js";

export const metadata = buildMetadata({
  ...seoConfig.services,
  canonicalPath: "/services",
});

export default function Page() {
  return <WorkflowPage />;
}
