<template>
  <div class="wiki">
    <b-container>
      <div class="wiki__header">
        <h1 class="wiki__title">Wiki-Lexikon</h1>
        <p class="wiki__subtitle">
          Entdecken Sie unser IT-Lexikon mit wichtigen Begriffen und Definitionen aus der Technologiewelt
        </p>
      </div>

      <!-- Search -->
      <div class="wiki__search">
        <b-form-input
          v-model="search"
          placeholder="Begriff suchen..."
          class="wiki__search-input"
        ></b-form-input>
      </div>

      <!-- Categories -->
      <div class="wiki__categories">
        <b-button
          v-for="category in categories"
          :key="category"
          :variant="selectedCategory === category ? 'primary' : 'outline-primary'"
          class="wiki__category-button"
          @click="selectCategory(category)"
        >
          {{ category }}
        </b-button>
      </div>

      <!-- Terms Grid -->
      <div class="wiki__grid">
        <nuxt-link
          v-for="term in filteredTerms"
          :key="term.id"
          :to="`/wiki-lexikon/${term.id}`"
          class="wiki__card"
        >
          <h3 class="wiki__card-title">{{ term.title }}</h3>
          <p class="wiki__card-definition">{{ term.definition }}</p>
          <span class="wiki__card-link">Mehr erfahren</span>
        </nuxt-link>
      </div>
    </b-container>
  </div>
</template>

<script>
import wikiData from '@/assets/data/wiki.json'

export default {
  name: 'WikiLexikonPage',
  head() {
    return {
      title: 'IT Wiki-Lexikon | Technologie-Begriffe einfach erklärt',
      meta: [
        { hid: 'description', name: 'description', content: 'Unser IT-Lexikon erklärt wichtige Begriffe und Konzepte aus der Technologiewelt. Finden Sie Definitionen und Beispiele zu verschiedenen IT-Themen.' }
      ]
    }
  },
  data() {
    return {
      search: '',
      selectedCategory: 'Alle',
      terms: wikiData.terms,
      categories: ['Alle', 'Entwicklung', 'Cloud', 'Security', 'Datenbanken']
    }
  },
  computed: {
    filteredTerms() {
      return this.terms.filter(term => {
        const matchesSearch = term.title.toLowerCase().includes(this.search.toLowerCase()) ||
                            term.definition.toLowerCase().includes(this.search.toLowerCase())
        const matchesCategory = this.selectedCategory === 'Alle' || term.category === this.selectedCategory
        return matchesSearch && matchesCategory
      })
    }
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.wiki {
  padding: 6rem 0;

  &__header {
    text-align: center;
    margin-bottom: 3rem;
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

  &__search {
    max-width: 600px;
    margin: 0 auto 2rem;

    &-input {
      padding: 1rem;
      font-size: 1.1rem;
      border-radius: 10px;
    }
  }

  &__categories {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 3rem;
  }

  &__category-button {
    border-radius: 20px;
    padding: 0.5rem 1.5rem;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }

  &__card {
    display: block;
    background: #ffffff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    color: $text-color;
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-5px);
      text-decoration: none;
      color: $text-color;
    }
  }

  &__card-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  &__card-definition {
    margin-bottom: 1.5rem;
    color: #666;
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
}

@media (max-width: $breakpoint-lg) {
  .wiki {
    padding: 3rem 0;

    &__title {
      font-size: 2rem;
    }

    &__categories {
      margin: 2rem 0;
    }
  }
}
</style>