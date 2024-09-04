<script setup lang="ts">
import { computed, ref } from 'vue'
import { useIntersectionObserver } from '../utilities/useIntersectionObserver'

const props = defineProps({
  layer: {
    type: Number,
    default() {
      return 1
    }
  },
  offsetTop: {
    type: String,
    required: true,
  }
})

const opacity = computed(() => {
  return props.layer > 2
    ? 0.5
    : props.layer > 1
      ? 0.75
      : 1
})

const scale = computed(() => {
  return props.layer > 2
    ? 0.5
    : props.layer > 1
      ? 0.75
      : 1
})

const el = ref<HTMLElement | null>(null)
const { isVisible } = useIntersectionObserver(el)
</script>

<template>
  <div
    aria-hidden="true"
    class="arrow"
    :class="[
      isVisible && 'arrow-visible',
      `arrow-layer-${layer}`
    ]"
    ref="el"
    :style="{
      top: `${offsetTop}vh`,
      transform: `scale(${scale})`,
      opacity,
    }"
  >
    <div class="arrow-line" />
    <div class="arrow-head">
      <svg width="6" height="27" viewBox="0 0 6 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0L6 6V26.5714L0 20.5714V0Z" fill="white"/>
      </svg>
      <svg width="6" height="27" viewBox="0 0 6 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 0L0 6V26.5714L6 20.5714V0Z" fill="white"/>
      </svg>
    </div>
  </div>
</template>

<style>
.arrow {
  position: absolute;
  bottom: 0;
  left: 0;
  transform-origin: bottom center;
}

.arrow-line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 2px;
  background: white;
  height: 100%;
  transform: scaleY(0);
  transform-origin: top center;
  transition: all 1.5s 0.3s;
}

.arrow-head {
  position: absolute;
  bottom: 100%;
  display: flex;
  gap: 4px;
  opacity: 0;
  transform: translate(-7px, 20px);
  transition: opacity 0.5s 0.3s;
}

.arrow-visible {

  & .arrow-line {
    transform: scaleY(1);
  }

  & .arrow-head {
    opacity: 1;
  }
}
</style>
