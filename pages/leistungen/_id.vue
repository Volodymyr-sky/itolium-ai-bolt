<template>
  <div class="service-detail" v-if="service">
    <b-container>
      <!-- Hero Section -->
      <div class="service-detail__hero">
        <div class="service-detail__header">
          <h1 class="service-detail__title">{{ service.title }}</h1>
          <p class="service-detail__description">{{ service.fullDescription }}</p>
        </div>
        <div class="service-detail__image">
          <b-img :src="service.image" :alt="service.title" fluid></b-img>
        </div>
      </div>

      <!-- Features Section -->
      <section class="service-detail__features">
        <h2 class="service-detail__section-title">Leistungsumfang</h2>
        <b-row>
          <b-col lg="6">
            <ul class="service-detail__features-list">
              <li v-for="(feature, index) in service.features" :key="index">
                <b-icon-check-circle-fill class="text-success"></b-icon-check-circle-fill>
                {{ feature }}
              </li>
            </ul>
          </b-col>
          <b-col lg="6">
            <div class="service-detail__features-image">
              <b-img src="https://source.unsplash.com/random/600x400?technology" fluid alt="Features"></b-img>
            </div>
          </b-col>
        </b-row>
      </section>

      <!-- Benefits Section -->
      <section class="service-detail__benefits">
        <h2 class="service-detail__section-title">Ihre Vorteile</h2>
        <b-row>
          <b-col md="4" v-for="(benefit, index) in service.benefits" :key="index">
            <div class="service-detail__benefit-card">
              <div class="service-detail__benefit-icon">
                <b-icon :icon="benefit.icon"></b-icon>
              </div>
              <h3 class="service-detail__benefit-title">{{ benefit.title }}</h3>
              <p class="service-detail__benefit-description">{{ benefit.description }}</p>
            </div>
          </b-col>
        </b-row>
      </section>

      <!-- Process Section -->
      <section class="service-detail__process">
        <h2 class="service-detail__section-title">Unser Prozess</h2>
        <div class="service-detail__process-timeline">
          <div v-for="(step, index) in service.process" :key="index" 
               class="service-detail__process-step"
               :class="{ 'service-detail__process-step--active': index === 0 }">
            <div class="service-detail__process-number">{{ step.step }}</div>
            <h3 class="service-detail__process-title">{{ step.title }}</h3>
            <p class="service-detail__process-description">{{ step.description }}</p>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="service-detail__cta">
        <h2 class="service-detail__cta-title">Bereit für Ihr nächstes Projekt?</h2>
        <p class="service-detail__cta-text">Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.</p>
        <b-button variant="primary" size="lg" href="#contact">Jetzt Kontakt aufnehmen</b-button>
      </section>
    </b-container>
  </div>
  <div v-else class="text-center py-5">
    <h1>Service nicht gefunden</h1>
    <p>Der angeforderte Service existiert nicht.</p>
    <b-button variant="primary" to="/leistungen">Zurück zur Übersicht</b-button>
  </div>
</template>

<script>
import servicesData from '@/assets/data/services.json'

export default {
  name: 'ServiceDetail',
  async asyncData({ params, error }) {
    const service = servicesData[params.id]
    if (!service) {
      error({ statusCode: 404, message: 'Service nicht gefunden' })
      return
    }
    return { service }
  },
  head() {
    if (!this.service) return {}
    return {
      title: this.service.metaTitle,
      meta: [
        { hid: 'description', name: 'description', content: this.service.metaDescription },
        { hid: 'keywords', name: 'keywords', content: this.service.keywords.join(', ') }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.service-detail {
  padding: 6rem 0;

  &__hero {
    margin-bottom: 4rem;
  }

  &__header {
    text-align: center;
    margin-bottom: 3rem;
  }

  &__title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: $text-color;
  }

  &__description {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
    color: $text-color;
  }

  &__image {
    img {
      border-radius: 10px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }
  }

  &__section-title {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3rem;
    color: $text-color;
  }

  &__features {
    margin-bottom: 4rem;

    &-list {
      list-style: none;
      padding: 0;

      li {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        font-size: 1.1rem;

        .b-icon {
          margin-right: 1rem;
          color: $primary;
        }
      }
    }

    &-image {
      img {
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      }
    }
  }

  &__benefits {
    margin-bottom: 4rem;
  }

  &__benefit-card {
    text-align: center;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    height: 100%;
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-5px);
    }
  }

  &__benefit-icon {
    font-size: 2.5rem;
    color: $primary;
    margin-bottom: 1rem;
  }

  &__benefit-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  &__process {
    margin-bottom: 4rem;

    &-timeline {
      display: flex;
      justify-content: space-between;
      position: relative;
      margin: 0 2rem;

      &::before {
        content: '';
        position: absolute;
        top: 2rem;
        left: 0;
        right: 0;
        height: 2px;
        background-color: $light-bg;
        z-index: 0;
      }
    }

    &-step {
      flex: 1;
      text-align: center;
      padding: 0 1rem;
      position: relative;
      z-index: 1;

      &--active {
        .service-detail__process-number {
          background-color: $primary;
          color: #ffffff;
        }
      }
    }

    &-number {
      width: 4rem;
      height: 4rem;
      background-color: #ffffff;
      border: 2px solid $primary;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1rem;
      font-weight: 700;
      font-size: 1.25rem;
      transition: all 0.3s;
    }

    &-title {
      font-size: 1.1rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    &-description {
      font-size: 0.9rem;
      color: #666;
    }
  }

  &__cta {
    text-align: center;
    padding: 4rem;
    background-color: $light-bg;
    border-radius: 10px;

    &-title {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    &-text {
      font-size: 1.1rem;
      margin-bottom: 2rem;
    }
  }
}

@media (max-width: $breakpoint-lg) {
  .service-detail {
    padding: 3rem 0;

    &__process-timeline {
      flex-direction: column;

      &::before {
        display: none;
      }
    }

    &__process-step {
      margin-bottom: 2rem;
    }
  }
}
</style>