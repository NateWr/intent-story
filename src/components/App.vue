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
  <main class="outer-wrapper">
    <div class="chapters-wrapper">
      <svg
        class="chapters-bg"
        width="6271"
        height="832"
        viewBox="0 0 6271 832"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        :style="{
          '--offset': scrollProgress,
        }"
      >
        <path d="M11.9484 327.999C-5.65161 325.599 -18.3849 335.665 -22.5516 340.999C-44.2007 377.999 -87.1988 458.5 -85.9988 484.5C-84.7988 510.5 -43.2007 1002.83 -22.5516 1101.5C2068.63 1113.83 6258.7 1131.1 6289.5 1101.5C6328 1064.5 6307 423 6289.5 382C6272 341 6171.5 333.5 6130.5 325.5C6089.5 317.5 6009.5 395 5972 395C5934.5 395 5829.5 408.5 5787 395C5744.5 381.5 5738 359.5 5696 347.5C5654 335.5 5630 325.5 5623 325.5H5454.5C5406.5 325.5 5376 382 5330.5 395C5285 408 5198 432 5174.5 423C5151 414 5000 452 4969.5 432C4939 412 4939 395 4914.5 382C4890 369 4795 452 4764.5 452C4734 452 4698 505.5 4666 505.5C4634 505.5 4604 489.5 4573.5 515C4543 540.5 4514 518.5 4495 515C4476 511.5 4311 484.5 4282 452C4258.8 426 4245.33 421.833 4241.5 423C4188.83 412.333 4077.5 391.8 4053.5 395C4023.5 399 3927.5 452 3903 452C3878.5 452 3730 480.5 3706 480.5C3682 480.5 3644 502.5 3635 505.5C3626 508.5 3523.5 462 3509 461.5C3494.5 461 3463 397.498 3436 368C3409 338.502 3318 377.498 3271 382C3224 386.502 3165.5 427 3143.5 442.5C3121.5 458 2969 461 2936 442.5C2903 424 2843.5 426.498 2813 426.498C2782.5 426.498 2782.5 442.5 2744 452C2705.5 461.5 2576.5 475.5 2538 484.5C2507.2 491.7 2370.47 459.5 2305.95 442.5C2291.95 441.5 2254.45 428 2237.95 427C2221.45 426 2209.95 426 2170.95 423C2131.95 420 2126.95 400.5 2111.45 395C2095.95 389.5 2081.95 406 2069.45 407C2056.95 408 1967.95 382 1935.95 382C1903.95 382 1847.45 377.5 1810.45 368C1773.45 358.5 1744.95 348.5 1712.45 346.5C1679.95 344.5 1593.95 340 1576.45 340C1558.95 340 1479.45 299 1459.95 299C1440.45 299 1411.45 321.998 1401.45 325.499C1391.45 329 1361.95 311.999 1333.45 312.499C1304.95 312.999 1296.45 329.998 1289.95 333.498C1283.45 336.998 1216.45 318.998 1196.95 321.998C1177.45 324.998 1140.45 356.498 1128.95 360.498C1117.45 364.498 1051.45 391.998 1046.45 391.998H955.448C918.948 391.998 812.448 425.498 796.948 426.498C781.448 427.498 735.948 412.998 722.448 411.498C708.948 409.998 667.448 426.998 631.948 423.498C596.448 419.998 588.448 414.998 565.448 409.998C542.448 404.998 513.948 396.498 476.448 397.498C438.948 398.498 428.448 394.998 414.448 391.998C400.448 388.998 399.5 385.5 384 382C368.5 378.5 304.448 374.998 293.448 377.498C282.448 379.998 261.948 363.998 251.448 362.498C240.948 360.998 168.948 349.498 158.948 351.498C148.948 353.498 103.948 349.498 88.9484 349.498C73.9484 349.498 33.9484 330.999 11.9484 327.999Z" fill="url(#paint1_linear_420_11)"/>
        <defs>
          <linearGradient id="paint1_linear_420_11" x1="3113" y1="326.5" x2="3113" y2="648" gradientUnits="userSpaceOnUse">
            <stop stop-color="rgba(255, 255, 255, 0.075)"/>
            <stop offset="1" stop-color="rgba(255, 255, 255, 0.0)"/>
          </linearGradient>
        </defs>
      </svg>
      <svg
        class="chapters-bg"
        width="6271"
        height="832"
        viewBox="0 0 6271 832"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        :style="{
          '--offset': (scrollProgress / 2),
        }"
      >
        <path d="M2260.05 142.95C2277.65 140.057 2290.39 152.19 2294.55 158.618C2306.84 186.338 2340.68 241.778 2377.71 241.778C2424 241.778 2462.5 246.336 2470.5 254C2478.5 261.664 2527.5 284 2529.5 276C2531.5 268 2564 250.056 2579.5 241.778C2595 233.5 2655 202.608 2669.5 202.608C2684 202.608 2775.5 220.5 2788.5 210C2801.5 199.5 2802.5 207.916 2821 214C2839.5 220.084 2907.5 239.97 2918 241.778C2928.5 243.586 2937 245.394 2969.5 243.586C3002 241.778 3044 233.342 3069.5 226.713C3095 220.084 3242 327 3259.5 322.5C3277 318 3448 336.5 3474.5 335.5L3476.1 335.44C3507.18 334.275 3671.79 328.107 3714 307C3757 285.5 3811.5 255.222 3856 248.5C3900.5 241.778 4034.5 280.5 4066.5 282.5C4098.5 284.5 4117.5 257 4193 237.5C4268.5 218 4350.5 165.392 4370 184C4389.5 202.608 4474 227.5 4491.5 232.5C4509 237.5 4571.5 210 4593 210C4614.5 210 4603.5 223.222 4669.5 232.5C4735.5 241.778 4721.5 265 4761.5 264C4801.5 263 5143 236 5175 210C5207 184 5282.5 254 5292 259C5301.5 264 5345 328.5 5391 322.5C5437 316.5 5657 150 5686.5 152C5716 154 5821 175 5863.5 177C5906 179 5975 132.5 6022 129C6069 125.5 6150 101 6190.5 115C6231 129 6351.5 174 6353.5 184C6355.1 192 6362.17 592.667 6365.5 792L-33.8164 828.5V280.95C-19.8174 279.745 17.6807 263.475 34.1797 262.269C50.6787 261.064 62.1777 261.064 101.176 257.448C140.174 253.833 145.173 230.331 160.672 223.702C176.171 217.073 190.17 236.959 202.67 238.165C215.169 239.37 304.165 208.034 336.163 208.034C368.161 208.034 424.657 202.61 461.655 191.161C498.653 179.711 527.152 167.659 559.65 165.248C592.148 162.838 678.144 157.414 695.643 157.414C713.142 157.414 792.637 108 812.136 108C831.635 108 860.633 135.718 870.632 139.937C880.632 144.157 910.13 123.667 938.629 124.27C967.127 124.872 975.626 145.36 982.126 149.578C988.625 153.796 1055.62 132.102 1075.12 135.718C1094.62 139.334 1131.62 177.298 1143.12 182.119C1154.62 186.94 1220.61 220.084 1225.61 220.084H1316.61C1353.11 220.084 1459.6 260.459 1475.1 261.664C1490.6 262.87 1536.1 245.394 1549.59 243.586C1563.09 241.778 1604.59 262.267 1640.09 258.049C1675.59 253.83 1683.59 247.804 1706.59 241.778C1729.58 235.752 1758.08 225.508 1795.58 226.713C1833.08 227.918 1843.58 223.7 1857.58 220.084C1871.58 216.468 1896.08 192.364 1911.57 188.146C1927.07 183.927 1967.57 199.595 1978.57 202.608C1989.57 205.621 2010.07 186.338 2020.57 184.53C2031.07 182.722 2103.06 168.862 2113.06 171.272C2123.06 173.683 2168.06 168.862 2183.06 168.862C2198.06 168.862 2238.06 146.566 2260.05 142.95Z" fill="url(#paint0_linear_420_11)"/>
        <defs>
          <linearGradient id="paint0_linear_420_11" x1="3166" y1="441.5" x2="3166" y2="220.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="rgba(255, 255, 255, 0.0)"/>
            <stop offset="1" stop-color="rgba(255, 255, 255, 0.075)"/>
          </linearGradient>
        </defs>
      </svg>
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
  left: calc(-1 * calc(var(--offset) * calc(6271px - 100vw)));
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

.city-bg-far,
.city-bg {
  position: absolute;
  bottom: 0;
  left: 0;
}

.city-bg-far {
  filter: brightness(0.65);
  transform: translateX(calc(var(--city-bg-far-scroll-distance) * var(--city-progress)));
}

.city-bg {
  transform: translateX(calc(var(--city-bg-scroll-distance) * var(--city-progress)));
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
