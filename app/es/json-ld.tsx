export function JsonLd() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Soldigem",
    legalName: "Soluciones Digitales Empresariales S.A.C.",
    url: "https://www.soldigem.com.pe",
    logo: "https://www.soldigem.com.pe/logo.svg",
    description: "Optimizamos la gestión de activos, infraestructura y procesos TI con soluciones inteligentes basadas en datos e inteligencia artificial.",
    foundingDate: "2014",
    address: {
      "@type": "PostalAddress",
      streetAddress: "CAL. TUNGASUCA NRO. 685 URB. TUPAC AMARU SAN LUIS",
      addressLocality: "Lima",
      addressRegion: "Lima",
      postalCode: "15001",
      addressCountry: "PE"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+51-986-705-342",
      contactType: "customer service",
      email: "fcardenas@soldigem.com.pe",
      areaServed: "PE",
      availableLanguage: ["Spanish", "English"]
    },
    sameAs: [
      "https://linkedin.com/company/soldigem",
      "https://www.linkedin.com/company/soldigem"
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "25"
    }
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Soldigem",
    image: "https://www.soldigem.com.pe/logo.svg",
    "@id": "https://www.soldigem.com.pe",
    url: "https://www.soldigem.com.pe",
    telephone: "+51-986-705-342",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "CAL. TUNGASUCA NRO. 685 URB. TUPAC AMARU SAN LUIS",
      addressLocality: "Lima",
      addressRegion: "Lima",
      postalCode: "15001",
      addressCountry: "PE"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -12.0731,
      longitude: -77.0267
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      opens: "09:00",
      closes: "18:00"
    },
    sameAs: [
      "https://linkedin.com/company/soldigem"
    ]
  };

  const services = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Cloud Computing",
      provider: { "@type": "Organization", name: "Soldigem" },
      areaServed: "PE",
      description: "Migración y gestión en Google Cloud Platform"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Software Development",
      provider: { "@type": "Organization", name: "Soldigem" },
      areaServed: "PE",
      description: "ERP personalizado y desarrollo de software a medida"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Artificial Intelligence",
      provider: { "@type": "Organization", name: "Soldigem" },
      areaServed: "PE",
      description: "Agentes de IA y automatización inteligente"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "IT Infrastructure",
      provider: { "@type": "Organization", name: "Soldigem" },
      areaServed: "PE",
      description: "Diseño e implementación de centros de control"
    }
  ];

  const product = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ProcureSmart",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "PEN"
    },
    brand: {
      "@type": "Brand",
      name: "Soldigem"
    },
    description: "Plataforma de compras y gestión de suministros tecnológicos"
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Soldigem",
    url: "https://www.soldigem.com.pe",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.soldigem.com.pe/es?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué servicios ofrece Soldigem?",
        acceptedAnswer: { 
          "@type": "Answer", 
          text: "Soldigem ofrece soluciones TI integrales: Cloud Computing en GCP, Software Factory (ERP personalizado), Agentes de IA, Data Analytics, Centros de Control, Gestión de Activos TI, y Ciberseguridad." 
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo puedo solicitar una propuesta?",
        acceptedAnswer: { 
          "@type": "Answer", 
          text: "Puedes contactarnos completando el formulario en nuestra página de contacto o enviando un correo a fcardenas@soldigem.com.pe. También puedes llamarnos al +51-986-705-342." 
        },
      },
      {
        "@type": "Question",
        name: "¿Ofrecen demos de sus productos?",
        acceptedAnswer: { 
          "@type": "Answer", 
          text: "Sí, ofrecemos demos personalizadas de nuestras soluciones. Puedes agendar una demo desde la sección de contacto en nuestra web." 
        },
      },
      {
        "@type": "Question",
        name: "¿En qué ciudades operan?",
        acceptedAnswer: { 
          "@type": "Answer", 
          text: "Operamos principalmente en Lima, Perú, pero brindamos servicios a nivel nacional e internacional." 
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      {services.map((service, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}



