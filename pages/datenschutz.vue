<template>
  <div class="privacy">
    <b-container>
      <h1 class="privacy__title">Datenschutzerklärung</h1>
      
      <div class="privacy__content">
        <section class="privacy__section">
          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
        </section>

        <section class="privacy__section">
          <h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3>Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
        </section>

        <section class="privacy__section">
          <h2>3. Datenerfassung auf dieser Website</h2>
          <h3>Cookies</h3>
          <p>
            Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
          </p>
        </section>

        <section class="privacy__section">
          <h2>4. Analyse-Tools und Werbung</h2>
          <h3>Google Analytics</h3>
          <p>
            Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
          </p>
        </section>

        <section class="privacy__section">
          <h2>5. Newsletter</h2>
          <h3>Newsletterdaten</h3>
          <p>
            Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind.
          </p>
        </section>

        <section class="privacy__section">
          <h2>6. Plugins und Tools</h2>
          <h3>Google Web Fonts</h3>
          <p>
            Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
          </p>
        </section>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'PrivacyPage',
  head() {
    return {
      title: 'Datenschutzerklärung | Acme IT Solutions',
      meta: [
        { hid: 'description', name: 'description', content: 'Datenschutzerklärung der Acme IT Solutions GmbH. Informationen über die Erhebung und Verarbeitung personenbezogener Daten.' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.privacy {
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

    h3 {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 1rem;
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
  .privacy {
    padding: 3rem 0;

    &__title {
      font-size: 2rem;
    }

    &__section {
      h2 {
        font-size: 1.5rem;
      }

      h3 {
        font-size: 1.1rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
}
</style>