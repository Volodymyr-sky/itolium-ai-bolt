<template>
  <div class="wiki-detail" v-if="term">
    <b-container>
      <div class="wiki-detail__header">
        <h1 class="wiki-detail__title">{{ term.title }}</h1>
        <p class="wiki-detail__definition">{{ term.definition }}</p>
      </div>

      <div class="wiki-detail__content">
        <div class="wiki-detail__main">
          <div v-html="term.details" class="wiki-detail__details"></div>

          <div v-if="term.examples.length" class="wiki-detail__examples">
            <h2>Beispiele</h2>
            <div v-for="(example, index) in term.examples" :key="index" class="wiki-detail__example">
              <h3>{{ example.title }}</h3>
              <pre><code>{{ example.code }}</code></pre>
            </div>
          </div>
        </div>

        <aside class="wiki-detail__sidebar">
          <div class="wiki-detail__related">
            <h3>Verwandte Begriffe</h3>
            <ul>
              <li v-for="relatedTerm in term.relatedTerms" :key="relatedTerm">
                <nuxt-link :to="`/wiki-lexikon/${slugify(relatedTerm)}`">
                  {{ relatedTerm }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </b-container>
  </div>
  <div v-else class="text-center py-5">
    <h1>Begriff nicht gefunden</h1>
    <p>Der gesuchte Begriff existiert nicht in unserem Lexikon.</p>
    <b-button variant="primary" to="/wiki-lexikon">Zurück zum Lexikon</b-button>
  </div>
</template>

<script>
import wikiData from '@/assets/data/wiki.json'

export default {
  name: 'WikiDetailPage',
  async asyncData({ params, error }) {
    const term = wikiData.terms.find(t => t.id === params.id)
    if (!term) {
      error({ statusCode: 404, message: 'Begriff nicht gefunden' })
      return
    }
    return { term }
  },
  head() {
    if (!this.term) return {}
    return {
      title: `${this.term.title} | IT Wiki-Lexikon`,
      meta: [
        { hid: 'description', name: 'description', content: this.term.definition }
      ]
    }
  },
  methods: {
    slugify(text) {
      return text
        .toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.wiki-detail {
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

  &__definition {
    font-size: 1.2rem;
    color: $text-color;
    max-width: 800px;
    margin: 0 auto;
  }

  &__content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;

    @media (max-width: $breakpoint-lg) {
      grid-template-columns: 1fr;
    }
  }

  &__main {
    background: #ffffff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  &__details {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 2rem;

    ::v-deep {
      h2 {
        font-size: 1.75rem;
        font-weight: 700;
        margin: 2rem 0 1rem;
      }

      p {
        margin-bottom: 1.5rem;
      }
    }
  }

  &__examples {
    margin-top: 3rem;

    h2 {
      font-size: 1.75rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
    }
  }

  &__example {
    margin-bottom: 2rem;

    h3 {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    pre {
      background: #f8f9fa;
      padding: 1.5rem;
      border-radius: 5px;
      overflow-x: auto;
    }
  }

  &__sidebar {
    .wiki-detail__related {
      background: #ffffff;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

      h3 {
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 1rem;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          margin-bottom: 0.5rem;

          a {
            color: $primary;
            text-decoration: none;
            transition: color 0.3s;

            &:hover {
              color: darken($primary, 10%);
            }
          }
        }
      }
    }
  }
}

@media (max-width: $breakpoint-lg) {
  .wiki-detail {
    padding: 3rem 0;

    &__title {
      font-size: 2rem;
    }
  }
}
</style>