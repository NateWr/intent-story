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
          Under international law, the crime of genocide requires <strong>acts of genocide</strong> and the <strong>intent</strong> to destroy a group of people, or a part of that group.
        </template>
        <div
          class="scroll-prompt"
          :class="scrollPrompt && 'scroll-prompt-visible'"
        >
          <IconScroll aria-hidden="true" />
          scroll down
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
          <p>Israeli leaders have made and continue to make <strong>clear statements</strong> of their intent to commit genocide against Palestinians.</p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(3563 * scale)">
        <Quote
          name="Yoav Gallant"
          role="Israeli Defense Minister"
          date="Oct 9, 2023"
          :offsetBottom="`${300 * scale}px`"
        >
          “I have <strong>removed all restraints</strong>, [you’re allowed to] attack everything”
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(5344 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${350 * scale}px`"
        >
          <p>This sentiment has been <strong>adopted and amplified</strong> by individual soldiers, journalists and public figures across Israeli society.</p>
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
          name="Yehuda Shlezinger"
          role="Israeli Journalist"
          date="Apr 19, 2024"
          :offsetBottom="`${200 * scale}px`"
        >
          “These people there [in Gaza] deserve death. A hard death, an agonizing death... There are <strong>no innocent people</strong> there.”
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(9156 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${150 * scale}px`"
        >
          <p>These statements attempt to justify the destruction of all Palestinians as a <strong>group of people</strong>.</p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(10930 * scale)">
        <Narration
          :offsetBottom="`${150 * scale}px`"
        >
          <p>The crime of genocide is committed by killing or harming members of a group or inflicting <strong>conditions of life</strong> that will bring about its destruction.</p>
          <p>Israel has starved the people of Gaza, destroyed life-sustaining infrastructure, and forcibly displaced and killed residents at a shocking rate, leading dozens of experts to conclude that Israel is committing genocide in Gaza.</p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(12750 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${350 * scale}px`"
        >
          <p>The following examples of incitement, from a database of more than 400 statements, show Israel's <strong>intent to commit genocide</strong> in Gaza.</p>
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
</style>