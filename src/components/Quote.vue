<script setup lang="ts">
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
</script>

<template>
  <div
    class="quote-wrapper"
    :style="{
      paddingBottom: offsetBottom,
    }"
  >
    <div class="quote-line" aria-hidden="true" />
    <blockquote class="quote">
      <div class="quote-text">
        <slot />
      </div>
      <cite class="quote-citation">
        <div class="quote-author">
          <div class="quote-name">{{ name }}</div>
          <div class="quote-role">{{ role }}</div>
        </div>
        <div class="quote-date">{{ date }}</div>
      </cite>
      <slot name="footer" />
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
  height: 200%;
  height: 200vh;
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
}

.quote-role {
  font-weight: 500;
  line-height: 1;
}

.quote-date {
  font-size: 0.875rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.quote-wrapper .narration {
  max-width: none;
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
