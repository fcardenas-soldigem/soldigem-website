import type { DefaultSeoProps } from "next-seo";

const SEO: DefaultSeoProps = {
  titleTemplate: "%s | Soldigem",
  defaultTitle: "Soldigem — Tecnología que libera tu negocio",
  description:
    "Optimizamos la gestión de activos, infraestructura y procesos TI con soluciones inteligentes basadas en datos e inteligencia artificial.",
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://www.soldigem.com",
    siteName: "Soldigem",
  },
  twitter: {
    cardType: "summary_large_image",
  },
};

export default SEO;


