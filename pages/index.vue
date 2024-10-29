<template>
  <div class="homepage">
    <TheHeader />
    <main class="homepage__main">
      <HeroSection />
      <AdvantagesSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/layout/TheHeader.vue'
import TheFooter from '~/components/layout/TheFooter.vue'
import HeroSection from '~/components/sections/HeroSection.vue'
import AdvantagesSection from '~/components/sections/AdvantagesSection.vue'
import ServicesSection from '~/components/sections/ServicesSection.vue'
import AboutSection from '~/components/sections/AboutSection.vue'
import TestimonialsSection from '~/components/sections/TestimonialsSection.vue'
import ContactSection from '~/components/sections/ContactSection.vue'

export default {
  name: 'HomePage',
  components: {
    TheHeader,
    TheFooter,
    HeroSection,
    AdvantagesSection,
    ServicesSection,
    AboutSection,
    TestimonialsSection,
    ContactSection
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.homepage {
  &__main {
    padding-top: 80px;
  }

  &__section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 3rem;
    position: relative;
    text-align: center;

    &::after {
      content: '';
      display: block;
      width: 50px;
      height: 3px;
      background-color: $primary;
      margin: 1rem auto 0;
    }
  }
}

@media (max-width: $breakpoint-lg) {
  .homepage {
    &__section-title {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }
}

@media (max-width: $breakpoint-sm) {
  .homepage {
    &__section-title {
      font-size: 1.75rem;
    }
  }
}
</style>