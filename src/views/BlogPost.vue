<script setup lang="ts">
import { useSingleArticleRequest } from '@/api/composables/requestComposables';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import RelatedArticles from "@/components/RelatedArticles.vue";

const route = useRoute();

const { singleArticleRequest } = useSingleArticleRequest();
singleArticleRequest.doRequest(route.params.id);

const article = computed(() => singleArticleRequest.data.value);

function formatDate(dateStr: string) {
  const date = new Date(dateStr);

  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  let suffix;
  if (day === 1 || day === 21 || day === 31) suffix = "st";
  else if (day === 2 || day === 22) suffix = "nd";
  else if (day === 3 || day === 23) suffix = "rd";
  else suffix = "th";

  return `${day}${suffix} ${month} ${year}`;
}

const url = ref(location.href);
</script>

<template>
  <article v-if="article" class="article-wrapper">
    <h1 class="article-page-heading">{{ article.title }}</h1>
    <div class="article-info-wrapper">
      <span class="article-info-details">
        {{ formatDate(article.createdAt) }} | By {{ article.author }}
      </span>
      <p class="article-info-intro">{{ article.intro }}</p>
      <img :src="article.image" :alt="article.title" />
    </div>
    <p class="article-body">{{ article.text }}</p>

    <div class="socials-links">
      <span>Share:</span>
      <img src="@/assets/twitter-logo.svg">
      <img src="@/assets/linkedin-logo.svg">
      <img src="@/assets/facebook-logo.png">
    </div>
  </article>

  <template v-else-if="singleArticleRequest.loading.value">
    <p>Loading...</p>
  </template>

  <template v-else-if="singleArticleRequest.error.value">
    <p>An error has occurred. Please try again?</p>
  </template>

  <RelatedArticles />
</template>

<style>
.article-wrapper {
  max-width: 786px;
  margin: auto;
}

.article-page-heading {
  text-align: center;
  padding: 4rem;
  font-weight: bold;
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