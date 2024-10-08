<template>
  <div class="chapter-cover">
    <div class="chapter-cover-title">
      <slot name="title" />
    </div>
    <div class="chapter-cover-subtitle">
      <slot name="subtitle" />
    </div>
    <div v-if="$slots.default" class="chapter-cover-details">
      <slot />
    </div>
  </div>
</template>

<style>
.chapter-cover {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  width: 100vw;
  padding: 10vh 10vw;
  overflow: visible;
}

.chapter-cover-title {
  font-size: 6rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  line-height: 1;
  color: var(--color-title);
  white-space: nowrap;
}

.chapter-cover-subtitle {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.5;
  text-wrap: balance;

  & strong {
    color: var(--color-subtitle-highlight);
  }
}

.chapter-cover-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  max-width: 20em;
  text-wrap: balance;
}

@media (--phones-landscape) {

  .chapter-cover {
    padding: 1.5rem 3rem;
    padding: 10vh;
    gap: 1rem;
    max-width: 32rem;
  }

  .chapter-cover-subtitle {
    font-size: 1rem;
  }
}

@media (--tablets), (--tablets-landscape) {

  .chapter-cover {
    max-width: 45rem;
  }

  .chapter-cover-title {
    font-size: 10rem;
  }

  .chapter-cover-subtitle {
    font-size: 1.5rem;
  }
}

@media (--tablets-landscape) {

  .chapter-cover-title {
    font-size: 12rem;
  }
}

@media (--laptops-sm) {

  .chapter-cover {
    max-width: 60rem;
    gap: 2rem;
  }

  .chapter-cover-title {
    font-size: 13rem;
  }

  .chapter-cover-subtitle {
    font-size: 2rem;
  }
}

@media (--laptops-lg) {

  .chapter-cover {
    gap: 3rem;
    max-width: 72rem;
  }

  .chapter-cover-title {
    font-size: 16rem;
  }

  .chapter-cover-subtitle {
    font-size: 2.5rem;
  }
}

@media ((orientation: portrait) and (--laptops-lg)) {

  .chapter-cover {
    gap: 6rem;
    max-width: 120rem;
  }

  .chapter-cover-title {
    font-size: 24rem;
  }

  .chapter-cover-subtitle {
    font-size: 4rem;
  }
}
</style>