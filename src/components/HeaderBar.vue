<script setup lang="ts">
</script>
<template>
  <div class="header-wrapper">
    <header class="top-bar">
      <RouterLink :to="`/`" class="logo">Your Parking Space.</RouterLink>
      <div>Search bar goes here</div>
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
}

.logo {
  font-size: 2rem;
  text-decoration: none;
  background: none !important;
  color: var(--vt-c-white-soft)
}
</style>