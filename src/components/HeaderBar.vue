<script setup lang="ts">
import { ref } from 'vue';

const searchTerm = ref("");
</script>
<template>
  <div class="header-wrapper">
    <header class="top-bar">
      <RouterLink :to="`/`" class="logo">Your Parking Space.</RouterLink>
      <div class="search">
        <img src="@/assets/icon-search.png" style="height:1rem;margin-right:0.3rem"/>
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
  background-color: var(--vt-c-black-mute);
  display: block;
  padding: 0.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 2rem;
  text-decoration: none;
  background: none !important;
  color: var(--vt-c-white-soft)
}

.search {
  border: 1px solid #97A8B3;
  border-radius: 1px;
  overflow:auto;
  padding: 0.5rem;
}

.search-field {
  border: none;
  outline: none;
  background-color: transparent;
  color: var(--vt-c-white-soft);
}

.search-button {
  background: var(--yps-green-1);
  color: #0F1A21;
  padding: 0.4rem;
  text-align: center;
}

.search-button[disabled=true] {
  background: #87A1B0;
  color: #E8EFF3;
  cursor: default;
}
</style>