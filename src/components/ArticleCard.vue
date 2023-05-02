<script setup lang="ts">
import type { Article } from '@/api/models/article';
import type { PropType } from 'vue'

const { article } = defineProps({ article: { type: Object as PropType<Article>, required: true } })
</script>

<template>
  <div class="article-card">
    <img :src="article.image" alt="article image" />
    <h2>{{ article.title }}</h2>
    <p>{{ article.intro }}</p>
    <RouterLink :to="`/blogpost/${article.id}`">Read more...</RouterLink>
  </div>
</template>

<style>
.article-card {
  margin: 0.5rem;
  padding: 0.5rem;
  text-align: center;
}

.article-card img {
  max-width: 100%;
  margin: auto;
}
</style>