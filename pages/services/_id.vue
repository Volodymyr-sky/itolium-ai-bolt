<template>
  <div class="service-detail" v-if="service">
    <b-container>
      <div class="service-detail__header">
        <h1 class="service-detail__title">{{ service.title }}</h1>
        <div class="service-detail__icon">
          <b-icon :icon="service.icon"></b-icon>
        </div>
      </div>

      <b-row class="align-items-center mb-5">
        <b-col lg="6">
          <div class="service-detail__content">
            <p class="service-detail__description">{{ service.fullDescription }}</p>
            <h2 class="service-detail__subtitle">Key Features</h2>
            <ul class="service-detail__features">
              <li v-for="(feature, index) in service.features" :key="index">
                <b-icon-check-circle-fill class="text-success mr-2"></b-icon-check-circle-fill>
                {{ feature }}
              </li>
            </ul>
          </div>
        </b-col>
        <b-col lg="6">
          <div class="service-detail__image">
            <b-img :src="service.image" fluid :alt="service.title"></b-img>
          </div>
        </b-col>
      </b-row>

      <div class="service-detail__cta">
        <h2 class="service-detail__cta-title">Ready to Get Started?</h2>
        <p class="service-detail__cta-text">Contact us today to discuss how we can help your business succeed.</p>
        <b-button variant="primary" size="lg" href="#contact">Schedule Consultation</b-button>
      </div>
    </b-container>
  </div>
  <div v-else class="text-center py-5">
    <h1>Service not found</h1>
    <p>The requested service does not exist.</p>
    <b-button variant="primary" to="/services">Back to Services</b-button>
  </div>
</template>

<script>
export default {
  name: 'ServiceDetail',
  async asyncData({ params }) {
    const services = {
      'custom-software': {
        id: 'custom-software',
        icon: 'code',
        title: 'Custom Software Development',
        description: 'Tailored software solutions to meet your unique business needs.',
        fullDescription: 'Our custom software development services are designed to help businesses streamline their operations and achieve their digital transformation goals. We work closely with you to understand your requirements and deliver solutions that drive growth.',
        features: [
          'Tailored solutions for your specific needs',
          'Agile development methodology',
          'Cross-platform compatibility',
          'Scalable architecture',
          'Ongoing support and maintenance'
        ],
        image: 'https://source.unsplash.com/random/800x600?coding'
      },
      'cloud-services': {
        id: 'cloud-services',
        icon: 'cloud',
        title: 'Cloud Services',
        description: 'Scalable and secure cloud solutions for your growing business.',
        fullDescription: 'Our cloud services help businesses leverage the power of cloud computing to improve efficiency, reduce costs, and enhance scalability. We provide end-to-end cloud solutions tailored to your needs.',
        features: [
          'Cloud migration strategy',
          'Infrastructure as a Service (IaaS)',
          'Platform as a Service (PaaS)',
          'Cloud security and compliance',
          '24/7 monitoring and support'
        ],
        image: 'https://source.unsplash.com/random/800x600?cloud'
      },
      'cybersecurity': {
        id: 'cybersecurity',
        icon: 'shield',
        title: 'Cybersecurity',
        description: 'Comprehensive security services to protect your digital assets.',
        fullDescription: 'Our cybersecurity services provide robust protection for your business against evolving cyber threats. We implement multi-layered security measures to safeguard your data and systems.',
        features: [
          'Security assessment and auditing',
          'Threat detection and prevention',
          'Data encryption and protection',
          'Security awareness training',
          'Incident response planning'
        ],
        image: 'https://source.unsplash.com/random/800x600?security'
      }
    }

    const service = services[params.id]
    return { service }
  },
  head() {
    if (!this.service) return {}
    return {
      title: `${this.service.title} - Acme IT Solutions`,
      meta: [
        { hid: 'description', name: 'description', content: this.service.fullDescription }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.service-detail {
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

  &__icon {
    font-size: 4rem;
    color: $primary;
    margin-bottom: 2rem;
  }

  &__content {
    margin-bottom: 2rem;
  }

  &__description {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    color: $text-color;
  }

  &__subtitle {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: $text-color;
  }

  &__features {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      font-size: 1.1rem;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
    }
  }

  &__image {
    img {
      border-radius: 10px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }
  }

  &__cta {
    text-align: center;
    margin-top: 4rem;
    padding: 3rem;
    background-color: $light-bg;
    border-radius: 10px;

    &-title {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: $text-color;
    }

    &-text {
      font-size: 1.1rem;
      margin-bottom: 2rem;
      color: $text-color;
    }
  }
}

@media (max-width: $breakpoint-lg) {
  .service-detail {
    padding: 3rem 0;

    &__title {
      font-size: 2rem;
    }

    &__image {
      margin-top: 2rem;
    }

    &__cta {
      margin-top: 2rem;
      padding: 2rem;

      &-title {
        font-size: 1.75rem;
      }
    }
  }
}
</style>