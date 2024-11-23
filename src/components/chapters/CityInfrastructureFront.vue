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

const svgWidth = computed(() => 30402 * props.speed)
const scaledWidth = computed(() => props.width * props.speed)
</script>

<template>
  <svg
    :width="svgWidth.toFixed()"
    height="633"
    :viewBox="`0 0 ${svgWidth.toFixed()} 633`"
    fill="none"
    :style="{
      width: `${scaledWidth.toFixed()}px`,
      height: 'auto',
    }"
    xmlns="http://www.w3.org/2000/svg"
  >
    <image id="infrastructure-shifa-tank" href="infrastructure-shifa-tank.png" width="995" height="221" :x="speed * 20843" y="417" />
    <image id="city-dark-2" href="city-dark-2.png" width="585" height="585" :x="speed * 4127" y="127" />
    <image id="city-dark-1" href="city-dark-1.png" width="575" height="541" :x="speed * 2478" y="146" />
    <image id="city-dark-4" href="city-dark-4.png" width="816" height="566" :x="speed * 7602" y="183" />
    <image id="city-dark-3" href="city-dark-3.png" width="535" height="477" :x="speed * 18409" y="174" />
    <image id="city-dark-3" href="city-dark-3.png" width="806" height="719" :x="speed * 25850" />
    <image id="city-dark-5" href="city-dark-5.png" width="369" height="653" :x="speed * 22112" y="49" />
  </svg>
</template>