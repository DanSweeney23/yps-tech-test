<script setup lang="ts">
import { useSingleArticleRequest } from '@/util/requestComposables';
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import RelatedArticles from "@/components/RelatedArticles.vue";
import { formatDate } from "@/util/util";

const route = useRoute();

const { singleArticleRequest } = useSingleArticleRequest();
singleArticleRequest.doRequest(route.params.id);

const article = computed(() => singleArticleRequest.data.value);

watch(route, (newRoute, oldRoute) => {
  if (newRoute.redirectedFrom?.name != oldRoute.name)
    //Added because navigating to a different article from within one article doesn't move to the top of the page
    window.scrollTo(0, 0);
  singleArticleRequest.doRequest(newRoute.params.id);
}, { deep: true })
</script>

<template>
  <article v-if="article" class="article-wrapper">
    <h1 class="article-page-heading">{{ article.title }}</h1>
    <div class="article-info-wrapper">
      <span class="article-info-details">
        {{ formatDate(article.createdAt) }} | By {{ article.author }}
      </span>
      <p class="article-info-intro">{{ article.intro }}</p>
      <img class="article-page-image" :src="article.image" :alt="article.title" />
    </div>
    <p class="article-body">{{ article.text }}</p>

    <div class="socials-links">
      <span>Share:</span>
      <img src="@/assets/twitter-logo.svg">
      <img src="@/assets/linkedin-logo.svg">
      <img src="@/assets/facebook-logo.png">
    </div>
    <RelatedArticles :current-article-id="article?.id" />
  </article>

  <template v-else-if="singleArticleRequest.loading.value">
    <p>Loading...</p>
  </template>

  <template v-else-if="singleArticleRequest.error.value">
    <p>An error has occurred. Please try again?</p>
  </template>
</template>

<style>
.article-wrapper {
  max-width: 786px;
  margin: auto;
  padding: 10px;
}

.article-page-heading {
  text-align: center;
  padding: 4rem;
  font-weight: bold;
  font-size: 2rem;
}

.article-info-wrapper {
  background-color: var(--yps-blue-grey);
  text-align: center;
  font-weight: bold;
  padding: 2rem;
  border-top: 0.3rem solid var(--yps-green-1);
  margin-bottom: 2rem;
}

.article-info-details {
  display: flex;
  justify-content: center;
  color: #87A2B1;
}

.article-page-image {
  transform: scale(1.3,1);  
  max-width: 80vw;
  object-fit: cover;
}

.article-info-intro {
  padding: 1rem 0 1rem 0;
}

.article-body {
  margin-bottom: 2rem;
}

.socials-links {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.socials-links img {
  width: 1.5rem;
}
</style>