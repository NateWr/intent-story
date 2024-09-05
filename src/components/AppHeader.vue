<script setup lang="ts">
import { type PropType } from 'vue'
import IconShare from './IconShare.vue'
import IconInfo from './IconInfo.vue'
import type { I18N } from '../types/i18n'

defineProps({
  i18n: {
    type: Object as PropType<I18N>,
    required: true,
  },
})

defineEmits(['goto'])
</script>


<template>
  <header class="header">
    <div class="header-title">
      <h1>{{ i18n.intent }}</h1>
      <div v-html="i18n.titleWithHighlight"></div>
    </div>
    <slot />
    <div class="header-buttons">
      <button class="header-button">
        <IconShare aria-hidden="true" />
        <span class="sr-only">{{ i18n.share }}</span>
      </button>
      <button class="header-button">
        <IconInfo aria-hidden="true" />
        <span class="sr-only">{{ i18n.about }}</span>
      </button>
    </div>
  </header>
</template>

<style>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  z-index: 99999;
}

.header-title {
  padding: 0 1rem;
  white-space: nowrap;
  line-height: 1;

  & h1 {
    font-size: 1.25rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  & div {
    font-family: var(--font-serif);
    font-size: 0.875rem;
    font-weight: 700;
    font-style: italic;

    & strong {
      color: var(--green-light);
    }
  }
}

.header-buttons {
  margin-left: auto;
  display: flex;
  align-items: center;
}

.header-button {
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.65;

  &:hover {
    opacity: 1;
  }

  &:focus-visible {
    opacity: 1;
    outline: 2px solid;
    outline-offset: -4px;
  }

  & svg {
    width: 32px;
    height: 32px;
  }
}

@media (--laptops-sm) {

  .header-title {

    & h1 {
      font-size: 1.5rem;
    }

    & div {
      font-size: 1rem;
    }
  }
}
</style>