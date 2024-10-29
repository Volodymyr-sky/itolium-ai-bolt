<template>
  <section id="testimonials" class="homepage__testimonials">
    <b-container>
      <h2 class="homepage__section-title text-center">Was unsere Kunden sagen</h2>
      <b-row>
        <b-col md="4" v-for="(testimonial, index) in testimonials" :key="index">
          <div class="homepage__testimonial-card">
            <div class="homepage__testimonial-stars">
              <b-icon-star-fill v-for="star in 5" :key="star"></b-icon-star-fill>
            </div>
            <p class="homepage__testimonial-text">{{ testimonial.text }}</p>
            <div class="homepage__testimonial-author">
              <b-avatar :src="testimonial.avatar" size="3rem"></b-avatar>
              <div>
                <h4 class="homepage__testimonial-name">{{ testimonial.name }}</h4>
                <p class="homepage__testimonial-position">{{ testimonial.position }}</p>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'TestimonialsSection',
  data() {
    return {
      testimonials: [
        {
          text: 'Acme IT hat unser Geschäft mit innovativen Technologielösungen transformiert. Sehr zu empfehlen!',
          name: 'Thomas Müller',
          position: 'CEO, Tech Corp',
          avatar: 'https://source.unsplash.com/random/100x100?man'
        },
        {
          text: 'Das Team von Acme IT hat unsere Erwartungen übertroffen. Ihre Expertise ist unübertroffen.',
          name: 'Anna Schmidt',
          position: 'CTO, Innovate GmbH',
          avatar: 'https://source.unsplash.com/random/100x100?woman'
        },
        {
          text: 'Seit der Implementierung der Acme-Lösungen haben wir einen deutlichen Produktivitätsschub erlebt.',
          name: 'Michael Weber',
          position: 'Betriebsleiter, Global Systems',
          avatar: 'https://source.unsplash.com/random/100x100?person'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.homepage__testimonials {
  padding: 6rem 0;

  &-card {
    background-color: #ffffff;
    border-radius: 10px;
    padding: 2rem;
    height: 100%;
    transition: all 0.3s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    }
  }

  &-stars {
    color: #ffc107;
    margin-bottom: 1rem;
  }

  &-text {
    font-style: italic;
    margin-bottom: 1.5rem;
    color: $text-color;
  }

  &-author {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  &-name {
    font-weight: 700;
    margin-bottom: 0;
    font-size: 1.1rem;
  }

  &-position {
    font-size: 0.875rem;
    color: #666;
    margin-bottom: 0;
  }
}

@media (max-width: $breakpoint-lg) {
  .homepage__testimonials {
    padding: 3rem 0;

    &-card {
      margin-bottom: 2rem;
    }
  }
}
</style>