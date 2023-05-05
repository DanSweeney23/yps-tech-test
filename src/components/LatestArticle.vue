<script setup lang="ts">
import type { Article } from '@/api/models/article';
import type { PropType } from 'vue';

const { article } = defineProps({ article: { type: Object as PropType<Article>, required: true } })

</script>

<template>
  <section class="latest-article-wrapper">
    <div class="latest-article-inner">
      <h2 class="latest-article-title">Latest article</h2>
      <div class="latest-article-grid">
        <img class="latest-article-image" :src="article.image" alt="Latest article image" />
        <div class="latest-article-details">
          <h3>{{ article.title }}</h3>
          <p>{{ article.intro }}</p>
          <RouterLink :to="`/article/${article.id}`" class="latest-article-link">Read article</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.latest-article-wrapper {
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);

  background: linear-gradient(90deg, #003A4D 0%, #0B2430 100%);
  color: var(--vt-c-white-soft);
  padding: 3rem;
}

.latest-article-inner {
  max-width: 1024px;
  margin: auto;
  padding: 1rem;
}

.latest-article-inner h2 {
  margin-bottom: 2rem;
  font-size: 2rem;
}

.latest-article-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

@media screen and (max-width: 768px) {
  .latest-article-grid {
    display: inherit;
  }

  .latest-article-title {
    text-align: center;
  }
}

.latest-article-image {
  width: 100%;
  object-fit: cover;
  height: 70%;
}

.latest-article-details h3 {
  font-size: 1.5rem;
}

.latest-article-details>* {
  margin: 2rem;
}

.latest-article-link {
  background: var(--yps-green-1);
  color: #0F1A21;
  padding: 0.8rem;
  font-weight: bold;
}
</style>