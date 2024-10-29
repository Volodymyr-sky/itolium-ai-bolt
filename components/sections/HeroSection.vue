<template>
  <section class="homepage__hero">
    <b-container>
      <b-row class="align-items-center">
        <b-col lg="6" class="homepage__hero-content">
          <h1 class="homepage__hero-title">Innovate. Transform. Succeed.</h1>
          <p class="homepage__hero-subtitle">Empowering businesses with cutting-edge technology solutions for a digital future.</p>
          <div class="homepage__hero-buttons">
            <b-button variant="primary" size="lg" class="homepage__cta-button">Get Started</b-button>
            <b-button variant="outline-light" size="lg">Learn More</b-button>
          </div>
        </b-col>
        <b-col lg="6" class="d-none d-lg-block">
          <div class="homepage__hero-image">
            <b-img src="https://source.unsplash.com/random/800x600?technology" fluid alt="IT Solutions"></b-img>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.homepage__hero {
  background: linear-gradient(135deg, $primary, $secondary);
  color: #ffffff;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;

  &-content {
    position: relative;
    z-index: 1;
    animation: fadeIn 1s ease-out;
  }

  &-title {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }

  &-subtitle {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }

  &-buttons {
    .btn {
      margin-right: 1rem;
      margin-bottom: 1rem;
      padding: 0.75rem 1.5rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      transition: all 0.3s;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
    }
  }

  &-image {
    position: relative;
    z-index: 1;
    animation: slideInUp 1s ease-out;

    img {
      border-radius: 10px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    }
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInUp {
  from {
    transform: translate3d(0, 40px, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@media (max-width: $breakpoint-lg) {
  .homepage__hero {
    padding: 3rem 0;

    &-title {
      font-size: 2.5rem;
    }

    &-subtitle {
      font-size: 1.1rem;
    }

    &-buttons {
      .btn {
        display: block;
        width: 100%;
        margin-bottom: 1rem;
      }
    }
  }
}

@media (max-width: $breakpoint-sm) {
  .homepage__hero {
    &-title {
      font-size: 2rem;
    }

    &-subtitle {
      font-size: 1rem;
    }
  }
}
</style>