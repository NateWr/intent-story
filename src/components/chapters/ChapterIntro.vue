<script setup lang="ts">
import { computed, onMounted, ref, type PropType } from 'vue'
import Arrow from '../Arrow.vue'
import Chapter from '../Chapter.vue'
import ChapterCover from '../ChapterCover.vue'
import IconScroll from '../IconScroll.vue'
import Narration from '../Narration.vue'
import PositionedContent from '../PositionedContent.vue'
import Quote from '../Quote.vue'
import CityIntro from './CityIntro.vue'
import type { I18N } from '../../types/i18n'
import CityIntroBgFar from './CityIntroBgFar.vue'
import CityIntroBg from './CityIntroBg.vue'
import { useIntersectionObserver } from '../../utilities/useIntersectionObserver'

const props = defineProps({
  i18n: {
    type: Object as PropType<I18N>,
    required: true,
  },
  scale: {
    type: Number,
    required: true,
  },
  scrollStarted: {
    type: Boolean,
    required: true,
  }
})

const scrollPrompt = ref<boolean>(false)

const cityWidth = computed(() => 13427 * props.scale)
const cityBgFarWidth = computed(() => 7007 * props.scale)
const cityBgFarScrollDistance = computed(() => (cityWidth.value - cityBgFarWidth.value) / cityBgFarWidth.value)
const cityBgWidth = computed(() => 8724 * props.scale)
const cityBgScrollDistance = computed(() => (cityWidth.value - cityBgWidth.value) / cityBgWidth.value)



const arrows1 = ref<HTMLElement | null>(null)
const { isVisible: isArrows1Visible } = useIntersectionObserver(arrows1)
const arrows2 = ref<HTMLElement | null>(null)
const { isVisible: isArrows2Visible } = useIntersectionObserver(arrows2)
const arrows3 = ref<HTMLElement | null>(null)
const { isVisible: isArrows3Visible } = useIntersectionObserver(arrows3)
const arrows4 = ref<HTMLElement | null>(null)
const { isVisible: isArrows4Visible } = useIntersectionObserver(arrows4)

onMounted(() => {
  setTimeout(() => {
    if (!props.scrollStarted) {
      scrollPrompt.value = true
    }
  }, 6000)
})
</script>

