<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderBar from './components/HeaderBar.vue';
</script>

<template>
  <HeaderBar />
  <div class="page-wrapper">
    <RouterView />

    <!--<nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/Article">Article</RouterLink>
    </nav>-->
  </div>
</template>

<style>
.page-wrapper {
  max-width: 1024px;
  margin:auto;
}
</style>
