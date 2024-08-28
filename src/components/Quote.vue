<script setup lang="ts">
const props = defineProps({
  name: String,
  role: String,
  date: String,
})
</script>

<template>
  <div class="quote-wrapper">
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
  display: grid;
  grid-template-columns: 0.25rem minmax(0, 1fr);
  height: 100%;
  max-width: 90vw;
  gap: 1.5rem;
}

.quote-line {
  width: 2px;
  background: white;
  height: 100%;
}

.quote {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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

@media (--laptops-sm) {

  .quote-wrapper {
    max-width: 30rem;
  }
}
</style>
