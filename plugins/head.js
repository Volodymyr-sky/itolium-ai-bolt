export default ({ app }) => {
  app.head.titleTemplate = '%s | Acme IT Solutions'
  app.head.title = 'IT-Dienstleistungen & Lösungen'
  app.head.meta.push(
    { hid: 'description', name: 'description', content: 'Professionelle IT-Dienstleistungen: Fullstack-Entwicklung, Backend, Cloud-Lösungen, Datenmigrationen, E-Commerce und Frontend-Entwicklung.' },
    { hid: 'og:title', property: 'og:title', content: 'IT-Dienstleistungen & Lösungen | Acme IT Solutions' },
    { hid: 'og:description', property: 'og:description', content: 'Professionelle IT-Dienstleistungen: Fullstack-Entwicklung, Backend, Cloud-Lösungen, Datenmigrationen, E-Commerce und Frontend-Entwicklung.' },
    { hid: 'og:image', property: 'og:image', content: 'https://acmeit.de/og-image.jpg' },
    { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
    { hid: 'twitter:site', name: 'twitter:site', content: '@acmeit' }
  )
}