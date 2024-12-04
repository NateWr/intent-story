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

const svgWidth = computed(() => 27746 * props.speed)
const scaledWidth = computed(() => props.width * props.speed)
</script>

<template>
  <svg
    :width="svgWidth.toFixed()"
    height="632"
    :viewBox="`0 0 ${svgWidth.toFixed()} 632`"
    fill="none"
    :style="{
      width: `${scaledWidth.toFixed()}px`,
      height: 'auto',
    }"
    xmlns="http://www.w3.org/2000/svg"
  >
    <image id="displacement-soldiers-watching" href="img/displacement-soldiers-watching.png" width="414" height="555" :x="speed * 10701" y="321" />
    <image id="displacement-family" href="img/displacement-family.png" width="1326" height="333" :x="speed * 7016" y="361" />
    <image id="displacement-soldier" href="img/displacement-soldier.png" width="302" height="288" :x="speed * 12256" y="373" />
    <image id="city-dark-2" href="img/city-dark-2.png" width="446" height="446" :x="speed * 3725" y="233" />
    <image id="city-dark-1" href="img/city-dark-1.png" width="575" height="541" :x="speed * 1558" y="186" />
    <image id="city-dark-4" href="img/city-dark-4.png" width="816" height="566" :x="speed * 6126" y="183" />
    <image id="city-dark-3" href="img/city-dark-3.png" width="535" height="477" :x="speed * 16733" y="214" />
    <image id="city-dark-3" href="img/city-dark-3.png" width="806" height="719" :x="speed * 24274" />
    <image id="city-dark-5" href="img/city-dark-5.png" width="369" height="653" :x="speed * 20436" y="49" />
    <image id="displacement-brothers" href="img/displacement-brothers.png" width="975" height="410" :x="speed * 21100" y="235" />
  </svg>
</template>