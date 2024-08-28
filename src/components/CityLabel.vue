<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  scale: {
    type: Number,
    required: true,
  },
  lineHeight: {
    type: Number,
    required: true,
  },
  bottom: {
    type: Number,
    required: true,
  },
})

const scaledLineHeight = computed(() => (props.lineHeight * props.scale).toFixed(0))
const scaledBottom = computed(() => (props.bottom * props.scale).toFixed(0))
</script>

<template>
  <div
    class="city-label"
    :style="{
      bottom: scaledBottom + `px`,
    }"
  >
    <div class="city-label-text">
      <slot />
    </div>
    <div
      class="city-label-line"
      aria-hidden="true"
      :style="{
        height: scaledLineHeight + 'px',
      }"
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
}

.city-label-line {
  width: 2px;
  background: var(--green-light);
}
</style>