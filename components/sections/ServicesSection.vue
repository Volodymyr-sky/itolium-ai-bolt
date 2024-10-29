<template>
  <section id="services" class="homepage__services">
    <b-container>
      <h2 class="homepage__section-title text-center">Unsere Leistungen</h2>
      <b-row>
        <b-col md="4" v-for="service in services" :key="service.id">
          <nuxt-link :to="`/leistungen/${service.id}`" class="homepage__service-card">
            <div class="homepage__service-icon">
              <b-icon :icon="service.icon"></b-icon>
            </div>
            <h3 class="homepage__service-title">{{ service.title }}</h3>
            <p class="homepage__service-description">{{ service.shortDescription }}</p>
            <span class="homepage__service-link">Mehr erfahren</span>
          </nuxt-link>
        </b-col>
      </b-row>
      <div class="text-center mt-5">
        <b-button to="/leistungen" variant="primary" size="lg">Alle Leistungen anzeigen</b-button>
      </div>
    </b-container>
  </section>
</template>

<script>
import servicesData from '@/assets/data/services.json'

export default {
  name: 'ServicesSection',
  data() {
    return {
      services: Object.values(servicesData)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.homepage {
  &__services {
    padding: 6rem 0;
  }

  &__service-card {
    display: block;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 2rem;
    height: 100%;
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
  }

  &__service-icon {
    font-size: 3rem;
    color: $primary;
    margin-bottom: 1.5rem;
  }

  &__service-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  &__service-description {
    color: #666;
    margin-bottom: 1.5rem;
  }

  &__service-link {
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

  &__service-card:hover &__service-link::after {
    transform: translateX(5px);
  }
}

@media (max-width: $breakpoint-lg) {
  .homepage {
    &__services {
      padding: 3rem 0;
    }

    &__service-card {
      margin-bottom: 2rem;
    }
  }
}
</style>