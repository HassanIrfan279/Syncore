import {
  absoluteUrl,
  brand,
  business,
  contact,
  services,
  socialLinks,
} from "@/lib/site";

function serializeSchema(schema: object) {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}

export function StructuredData() {
  const sameAs = socialLinks
    .filter((link) => !link.isPlaceholder)
    .map((link) => link.href);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${absoluteUrl()}/#organization`,
    name: brand.name,
    legalName: business.legalName,
    url: absoluteUrl(),
    logo: absoluteUrl(business.logo),
    image: absoluteUrl(business.image),
    description: business.description,
    email: contact.email,
    ...(sameAs.length > 0 ? { sameAs } : {}),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: contact.email,
        telephone: contact.phone,
        areaServed: business.areaServed,
        availableLanguage: ["English"],
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${absoluteUrl()}/#localbusiness`,
    name: brand.name,
    url: absoluteUrl(),
    logo: absoluteUrl(business.logo),
    image: absoluteUrl(business.image),
    description: business.description,
    email: contact.email,
    telephone: contact.phone,
    priceRange: business.priceRange,
    ...(business.address
      ? {
          address: {
            "@type": "PostalAddress",
            ...business.address,
          },
        }
      : {}),
    areaServed: {
      "@type": "Country",
      name: business.areaServed,
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.summary,
        url: absoluteUrl("/services"),
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeSchema(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeSchema(localBusinessSchema),
        }}
      />
    </>
  );
}
