<script setup lang="ts">
defineProps({
  left: Number,
})
</script>

<template>
  <div
    class="positioned-content"
    :style="`left: ${left}px;`"
  >
    <slot />
  </div>
</template>

<style>
.positioned-content {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
}
</style>