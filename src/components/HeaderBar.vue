<script setup lang="ts">
import { ref } from 'vue';

const searchTerm = ref("");
</script>
<template>
  <div class="header-wrapper">
    <header class="top-bar">
      <RouterLink :to="`/`" class="logo"> <img src="@/assets/yps-logo.png" />
      </RouterLink>
      <div class="search">
        <img src="@/assets/icon-search.png" style="height:1rem;margin-right:0.3rem" />
        <input class="search-field" v-model="searchTerm" placeholder="Enter a search term" />
        <RouterLink :to="`/?search=${encodeURIComponent(searchTerm)}`" class="search-button" :disabled="searchTerm === ''"
          tag="button">Search</RouterLink>
      </div>
    </header>
  </div>
</template>

<style>
.header-wrapper {
  position: sticky;
  top: 0;
  z-index: 10;
}

.top-bar {
  color: var(--vt-c-white-soft);
  background-color: #101921;
  display: block;
  height: 4.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}


.logo {
  font-size: 2rem;
  text-decoration: none;
  background: none !important;
  color: var(--vt-c-white-soft);
}

.logo img {
  vertical-align: middle;
}

.search {
  border: 1px inset #97A8B3;
  border-radius: 3px;
  overflow: auto;
  padding: 0.5rem;
  max-width: 21rem;
  margin-right: 1rem;
}

.search-field {
  border: none;
  outline: none;
  background-color: transparent;
  color: var(--vt-c-white-soft);
  width: 13rem;
}

.search-field::placeholder {
  color: var(--vt-c-white-soft);
  opacity: 1;
  font-weight: bold;
}

.search-button {
  background: var(--yps-green-1);
  color: #0F1A21;
  padding: 0.4rem 1rem 0.4rem 1rem;
  text-align: center;
}


@media screen and (max-width: 650px) {
  .header-wrapper {
    text-align: center;
  }

  .top-bar {
    display: inherit;
    height: auto;
    padding: 0.5rem;
  }

  .search {
    margin: auto;
  }
}
</style>