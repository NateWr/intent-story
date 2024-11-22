<template>
  <div class="chapter">
    <slot name="cover" />
    <div class="chapter-content">
      <div class="city-bg-far">
        <slot name="bg-far" />
      </div>
      <div class="city-bg">
        <slot name="bg" />
      </div>
      <slot name="back" />
      <div class="chapter-city">
        <slot />
      </div>
      <slot name="front" />
      <div class="city-fg">
        <slot name="city-fg" />
      </div>
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

.city-bg-far,
.city-bg,
.city-fg {
  position: absolute;
  bottom: 0;
  left: 0;
}

.city-bg-far {
  filter: brightness(0.65);
  transform: translateX(calc(var(--city-bg-far-scroll-distance) * var(--city-progress)));
}

.city-bg {
  transform: translateX(calc(var(--city-bg-scroll-distance) * var(--city-progress)));
}

.city-fg {
  left: 50vw;
  transform: translateX(calc(var(--city-fg-scroll-distance) * var(--city-progress)));
}

@media (orientation: landscape) {

  .city-fg {
    left: 25vw;
  }
}

.chapter-city {
  z-index: 0;
}
</style>