<script setup lang="ts">
  defineProps({
    width: Number,
  })
</script>

<template>
  <svg
    :style="{
      width: `${(width).toFixed()}px`,
      height: 'auto',
    }"
    xmlns="http://www.w3.org/2000/svg"
    width="10587"
    height="566"
    fill="none"
    viewBox="0 0 10587 566"
  >
    <image id="city-bg-1" href="img/city-bg-1.png" width="329" height="341" x="8006" y="152" />
    <image id="city-bg-5" href="img/city-bg-5.png" width="265.409" height="393.651" x="2231.22" y="41"  transform="rotate(3.965 2231.22 41)"/>
    <image id="city-bg-5" href="img/city-bg-5.png" width="303" height="470" x="857" />
    <image id="city-bg-2" href="img/city-bg-2.png" width="375" height="437" x="5487" y="49" />
    <image id="city-bg-4" href="img/city-bg-4.png" width="178" height="160" x="6464" y="300" />
    <image id="city-bg-1" href="img/city-bg-1.png" width="347" height="361" x="9077" y="122" />
  </svg>
</template>