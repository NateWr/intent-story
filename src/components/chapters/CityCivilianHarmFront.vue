<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  width: {
    type: Number,
    required: true,
  },
  speed: {
    type: Number,
    required: true,
  },
})

const svgWidth = computed(() => 21063 * props.speed)
const scaledWidth = computed(() => props.width * props.speed)
</script>

<template>
  <svg
    :width="svgWidth.toFixed()"
    height="1139"
    :viewBox="`0 0 ${svgWidth.toFixed()} 1139`"
    fill="none"
    :style="{
      width: `${scaledWidth.toFixed()}px`,
      height: 'auto',
    }"
    xmlns="http://www.w3.org/2000/svg"
  >
    <image id="civharm-tree" href="civharm-tree.png" width="1551" height="1139" :x="speed * 11699" />
    <image id="city-dark-2" href="city-dark-2.png" width="620" height="620" :x="speed * 2596" y="591" />
    <image id="city-dark-4" href="city-dark-4.png" width="816" height="566" :x="speed * 7638" y="682" />
    <image id="city-dark-3" href="city-dark-3.png" width="535" height="477" :x="speed * 17063" y="700" />
    <image id="city-dark-5" href="city-dark-5.png" width="349" height="616" :x="speed * 19371" y="548" />
    <image id="city-dark-3" href="city-dark-3.png" width="806" height="719" :x="speed * 14882" y="499" />
  </svg>
</template>