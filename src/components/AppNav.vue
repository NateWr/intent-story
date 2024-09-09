<script setup lang="ts">
import { computed, nextTick, ref, watch, type PropType } from 'vue'
import { useI18N } from '../utilities/useI18N'
import type { Chapter } from '../types/chapter'

const props = defineProps({
  chapters: {
    type: Object as PropType<Chapter[]>,
    required: true,
  },
})

defineEmits(['goto'])

const { getI18N } = useI18N()
const i18n = getI18N()

const currentIndex = computed(() => {
  return props.chapters.findIndex(chapter => chapter.progress > 0 && chapter.progress < 1)
})

const listRef = ref<HTMLElement | null>(null)

watch(currentIndex, (newVal) => {
  if (newVal < 0) {
    return
  }
  nextTick(() => {
    if (!listRef.value) {
      return
    }
    const currentEl = listRef.value.querySelector('[aria-current="true"]')
    if (!currentEl) {
      return
    }
    currentEl?.parentElement?.scrollIntoView()
  })
})
</script>

<template>
  <nav class="app-nav" :aria-label="i18n.chapters">
    <ol ref="listRef">
      <li
        v-for="(chapter, index) in chapters"
        :key="chapter.id"
      >
        <a
          :aria-current="index === currentIndex"
          class="app-nav-link"
          :class="chapter.progress > 0 && 'app-nav-link-active'"
          :href="`#${chapter.id}`"
          :style="{
            '--chapter-color': chapter.color,
            '--progress': `${(chapter.progress * 100).toFixed(0)}%`,
          }"
          @click.prevent="$emit('goto', chapter.id)"
        >
          <span>{{ chapter.title }}</span>
          <span class="app-nav-dot" aria-hidden="true" />
          <template v-if="index < chapters.length - 1">
            <span class="app-nav-line" aria-hidden="true" />
            <span class="app-nav-line-progress" aria-hidden="true" />
          </template>
        </a>
      </li>
    </ol>
  </nav>
</template>

<style>
.app-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  background: black;

  & ol {
    width: 100vw;
    height: 4rem;
    overflow-x: auto;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;

    &:focus-visible {
      outline: 2px solid;
      outline-offset: -4px;
    }
  }

  & li:first-child {
    padding-left: 1rem;
  }

  & li:last-child {
    padding-right: 1rem;
  }

  & li:not(:last-child) .app-nav-link {
    padding-right: 2rem;
  }
}

.app-nav-link {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.35;

  > span {
    white-space: nowrap;
  }

  &:hover,
  &:focus-visible {
    opacity: 1;
    color: var(--chapter-color);

    & .app-nav-dot {
      background: var(--chapter-color);
    }

    & .app-nav-line {
      opacity: 0.35;
    }
  }

  &:focus-visible {
    outline: 2px solid;
    outline-offset: 0.25rem;
  }
}

.app-nav-link-active {
  opacity: 1;
  color: var(--chapter-color);

  & .app-nav-dot,
  & .app-nav-line-progress {
    background: var(--chapter-color);
  }

  & .app-nav-line {
    opacity: 0.35;
  }
}

.app-nav-dot {
  width: 0.5rem;
  height: 0.5rem;
  background: white;
  border-radius: 9999px;
}

.app-nav-line,
.app-nav-line-progress {
  position: absolute;
  left: 0.5rem;
  bottom: 0.25rem;
  right: 0;
  height: 1px;
  background: white;
  z-index: -1;
}

.app-nav-line-progress {
  left: 0;
  right: auto;
  width: var(--progress);
  background: var(--chapter-color);
}

@media ((--phones-landscape) and (not (--tablets-landscape))) {
  .app-nav {
    display: none;
  }
}

@media (--tablets-landscape) {

  .app-nav {
    width: 100%;

    & li {
      flex-grow: 1;

      &:last-child {
        flex-grow: 0;
      }
    }
  }
}

@media (--laptops-sm) {

  .app-nav {
    position: relative;
    background: none;
    width: auto;

    & ol {
      width: auto;
    }

    & li {
      flex-grow: 0;
    }

    & li:not(:last-child) .app-nav-link {
      padding-right: 3rem;
    }
  }
}
</style>