<script setup lang="ts">
defineProps({
  size: {
    type: String,
    validator(value: any) {
      return ['md', 'lg'].includes(value)
    },
    default() {
      return 'md'
    }
  },
  offsetBottom: {
    type: String,
    default() {
      return '0'
    }
  }
})
</script>
t
<template>
  <div
    class="narration"
    :class="`narration-${size}`"
    :style="{
      paddingBottom: offsetBottom,
    }"
  >
    <slot />
  </div>
</template>

<style>
.narration {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: var(--color-narration);
  font-weight: 500;
  line-height: 1.5;
  max-width: 90vw;

  & strong {
    font-weight: 900;
  }
}

.narration-lg {
  font-size: 1.25rem;
}

.narration-center {
  transform: translateX(-50%);
  align-items: center;
}

.narration-center-line {
  width: 2px;
  height: 35vh;
  background: var(--color-highlight);
  opacity: 0;
  transform: scaleY(0) translateX(-50%);
  transform-origin: bottom center;
  transition: all 0.5s 0.3s;
}

.narration-center-line-visible {
  opacity: 1;
  transform: scaleY(1) translateX(-50%);
}

.narration-dated-date {
  font-weight: 900;
}

@media ((--phones-landscape) and (not (--tablets-landscape))) {

  .narration {
    font-size: 0.875rem;
    gap: 1rem;
    max-width: 28rem;
  }

  .narration-lg {
    max-width: 24rem;
  }
}


@media (--tablets), (--tablets-landscape), (--laptops-sm) {

  .narration {
    font-size: 1.125rem;
    max-width: 24rem;
  }

  .narration-lg {
    font-size: 1.5rem;
    max-width: 32rem;
  }
}

@media (--laptops-lg) {

  .narration {
    font-size: 1.25rem;
    max-width: 28rem;
  }

  .narration-lg {
    font-size: 1.5rem;
    max-width: 32rem;
  }
}

@media (orientation: portrait) and (--laptops-lg) {

  .narration {
    font-size: 1.5rem;
    max-width: 40rem;
  }

  .narration-lg {
    font-size: 2.5rem;
    max-width: 48rem;
  }

  .narration-center-line {
    height: 50vh;
  }
}
</style>