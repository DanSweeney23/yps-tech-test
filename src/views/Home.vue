<script setup lang="ts">
import { useArticlesListRequest } from '@/api/composables/requestComposables';

const { liveGenerationRequest } = useArticlesListRequest();
liveGenerationRequest.doRequest({})
</script>

<template>
  <template v-if="liveGenerationRequest.data.value?.length">
    <div class="blog-home">
      <div v-for="(article, index) in liveGenerationRequest.data.value" :key="index" class="article-card">
        <img :src="article.image" alt="article image" />
        <h2>{{ article.title }}</h2>
        <p>{{ article.intro }}</p>
        <RouterLink :to="`/blogpost/${article.id}`">Read more...</RouterLink>
      </div>
    </div>
  </template>

  <template v-else-if="liveGenerationRequest.loading.value">
    <p>Loading...</p>
  </template>

  <template v-else-if="liveGenerationRequest.error.value">
    <p>An error has occurred. Please try again?</p>
  </template>
</template>

<style>
.blog-home {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

@media screen and (max-width: 1024px) {
  .blog-home {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 768px) {
  .blog-home {
    display: inherit;
  }
}

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