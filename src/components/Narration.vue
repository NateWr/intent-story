<script setup lang="ts">
const props = defineProps({
  size: {
    type: String,
    validator(value: any) {
      return ['md', 'lg'].includes(value)
    },
    default() {
      return 'md'
    }
  },
  line: {
    type: Boolean,
    default() {
      return false
    }
  }
})
</script>
t
<template>
  <div class="narration" :class="`narration-${size}`">
    <slot />
    <div v-if="line" class="narration-line" aria-hidden="true" />
  </div>
</template>

<style>
.narration {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: var(--green-light);
  font-weight: 500;
  line-height: 1.5;
  max-width: 90vw;

  & strong {
    font-weight: 900;
  }
}

.narration-line {
  flex-grow: 1;
  border-left: 1px solid var(--green-light);
}

.narration-lg {
  font-size: 1.5rem;
}

@media (--tablets), (--laptops-sm) {
  .narration {
    max-width: 20rem;
  }

  .narration-lg {
    max-width: 30rem;
  }
}
</style>