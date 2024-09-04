<template>
  <div class="chapter-bridge">
    <div class="chapter-bridge-start" />
    <div class="chapter-bridge-end" />
    <div class="chapter-bridge-transition">
      <div class="chapter-bridge-text">
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
.chapter-bridge {
  position: relative;
  display: flex;
  align-items: stretch;
}

.chapter-bridge-start {
  width: 500px;
  background: var(--from);
}

.chapter-bridge-end {
  width: 500px;
  background: var(--to);
}

.chapter-bridge-transition {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0));
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
}

.chapter-bridge-text {
  font-size: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--bridge-color, white);
  opacity: 0.65;
}
</style>