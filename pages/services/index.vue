<template>
  <div class="services-page">
    <b-container>
      <h1 class="services-page__title">Our Services</h1>
      <b-row>
        <b-col lg="4" v-for="service in services" :key="service.id">
          <nuxt-link :to="`/services/${service.id}`" class="services-page__card">
            <div class="services-page__card-icon">
              <b-icon :icon="service.icon"></b-icon>
            </div>
            <h2 class="services-page__card-title">{{ service.title }}</h2>
            <p class="services-page__card-description">{{ service.description }}</p>
            <span class="services-page__card-link">Learn More</span>
          </nuxt-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ServicesPage',
  head() {
    return {
      title: 'Our Services - Acme IT Solutions',
      meta: [
        { hid: 'description', name: 'description', content: 'Explore our comprehensive range of IT services including custom software development, cloud solutions, and cybersecurity.' }
      ]
    }
  },
  data() {
    return {
      services: [
        {
          id: 'custom-software',
          icon: 'code',
          title: 'Custom Software Development',
          description: 'Tailored software solutions to meet your unique business needs and drive digital transformation.'
        },
        {
          id: 'cloud-services',
          icon: 'cloud',
          title: 'Cloud Services',
          description: 'Scalable and secure cloud solutions to help your business grow and stay competitive.'
        },
        {
          id: 'cybersecurity',
          icon: 'shield',
          title: 'Cybersecurity',
          description: 'Comprehensive security services to protect your digital assets and ensure business continuity.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.services-page {
  padding: 6rem 0;

  &__title {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3rem;
    color: $text-color;

    &::after {
      content: '';
      display: block;
      width: 50px;
      height: 3px;
      background-color: $primary;
      margin: 1rem auto 0;
    }
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
}

@media (max-width: $breakpoint-lg) {
  .services-page {
    padding: 3rem 0;

    &__title {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }
}
</style>