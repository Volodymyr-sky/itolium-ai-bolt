<template>
  <div class="jobs">
    <b-container>
      <div class="jobs__header">
        <h1 class="jobs__title">Karriere bei Acme IT</h1>
        <p class="jobs__subtitle">
          Werden Sie Teil unseres innovativen Teams und gestalten Sie die digitale Zukunft mit uns
        </p>
      </div>

      <section class="jobs__culture">
        <b-row class="align-items-center">
          <b-col lg="6">
            <div class="jobs__content">
              <h2 class="jobs__section-title">Unsere Unternehmenskultur</h2>
              <p class="jobs__text">
                Bei Acme IT fördern wir eine offene und innovative Arbeitskultur. Wir bieten unseren Mitarbeitern:
              </p>
              <ul class="jobs__benefits-list">
                <li>
                  <b-icon-check-circle-fill class="jobs__benefits-icon"></b-icon-check-circle-fill>
                  Flexible Arbeitszeiten und Remote-Arbeit
                </li>
                <li>
                  <b-icon-check-circle-fill class="jobs__benefits-icon"></b-icon-check-circle-fill>
                  Kontinuierliche Weiterbildungsmöglichkeiten
                </li>
                <li>
                  <b-icon-check-circle-fill class="jobs__benefits-icon"></b-icon-check-circle-fill>
                  Moderne Technologien und Tools
                </li>
                <li>
                  <b-icon-check-circle-fill class="jobs__benefits-icon"></b-icon-check-circle-fill>
                  Teamevents und soziale Aktivitäten
                </li>
                <li>
                  <b-icon-check-circle-fill class="jobs__benefits-icon"></b-icon-check-circle-fill>
                  Betriebliche Altersvorsorge
                </li>
              </ul>
            </div>
          </b-col>
          <b-col lg="6">
            <div class="jobs__image">
              <b-img src="https://source.unsplash.com/random/800x600?office-culture" fluid alt="Unternehmenskultur"></b-img>
            </div>
          </b-col>
        </b-row>
      </section>

      <section class="jobs__positions">
        <h2 class="jobs__section-title text-center">Offene Stellen</h2>
        <div class="jobs__positions-grid">
          <div v-for="position in positions" :key="position.id" class="jobs__position-card">
            <div class="jobs__position-header">
              <h3 class="jobs__position-title">{{ position.title }}</h3>
              <span class="jobs__position-type">{{ position.type }}</span>
            </div>
            <p class="jobs__position-description">{{ position.description }}</p>
            <ul class="jobs__position-requirements">
              <li v-for="(req, index) in position.requirements" :key="index">
                {{ req }}
              </li>
            </ul>
            <nuxt-link :to="`/jobs/${position.id}`" class="btn btn-primary">
              Mehr erfahren
            </nuxt-link>
          </div>
        </div>
      </section>

      <section class="jobs__application">
        <h2 class="jobs__section-title text-center">Initiativbewerbung</h2>
        <div class="jobs__application-content">
          <p class="jobs__text text-center">
            Keine passende Stelle gefunden? Wir freuen uns auch über Ihre Initiativbewerbung!
          </p>
          <div class="jobs__application-form">
            <b-form @submit.prevent="onSubmit">
              <b-row>
                <b-col md="6">
                  <b-form-group label="Vorname" label-for="firstname">
                    <b-form-input
                      id="firstname"
                      v-model="form.firstname"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group label="Nachname" label-for="lastname">
                    <b-form-input
                      id="lastname"
                      v-model="form.lastname"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-form-group label="E-Mail" label-for="email">
                <b-form-input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Position" label-for="position">
                <b-form-input
                  id="position"
                  v-model="form.position"
                  placeholder="Gewünschte Position"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Nachricht" label-for="message">
                <b-form-textarea
                  id="message"
                  v-model="form.message"
                  rows="4"
                ></b-form-textarea>
              </b-form-group>

              <b-form-group label="Lebenslauf" label-for="cv">
                <b-form-file
                  id="cv"
                  v-model="form.cv"
                  accept=".pdf,.doc,.docx"
                  placeholder="Wählen Sie Ihren Lebenslauf aus"
                  required
                ></b-form-file>
              </b-form-group>

              <div class="text-center">
                <b-button type="submit" variant="primary" size="lg">
                  Bewerbung absenden
                </b-button>
              </div>
            </b-form>
          </div>
        </div>
      </section>
    </b-container>
  </div>
</template>

<script>
import jobsData from '@/assets/data/jobs.json'

export default {
  name: 'JobsPage',
  head() {
    return {
      title: 'Karriere | Acme IT Solutions',
      meta: [
        { hid: 'description', name: 'description', content: 'Entdecken Sie spannende Karrieremöglichkeiten bei Acme IT Solutions. Werden Sie Teil unseres innovativen Teams.' }
      ]
    }
  },
  data() {
    return {
      positions: jobsData.positions,
      form: {
        firstname: '',
        lastname: '',
        email: '',
        position: '',
        message: '',
        cv: null
      }
    }
  },
  methods: {
    onSubmit() {
      // Handle form submission
      console.log('Form submitted:', this.form)
      // Reset form
      this.form = {
        firstname: '',
        lastname: '',
        email: '',
        position: '',
        message: '',
        cv: null
      }
      // Show success message
      this.$bvToast.toast('Ihre Bewerbung wurde erfolgreich gesendet!', {
        title: 'Erfolg',
        variant: 'success',
        solid: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.jobs {
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
    margin-bottom: 2rem;
    color: $text-color;
  }

  &__text {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 2rem;
  }

  &__benefits-list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }
  }

  &__benefits-icon {
    color: $primary;
    margin-right: 1rem;
  }

  &__image {
    img {
      border-radius: 10px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }
  }

  &__positions {
    margin: 6rem 0;
  }

  &__positions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }

  &__position-card {
    background: #ffffff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-5px);
    }
  }

  &__position-header {
    margin-bottom: 1.5rem;
  }

  &__position-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  &__position-type {
    display: inline-block;
    padding: 0.25rem 1rem;
    background-color: rgba($primary, 0.1);
    color: $primary;
    border-radius: 20px;
    font-size: 0.875rem;
  }

  &__position-description {
    margin-bottom: 1.5rem;
  }

  &__position-requirements {
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem;

    li {
      margin-bottom: 0.5rem;
      padding-left: 1.5rem;
      position: relative;

      &::before {
        content: '•';
        position: absolute;
        left: 0;
        color: $primary;
      }
    }
  }

  &__application {
    margin-top: 6rem;
  }

  &__application-content {
    max-width: 800px;
    margin: 0 auto;
  }

  &__application-form {
    background: #ffffff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    margin-top: 3rem;

    .form-group {
      margin-bottom: 1.5rem;
    }

    label {
      font-weight: 600;
    }
  }
}

@media (max-width: $breakpoint-lg) {
  .jobs {
    padding: 3rem 0;

    &__title {
      font-size: 2rem;
    }

    &__image {
      margin-top: 2rem;
    }

    &__positions-grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>