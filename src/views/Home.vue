<script setup lang="ts">
import { useArticlesListRequest } from '@/api/composables/requestComposables';
import ArticleCard from '@/components/ArticleCard.vue';

const { liveGenerationRequest } = useArticlesListRequest();
liveGenerationRequest.doRequest({})
</script>

<template>
  <template v-if="liveGenerationRequest.data.value?.length">
    <div class="blog-home">
      <ArticleCard v-for="(article, index) in liveGenerationRequest.data.value" :key="index" :article="article" />
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
</style>