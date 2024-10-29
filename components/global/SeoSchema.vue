<template>
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Acme IT Solutions",
      "url": "https://acmeit.de",
      "logo": "https://acmeit.de/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+49-123-456789",
        "contactType": "customer service",
        "areaServed": "DE",
        "availableLanguage": ["German", "English"]
      },
      "sameAs": [
        "https://www.facebook.com/acmeit",
        "https://www.linkedin.com/company/acmeit",
        "https://twitter.com/acmeit"
      ]
    }
  </script>
</template>

<script>
export default {
  name: 'SeoSchema'
}
</script>