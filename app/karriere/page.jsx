import Karriere from "../../src/views/Karriere.jsx";
import { buildMetadata } from "../../src/lib/metadata.js";

export const metadata = buildMetadata({
  title: "Karriere | 22Orbit Magdeburg",
  description:
    "Karriere bei 22Orbit: Werde Teil unseres Teams und arbeite an modernen Web- und Software-Projekten.",
  keywords:
    "Karriere, Jobs, Webentwicklung, 22Orbit, Magdeburg",
  canonicalPath: "/karriere",
});

export default function Page() {
  return <Karriere />;
}
