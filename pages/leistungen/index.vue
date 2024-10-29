<template>
  <div class="services">
    <b-container>
      <div class="services__header">
        <h1 class="services__title">Unsere Leistungen</h1>
        <p class="services__intro">
          Wir bieten maßgeschneiderte IT-Lösungen für Ihren Geschäftserfolg. Mit jahrelanger Erfahrung und einem Team von Experten unterstützen wir Sie bei der digitalen Transformation.
        </p>
      </div>

      <b-row>
        <b-col lg="4" v-for="service in services" :key="service.id">
          <nuxt-link :to="`/leistungen/${service.id}`" class="services__card">
            <div class="services__card-icon">
              <b-icon :icon="service.icon"></b-icon>
            </div>
            <h2 class="services__card-title">{{ service.title }}</h2>
            <p class="services__card-description">{{ service.description }}</p>
            <span class="services__card-link">Mehr erfahren</span>
          </nuxt-link>
        </b-col>
      </b-row>

      <section class="services__advantages">
        <h2 class="services__section-title">Ihre Vorteile</h2>
        <b-row>
          <b-col md="4" v-for="(advantage, index) in advantages" :key="index">
            <div class="services__advantage-item">
              <div class="services__advantage-icon">
                <b-icon :icon="advantage.icon"></b-icon>
              </div>
              <h3 class="services__advantage-title">{{ advantage.title }}</h3>
              <p class="services__advantage-description">{{ advantage.description }}</p>
            </div>
          </b-col>
        </b-row>
      </section>

      <section class="services__faq">
        <h2 class="services__section-title">Häufig gestellte Fragen</h2>
        <b-accordion>
          <b-accordion-item v-for="(faq, index) in faqs" :key="index">
            <template #header>
              <h3 class="services__faq-question">{{ faq.question }}</h3>
            </template>
            <p class="services__faq-answer">{{ faq.answer }}</p>
          </b-accordion-item>
        </b-accordion>
      </section>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ServicesPage',
  head() {
    return {
      title: 'IT-Dienstleistungen & Lösungen | Acme IT',
      meta: [
        { hid: 'description', name: 'description', content: 'Entdecken Sie unsere professionellen IT-Dienstleistungen: Fullstack-Entwicklung, Backend, Cloud-Lösungen, Datenmigrationen, E-Commerce und Frontend-Entwicklung.' }
      ]
    }
  },
  data() {
    return {
      services: [
        {
          id: 'fullstack',
          icon: 'code-slash',
          title: 'Fullstack-Entwicklung',
          description: 'Ganzheitliche Entwicklung von Web-Anwendungen mit modernsten Technologien.'
        },
        {
          id: 'backend',
          icon: 'server',
          title: 'Backend-Entwicklung',
          description: 'Robuste und skalierbare Serverlösungen für Ihre Geschäftsanforderungen.'
        },
        {
          id: 'cloud',
          icon: 'cloud',
          title: 'Cloud-Lösungen',
          description: 'Flexible und sichere Cloud-Architekturen für maximale Skalierbarkeit.'
        },
        {
          id: 'datenmigrationen',
          icon: 'arrow-left-right',
          title: 'Datenmigrationen',
          description: 'Sichere und effiziente Migration Ihrer Geschäftsdaten.'
        },
        {
          id: 'e-commerce',
          icon: 'cart',
          title: 'E-Commerce',
          description: 'Professionelle Online-Shop-Lösungen für Ihren digitalen Vertrieb.'
        },
        {
          id: 'frontend',
          icon: 'window',
          title: 'Frontend-Entwicklung',
          description: 'Benutzerfreundliche und moderne Weboberflächen.'
        }
      ],
      advantages: [
        {
          icon: 'shield-check',
          title: 'Höchste Qualität',
          description: 'Wir setzen auf bewährte Technologien und Best Practices.'
        },
        {
          icon: 'clock',
          title: 'Termintreue',
          description: 'Zuverlässige Projektabwicklung im vereinbarten Zeitrahmen.'
        },
        {
          icon: 'people',
          title: 'Experten-Team',
          description: 'Erfahrene Entwickler mit umfassendem Know-how.'
        }
      ],
      faqs: [
        {
          question: 'Wie läuft ein typisches Projekt ab?',
          answer: 'Nach einem ersten Beratungsgespräch erstellen wir ein detailliertes Konzept. Die Umsetzung erfolgt in agilen Sprints mit regelmäßigem Feedback.'
        },
        {
          question: 'Welche Technologien verwenden Sie?',
          answer: 'Wir setzen auf moderne Frameworks und Technologien wie React, Vue.js, Node.js, und Cloud-Services von AWS und Google Cloud.'
        },
        {
          question: 'Wie lange dauert die Entwicklung?',
          answer: 'Die Projektdauer hängt vom Umfang ab. Typische Projekte dauern zwischen 2-6 Monaten.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.services {
  padding: 6rem 0;

  &__header {
    text-align: center;
    margin-bottom: 4rem;
  }

  &__title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: $text-color;
  }

  &__intro {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto 3rem;
    color: $text-color;
  }

  &__card {
    display: block;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 2rem;
    margin-bottom: 2rem;
    text-decoration: none;
    color: $text-color;
    transition: all 0.3s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
      text-decoration: none;
      color: $text-color;
    }

    &-icon {
      font-size: 3rem;
      color: $primary;
      margin-bottom: 1.5rem;
    }

    &-title {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    &-description {
      color: #666;
      margin-bottom: 1.5rem;
    }

    &-link {
      color: $primary;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-size: 0.875rem;
      
      &::after {
        content: '→';
        margin-left: 0.5rem;
        transition: transform 0.3s;
      }
    }

    &:hover &-link::after {
      transform: translateX(5px);
    }
  }

  &__section-title {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin: 4rem 0 2rem;
    color: $text-color;
  }

  &__advantages {
    margin: 4rem 0;
  }

  &__advantage-item {
    text-align: center;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    height: 100%;
  }

  &__advantage-icon {
    font-size: 2.5rem;
    color: $primary;
    margin-bottom: 1rem;
  }

  &__advantage-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  &__advantage-description {
    color: #666;
  }

  &__faq {
    margin: 4rem 0;

    &-question {
      font-size: 1.1rem;
      font-weight: 600;
      margin: 0;
    }

    &-answer {
      padding: 1rem 0;
      color: #666;
    }
  }
}

@media (max-width: $breakpoint-lg) {
  .services {
    padding: 3rem 0;

    &__title {
      font-size: 2rem;
    }

    &__intro {
      font-size: 1.1rem;
    }
  }
}
</style>