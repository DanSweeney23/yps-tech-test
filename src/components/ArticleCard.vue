<script setup lang="ts">
import type { Article } from '@/api/models/article';
import type { PropType } from 'vue'

const { article } = defineProps({ article: { type: Object as PropType<Article>, required: true } })
</script>

<template>
  <section class="article-card">
    <img :src="article.image" alt="article image" />
    <h3>{{ article.title }}</h3>
    <p>{{ article.intro }}</p>
    <RouterLink :to="`/article/${article.id}`">Read more →</RouterLink>
  </section>
</template>

<style>
.article-card {
  margin: 0.5rem;
  padding: 0.5rem;
}

.article-card > * {
  margin: 0.5rem;
}

.article-card img {
  max-width: 100%;
  margin: auto;
}

.article-card a {
  text-decoration: underline;
  font-weight: bold;
}
</style>