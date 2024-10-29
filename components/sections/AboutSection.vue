<template>
  <section id="about" class="homepage__about">
    <b-container>
      <b-row class="align-items-center">
        <b-col lg="6" order="2" order-lg="1">
          <h2 class="homepage__section-title">Über uns</h2>
          <p class="homepage__about-description">
            Mit über einem Jahrzehnt Erfahrung steht Acme IT an der Spitze der technologischen Innovation.
            Unser Team von Experten widmet sich der Bereitstellung modernster Lösungen, die Geschäftswachstum und Effizienz vorantreiben.
          </p>
          <div class="homepage__about-stats">
            <div class="homepage__about-stat">
              <span class="homepage__about-stat-number">10+</span>
              <span class="homepage__about-stat-label">Jahre Erfahrung</span>
            </div>
            <div class="homepage__about-stat">
              <span class="homepage__about-stat-number">200+</span>
              <span class="homepage__about-stat-label">Erfolgreiche Projekte</span>
            </div>
            <div class="homepage__about-stat">
              <span class="homepage__about-stat-number">50+</span>
              <span class="homepage__about-stat-label">Experten</span>
            </div>
          </div>
          <b-button variant="primary" class="homepage__cta-button">
            Mehr erfahren
            <b-icon-chevron-right></b-icon-chevron-right>
          </b-button>
        </b-col>
        <b-col lg="6" order="1" order-lg="2">
          <div class="homepage__about-image">
            <b-img src="https://source.unsplash.com/random/800x600?office" fluid alt="Über uns"></b-img>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.homepage__about {
  background-color: $light-bg;
  padding: 6rem 0;

  &-description {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    color: $text-color;
  }

  &-stats {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  &-stat {
    text-align: center;
    padding: 1rem;

    &-number {
      display: block;
      font-size: 2.5rem;
      font-weight: 700;
      color: $primary;
      margin-bottom: 0.5rem;
    }

    &-label {
      font-size: 0.9rem;
      color: $text-color;
    }
  }

  &-image {
    img {
      border-radius: 10px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }
  }

  .homepage__cta-button {
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

@media (max-width: $breakpoint-lg) {
  .homepage__about {
    padding: 3rem 0;

    &-image {
      margin-bottom: 2rem;
    }

    &-stats {
      flex-wrap: wrap;
    }

    &-stat {
      width: 50%;
      margin-bottom: 1rem;
    }
  }
}

@media (max-width: $breakpoint-sm) {
  .homepage__about {
    &-stat {
      width: 100%;
    }
  }
}
</style>