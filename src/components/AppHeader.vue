<script setup lang="ts">
import { computed, type PropType } from 'vue'
import IconShare from './IconShare.vue'
import IconInfo from './IconInfo.vue'
import type { Chapter } from '../types/chapter'
import type { I18N } from '../types/i18n'

const props = defineProps({
  chapters: {
    type: Object as PropType<Chapter[]>,
    required: true,
  },
  i18n: {
    type: Object as PropType<I18N>,
    required: true,
  },
})

defineEmits(['open-about', 'open-share'])

const show = computed(() => {
  return props.chapters[0].progress > 0.99
})
</script>


<template>
  <header
    class="header"
    :class="show && 'header-visible'"
  >
    <div class="header-title">
      <h1>{{ i18n.intent }}</h1>
      <div v-html="i18n.titleWithHighlight"></div>
    </div>
    <slot />
    <div class="header-buttons">
      <button class="header-button" @click="$emit('open-share')">
        <IconShare aria-hidden="true" />
        <span class="sr-only">{{ i18n.share }}</span>
      </button>
      <button class="header-button" @click="$emit('open-about')">
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

.header-title,
.header-buttons {
  transform: translateY(-5rem);
  transition: all 0.5s;
}

.header-visible {

  .header-title,
  .header-buttons {
    transform: translateY(0);
  }
}

@media (--laptops-sm) {

  .header {
    transform: translateY(-5rem);
    transition: all 0.5s;
  }

  .header-title,
  .header-buttons {
    transform: translateY(0);
  }

  .header-visible {
    transform: translateY(0);
  }

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