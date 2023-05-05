<script setup lang="ts">
import { useArticlesListRequest } from '@/util/requestComposables';
import ArticleCard from '@/components/ArticleCard.vue';
import LatestArticle from '@/components/LatestArticle.vue';
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const currentPage = ref(1);
if (route.query.page) currentPage.value = parseInt(route.query.page as string)


const { articlesListRequest } = useArticlesListRequest();
articlesListRequest.doRequest({ page: currentPage.value, limit: 16, search: route.query.search });

watch(route, newRoute => {
  window.scrollTo(0, 0);
  currentPage.value = parseInt(newRoute.query.page as string) || 1;
  articlesListRequest.doRequest({ page: currentPage.value, limit: 16, search: route.query.search })
}, { deep: true });

const prevDisabled = computed(() => currentPage.value <= 1);
const nextDisabled = computed(() => (articlesListRequest.data.value?.length ?? 0) < 16);
</script>

<template>
  <template v-if="articlesListRequest.data.value?.length">
    <!--Hide latest article if on the first page or searched?-->
    <LatestArticle v-if="currentPage === 1 && !route.query.search" :article="articlesListRequest.data.value[0]" />
    <div class="articles-grid">
      <ArticleCard v-for="(article, index) in articlesListRequest.data.value" :key="index" :article="article" />
    </div>
    <div class="article-paging-footer">
      <RouterLink class="article-paging-link"
        :to="prevDisabled ? route.fullPath : `?page=${currentPage - 1}&search=${route.query.search ?? ''}`"
        :disabled="prevDisabled" tag="button">
        Previous
      </RouterLink>
      <RouterLink class="article-paging-link"
        :to="nextDisabled ? route.fullPath : `?page=${currentPage + 1}&search=${route.query.search ?? ''}`"
        :disabled="nextDisabled" tag="button">
        Next
      </RouterLink>
    </div>
  </template>

  <template v-else-if="articlesListRequest.loading.value">
    <p>Loading...</p>
  </template>

  <template v-else-if="articlesListRequest.error.value">
    <p>An error has occurred. Please try again?</p>
  </template>

  <template v-else-if="articlesListRequest.data.value?.length === 0">
    <h1>No articles found. Try narrowing down your search.</h1>
  </template>
</template>

<style>
.articles-grid {
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

@media screen and (max-width: 1024px) {
  .articles-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 768px) {
  .articles-grid {
    display: inherit;
  }
}

.article-paging-footer {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}

.article-paging-footer a {
  background: var(--yps-green-1);
  color: #0F1A21;
  padding: 0.8rem;
  font-weight: bold;
  min-width: 6rem;
  text-align: center;
}

.article-paging-footer a[disabled=true] {
  background: #E8EFF3;
  color: #87A1B0;
  cursor: default;
}
</style>