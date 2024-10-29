<template>
  <div class="expertise-detail" v-if="expertise">
    <b-container>
      <!-- Hero Section -->
      <div class="expertise-detail__hero">
        <div class="expertise-detail__header">
          <h1 class="expertise-detail__title">{{ expertise.title }}</h1>
          <p class="expertise-detail__description">{{ expertise.description }}</p>
        </div>
        <div class="expertise-detail__image">
          <b-img :src="expertise.image" :alt="expertise.title" fluid></b-img>
        </div>
      </div>

      <!-- Content Section -->
      <section class="expertise-detail__content">
        <b-row class="align-items-center">
          <b-col lg="6">
            <div class="expertise-detail__text" v-html="expertise.content"></div>
          </b-col>
          <b-col lg="6">
            <div class="expertise-detail__projects">
              <h3>Erfolgreiche Projekte</h3>
              <div v-for="(project, index) in expertise.projects" :key="index" class="expertise-detail__project">
                <h4>{{ project.title }}</h4>
                <p>{{ project.description }}</p>
                <ul>
                  <li v-for="(result, rIndex) in project.results" :key="rIndex">
                    {{ result }}
                  </li>
                </ul>
              </div>
            </div>
          </b-col>
        </b-row>
      </section>

      <!-- Advantages Section -->
      <section class="expertise-detail__advantages">
        <h2 class="expertise-detail__section-title">Unsere Vorteile</h2>
        <b-row>
          <b-col md="4" v-for="(advantage, index) in expertise.advantages" :key="index">
            <div class="expertise-detail__advantage-card">
              <div class="expertise-detail__advantage-icon">
                <b-icon :icon="advantage.icon"></b-icon>
              </div>
              <h3>{{ advantage.title }}</h3>
              <p>{{ advantage.description }}</p>
            </div>
          </b-col>
        </b-row>
      </section>

      <!-- CTA Section -->
      <section class="expertise-detail__cta">
        <h2>Lassen Sie uns über Ihr Projekt sprechen</h2>
        <p>Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch</p>
        <b-button variant="primary" size="lg" href="#contact">
          Jetzt Kontakt aufnehmen
        </b-button>
      </section>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ExpertiseDetail',
  async asyncData({ params, error }) {
    try {
      const expertise = await import(`@/assets/data/expertise/${params.id}.json`)
      return { expertise: expertise.default }
    } catch (e) {
      error({ statusCode: 404, message: 'Expertise nicht gefunden' })
    }
  },
  head() {
    if (!this.expertise) return {}
    return {
      title: this.expertise.metaTitle,
      meta: [
        { hid: 'description', name: 'description', content: this.expertise.metaDescription },
        { hid: 'keywords', name: 'keywords', content: this.expertise.keywords.join(', ') }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.expertise-detail {
  padding: 6rem 0;

  &__hero {
    margin-bottom: 4rem;
  }

  &__header {
    text-align: center;
    margin-bottom: 2rem;
  }

  &__title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  &__description {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
  }

  &__image {
    img {
      border-radius: 10px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }
  }

  &__content {
    margin-bottom: 4rem;
  }

  &__text {
    font-size: 1.1rem;
    line-height: 1.8;
  }

  &__projects {
    background: #ffffff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  &__project {
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 0;
    }

    h4 {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 0.5rem;
        padding-left: 1.5rem;
        position: relative;

        &::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: $primary;
        }
      }
    }
  }

  &__section-title {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3rem;
  }

  &__advantages {
    margin-bottom: 4rem;
  }

  &__advantage-card {
    text-align: center;
    padding: 2rem;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    height: 100%;
  }

  &__advantage-icon {
    font-size: 2.5rem;
    color: $primary;
    margin-bottom: 1.5rem;
  }

  &__cta {
    text-align: center;
    padding: 4rem;
    background-color: $light-bg;
    border-radius: 10px;

    h2 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.1rem;
      margin-bottom: 2rem;
    }
  }
}

@media (max-width: $breakpoint-lg) {
  .expertise-detail {
    padding: 3rem 0;

    &__title {
      font-size: 2rem;
    }

    &__image {
      margin-top: 2rem;
    }
  }
}
</style>