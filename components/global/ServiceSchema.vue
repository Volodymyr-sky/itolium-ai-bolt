<template>
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "{{ service.title }}",
      "description": "{{ service.fullDescription }}",
      "provider": {
        "@type": "Organization",
        "name": "Acme IT Solutions",
        "url": "https://acmeit.de"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Germany"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "IT Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "{{ service.title }}",
              "description": "{{ service.shortDescription }}"
            }
          }
        ]
      }
    }
  </script>
</template>

<script>
export default {
  name: 'ServiceSchema',
  props: {
    service: {
      type: Object,
      required: true
    }
  }
}
</script>