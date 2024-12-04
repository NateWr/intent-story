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
    width="13873"
    height="582"
    fill="none"
    viewBox="0 0 13873 582"
  >
    <image id="city-bg-5" href="img/city-bg-5.png" width="186" height="287" x="2197.5" y="241" />
    <image id="city-bg-4" href="img/city-bg-4.png" width="260" height="267" x="1920.5" y="261" />
    <image id="city-bg-1" href="img/city-bg-1.png" width="327" height="339" x="1799.5" y="195" />
    <image id="city-bg-3" href="img/city-bg-3.png" width="297" height="381" x="2102.5" y="148" />
    <image id="city-bg-3" href="img/city-bg-3.png" width="302" height="387" x="4289" y="161" />
    <image id="city-bg-1" href="img/city-bg-1.png" width="397" height="411" x="4440" y="147" />
    <image id="city-bg-2" href="img/city-bg-2.png" width="471" height="550" x="4658" />
  </svg>
</template>