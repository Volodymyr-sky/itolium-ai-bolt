<template>
  <div class="contact">
    <b-container>
      <div class="contact__header">
        <h1 class="contact__title">Kontakt</h1>
        <p class="contact__subtitle">
          Wir freuen uns darauf, von Ihnen zu hören. Kontaktieren Sie uns für eine unverbindliche Beratung.
        </p>
      </div>

      <b-row>
        <b-col lg="6">
          <div class="contact__form-wrapper">
            <h2 class="contact__section-title">Schreiben Sie uns</h2>
            <b-form @submit.prevent="onSubmit" class="contact__form">
              <b-form-group
                label="Ihr Name"
                label-for="name"
              >
                <b-form-input
                  id="name"
                  v-model="form.name"
                  required
                  placeholder="Geben Sie Ihren Namen ein"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                label="E-Mail-Adresse"
                label-for="email"
              >
                <b-form-input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Geben Sie Ihre E-Mail ein"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                label="Telefon"
                label-for="phone"
              >
                <b-form-input
                  id="phone"
                  v-model="form.phone"
                  placeholder="Geben Sie Ihre Telefonnummer ein"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                label="Betreff"
                label-for="subject"
              >
                <b-form-select
                  id="subject"
                  v-model="form.subject"
                  :options="subjects"
                  required
                ></b-form-select>
              </b-form-group>

              <b-form-group
                label="Ihre Nachricht"
                label-for="message"
              >
                <b-form-textarea
                  id="message"
                  v-model="form.message"
                  placeholder="Wie können wir Ihnen helfen?"
                  rows="4"
                  required
                ></b-form-textarea>
              </b-form-group>

              <b-form-group>
                <b-form-checkbox
                  id="privacy"
                  v-model="form.privacy"
                  required
                >
                  Ich stimme der <a href="/datenschutz">Datenschutzerklärung</a> zu
                </b-form-checkbox>
              </b-form-group>

              <b-button type="submit" variant="primary" size="lg" class="contact__submit-button">
                Nachricht senden
              </b-button>
            </b-form>
          </div>
        </b-col>

        <b-col lg="6">
          <div class="contact__info">
            <h2 class="contact__section-title">Kontaktinformationen</h2>
            
            <div class="contact__info-item">
              <b-icon-geo-alt class="contact__info-icon"></b-icon-geo-alt>
              <div>
                <h3>Adresse</h3>
                <p>
                  Acme IT Solutions GmbH<br>
                  Technologiepark 1<br>
                  10115 Berlin
                </p>
              </div>
            </div>

            <div class="contact__info-item">
              <b-icon-telephone class="contact__info-icon"></b-icon-telephone>
              <div>
                <h3>Telefon</h3>
                <p>
                  <a href="tel:+49301234567">+49 30 123 456 7</a>
                </p>
              </div>
            </div>

            <div class="contact__info-item">
              <b-icon-envelope class="contact__info-icon"></b-icon-envelope>
              <div>
                <h3>E-Mail</h3>
                <p>
                  <a href="mailto:info@acmeit.de">info@acmeit.de</a>
                </p>
              </div>
            </div>

            <div class="contact__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.6325017580545!2d13.3833!3d52.5167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDMxJzAwLjEiTiAxM8KwMjInNTkuOSJF!5e0!3m2!1sde!2sde!4v1625001234567!5m2!1sde!2sde"
                width="100%"
                height="300"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  head() {
    return {
      title: 'Kontakt | Acme IT Solutions',
      meta: [
        { hid: 'description', name: 'description', content: 'Kontaktieren Sie Acme IT Solutions für professionelle IT-Dienstleistungen. Wir sind Ihr Partner für digitale Transformation.' }
      ]
    }
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        subject: null,
        message: '',
        privacy: false
      },
      subjects: [
        { value: null, text: 'Bitte wählen Sie einen Betreff' },
        { value: 'allgemein', text: 'Allgemeine Anfrage' },
        { value: 'beratung', text: 'Beratungsgespräch' },
        { value: 'angebot', text: 'Angebotsanfrage' },
        { value: 'karriere', text: 'Karriere' }
      ]
    }
  },
  methods: {
    onSubmit() {
      // Handle form submission
      console.log('Form submitted:', this.form)
      // Reset form
      this.form = {
        name: '',
        email: '',
        phone: '',
        subject: null,
        message: '',
        privacy: false
      }
      // Show success message
      this.$bvToast.toast('Ihre Nachricht wurde erfolgreich gesendet!', {
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

.contact {
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

  &__form-wrapper {
    background: #ffffff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  &__form {
    .form-group {
      margin-bottom: 1.5rem;
    }

    label {
      font-weight: 600;
    }

    .form-control {
      border: 1px solid #dee2e6;
      border-radius: 5px;
      padding: 0.75rem;

      &:focus {
        border-color: $primary;
        box-shadow: 0 0 0 0.2rem rgba($primary, 0.25);
      }
    }
  }

  &__submit-button {
    width: 100%;
    padding: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  &__info {
    padding-left: 2rem;

    @media (max-width: $breakpoint-lg) {
      padding-left: 0;
      margin-top: 3rem;
    }
  }

  &__info-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 2rem;

    h3 {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    p {
      margin-bottom: 0;
      color: $text-color;

      a {
        color: $text-color;
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
          color: $primary;
        }
      }
    }
  }

  &__info-icon {
    font-size: 1.5rem;
    color: $primary;
    margin-right: 1rem;
    margin-top: 0.25rem;
  }

  &__map {
    margin-top: 3rem;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

    iframe {
      display: block;
    }
  }
}

@media (max-width: $breakpoint-lg) {
  .contact {
    padding: 3rem 0;

    &__title {
      font-size: 2rem;
    }
  }
}
</style>