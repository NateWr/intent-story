<script setup lang="ts">
import { computed, onMounted, ref, type PropType } from 'vue'
import debounce from 'debounce'
import ChapterStarvation from './ChapterStarvation.vue'
import { useI18N } from '../utilities/useI18N'
import type { I18N } from '../types/i18n'

const props = defineProps({
  i18n: {
    type: Object as PropType<I18N>,
    required: true,
  }
})

const { getI18N, setI18N } = useI18N()
setI18N(props.i18n)
const i18n = getI18N()

const maxScroll = ref<Number>(0)
const scrollProgress = ref<Number>(0)
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
})
</script>

<template>
  <main class="outer-wrapper">
    <div class="themes-wrapper">
      <div class="themes" :style="{
        transform: `translateX(-${progress}%)`
      }">
        <ChapterStarvation />
        <ChapterStarvation />
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
  height: 8000px;
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

</style>
