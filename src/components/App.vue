<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch, type PropType } from 'vue'
import debounce from 'debounce'
import AppHeader from './AppHeader.vue'
import AppNav from './AppNav.vue'
import ChapterBridge from './ChapterBridge.vue'
import ChapterCivilianHarm from './chapters/ChapterCivilianHarm.vue'
import ChapterDisplacement from './chapters/ChapterDisplacement.vue'
import ChapterEnd from './chapters/ChapterEnd.vue'
import ChapterInfrastructure from './chapters/ChapterInfrastructure.vue'
import ChapterIntro from './chapters/ChapterIntro.vue'
import ChapterStarvation from './chapters/ChapterStarvation.vue'
import { useChapters } from '../utilities/useChapters'
import { useI18N } from '../utilities/useI18N'
import { useScale } from '../utilities/useScale'
import type { I18N } from '../types/i18n'
import "../assets/css/variables.css"
import Modal from './Modal.vue'
import ShareOptions from './ShareOptions.vue'
import AboutModal from './AboutModal.vue'
import AppBg from './AppBg.vue'
import AppBgFar from './AppBgFar.vue'

const props = defineProps({
  i18n: {
    type: Object as PropType<I18N>,
    required: true,
  },
  shareUrl: {
    type: String,
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
const progress = computed(() => Math.min(100, scrollProgress.value.toFixed(6) * 100))

const setMaxScroll = () => {
  maxScroll.value = document.body.clientHeight - window.innerHeight
}

const setScrollProgress = () => {
  scrollProgress.value = window.scrollY / maxScroll.value
}

const chapterWrapper = ref<HTMLElement | null>(null)
const intro = ref<typeof ChapterIntro | null>(null)
const civilianHarm = ref<typeof ChapterCivilianHarm | null>(null)
const starvation = ref<typeof ChapterStarvation | null>(null)
const infrastructure = ref<typeof ChapterInfrastructure | null>(null)
const displacement = ref<typeof ChapterDisplacement | null>(null)
const end = ref<typeof ChapterEnd | null>(null)

const chapterRefs = [
  {id: 'intro', ref: intro},
  {id: 'civilianHarm', ref: civilianHarm},
  {id: 'starvation', ref: starvation},
  {id: 'infrastructure', ref: infrastructure},
  {id: 'displacement', ref: displacement},
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

const aboutOpen = ref<boolean>(false)
const shareOpen = ref<boolean>(false)
const isModalOpen = computed(() => aboutOpen.value || shareOpen.value)

watch(isModalOpen, newVal => {
  if (newVal) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
})

onMounted(() => {
  setMaxScroll()
  document.addEventListener('resize', debounce(setMaxScroll, 1000))
  document.addEventListener('resize', debounce(setScrollProgress, 1000))
  nextTick(() => setScrollProgress())
  document.addEventListener('scroll', setScrollProgress)
  document.addEventListener('scroll', () => scrollStarted.value = true, {once: true})
})
</script>

<template>
  <main
    class="outer-wrapper"
    :style="{
      '--scale': scale,
    }"
  >
    <div class="chapters-wrapper">
      <div class="chapters-bg-wrapper" :style="{'--offset': scrollProgress}">
        <AppBgFar class="chapters-bg" />
        <AppBg class="chapters-bg" />
      </div>
      <AppHeader
        :chapters="chapters"
        :i18n="i18n"
        @open-about="aboutOpen = true"
        @open-share="shareOpen = true"
      >
        <AppNav
          :chapters="chapters"
          current="intro"
          :i18n="i18n"
          @goto="scrollToChapter"
        />
      </AppHeader>
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
            '--bridge-color': 'var(--watermelon)',
            '--from': 'var(--intro-gradient)',
            '--to': 'var(--civilian-harm-gradient)',
          }"
        >
          Chapter I
        </ChapterBridge>
        <ChapterCivilianHarm
          ref="civilianHarm"
          :i18n="i18n"
          :scale="scale"
        />
        <ChapterBridge
          :style="{
            '--bridge-color': 'var(--green-light)',
            '--from': 'var(--civilian-harm-gradient)',
            '--to': 'var(--starvation-gradient)',
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
            '--from': 'var(--starvation-gradient)',
            '--to': 'var(--infrastructure-gradient)',
          }"
        >
          Chapter III
        </ChapterBridge>
        <ChapterInfrastructure
          ref="infrastructure"
          :i18n="i18n"
          :scale="scale"
        />
        <ChapterBridge
          :style="{
            '--bridge-color': 'var(--orange-light)',
            '--from': 'var(--infrastructure-gradient)',
            '--to': 'var(--displacement-gradient)',
          }"
        >
          Chapter IV
        </ChapterBridge>
        <ChapterDisplacement
          ref="displacement"
          :i18n="i18n"
          :scale="scale"
        />
        <ChapterBridge
          :style="{
            '--bridge-color': 'var(--slate-light)',
            '--from': 'var(--displacement-gradient)',
            '--to': 'var(--end-gradient)',
          }"
        />
        <ChapterEnd
          ref="end"
          :i18n="i18n"
          :scale="scale"
        />
        <div class="chapters-last-frame">
          <div class="chapters-last-frame-content">
            <div>
              Made by Visualizing Palestine.
            </div>
            <div>
              Based on research by Law for Palestine.
            </div>
            <div>
              Share and Take Action
            </div>
          </div>
        </div>
      </div>
    </div>
    <Transition appear>
      <Modal v-if="shareOpen" @close="shareOpen = false">
        <ShareOptions :i18n="i18n" :url="shareUrl" />
      </Modal>
    </Transition>
    <Transition appear>
      <Modal v-if="aboutOpen" @close="aboutOpen = false">
        <AboutModal :i18n="i18n" />
      </Modal>
    </Transition>
  </main>
</template>

<style>
body {
  color: white;
  background: black;
  scroll-behavior: smooth;
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

.chapters-bg {
  position: fixed;
  bottom: 0;
  bottom: calc(var(--scale) * 256px);
  left: 0;
  transform: translateX(calc(calc(-100% * var(--offset)) + calc(100vw * var(--offset)))) scale(var(--scale));
  transform-origin: bottom left;
}

.chapters-bg-wrapper {
  opacity: 0.1;
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

.chapters-last-frame {
  position: absolute;
  left: 100%;
  top: 0;
  bottom: 0;
  width: 100vw;
  background: var(--end-gradient);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10vw;
}

.chapters-last-frame-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 20rem;
  text-align: center;
}

@media ((--phones-landscape) and (not (--tablets-landscape))) {

  .chapters {
    margin-bottom: 0;
  }
}

@media (--laptops-sm) {

  .chapters {
    margin-bottom: 0;
  }
}
</style>
