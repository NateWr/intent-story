<script setup lang="ts">
defineProps({
  line: {
    type: Boolean,
    default() {
      return true
    }
  },
  isVisible: Boolean,
})
</script>

<template>
  <div class="car">
    <slot />
    <div
      v-if="line"
      class="car-line"
      :class="isVisible && 'car-line-visible'"
      aria-hidden="true"
    />
  </div>
</template>

<style>

.car {
  position: relative;
  left: -2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.car-call,
.car-response {
  width: 80%;
  width: calc(100% - 4rem);
}

.car-response {
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-family: var(--font-serif);
  text-align: end;
  color: white;
}

.car-response-cite {
  font-size: 0.875em;
  font-family: var(--font-sans);
  font-weight: 900;
  font-style: normal;
}

.car-line {
  margin-inline-start: 2rem;
  margin-top: -4rem;
  width: 2px;
  height: 25vh;
  background: var(--color-highlight);
  opacity: 0;
  transform: scale(0) translateX(-50%);
  transform-origin: bottom center;
  transition: all 0.5s 0.3s;
}

.car-line-visible {
  opacity: 1;
  transform: scale(1) translateX(-50%);
}

@media ((--phones-landscape) and (not (--tablets-landscape))) {
  .car {
    gap: 0.25rem;
  }
}

@media (orientation: portrait) and (--laptops-lg) {

  .car {
    gap: 2rem;
  }
}
</style>