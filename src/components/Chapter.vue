<script setup lang="ts">
import { ref } from 'vue';
import { useIntersectionObserver } from '../utilities/useIntersectionObserver'
import { useIntersectionProgress } from '../utilities/useIntersectionProgress';

defineProps({
  cityWidth: Number,
})

const root = ref<HTMLElement | null>(null)
const { isVisible } = useIntersectionObserver(root, {rootMargin: '500px 500px 500px 500px'})

const city = ref<HTMLElement | null>(null)
const { progress } = useIntersectionProgress(city)
</script>

<template>
  <div
    ref="root"
    class="chapter"
    :style="{
      '--city-progress': progress,
    }"
  >
    <slot name="cover" />
    <div class="chapter-content">
      <div class="city-bg-far" v-if="isVisible">
        <slot name="bg-far" />
      </div>
      <div class="city-bg" v-if="isVisible">
        <slot name="bg" />
      </div>
      <slot name="back" />
      <div
        ref="city"
        class="chapter-city"
        :style="{width: `${cityWidth}px`}"
      >
        <div v-if="isVisible">
          <slot />
        </div>
      </div>
      <slot name="front" />
      <div class="city-fg" v-if="isVisible">
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

  & svg {
    overflow: visible;
  }
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