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

const svgWidth = computed(() => 21066 * props.speed)
const scaledWidth = computed(() => props.width * props.speed)
</script>

<template>
  <svg
    :width="svgWidth.toFixed()"
    height="832"
    :viewBox="`0 0 ${svgWidth.toFixed()} 832`"
    fill="none"
    :style="{
      width: `${scaledWidth.toFixed()}px`,
      height: 'auto',
    }"
    xmlns="http://www.w3.org/2000/svg"
  >
    <image id="starvation-flour-massacre-soldier" href="starvation-flour-massacre-soldier.png" width="299" height="235" :x="speed * 6800" y="618" />
    <image id="city-dark-2" href="city-dark-2.png" width="446" height="446" :x="speed * 4214" y="435" />
    <image id="city-dark-1" href="city-dark-1.png" width="575" height="541" :x="speed * 9646" y="389" />
    <image id="city-dark-4" href="city-dark-4.png" width="816" height="566" :x="speed * 5677" y="385" />
    <image id="city-dark-3" href="city-dark-3.png" width="535" height="477" :x="speed * 16484" y="430" />
    <image id="city-dark-5" href="city-dark-5.png" width="369" height="653" :x="speed * 19236" y="270" />
    <image id="city-dark-5" href="city-dark-5.png" width="643" height="1138" :x="speed * 467" y="-205" />
  </svg>
</template>