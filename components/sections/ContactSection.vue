<template>
  <section id="contact" class="homepage__contact">
    <b-container>
      <b-row class="justify-content-center">
        <b-col lg="8" class="text-center">
          <h2 class="homepage__section-title">Kontaktieren Sie uns</h2>
          <p class="homepage__contact-description">
            Bereit für die digitale Transformation? Vereinbaren Sie ein kostenloses Beratungsgespräch mit unseren Experten.
          </p>
          <div class="homepage__contact-form">
            <b-form @submit.prevent="onSubmit">
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
                label="Nachricht"
                label-for="message"
              >
                <b-form-textarea
                  id="message"
                  v-model="form.message"
                  placeholder="Wie können wir Ihnen helfen?"
                  rows="4"
                ></b-form-textarea>
              </b-form-group>

              <b-button type="submit" variant="primary" size="lg" class="homepage__contact-button">
                Nachricht senden
              </b-button>
            </b-form>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
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
        message: ''
      }
      // Show success message
      this.$bvToast.toast('Nachricht erfolgreich gesendet!', {
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

.homepage__contact {
  background-color: $light-bg;
  padding: 6rem 0;

  &-description {
    font-size: 1.1rem;
    margin-bottom: 3rem;
    color: $text-color;
  }

  &-form {
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    text-align: left;

    .form-group {
      margin-bottom: 1.5rem;
    }

    label {
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .form-control {
      border: 1px solid #dee2e6;
      border-radius: 5px;
      padding: 0.75rem;
      transition: all 0.3s;

      &:focus {
        border-color: $primary;
        box-shadow: 0 0 0 0.2rem rgba($primary, 0.25);
      }
    }
  }

  &-button {
    width: 100%;
    padding: 1rem;
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
  .homepage__contact {
    padding: 3rem 0;

    &-form {
      padding: 1.5rem;
    }
  }
}
</style>