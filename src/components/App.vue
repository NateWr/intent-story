<script setup lang="ts">
import { computed, onMounted, ref, type PropType } from 'vue'
import debounce from 'debounce'
import ChapterIntro from './ChapterIntro.vue'
import ChapterStarvation from './ChapterStarvation.vue'
import { useI18N } from '../utilities/useI18N'
import { useScale } from '../utilities/useScale'
import type { I18N } from '../types/i18n'
import "../assets/css/variables.css"

const props = defineProps({
  i18n: {
    type: Object as PropType<I18N>,
    required: true,
  }
})

const { getI18N, setI18N } = useI18N()
setI18N(props.i18n)
const i18n = getI18N()

const { scale } = useScale()

const scrollStarted = ref<boolean>(false)
const maxScroll = ref<number>(0)
const scrollProgress = ref<number>(0)
const progress = computed(() => scrollProgress.value.toFixed(6) * 100)

const setMaxScroll = () => {
  maxScroll.value = document.body.clientHeight - window.innerHeight
}

onMounted(() => {
  setMaxScroll()
  document.addEventListener('resize', debounce(setMaxScroll, 1000))
  document.addEventListener('scroll', () => {
    scrollProgress.value = window.scrollY / maxScroll.value
  })
  document.addEventListener('scroll', () => scrollStarted.value = true, {once: true})
})
</script>

<template>
  <main class="outer-wrapper">
    <div class="themes-wrapper">
      <div class="city-bg" :style="`--offset: -${progress * 10}px`" />
      <div class="themes" :style="{
        transform: `translateX(-${progress}%)`
      }">
        <ChapterIntro :i18n="i18n" :scale="scale" :scrollStarted="scrollStarted" />
        <ChapterStarvation :i18n="i18n" :scale="scale" />
      </div>
    </div>
  </main>
</template>

<style is:global>
body {
  color: white;
  background: black;
  scroll-behavior: smooth;
}

.outer-wrapper {
  height: 24000px;
}

.themes-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  width: 100vw;
  height: 100vh;
  height: 100lvh;
  overflow: hidden;
  display: flex;
}

.themes {
  display: flex;
  flex-wrap: nowrap;
}

.city-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.05;
  background-image: url('/city-bg.png');
  background-repeat: repeat-x;
  background-position: var(--offset) bottom;
}
</style>
