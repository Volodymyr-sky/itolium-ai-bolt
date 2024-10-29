<template>
  <div class="news-detail" v-if="article">
    <b-container>
      <div class="news-detail__header">
        <div class="news-detail__meta">
          <span class="news-detail__date">{{ formatDate(article.date) }}</span>
          <span class="news-detail__author">{{ article.author }}</span>
        </div>
        <h1 class="news-detail__title">{{ article.title }}</h1>
        <div class="news-detail__tags">
          <span v-for="tag in article.tags" :key="tag" class="news-detail__tag">
            {{ tag }}
          </span>
        </div>
      </div>

      <div class="news-detail__image">
        <b-img :src="article.image" :alt="article.title" fluid></b-img>
      </div>

      <div class="news-detail__content" v-html="article.content"></div>

      <div class="news-detail__share">
        <h3>Artikel teilen</h3>
        <div class="news-detail__social">
          <b-button variant="outline-primary" @click="shareOnLinkedIn">
            <b-icon-linkedin></b-icon-linkedin> LinkedIn
          </b-button>
          <b-button variant="outline-primary" @click="shareOnTwitter">
            <b-icon-twitter></b-icon-twitter> Twitter
          </b-button>
          <b-button variant="outline-primary" @click="shareOnXing">
            <b-icon-share></b-icon-share> Xing
          </b-button>
        </div>
      </div>

      <div class="news-detail__related" v-if="relatedArticles.length">
        <h2>Ähnliche Artikel</h2>
        <b-row>
          <b-col md="4" v-for="related in relatedArticles" :key="related.id">
            <nuxt-link :to="`/news/${related.id}`" class="news-detail__related-card">
              <div class="news-detail__related-image">
                <b-img :src="related.image" :alt="related.title" fluid></b-img>
              </div>
              <h3>{{ related.title }}</h3>
              <p>{{ related.summary }}</p>
            </nuxt-link>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
  <div v-else class="text-center py-5">
    <h1>Artikel nicht gefunden</h1>
    <p>Der gesuchte Artikel existiert nicht.</p>
    <b-button variant="primary" to="/news">Zurück zur Übersicht</b-button>
  </div>
</template>

<script>
import newsData from '@/assets/data/news.json'

export default {
  name: 'NewsDetailPage',
  async asyncData({ params, error }) {
    const article = newsData.articles.find(a => a.id === params.id)
    if (!article) {
      error({ statusCode: 404, message: 'Artikel nicht gefunden' })
      return
    }

    const relatedArticles = newsData.articles
      .filter(a => a.id !== params.id && a.tags.some(tag => article.tags.includes(tag)))
      .slice(0, 3)

    return { article, relatedArticles }
  },
  head() {
    if (!this.article) return {}
    return {
      title: this.article.title,
      meta: [
        { hid: 'description', name: 'description', content: this.article.summary }
      ]
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString('de-DE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    },
    shareOnLinkedIn() {
      const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`
      window.open(url, '_blank')
    },
    shareOnTwitter() {
      const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(this.article.title)}`
      window.open(url, '_blank')
    },
    shareOnXing() {
      const url = `https://www.xing.com/spi/shares/new?url=${encodeURIComponent(window.location.href)}`
      window.open(url, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.news-detail {
  padding: 6rem 0;

  &__header {
    text-align: center;
    margin-bottom: 3rem;
  }

  &__meta {
    margin-bottom: 1rem;
    color: #666;
    font-size: 0.875rem;

    span {
      margin: 0 0.5rem;
    }
  }

  &__title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  &__tags {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  &__tag {
    padding: 0.25rem 0.75rem;
    background-color: rgba($primary, 0.1);
    color: $primary;
    border-radius: 20px;
    font-size: 0.875rem;
  }

  &__image {
    margin-bottom: 3rem;

    img {
      width: 100%;
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
  }

  &__content {
    max-width: 800px;
    margin: 0 auto 3rem;
    font-size: 1.1rem;
    line-height: 1.8;

    ::v-deep {
      h2 {
        font-size: 1.75rem;
        font-weight: 700;
        margin: 2rem 0 1rem;
      }

      p {
        margin-bottom: 1.5rem;
      }

      img {
        max-width: 100%;
        height: auto;
        border-radius: 5px;
        margin: 1.5rem 0;
      }
    }
  }

  &__share {
    text-align: center;
    margin-bottom: 4rem;

    h3 {
      margin-bottom: 1rem;
    }
  }

  &__social {
    display: flex;
    justify-content: center;
    gap: 1rem;

    .btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  &__related {
    margin-top: 4rem;

    h2 {
      font-size: 2rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 2rem;
    }
  }

  &__related-card {
    display: block;
    background: #ffffff;
    border-radius: 10px;
    overflow: hidden;
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

  &__related-image {
    height: 200px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 1rem;
  }

  p {
    margin: 1rem;
    color: #666;
  }
}

@media (max-width: $breakpoint-lg) {
  .news-detail {
    padding: 3rem 0;

    &__title {
      font-size: 2rem;
    }

    &__social {
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>