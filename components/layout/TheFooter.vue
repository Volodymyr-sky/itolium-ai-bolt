<template>
  <footer class="homepage__footer">
    <b-container>
      <b-row>
        <b-col md="4">
          <div class="homepage__footer-logo">
            <b-icon-code-slash font-scale="2"></b-icon-code-slash>
            <span>Acme IT</span>
          </div>
          <p class="homepage__footer-description">Empowering businesses with innovative IT solutions.</p>
        </b-col>
        <b-col md="4">
          <h4 class="homepage__footer-title">Leistungen</h4>
          <b-nav vertical>
            <b-nav-item to="/leistungen/fullstack">Fullstack-Entwicklung</b-nav-item>
            <b-nav-item to="/leistungen/backend">Backend-Entwicklung</b-nav-item>
            <b-nav-item to="/leistungen/cloud">Cloud-Lösungen</b-nav-item>
            <b-nav-item to="/leistungen/datenmigrationen">Datenmigrationen</b-nav-item>
            <b-nav-item to="/leistungen/e-commerce">E-Commerce</b-nav-item>
            <b-nav-item to="/leistungen/frontend">Frontend-Entwicklung</b-nav-item>
          </b-nav>
        </b-col>
        <b-col md="4">
          <h4 class="homepage__footer-title">Kontakt</h4>
          <p><b-icon-geo-alt></b-icon-geo-alt> 123 Tech Street, Berlin, DE</p>
          <p><b-icon-envelope></b-icon-envelope> info@acmeit.de</p>
          <p><b-icon-phone></b-icon-phone> +49 123 456 7890</p>
        </b-col>
      </b-row>
      <hr class="homepage__footer-divider" />
      <div class="homepage__footer-bottom">
        <p class="homepage__footer-copyright">&copy; {{ new Date().getFullYear() }} Acme IT Solutions. All rights reserved.</p>
        <b-nav class="homepage__footer-social">
          <b-nav-item href="#"><b-icon-facebook></b-icon-facebook></b-nav-item>
          <b-nav-item href="#"><b-icon-twitter></b-icon-twitter></b-nav-item>
          <b-nav-item href="#"><b-icon-linkedin></b-icon-linkedin></b-nav-item>
        </b-nav>
      </div>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.homepage__footer {
  background-color: $dark-bg;
  color: #ffffff;
  padding: 4rem 0 2rem;

  &-logo {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 1rem;

    span {
      margin-left: 0.5rem;
    }
  }

  &-description {
    color: #bbb;
    margin-bottom: 2rem;
  }

  &-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  .nav-link {
    color: #bbb;
    padding: 0.25rem 0;
    transition: color 0.3s;

    &:hover {
      color: #ffffff;
    }
  }

  &-divider {
    border-color: rgba(255, 255, 255, 0.1);
    margin: 2rem 0;
  }

  &-bottom {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }

  &-copyright {
    width: 100%;
    margin-bottom: 1rem;
  }

  &-social {
    .nav-link {
      padding: 0.5rem 0.75rem;
    }
  }
}

@media (max-width: $breakpoint-sm) {
  .homepage__footer {
    padding: 3rem 0 1.5rem;

    &-logo {
      font-size: 1.25rem;
    }

    &-title {
      font-size: 1.1rem;
    }
  }
}
</style>