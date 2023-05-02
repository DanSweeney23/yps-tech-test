<template>
  <div class="related-articles-wrapper">
    <div class="related-articles-grid">
      <p>Related news articles<span style="color: --yps-green-1">:</span></p>

    </div>
  </div>
</template>

<style>
.related-articles-wrapper {
  background-color: var(--yps-blue-grey);
  text-align: center;

  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
}

.related-articles-grid {
  max-width: 786px;
  margin:auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
}


</style>