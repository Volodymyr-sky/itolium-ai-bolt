<template>
  <div class="about">
    <b-container>
      <div class="about__header">
        <h1 class="about__title">Über uns</h1>
        <p class="about__subtitle">
          Seit über einem Jahrzehnt sind wir Ihr verlässlicher Partner für innovative IT-Lösungen
        </p>
      </div>

      <b-row class="align-items-center mb-5">
        <b-col lg="6">
          <div class="about__content">
            <h2 class="about__section-title">Unsere Geschichte</h2>
            <p class="about__text">
              Seit unserer Gründung im Jahr 2010 haben wir uns kontinuierlich weiterentwickelt und sind zu einem führenden IT-Dienstleister in Deutschland gewachsen. Unsere Expertise in modernsten Technologien und unser Engagement für Qualität machen uns zum idealen Partner für Ihre digitale Transformation.
            </p>
            <div class="about__stats">
              <div class="about__stat">
                <span class="about__stat-number">10+</span>
                <span class="about__stat-label">Jahre Erfahrung</span>
              </div>
              <div class="about__stat">
                <span class="about__stat-number">200+</span>
                <span class="about__stat-label">Erfolgreiche Projekte</span>
              </div>
              <div class="about__stat">
                <span class="about__stat-number">50+</span>
                <span class="about__stat-label">Experten</span>
              </div>
            </div>
          </div>
        </b-col>
        <b-col lg="6">
          <div class="about__image">
            <b-img src="https://source.unsplash.com/random/800x600?office" fluid alt="Über uns"></b-img>
          </div>
        </b-col>
      </b-row>

      <section class="about__values">
        <h2 class="about__section-title text-center">Unsere Werte</h2>
        <b-row>
          <b-col md="4" v-for="(value, index) in values" :key="index">
            <div class="about__value-card">
              <div class="about__value-icon">
                <b-icon :icon="value.icon"></b-icon>
              </div>
              <h3 class="about__value-title">{{ value.title }}</h3>
              <p class="about__value-description">{{ value.description }}</p>
            </div>
          </b-col>
        </b-row>
      </section>

      <section class="about__team">
        <h2 class="about__section-title text-center">Unser Team</h2>
        <b-row>
          <b-col md="4" v-for="(member, index) in team" :key="index">
            <div class="about__team-card">
              <div class="about__team-image">
                <b-img :src="member.image" fluid :alt="member.name"></b-img>
              </div>
              <h3 class="about__team-name">{{ member.name }}</h3>
              <p class="about__team-position">{{ member.position }}</p>
              <p class="about__team-description">{{ member.description }}</p>
              <div class="about__team-social">
                <a v-for="(social, sIndex) in member.social" 
                   :key="sIndex"
                   :href="social.link"
                   target="_blank"
                   rel="noopener noreferrer">
                  <b-icon :icon="social.icon"></b-icon>
                </a>
              </div>
            </div>
          </b-col>
        </b-row>
      </section>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  head() {
    return {
      title: 'Über uns | Ihr Partner für IT-Lösungen',
      meta: [
        { hid: 'description', name: 'description', content: 'Lernen Sie Acme IT kennen - Ihr erfahrener Partner für innovative IT-Lösungen. Über 10 Jahre Expertise in Softwareentwicklung und digitaler Transformation.' }
      ]
    }
  },
  data() {
    return {
      values: [
        {
          icon: 'star',
          title: 'Exzellenz',
          description: 'Wir streben nach höchster Qualität in allem, was wir tun.'
        },
        {
          icon: 'people',
          title: 'Teamwork',
          description: 'Gemeinsam erreichen wir außergewöhnliche Ergebnisse.'
        },
        {
          icon: 'lightning',
          title: 'Innovation',
          description: 'Wir denken voraus und entwickeln zukunftsweisende Lösungen.'
        }
      ],
      team: [
        {
          name: 'Dr. Thomas Schmidt',
          position: 'CEO & Gründer',
          description: '15 Jahre Erfahrung in der IT-Branche, Experte für digitale Transformation.',
          image: 'https://source.unsplash.com/random/400x400?man',
          social: [
            { icon: 'linkedin', link: '#' },
            { icon: 'twitter', link: '#' }
          ]
        },
        {
          name: 'Anna Weber',
          position: 'CTO',
          description: 'Spezialistin für Cloud-Architekturen und moderne Entwicklungsmethoden.',
          image: 'https://source.unsplash.com/random/400x400?woman',
          social: [
            { icon: 'linkedin', link: '#' },
            { icon: 'github', link: '#' }
          ]
        },
        {
          name: 'Michael Bauer',
          position: 'Head of Development',
          description: 'Fullstack-Entwickler mit Fokus auf skalierbare Architekturen.',
          image: 'https://source.unsplash.com/random/400x400?developer',
          social: [
            { icon: 'linkedin', link: '#' },
            { icon: 'github', link: '#' }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.about {
  padding: 6rem 0;

  &__header {
    text-align: center;
    margin-bottom: 4rem;
  }

  &__title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  &__subtitle {
    font-size: 1.2rem;
    color: $text-color;
    max-width: 800px;
    margin: 0 auto;
  }

  &__section-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: $text-color;
  }

  &__text {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 2rem;
  }

  &__stats {
    display: flex;
    justify-content: space-between;
    margin: 3rem 0;
  }

  &__stat {
    text-align: center;

    &-number {
      display: block;
      font-size: 2.5rem;
      font-weight: 700;
      color: $primary;
    }

    &-label {
      font-size: 0.9rem;
      color: $text-color;
    }
  }

  &__image {
    img {
      border-radius: 10px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }
  }

  &__values {
    margin: 6rem 0;
  }

  &__value-card {
    text-align: center;
    padding: 2rem;
    height: 100%;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-5px);
    }
  }

  &__value-icon {
    font-size: 2.5rem;
    color: $primary;
    margin-bottom: 1rem;
  }

  &__value-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  &__team {
    margin-top: 6rem;
  }

  &__team-card {
    text-align: center;
    margin-bottom: 2rem;
  }

  &__team-image {
    margin-bottom: 1.5rem;

    img {
      border-radius: 50%;
      width: 200px;
      height: 200px;
      object-fit: cover;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }

  &__team-name {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  &__team-position {
    color: $primary;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  &__team-description {
    color: $text-color;
    margin-bottom: 1rem;
  }

  &__team-social {
    a {
      color: $text-color;
      margin: 0 0.5rem;
      font-size: 1.25rem;
      transition: color 0.3s;

      &:hover {
        color: $primary;
      }
    }
  }
}

@media (max-width: $breakpoint-lg) {
  .about {
    padding: 3rem 0;

    &__title {
      font-size: 2rem;
    }

    &__stats {
      flex-wrap: wrap;
    }

    &__stat {
      width: 50%;
      margin-bottom: 2rem;
    }

    &__image {
      margin-top: 2rem;
    }
  }
}

@media (max-width: $breakpoint-sm) {
  .about {
    &__stat {
      width: 100%;
    }
  }
}
</style>