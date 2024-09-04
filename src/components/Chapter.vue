<template>
  <div class="chapter">
    <slot name="cover" />
    <div class="chapter-content">
      <slot name="back" />
      <div class="chapter-city">
        <slot />
      </div>
      <slot name="front" />
    </div>
  </div>
</template>

<style>
.chapter {
  position: relative;
  display: flex;
}

.chapter-content {
  position: relative;
  display: flex;
  align-items: flex-end;
}

.chapter-city {
  z-index: 0;
}
</style>