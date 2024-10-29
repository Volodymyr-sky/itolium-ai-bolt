<template>
  <div class="job-detail" v-if="job">
    <b-container>
      <div class="job-detail__header">
        <h1 class="job-detail__title">{{ job.title }}</h1>
        <div class="job-detail__meta">
          <span class="job-detail__location">
            <b-icon-geo-alt></b-icon-geo-alt> {{ job.location }}
          </span>
          <span class="job-detail__type">
            <b-icon-briefcase></b-icon-briefcase> {{ job.type }}
          </span>
        </div>
      </div>

      <b-row>
        <b-col lg="8">
          <div class="job-detail__content">
            <section class="job-detail__section">
              <h2>Beschreibung</h2>
              <p>{{ job.description }}</p>
            </section>

            <section class="job-detail__section">
              <h2>Anforderungen</h2>
              <ul class="job-detail__requirements">
                <li v-for="(req, index) in job.requirements" :key="index">
                  <b-icon-check-circle-fill class="job-detail__icon"></b-icon-check-circle-fill>
                  {{ req }}
                </li>
              </ul>
            </section>

            <section class="job-detail__section">
              <h2>Wir bieten</h2>
              <ul class="job-detail__benefits">
                <li v-for="(benefit, index) in job.benefits" :key="index">
                  <b-icon-star-fill class="job-detail__icon"></b-icon-star-fill>
                  {{ benefit }}
                </li>
              </ul>
            </section>
          </div>
        </b-col>

        <b-col lg="4">
          <div class="job-detail__sidebar">
            <div class="job-detail__apply">
              <h2>Jetzt bewerben</h2>
              <b-form @submit.prevent="onSubmit" class="job-detail__form">
                <b-form-group label="Name" label-for="name">
                  <b-form-input
                    id="name"
                    v-model="form.name"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group label="E-Mail" label-for="email">
                  <b-form-input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group label="Telefon" label-for="phone">
                  <b-form-input
                    id="phone"
                    v-model="form.phone"
                  ></b-form-input>
                </b-form-group>

                <b-form-group label="Anschreiben" label-for="message">
                  <b-form-textarea
                    id="message"
                    v-model="form.message"
                    rows="4"
                    required
                  ></b-form-textarea>
                </b-form-group>

                <b-form-group label="Lebenslauf" label-for="cv">
                  <b-form-file
                    id="cv"
                    v-model="form.cv"
                    accept=".pdf,.doc,.docx"
                    required
                  ></b-form-file>
                </b-form-group>

                <b-button type="submit" variant="primary" block>
                  Bewerbung absenden
                </b-button>
              </b-form>
            </div>

            <div class="job-detail__contact">
              <h3>Fragen?</h3>
              <p>Kontaktieren Sie uns:</p>
              <div class="job-detail__contact-info">
                <p>
                  <b-icon-envelope></b-icon-envelope>
                  <a :href="`mailto:${job.contact.email}`">{{ job.contact.email }}</a>
                </p>
                <p>
                  <b-icon-telephone></b-icon-telephone>
                  <a :href="`tel:${job.contact.phone}`">{{ job.contact.phone }}</a>
                </p>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
  <div v-else class="text-center py-5">
    <h1>Stelle nicht gefunden</h1>
    <p>Die gesuchte Stelle existiert nicht mehr oder wurde entfernt.</p>
    <b-button variant="primary" to="/jobs">Zurück zur Übersicht</b-button>
  </div>
</template>

<script>
import jobsData from '@/assets/data/jobs.json'

export default {
  name: 'JobDetail',
  async asyncData({ params, error }) {
    const job = jobsData.positions.find(p => p.id === params.id)
    if (!job) {
      error({ statusCode: 404, message: 'Stelle nicht gefunden' })
      return
    }
    return { job }
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: '',
        cv: null
      }
    }
  },
  head() {
    if (!this.job) return {}
    return {
      title: `${this.job.title} | Karriere bei Acme IT`,
      meta: [
        { hid: 'description', name: 'description', content: this.job.description }
      ]
    }
  },
  methods: {
    onSubmit() {
      // Handle form submission
      console.log('Application submitted:', this.form)
      // Reset form
      this.form = {
        name: '',
        email: '',
        phone: '',
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

.job-detail {
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

  &__meta {
    display: flex;
    justify-content: center;
    gap: 2rem;
    color: $text-color;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  &__content {
    background: #ffffff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
  }

  &__section {
    margin-bottom: 2rem;

    h2 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1.1rem;
      line-height: 1.8;
    }
  }

  &__requirements,
  &__benefits {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: flex-start;
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }
  }

  &__icon {
    color: $primary;
    margin-right: 1rem;
    margin-top: 0.25rem;
  }

  &__sidebar {
    position: sticky;
    top: 2rem;
  }

  &__apply {
    background: #ffffff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;

    h2 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
    }
  }

  &__form {
    .form-group {
      margin-bottom: 1.5rem;
    }

    label {
      font-weight: 600;
    }
  }

  &__contact {
    background: #ffffff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

    h3 {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
  }

  &__contact-info {
    p {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.5rem;

      a {
        color: $primary;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}

@media (max-width: $breakpoint-lg) {
  .job-detail {
    padding: 3rem 0;

    &__title {
      font-size: 2rem;
    }

    &__meta {
      flex-direction: column;
      gap: 1rem;
    }

    &__sidebar {
      position: static;
      margin-top: 2rem;
    }
  }
}
</style>