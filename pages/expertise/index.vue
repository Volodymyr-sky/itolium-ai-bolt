<template>
  <div class="expertise">
    <b-container>
      <div class="expertise__header">
        <h1 class="expertise__title">Unsere Expertise</h1>
        <p class="expertise__subtitle">
          Mit jahrelanger Erfahrung und hochqualifizierten Experten bieten wir umfassende IT-Lösungen für Ihr Unternehmen
        </p>
      </div>

      <section class="expertise__areas">
        <b-row>
          <b-col lg="4" v-for="area in expertiseAreas" :key="area.id">
            <nuxt-link :to="`/expertise/${area.id}`" class="expertise__card">
              <div class="expertise__card-icon">
                <b-icon :icon="area.icon"></b-icon>
              </div>
              <h2 class="expertise__card-title">{{ area.title }}</h2>
              <p class="expertise__card-description">{{ area.description }}</p>
              <span class="expertise__card-link">Mehr erfahren</span>
            </nuxt-link>
          </b-col>
        </b-row>
      </section>

      <section class="expertise__certifications">
        <h2 class="expertise__section-title">Zertifizierungen & Auszeichnungen</h2>
        <b-row>
          <b-col md="3" v-for="(cert, index) in certifications" :key="index">
            <div class="expertise__certification-card">
              <img :src="cert.logo" :alt="cert.name" class="expertise__certification-logo">
              <h3 class="expertise__certification-name">{{ cert.name }}</h3>
              <p class="expertise__certification-description">{{ cert.description }}</p>
            </div>
          </b-col>
        </b-row>
      </section>

      <section class="expertise__team">
        <h2 class="expertise__section-title">Unser Expertenteam</h2>
        <b-row>
          <b-col md="4" v-for="(expert, index) in experts" :key="index">
            <div class="expertise__expert-card">
              <div class="expertise__expert-image">
                <b-img :src="expert.image" :alt="expert.name" fluid></b-img>
              </div>
              <h3 class="expertise__expert-name">{{ expert.name }}</h3>
              <p class="expertise__expert-specialization">{{ expert.specialization }}</p>
            </div>
          </b-col>
        </b-row>
      </section>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ExpertisePage',
  head() {
    return {
      title: 'Unsere Expertise | IT-Lösungen und Beratung',
      meta: [
        { hid: 'description', name: 'description', content: 'Entdecken Sie unsere IT-Expertise in den Bereichen Softwareentwicklung, Cloud-Lösungen, Mobile Apps und mehr.' }
      ]
    }
  },
  data() {
    return {
      expertiseAreas: [
        {
          id: 'abap-entwickler-in',
          icon: 'code-slash',
          title: 'ABAP-Entwicklung',
          description: 'Professionelle SAP ABAP-Entwicklung für Ihre Unternehmensprozesse'
        },
        {
          id: 'angular-entwickler',
          icon: 'diagram-3',
          title: 'Angular-Entwicklung',
          description: 'Moderne Webanwendungen mit dem Angular Framework'
        },
        // Add more expertise areas...
      ],
      certifications: [
        {
          logo: 'https://source.unsplash.com/random/150x150?certificate',
          name: 'ISO 9001',
          description: 'Zertifiziertes Qualitätsmanagement'
        },
        // Add more certifications...
      ],
      experts: [
        {
          image: 'https://source.unsplash.com/random/300x300?professional',
          name: 'Dr. Thomas Schmidt',
          specialization: 'Cloud Architecture'
        },
        // Add more experts...
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.expertise {
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
    text-align: center;
    margin: 4rem 0 2rem;
  }

  &__card {
    display: block;
    background: #ffffff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
    text-decoration: none;
    color: $text-color;
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-5px);
      text-decoration: none;
      color: $text-color;
    }
  }

  &__card-icon {
    font-size: 2.5rem;
    color: $primary;
    margin-bottom: 1.5rem;
  }

  &__card-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  &__card-description {
    margin-bottom: 1.5rem;
  }

  &__card-link {
    color: $primary;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.875rem;
    
    &::after {
      content: '→';
      margin-left: 0.5rem;
      transition: transform 0.3s;
    }
  }

  &__certification-card {
    text-align: center;
    padding: 1.5rem;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
  }

  &__certification-logo {
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin-bottom: 1rem;
  }

  &__certification-name {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  &__expert-card {
    text-align: center;
    margin-bottom: 2rem;
  }

  &__expert-image {
    width: 200px;
    height: 200px;
    margin: 0 auto 1rem;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__expert-name {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  &__expert-specialization {
    color: $text-color;
  }
}

@media (max-width: $breakpoint-lg) {
  .expertise {
    padding: 3rem 0;

    &__title {
      font-size: 2rem;
    }
  }
}
</style>