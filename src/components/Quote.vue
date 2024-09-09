<script setup lang="ts">
import { ref, useSlots } from 'vue'
import { useIntersectionObserver } from '../utilities/useIntersectionObserver'

defineProps({
  name: String,
  role: String,
  date: String,
  offsetBottom: {
    type: String,
    default() {
      return '0'
    }
  }
})

const slots = useSlots()

const el = ref<HTMLElement | null>(null)

const { isVisible } = useIntersectionObserver(el, {threshold: 0.25})
</script>

<template>
  <div
    class="quote-wrapper"
    :class="isVisible && 'quote-wrapper-visible'"
    :style="{
      paddingBottom: offsetBottom,
    }"
    ref="el"
  >
    <div class="quote-line" aria-hidden="true">
      <div class="quote-line-head">
        <svg width="6" height="27" viewBox="0 0 6 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L6 6V26.5714L0 20.5714V0Z" fill="white"/>
        </svg>
        <svg width="6" height="27" viewBox="0 0 6 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 0L0 6V26.5714L6 20.5714V0Z" fill="white"/>
        </svg>
      </div>
    </div>
    <blockquote class="quote">
      <div class="quote-text quote-slide-in">
        <slot />
      </div>
      <cite class="quote-citation">
        <div class="quote-author">
          <div class="quote-name quote-slide-in">{{ name }}</div>
          <div class="quote-role quote-slide-in">{{ role }}</div>
        </div>
        <div class="quote-date quote-slide-in">{{ date }}</div>
      </cite>
      <div v-if="slots.footer" class="quote-footer quote-slide-in">
        <slot name="footer" />
      </div>
    </blockquote>
  </div>
</template>

<style>
.quote-wrapper {
  --gap: 1.5rem;
  position: relative;
  padding-left: var(--gap);
  max-width: 90vw;
}

.quote-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  background: white;
  height: 0;
  transition: all 1s;
}

.quote-line-head {
  position: absolute;
  bottom: 100%;
  display: flex;
  gap: 4px;
  opacity: 0;
  transform: translate(-7px, 20px);
  transition: opacity 0.25s;
}

.quote {
  display: flex;
  flex-direction: column;
  gap: var(--gap);
}

.quote-text {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 500;
  transition-delay: 0.5s;

  & strong {
    font-weight: 700;
    font-style: italic;
    background: var(--yellow);
    padding: 0 0.1em;
    color: black;
  }
}

.quote-citation {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-style: normal;
}

.quote-author {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.quote-name {
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1;
  transition-delay: .65s;
}

.quote-role {
  font-weight: 500;
  line-height: 1;
  transition-delay: 0.7s;
}

.quote-date {
  font-size: 0.875rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition-delay: 0.75s;
}

.quote-footer {
  transition-delay: 0.8s;
}

.quote-wrapper .narration {
  max-width: none;
}

.quote-slide-in {
  transform: translateY(2rem);
  opacity: 0;
  transition-property: all;
  transition-duration: 0.75s;
}

.quote-wrapper-visible {

  & .quote-line {
    height: 100vh;
  }

  & .quote-line-head {
    opacity: 1;
  }

  & .quote-slide-in {
    transform: translateY(0);
    opacity: 1;
  }
}

@media (--phones-landscape) and (not (--tablets-landscape)) {

  .quote-wrapper {
    --gap: 0.75rem;
    max-width: 24rem;
  }

  .quote-text {
    font-size: 1rem;
  }

  .quote-citation {
    gap: 0.5rem;
  }

  .quote-name {
    font-size: 0.875rem;
  }

  .quote-role,
  .quote-date,
  .quote-wrapper .narration {
    font-size: 0.75rem;
  }
}

@media (--tablets) {

  .quote-wrapper {
    --gap: 2rem;
    max-width: 80vw;
  }

  .quote-text {
    font-size: 1.5rem;
  }

  .quote-citation {
    gap: 1rem;
  }

  .quote-author {
    gap: 0.5rem;
  }

  .quote-name {
    font-size: 1.5rem;
  }

  .quote-role {
    font-size: 1.125rem;
  }

  .quote-date {
    font-size: 1rem;
  }

  .quote-wrapper .narration {
    max-width: 24rem;
  }
}

@media (--tablets-landscape), (--laptops-sm) {

  .quote-wrapper {
    max-width: 32rem;
    --gap: 2rem;
  }
}

@media ((orientation:portrait) and (--laptops-sm)), (--laptops) {

  .quote-wrapper {
    --gap: 3rem;
    max-width: 48rem;
  }

  .quote-text {
    font-size: 2rem;
  }

  .quote-name {
    font-size: 2rem;
  }

  .quote-role {
    font-size: 1.25rem;
  }

  .quote-wrapper .narration {
    font-size: 1.25rem;
    max-width: 32rem;
  }
}

@media ((orientation: portrait) and (--laptops-lg)) {

  .quote-wrapper {
    --gap: 4rem;
    max-width: 64rem;
  }

  .quote-text {
    font-size: 3rem;
  }

  .quote-name {
    font-size: 3rem;
  }

  .quote-role,
  .quote-date {
    font-size: 1.5rem;
  }

  .quote-wrapper .narration {
    font-size: 2rem;
    max-width: 48rem;
  }
}
</style>
