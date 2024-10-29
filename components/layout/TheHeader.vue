<template>
  <header class="homepage__header" :class="{ 'homepage__header--scrolled': scrolled }">
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand to="/" class="homepage__logo">
        <b-icon-code-slash font-scale="1.5"></b-icon-code-slash>
        <span>Acme IT</span>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse">
        <template #default="{ expanded }">
          <div class="homepage__burger" :class="{ 'homepage__burger--active': expanded }">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </template>
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown
            id="services-dropdown"
            text="Leistungen"
            :hover="!isMobile"
            @mouseenter.native="showDropdown"
            @mouseleave.native="hideDropdown"
          >
            <b-dropdown-item to="/leistungen/fullstack">Fullstack-Entwicklung</b-dropdown-item>
            <b-dropdown-item to="/leistungen/backend">Backend-Entwicklung</b-dropdown-item>
            <b-dropdown-item to="/leistungen/cloud">Cloud-Lösungen</b-dropdown-item>
            <b-dropdown-item to="/leistungen/datenmigrationen">Datenmigrationen</b-dropdown-item>
            <b-dropdown-item to="/leistungen/e-commerce">E-Commerce</b-dropdown-item>
            <b-dropdown-item to="/leistungen/frontend">Frontend-Entwicklung</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item to="/leistungen">Alle Leistungen</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="#about">Über uns</b-nav-item>
          <b-nav-item href="#testimonials">Referenzen</b-nav-item>
          <b-nav-item href="#contact">Kontakt</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      isMobile: false,
      scrolled: false
    }
  },
  methods: {
    showDropdown() {
      if (!this.isMobile) {
        this.$root.$emit('bv::show::dropdown', 'services-dropdown')
      }
    },
    hideDropdown() {
      if (!this.isMobile) {
        this.$root.$emit('bv::hide::dropdown', 'services-dropdown')
      }
    },
    handleResize() {
      this.isMobile = window.innerWidth < 992
    },
    handleScroll() {
      this.scrolled = window.scrollY > 50
    }
  },
  mounted() {
    this.handleResize()
    this.handleScroll()
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.homepage {
  &__header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    transition: background-color 0.3s;

    &--scrolled {
      background-color: rgba($dark-bg, 0.95);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
  }

  &__logo {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;

    span {
      margin-left: 0.5rem;
    }
  }

  &__burger {
    width: 30px;
    height: 20px;
    position: relative;
    transition: transform 0.3s;
    cursor: pointer;

    span {
      display: block;
      position: absolute;
      height: 2px;
      width: 100%;
      background: #ffffff;
      border-radius: 9px;
      opacity: 1;
      left: 0;
      transition: all 0.25s;

      &:nth-child(1) { top: 0px; }
      &:nth-child(2) { top: 9px; }
      &:nth-child(3) { top: 18px; }
    }

    &--active {
      span {
        &:nth-child(1) {
          top: 9px;
          transform: rotate(135deg);
        }
        &:nth-child(2) {
          opacity: 0;
          left: -60px;
        }
        &:nth-child(3) {
          top: 9px;
          transform: rotate(-135deg);
        }
      }
    }
  }
}

@media (max-width: $breakpoint-lg) {
  .homepage {
    &__header {
      .navbar-brand {
        font-size: 1.25rem;
      }
    }
  }
}
</style>