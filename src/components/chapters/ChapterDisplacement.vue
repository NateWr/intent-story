<script setup lang="ts">
import { computed, ref, type PropType } from 'vue'
import CallAndResponse from '../CallAndResponse.vue'
import Chapter from '../Chapter.vue'
import ChapterCover from '../ChapterCover.vue'
import Narration from '../Narration.vue'
import PositionedContent from '../PositionedContent.vue'
import Quote from '../Quote.vue'
import CityDisplacement from './CityDisplacement.vue'
import type { I18N } from '../../types/i18n'
import { useIntersectionObserver } from '../../utilities/useIntersectionObserver'
import CityDisplacementFront from './CityDisplacementFront.vue'
import CityDisplacementBgFar from './CityDisplacementBgFar.vue'
import CityDisplacementBg from './CityDisplacementBg.vue'

const props = defineProps({
  i18n: {
    type: Object as PropType<I18N>,
    required: true,
  },
  scale: {
    type: Number,
    required: true,
  },
})

const FG_SPEED = 2

const cityWidth = computed(() => 27746 * props.scale)
const cityBgFarWidth = computed(() => 13873 * props.scale)
const cityBgFarScrollDistance = computed(() => (cityWidth.value - cityBgFarWidth.value) / cityBgFarWidth.value)
const cityBgWidth = computed(() => 20058 * props.scale)
const cityBgScrollDistance = computed(() => (cityWidth.value - cityBgWidth.value) / cityBgWidth.value)
const cityFgWidth = computed(() => cityWidth.value * FG_SPEED)
const cityFgScrollDistance = computed(() => (cityFgWidth.value - cityWidth.value) / cityFgWidth.value)

const massArrest = ref<HTMLElement | null>(null)
const { isVisible: isMassArrestVisible } = useIntersectionObserver(massArrest)
const road = ref<HTMLElement | null>(null)
const { isVisible: isRoadVisible } = useIntersectionObserver(road)
const secondTentBombing = ref<HTMLElement | null>(null)
const { isVisible: isSecondTentBombingVisible } = useIntersectionObserver(secondTentBombing)
</script>

