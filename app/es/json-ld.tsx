export function JsonLd() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Soldigem",
    url: "https://www.soldigem.com",
    logo: "https://www.soldigem.com/logo.svg",
    sameAs: [
      "https://www.linkedin.com/company/soldigem"
    ],
  };

  const services = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Servicios TI y Software",
    provider: { "@type": "Organization", name: "Soldigem" },
    areaServed: "PE",
  };

  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "ProcureSmart",
    brand: "Soldigem",
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cómo puedo solicitar una propuesta?",
        acceptedAnswer: { "@type": "Answer", text: "Completa el formulario y te contactamos." },
      },
      {
        "@type": "Question",
        name: "¿Ofrecen demos?",
        acceptedAnswer: { "@type": "Answer", text: "Sí, agenda una demo desde la sección de contacto." },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(services) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}



