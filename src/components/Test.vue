<template>
  <div class="test-component">
    This is a test of CSS variables and custom media in a component.
  </div>
</template>

<style>
.test-component {
  font-size: 1rem;
}

@media (--laptops-sm) {
  .test-component {
    font-family: var(--font-serif);
    font-size: 2rem;
  }
}
</style>