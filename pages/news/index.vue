<template>
  <div class="news">
    <b-container>
      <div class="news__header">
        <h1 class="news__title">News & Insights</h1>
        <p class="news__subtitle">
          Aktuelle Einblicke in die IT-Welt und Neuigkeiten aus unserem Unternehmen
        </p>
      </div>

      <div class="news__grid">
        <article v-for="article in articles" :key="article.id" class="news__card">
          <nuxt-link :to="`/news/${article.id}`" class="news__card-link">
            <div class="news__card-image">
              <b-img :src="article.image" :alt="article.title" fluid></b-img>
            </div>
            <div class="news__card-content">
              <div class="news__card-meta">
                <span class="news__card-date">{{ formatDate(article.date) }}</span>
                <span class="news__card-author">{{ article.author }}</span>
              </div>
              <h2 class="news__card-title">{{ article.title }}</h2>
              <p class="news__card-summary">{{ article.summary }}</p>
              <div class="news__card-tags">
                <span v-for="tag in article.tags" :key="tag" class="news__card-tag">
                  {{ tag }}
                </span>
              </div>
            </div>
          </nuxt-link>
        </article>
      </div>
    </b-container>
  </div>
</template>

<script>
import newsData from '@/assets/data/news.json'

export default {
  name: 'NewsPage',
  head() {
    return {
      title: 'News & Insights | Acme IT Solutions',
      meta: [
        { hid: 'description', name: 'description', content: 'Aktuelle News und Insights aus der IT-Welt. Bleiben Sie informiert über die neuesten Technologietrends und Entwicklungen.' }
      ]
    }
  },
  data() {
    return {
      articles: newsData.articles
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString('de-DE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.news {
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

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }

  &__card {
    background: #ffffff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-5px);
    }

    &-link {
      text-decoration: none;
      color: $text-color;

      &:hover {
        text-decoration: none;
        color: $text-color;
      }
    }

    &-image {
      height: 200px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &-content {
      padding: 1.5rem;
    }

    &-meta {
      display: flex;
      justify-content: space-between;
      font-size: 0.875rem;
      color: #666;
      margin-bottom: 1rem;
    }

    &-title {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    &-summary {
      margin-bottom: 1rem;
      color: $text-color;
    }

    &-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    &-tag {
      padding: 0.25rem 0.75rem;
      background-color: rgba($primary, 0.1);
      color: $primary;
      border-radius: 20px;
      font-size: 0.875rem;
    }
  }
}

@media (max-width: $breakpoint-lg) {
  .news {
    padding: 3rem 0;

    &__title {
      font-size: 2rem;
    }
  }
}
</style>