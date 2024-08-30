<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  lineHeight: String,
  bottom: String,
})
</script>

<template>
  <div
    class="city-label"
    :style="{bottom}"
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
}

.city-label-line {
  width: 2px;
  background: var(--green-light);
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