<script setup lang="ts">
const props = defineProps({
  left: Number,
  top: {
    type: Number,
    default() {
      return 15
    }
  }
})
</script>

<template>
  <div
    class="positioned-content"
    :style="`left: ${left}px; top: ${top}vh`"
  >
    <slot />
  </div>
</template>

<style>
.positioned-content {
  position: absolute;
  left: 0;
  top: 15vh;
  bottom: 0;
}
</style>