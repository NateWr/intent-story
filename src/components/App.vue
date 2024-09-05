<script setup lang="ts">
import { computed, onMounted, ref, type PropType } from 'vue'
import debounce from 'debounce'
import AppHeader from './AppHeader.vue'
import AppNav from './AppNav.vue'
import ChapterBridge from './ChapterBridge.vue'
import ChapterIntro from './ChapterIntro.vue'
import ChapterStarvation from './ChapterStarvation.vue'
import { useChapters } from '../utilities/useChapters'
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

const chapterWrapper = ref<HTMLElement | null>(null)
const intro = ref<typeof ChapterIntro | null>(null)
const starvation = ref<typeof ChapterStarvation | null>(null)
const infrastructure = ref<typeof ChapterStarvation | null>(null)
const displacement = ref<typeof ChapterStarvation | null>(null)
const civilianHarm = ref<typeof ChapterStarvation | null>(null)
const end = ref<typeof ChapterIntro | null>(null)

const chapterRefs = [
  {id: 'intro', ref: intro},
  {id: 'starvation', ref: starvation},
  {id: 'infrastructure', ref: infrastructure},
  {id: 'displacement', ref: displacement},
  {id: 'civilianHarm', ref: civilianHarm},
  {id: 'end', ref: end},
]

const { chapters, getChapterRef } = useChapters(chapterRefs)

const scrollToChapter = (id: string) => {
  const chapterRef = getChapterRef(id)
  if (!chapterRef) {
    return
  }
  const left = chapterRef.value?.$el?.offsetLeft ?? 0
  const width = chapterWrapper.value?.clientWidth ?? 0
  const scrollToY = maxScroll.value * (left / width)
  window.scrollTo({
    top: scrollToY,
    behavior: 'smooth',
  })
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
    <div class="chapters-wrapper">
      <AppHeader
        :chapters="chapters"
        :i18n="i18n"
      >
        <AppNav
          :chapters="chapters"
          current="intro"
          :i18n="i18n"
          @goto="scrollToChapter"
        />
      </AppHeader>
      <div class="city-bg" :style="`--offset: -${progress * 10}px`" />
      <div
        class="chapters"
        ref="chapterWrapper"
        :style="{
          transform: `translateX(-${progress}%)`,
        }"
      >
        <ChapterIntro
          ref="intro"
          :i18n="i18n"
          :scale="scale"
          :scrollStarted="scrollStarted"
        />
        <ChapterBridge
          :style="{
            '--bridge-color': 'var(--green-light)',
            '--from': 'linear-gradient(to bottom, rgba(133, 0, 255, 0.2), rgba(133, 0, 255, 0.01))',
            '--to': 'linear-gradient(to bottom, rgba(124, 199, 79, 0.2), rgba(124, 199, 79, 0.01))',
          }"
        >
          Chapter II
        </ChapterBridge>
        <ChapterStarvation
          ref="starvation"
          :i18n="i18n"
          :scale="scale"
        />
        <ChapterBridge
          :style="{
            '--bridge-color': 'var(--blue)',
            '--from': 'linear-gradient(to bottom, rgba(124, 199, 79, 0.2), rgba(124, 199, 79, 0.01))',
            '--to': 'linear-gradient(to bottom, rgba(82, 203, 255, 0.2), rgba(82, 203, 255, 0.01))',
          }"
        >
          Chapter III
        </ChapterBridge>
        <ChapterStarvation
          ref="infrastructure"
          :i18n="i18n"
          :scale="scale"
        />
        <ChapterBridge
          :style="{
            '--bridge-color': 'var(--orange)',
            '--from': 'linear-gradient(to bottom, rgba(82, 203, 255, 0.2), rgba(82, 203, 255, 0.01))',
            '--to': 'linear-gradient(to bottom, rgba(255, 194, 82, 0.2), rgba(255, 194, 82, 0.01))',
          }"
        >
          Chapter IV
        </ChapterBridge>
        <ChapterStarvation
          ref="displacement"
          :i18n="i18n"
          :scale="scale"
        />
        <ChapterBridge
          :style="{
            '--bridge-color': 'var(--red-light)',
            '--from': 'linear-gradient(to bottom, rgba(255, 194, 82, 0.2), rgba(255, 194, 82, 0.01))',
            '--to': 'linear-gradient(to bottom, rgba(255, 118, 118, 0.2), rgba(255, 118, 118, 0.01))',
          }"
        >
          Chapter V
        </ChapterBridge>
        <ChapterStarvation
          ref="civilianHarm"
          :i18n="i18n"
          :scale="scale"
        />
        <ChapterBridge
          :style="{
            '--bridge-color': 'var(--slate)',
            '--from': 'linear-gradient(to bottom, rgba(242, 65, 65, 0.2), rgba(242, 65, 65, 0.01))',
            '--to': 'linear-gradient(to bottom, rgba(168, 168, 187, 0.2), rgba(168, 168, 187, 0.01))',
          }"
        >
          End
        </ChapterBridge>
        <ChapterIntro
          ref="end"
          :i18n="i18n"
          :scale="scale"
        />
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

.chapters-wrapper {
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

.chapters {
  position: fixed;
  bottom: 0;
  height: 100vh;
  height: 100lvh;
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 4rem;
}

.city-bg {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.05;
  background-image: url('/city-bg.png');
  background-repeat: repeat-x;
  background-position: var(--offset) bottom;
}

@media ((--phones-landscape) and (not (--tablets-landscape))) {

  .chapters {
    margin-bottom: 0;
  }

  .city-bg {
    background-position: var(--offset) 50vh;
  }
}

@media (--laptops-sm) {

  .chapters {
    margin-bottom: 0;
  }
}
</style>
