<script setup lang="ts">
</script>
<template>
  <div class="header-wrapper">
    <header class="top-bar">
      <h1>Your Parking Space.</h1>
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
</style>