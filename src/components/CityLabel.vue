<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '../utilities/useIntersectionObserver'

defineProps({
  lineHeight: String,
  bottom: String,
})

const el = ref<HTMLElement | null>(null)

const { isVisible } = useIntersectionObserver(el)
</script>

<template>
  <div
    class="city-label"
    :class="isVisible && 'city-label-visible'"
    :style="{bottom}"
    ref="el"
  >
    <div class="city-label-text">
      <slot />
    </div>
    <div
      class="city-label-line"
      aria-hidden="true"
      :style="{height: lineHeight}"
    />
  </div>
</template>

<style>
.city-label {
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: var(--green-light);
  min-width: 12rem;
}

.city-label-text {
  font-size: 0.875rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  white-space: nowrap;
  opacity: 0;
  transform: translateY(1rem);
  transition: all 0.5s 0.3s;
}

.city-label-line {
  width: 2px;
  background: var(--green-light);
  opacity: 0;
  transform: scaleY(0);
  transform-origin: bottom center;
  transition: all 0.5s;
}

.city-label-visible {

  & .city-label-text {
    opacity: 1;
    transform: translateY(0);
  }

  & .city-label-line {
    opacity: 1;
    transform: scaleY(1);
  }
}

@media ((--phones-landscape) and (not (--tablets-landscape))) {

  .city-label {
    transform-origin: bottom center;
    transform: scale(50%) translateX(-100%);
  }

  .city-label-line {
    width: 4px;
  }
}

@media (--laptops-lg) {

  .city-label-text {
    font-size: 1rem;
  }
}

@media (orientation: portrait) and (--laptops-lg) {

  .city-label-text {
    font-size: 1.5rem;
  }
}
</style>