<template>
  <div class="car">
    <slot />
    <div
      class="car-line"
      aria-hidden="true"
    />
  </div>
</template>

<style>

.car {
  position: relative;
  left: -2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.car-call,
.car-response {
  width: 80%;
  width: calc(100% - 4rem);
}

.car-response {
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-family: var(--font-serif);
  text-align: end;
  color: white;
}

.car-response-cite {
  font-size: 0.875em;
  font-family: var(--font-sans);
  font-weight: 700;
  font-style: normal;
}

.car-line {
  margin-left: 2rem;
  margin-top: -4rem;
  width: 2px;
  height: 25vh;
  background: var(--color-highlight);
  transform: translateX(-50%);
}

@media (orientation: portrait) and (--laptops-lg) {

  .car {
    gap: 2rem;
  }
}
</style>