<script setup lang="ts">
import { computed, ref, type PropType } from 'vue'
import Chapter from '../Chapter.vue'
import ChapterCover from '../ChapterCover.vue'
import Narration from '../Narration.vue'
import PositionedContent from '../PositionedContent.vue'
import Quote from '../Quote.vue'
import CallAndResponse from '../CallAndResponse.vue'
import CityInfrastructure from './CityInfrastructure.vue'
import type { I18N } from '../../types/i18n'
import CityInfrastructureBg from './CityInfrastructureBg.vue'
import CityInfrastructureFront from './CityInfrastructureFront.vue'

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

const cityWidth = computed(() => 30402 * props.scale)
const cityBgWidth = computed(() => 20215 * props.scale)
const cityBgScrollDistance = computed(() => (cityWidth.value - cityBgWidth.value) / cityBgWidth.value)
const cityFgWidth = computed(() => cityWidth.value * FG_SPEED)
const cityFgScrollDistance = computed(() => (cityFgWidth.value - cityWidth.value) / cityFgWidth.value)
</script>

<template>
  <Chapter
    class="chapter-infrastructure"
    :cityWidth="cityWidth"
    :localeDir="i18n.dir"
    :style="{
      '--city-bg-scroll-distance': `${(cityBgScrollDistance * 100).toFixed(0)}%`,
      '--city-fg-scroll-distance': `${(cityFgScrollDistance * -100).toFixed(0)}%`,
    }"
  >
    <template #cover>
      <ChapterCover ref="cover">
        <template #title>
          <h2>{{ i18n.infrastructure }}</h2>
        </template>
        <template #subtitle>
          {{ i18n.infraDescription }}
        </template>
      </ChapterCover>
    </template>

    <template #bg>
      <CityInfrastructureBg :width="cityBgWidth" />
    </template>

    <template #back>
      <PositionedContent :left="(2100 * scale)">
        <Quote
          :name="i18n.infraMaxDamageName"
          :role="i18n.infraMaxDamageRole"
          :date="i18n.infraMaxDamageDate"
          :offsetBottom="`${200 * scale}px`"
        >
          <span v-html="i18n.infraMaxDamageQuote" />
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(3570 * scale)">
        <Narration
          :offsetBottom="`${150 * scale}px`"
        >
          <p v-html="i18n.infraMostDestructive1" />
          <p v-html="i18n.infraMostDestructive2" />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(5100 * scale)">
        <Narration
          :offsetBottom="`${100 * scale}px`"
        >
          <p v-html="i18n.infraRubble" />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(7000 * scale)">
        <Quote
          :name="i18n.infraBurnGazaName"
          :role="i18n.infraBurnGazaRole"
          :date="i18n.infraBurnGazaDate"
          offsetBottom="0px"
        >
          <span v-html="i18n.infraBurnGazaQuote" />
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(9170 * scale)">
        <Narration
          :offsetBottom="`${200 * scale}px`"
        >
          <p v-html="i18n.infraBlackout" />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(10927 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${50 * scale}px`"
        >
          <p v-html="i18n.infraBlackout2" />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(12320 * scale)">
        <Narration>
          <CallAndResponse
            :line="false"
            :isVisible="false"
          >
            <div class="car-call" v-html="i18n.infraResidence1" />
            <div class="car-call" v-html="i18n.infraResidence2" />
          </CallAndResponse>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(14000 * scale)">
        <Narration>
          <CallAndResponse
            :line="false"
            :isVisible="false"
          >
            <div class="car-call" v-html="i18n.infraFlattened1" />
            <blockquote class="car-response">
              <p v-html="i18n.infraFlattened2" />
              <cite class="car-response-cite" v-html="i18n.infraFlattened2Cite" />
            </blockquote>
          </CallAndResponse>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(16041 * scale)">
        <Narration
          size="lg"
          offsetBottom="0"
        >
          <p v-html="i18n.infraConditions1" />
          <p v-html="i18n.infraConditions2" />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(17940 * scale)">
        <Quote
          :name="i18n.infraShifaName"
          :role="i18n.infraShifaRole"
          :date="i18n.infraShifaDate"
          offsetBottom="0"
        >
          <span v-html="i18n.infraShifaQuote" />
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(19488 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${150 * scale}px`"
        >
          <p v-html="i18n.infraShifaSiege1" />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(24910 * scale)">
        <Narration
          :offsetBottom="`${150 & scale}px`"
        >
          <p v-html="i18n.infraHealthWorkers1" />
          <p v-html="i18n.infraHealthWorkers2" />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(26449 * scale)">
        <Quote
          :name="i18n.infraAbsoluteDestructionName"
          :role="i18n.infraAbsoluteDestructionRole"
          :date="i18n.infraAbsoluteDestructionDate"
          offsetBottom="0"
        >
          <span v-html="i18n.infraAbsoluteDestructionQuote" />
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(28653 * scale)">
        <Narration
          size="lg"
          offsetBottom="0px"
        >
          <p v-html="i18n.infraCrime1" />
          <p v-html="i18n.infraCrime2" />
        </Narration>
      </PositionedContent>
    </template>

    <CityInfrastructure
      :width="cityWidth"
    />

    <template #city-fg>
      <CityInfrastructureFront
        :width="cityWidth"
        :speed="FG_SPEED"
      />
    </template>

    <template #front>

      <PositionedContent :left="(21300 * scale)">
        <Narration :offsetBottom="`${100 * scale}px`">
          <CallAndResponse
            :line="false"
            :isVisible="false"
          >
            <div class="car-call" v-html="i18n.infraShifaSiege2" />
            <div class="car-call" v-html="i18n.infraShifaSiege3" />
            <blockquote class="car-response">
              <p v-html="i18n.infraShifaSiege4" />
              <cite class="car-response-cite" v-html="i18n.infraShifaSiege4Cite" />
            </blockquote>
          </CallAndResponse>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(23000 * scale)">
        <Narration :offsetBottom="`${100 * scale}px`">
          <CallAndResponse
            :line="false"
            :isVisible="false"
          >
            <div class="car-call" v-html="i18n.infraShifaInvade1" />
            <div class="car-call" v-html="i18n.infraShifaInvade2" />
            <blockquote class="car-response">
              <p v-html="i18n.infraShifaInvade3" />
              <cite class="car-response-cite" v-html="i18n.infraShifaInvade3Cite" />
            </blockquote>
          </CallAndResponse>
        </Narration>
      </PositionedContent>
    </template>

  </Chapter>
</template>

<style>
.chapter-infrastructure {
  --color-narration: var(--blue);
  --color-highlight: var(--blue);
  --color-title: var(--blue);
  --color-subtitle-highlight: var(--blue);
  background: var(--infrastructure-gradient);
}
</style>