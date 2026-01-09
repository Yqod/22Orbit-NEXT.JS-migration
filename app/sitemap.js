const BASE_URL = "https://22orbit.de";

const ROUTES = [
  "",
  "/services",
  "/webseiten",
  "/software",
  "/socialmediamarketing",
  "/preisliste",
  "/kontakt",
  "/faq",
  "/karriere",
  "/datenschutz",
  "/impressum",
  "/agb",
];

export default function sitemap() {
  const lastModified = new Date();

  return ROUTES.map((path) => ({
    url: `${BASE_URL}${path || "/"}`,
    lastModified,
  }));
}
