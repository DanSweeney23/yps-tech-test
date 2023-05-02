<script setup lang="ts">
import { useArticlesListRequest } from '@/composables/requestComposables';
import ArticleCard from "@/components/ArticleCard.vue";

const { liveGenerationRequest } = useArticlesListRequest();
liveGenerationRequest.doRequest({ page: 1, limit: 3 }); //Seems like you cant give a limit without also specifying a page
</script>

<template>
  <div class="related-articles-wrapper">
    <div class="related-articles-grid">
      <p class="related-articles-text">Related news articles<span>:</span></p>
      <ArticleCard v-for="(article, index) in liveGenerationRequest.data.value" :key="index" :article="article" />
    </div>
  </div>
</template>

<style>
.related-articles-wrapper {
  background-color: var(--yps-blue-grey);
  text-align: left;
  padding: 3rem 0 3rem;

  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
}

.related-articles-grid {
  max-width: 1024px;
  margin: auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

@media screen and (max-width: 768px) {
  .related-articles-grid {
    display: inherit;
  }
  .related-articles-text {
    text-align: center;
  }
}

.related-articles-text {
  font-size: 2rem;
}

.related-articles-text>span {
  color: var(--yps-green-1)
}
</style>