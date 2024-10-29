export default {
  ssr: true,
  target: 'static',

  head: {
    htmlAttrs: {
      lang: 'de'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Acme IT Solutions' },
      { property: 'og:site_name', content: 'Acme IT Solutions' },
      { property: 'og:type', content: 'website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://acmeit.de' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap' }
    ]
  },

  css: [
    '@/assets/scss/main.scss'
  ],

  plugins: [
    '~/plugins/head.js'
  ],

  components: true,

  buildModules: [
    '@nuxtjs/style-resources'
  ],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  bootstrapVue: {
    icons: true,
    componentPlugins: [
      'LayoutPlugin',
      'FormPlugin',
      'FormCheckboxPlugin',
      'FormInputPlugin',
      'FormFilePlugin',
      'ButtonPlugin',
      'NavbarPlugin',
      'NavPlugin',
      'ImagePlugin',
      'CardPlugin',
      'IconsPlugin',
      'ToastPlugin'
    ]
  },

  styleResources: {
    scss: [
      '@/assets/scss/_variables.scss'
    ]
  },

  sitemap: {
    hostname: 'https://acmeit.de',
    gzip: true,
    exclude: [
      '/404'
    ],
    routes: [
      '/',
      '/leistungen',
      '/leistungen/fullstack',
      '/leistungen/backend',
      '/leistungen/cloud',
      '/leistungen/datenmigrationen',
      '/leistungen/e-commerce',
      '/leistungen/frontend',
      '/expertise',
      '/news',
      '/wiki-lexikon',
      '/jobs',
      '/about',
      '/contact',
      '/datenschutz',
      '/impressum'
    ]
  },

  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://acmeit.de/sitemap.xml'
  },

  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  }
}