<template>
  <Chapter
    class="chapter-intro"
    :cityWidth="cityWidth"
    :localeDir="i18n.dir"
    :style="{
      '--city-bg-far-scroll-distance': `${(cityBgFarScrollDistance * 100).toFixed(0)}%`,
      '--city-bg-scroll-distance': `${(cityBgScrollDistance * 100).toFixed(0)}%`,
    }"
  >
    <template #cover>
      <ChapterCover ref="cover">
        <template #title>
          <h1>{{ i18n.intent }}</h1>
        </template>
        <template #subtitle>
          <span v-html="i18n.introCrime" />
        </template>
        <div
          class="scroll-prompt"
          :class="scrollPrompt && 'scroll-prompt-visible'"
        >
          <IconScroll aria-hidden="true" />
          {{ i18n.scrollDown }}
        </div>
      </ChapterCover>
    </template>

    <template #bg-far>
      <CityIntroBgFar :width="cityBgFarWidth" />
    </template>

    <template #bg>
      <CityIntroBg :width="cityBgWidth" />
    </template>

    <template #back>
      <PositionedContent :left="(1723 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${350 * scale}px`"
        >
          <p>
            <span v-html="i18n.introStatements" />
          </p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(3563 * scale)">
        <Quote
          :name="i18n.introRestraintsName"
          :role="i18n.introRestraintsRole"
          :date="i18n.introRestraintsDate"
          :offsetBottom="`${300 * scale}px`"
        >
          <span v-html="i18n.introRestraintsQuote" />
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(5344 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${350 * scale}px`"
        >
          <p v-html="i18n.introAmplified" />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(6300 * scale)">
        <div ref="arrows1" class="arrows-group" :style="{width: `${410 * scale}px`}">
          <Arrow :is-visible="isArrows1Visible" offsetTop="0" :layer="3" />
          <Arrow :is-visible="isArrows1Visible" offsetTop="-40" :layer="3" :left="`${300 * scale}px`" />
          <Arrow :is-visible="isArrows1Visible" offsetTop="-15" :layer="2" :left="`${400 * scale}px`" />
          <Arrow :is-visible="isArrows1Visible" offsetTop="0" :layer="3" :left="`${340 * scale}px`" />
          <Arrow :is-visible="isArrows1Visible" offsetTop="-20" :layer="3" :left="`${410 * scale}px`" />
        </div>
      </PositionedContent>
      <PositionedContent :left="(7120 * scale)">
        <div ref="arrows2" class="arrows-group" :style="{width: `${390 * scale}px`}">
          <Arrow :is-visible="isArrows2Visible" offsetTop="-5" :layer="3" />
          <Arrow :is-visible="isArrows2Visible" offsetTop="-30" :layer="3" :left="`${30 * scale}px`" />
          <Arrow :is-visible="isArrows2Visible" offsetTop="15" :layer="3" :left="`${230 * scale}px`" />
          <Arrow :is-visible="isArrows2Visible" offsetTop="28" :layer="3" :left="`${270 * scale}px`" />
          <Arrow :is-visible="isArrows2Visible" offsetTop="-60" :layer="3" :left="`${360 * scale}px`" />
          <Arrow :is-visible="isArrows2Visible" offsetTop="60" :layer="3" :left="`${390 * scale}px`" />
        </div>
      </PositionedContent>
      <PositionedContent :left="(7670 * scale)">
        <div ref="arrows3" class="arrows-group" :style="{width: `${330 * scale}px`}">
          <Arrow :is-visible="isArrows3Visible" offsetTop="37" :layer="2" />
          <Arrow :is-visible="isArrows3Visible" offsetTop="-20" :layer="3" :left="`${130 * scale}px`"/>
          <Arrow :is-visible="isArrows3Visible" offsetTop="20" :layer="3" :left="`${160 * scale}px`" />
          <Arrow :is-visible="isArrows3Visible" offsetTop="0" :layer="3" :left="`${270 * scale}px`" />
          <Arrow :is-visible="isArrows3Visible" offsetTop="7" :layer="3" :left="`${290 * scale}px`" />
          <Arrow :is-visible="isArrows3Visible" offsetTop="0" :layer="2" :left="`${330 * scale}px`" />
        </div>
      </PositionedContent>
      <PositionedContent :left="(8155 * scale)">
        <div ref="arrows4" class="arrows-group" :style="{width: `${395 * scale}px`}">
          <Arrow :is-visible="isArrows4Visible" offsetTop="-20" :layer="3" />
          <Arrow :is-visible="isArrows4Visible" offsetTop="25" :layer="3" :left="`${145 * scale}px`" />
          <Arrow :is-visible="isArrows4Visible" offsetTop="-60" :layer="3" :left="`${195 * scale}px`" />
          <Arrow :is-visible="isArrows4Visible" offsetTop="25" :layer="2" :left="`${230 * scale}px`" />
          <Arrow :is-visible="isArrows4Visible" offsetTop="-30" :layer="3" :left="`${295 * scale}px`"/>
          <Arrow :is-visible="isArrows4Visible" offsetTop="-10" :layer="3" :left="`${395 * scale}px`" />
        </div>
      </PositionedContent>
      <PositionedContent :left="(7231 * scale)">
        <Quote
          :name="i18n.introDeserveName"
          :role="i18n.introDeserveRole"
          :date="i18n.introDeserveDate"
          :offsetBottom="`${200 * scale}px`"
        >
          <span v-html="i18n.introDeserveQuote" />
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(9156 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${150 * scale}px`"
        >
          <p v-html="i18n.introJustify" />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(10930 * scale)">
        <Narration
          :offsetBottom="`${150 * scale}px`"
        >
          <p v-html="i18n.introConditions" />
          <p v-html="i18n.introConclude" />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(12750 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${350 * scale}px`"
        >
          <p v-html="i18n.introDatabase" />
        </Narration>
      </PositionedContent>
    </template>

    <CityIntro
      :width="cityWidth"
    />
  </Chapter>
</template>

<style>
.chapter-intro {
  --color-narration: var(--purple);
  --color-highlight: var(--purple);
  --color-title: var(--red);
  --color-subtitle-highlight: var(--red-light);
  background: var(--intro-gradient);

  & .chapter-cover-title {
    font-size: 20vw;
  }
}

.scroll-prompt {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  opacity: 0;
  transition: opacity 0.3s 0.5s;
}

.scroll-prompt-visible {
  opacity: 1;
  animation-name: pulse;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

@keyframes pulse {
  from {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@media (--phones-landscape) {

  .scroll-prompt {
    margin-top: 0.5rem;
    gap: 0.5rem;
    font-size: 0.675rem;

    & svg {
      width: 0.75rem;
      height: auto;
    }
  }
}

@media (--tablets) {

  .scroll-prompt {
    margin-top: 4rem;
  }
}

@media (--laptops-sm) {

  .chapter-intro {
    & .chapter-cover-title {
      font-size: 20vh;;
    }
  }
}
</style>