<template>
  <Chapter
    class="chapter-displacement"
    :cityWidth="cityWidth"
    :localeDir="i18n.dir"
    :style="{
      '--city-bg-far-scroll-distance': `${(cityBgFarScrollDistance * 100).toFixed(0)}%`,
      '--city-bg-scroll-distance': `${(cityBgScrollDistance * 100).toFixed(0)}%`,
      '--city-fg-scroll-distance': `${(cityFgScrollDistance * -100).toFixed(0)}%`,
    }"
  >
    <template #cover>
      <ChapterCover ref="cover">
        <template #title>
          <h2>{{ i18n.displacement }}</h2>
        </template>
        <template #subtitle>
          <span v-html="i18n.displacementDescription" />
        </template>
      </ChapterCover>
    </template>

    <template #bg-far>
      <CityDisplacementBgFar :width="cityBgFarWidth" />
    </template>

    <template #bg>
      <CityDisplacementBg :width="cityBgWidth" />
    </template>

    <template #back>
      <PositionedContent :left="(1780 * scale)">
        <Quote
          :name="i18n.displacementNoSanctuaryName"
          :role="i18n.displacementNoSanctuaryRole"
          :date="i18n.displacementNoSanctuaryDate"
          :offsetBottom="`${100 * scale}px`"
        >
          <span v-html="i18n.displacementNoSanctuaryQuote" />
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(3550 * scale)">
        <Narration
          :offsetBottom="`${150 * scale}px`"
        >
          <p v-html="i18n.displacementDrivenAway" />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(5488 * scale)" class="positioned-anchor-bottom">
        <Narration
          class="narration-center"
          offsetBottom="0"
        >
          <p v-html="i18n.displacementRemainers" />
          <div
            ref="massArrest"
            class="narration-center-line"
            :class="isMassArrestVisible && 'narration-center-line-visible'"
            aria-hidden="true"
          />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(9270 * scale)">
        <Narration :offsetBottom="`${100 * scale}px`">
          <CallAndResponse
            :line="false"
            :isVisible="false"
          >
            <div class="car-call" v-html="i18n.displacementUNSchool1" />
            <blockquote class="car-response">
              <p v-html="i18n.displacementUNSchool2" />
              <cite class="car-response-cite" v-html="i18n.displacementUNSchool2Cite" />
            </blockquote>
            <div class="car-call" v-html="i18n.displacementUNSchool3" />
          </CallAndResponse>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(10866 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${150 * scale}px`"
        >
          <p v-html="i18n.displacementSalahAlDin1" />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(12450 * scale)" class="positioned-anchor-bottom">
        <Narration :offsetBottom="`${64 * scale}px`">
          <CallAndResponse
            ref="road"
            :isVisible="isRoadVisible"
            class="road-car"
          >
            <div class="car-call" v-html="i18n.displacementSalahAlDin2" />
            <blockquote class="car-response">
              <p v-html="i18n.displacementSalahAlDin3" />
              <cite class="car-response-cite" v-html="i18n.displacementSalahAlDin3Cite" />
            </blockquote>
          </CallAndResponse>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(14160 * scale)">
        <Quote
          :name="i18n.displacementSolutionName"
          :role="i18n.displacementSolutionRole"
          :date="i18n.displacementSolutionDate"
          :offsetBottom="`${100 * scale}px`"
        >
          <span v-html="i18n.displacementSolutionQuote" />
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(15946 * scale)">
        <Narration
          :offsetBottom="`${200 * scale}px`"
        >
          <p v-html="i18n.displacementWarehouse" />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(17950 * scale)">
        <Narration :offsetBottom="`${100 * scale}px`">
          <CallAndResponse
            :isVisible="false"
            :line="false"
            class="tent-massacre"
          >
            <div class="car-call" v-html="i18n.displacementTentMassacre1" />
            <div class="car-call" v-html="i18n.displacementTentMassacre2" />
            <blockquote class="car-response">
              <p v-html="i18n.displacementTentMassacre3" />
              <cite class="car-response-cite" v-html="i18n.displacementTentMassacre3Cite" />
            </blockquote>
          </CallAndResponse>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(19790 * scale)" class="positioned-anchor-bottom">
        <Narration :offsetBottom="`${128 * scale}px`">
          <CallAndResponse
            ref="secondTentBombing"
            :isVisible="isSecondTentBombingVisible"
            class="second-tent-bombing"
          >
            <div class="car-call" v-html="i18n.displacementAlAbsiKilled1" />
            <div class="car-call" v-html="i18n.displacementAlAbsiKilled2" />
            <blockquote class="car-response">
              <p v-html="i18n.displacementAlAbsiKilled3" />
              <cite class="car-response-cite" v-html="i18n.displacementAlAbsiKilled3Cite" />
            </blockquote>
          </CallAndResponse>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(21430 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${100 * scale}px`"
        >
          <p v-html="i18n.displacementSurvivors" />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(23140 * scale)">
        <Narration offsetBottom="0">
          <CallAndResponse
            :line="false"
            :isVisible="false"
          >
            <div class="car-call" v-html="i18n.displacementSafeAreas1" />
            <blockquote class="car-response">
              <p v-html="i18n.displacementSafeAreas2" />
              <cite class="car-response-cite" v-html="i18n.displacementSafeAreas2Cite" />
            </blockquote>
          </CallAndResponse>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(24795 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${100 * scale}px`"
        >
          <p v-html="i18n.displacementExile" />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(26570 * scale)">
        <Quote
          :name="i18n.displacementNoReturnName"
          :role="i18n.displacementNoReturnRole"
          :date="i18n.displacementNoReturnDate"
          :offsetBottom="`${100 * scale}px`"
        >
          <span v-html="i18n.displacementNoReturnQuote" />
        </Quote>
      </PositionedContent>
    </template>

    <CityDisplacement
      :width="cityWidth"
    />

    <template #front>
      <PositionedContent :left="(7355 * scale)">
        <Narration
          class="narration-center"
          size="lg"
          offsetBottom="0"
        >
          <p v-html="i18n.displacementAlAbsiFled" />
        </Narration>
      </PositionedContent>
    </template>

    <template #city-fg>
      <CityDisplacementFront
        :width="cityWidth"
        :speed="FG_SPEED"
      />
    </template>
  </Chapter>
</template>

<style>
.chapter-displacement {
  --color-narration: var(--orange-light);
  --color-highlight: var(--orange-light);
  --color-title: var(--orange-light);
  --color-subtitle-highlight: var(--orange-light);
  background: var(--displacement-gradient);
}

.positioned-anchor-bottom {
  align-items: flex-end;
}

.road-car .car-line {
  height: 50vh;
  margin-top: -8rem;
}

.tent-massacre .car-line {
  margin-top: -5rem;
}

.second-tent-bombing .car-line {
  margin-top: -4rem;
}
</style>