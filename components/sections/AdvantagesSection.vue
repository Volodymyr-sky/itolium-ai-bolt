<template>
  <section id="advantages" class="homepage__advantages">
    <b-container>
      <h2 class="homepage__section-title text-center">Our Advantages</h2>
      <b-row>
        <b-col md="4" v-for="(advantage, index) in advantages" :key="index">
          <div class="homepage__advantage-card">
            <div class="homepage__advantage-icon">
              <b-icon :icon="advantage.icon"></b-icon>
            </div>
            <h3 class="homepage__advantage-title">{{ advantage.title }}</h3>
            <p class="homepage__advantage-description">{{ advantage.description }}</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'AdvantagesSection',
  data() {
    return {
      advantages: [
        { icon: 'server', title: 'Reliable Infrastructure', description: 'State-of-the-art servers and networks for uninterrupted service.' },
        { icon: 'shield', title: 'Enhanced Security', description: 'Advanced security measures to protect your valuable data.' },
        { icon: 'phone', title: 'Mobile Solutions', description: 'Cutting-edge mobile applications for on-the-go productivity.' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.homepage {
  &__advantages {
    padding: 6rem 0;
  }

  &__advantage-card {
    background-color: #ffffff;
    border-radius: 10px;
    padding: 2rem;
    height: 100%;
    transition: all 0.3s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    }
  }

  &__advantage-icon {
    font-size: 3rem;
    color: $primary;
    margin-bottom: 1.5rem;
  }

  &__advantage-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  &__advantage-description {
    color: #666;
    margin-bottom: 1.5rem;
  }
}

@media (max-width: $breakpoint-lg) {
  .homepage {
    &__advantages {
      padding: 3rem 0;
    }

    &__advantage-card {
      margin-bottom: 2rem;
      padding: 1.5rem;
    }
  }
}

@media (max-width: $breakpoint-sm) {
  .homepage {
    &__advantage-title {
      font-size: 1.25rem;
    }
  }
}
</style>