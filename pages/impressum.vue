<template>
  <div class="imprint">
    <b-container>
      <h1 class="imprint__title">Impressum</h1>
      
      <div class="imprint__content">
        <section class="imprint__section">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            Acme IT Solutions GmbH<br>
            Technologiepark 1<br>
            10115 Berlin
          </p>
          
          <p>
            Handelsregister: HRB 123456<br>
            Registergericht: Amtsgericht Berlin-Charlottenburg
          </p>
        </section>

        <section class="imprint__section">
          <h2>Vertreten durch</h2>
          <p>
            Dr. Thomas Schmidt (Geschäftsführer)
          </p>
        </section>

        <section class="imprint__section">
          <h2>Kontakt</h2>
          <p>
            Telefon: +49 30 123 456 7<br>
            E-Mail: info@acmeit.de
          </p>
        </section>

        <section class="imprint__section">
          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br>
            DE 123 456 789
          </p>
        </section>

        <section class="imprint__section">
          <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            Dr. Thomas Schmidt<br>
            Acme IT Solutions GmbH<br>
            Technologiepark 1<br>
            10115 Berlin
          </p>
        </section>

        <section class="imprint__section">
          <h2>Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr<br>
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ImprintPage',
  head() {
    return {
      title: 'Impressum | Acme IT Solutions',
      meta: [
        { hid: 'description', name: 'description', content: 'Impressum der Acme IT Solutions GmbH. Rechtliche Informationen und Kontaktdaten.' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.imprint {
  padding: 6rem 0;

  &__title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 3rem;
    text-align: center;
  }

  &__content {
    max-width: 800px;
    margin: 0 auto;
  }

  &__section {
    margin-bottom: 3rem;

    h2 {
      font-size: 1.75rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      color: $text-color;
    }

    p {
      font-size: 1.1rem;
      line-height: 1.8;
      color: $text-color;
      margin-bottom: 1.5rem;
    }
  }
}

@media (max-width: $breakpoint-lg) {
  .imprint {
    padding: 3rem 0;

    &__title {
      font-size: 2rem;
    }

    &__section {
      h2 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
}
</style>