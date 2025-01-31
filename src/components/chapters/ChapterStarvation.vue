<script setup lang="ts">
import { computed, ref, type PropType } from 'vue'
import Chapter from '../Chapter.vue'
import ChapterCover from '../ChapterCover.vue'
import CallAndResponse from '../CallAndResponse.vue'
import Narration from '../Narration.vue'
import PositionedContent from '../PositionedContent.vue'
import Quote from '../Quote.vue'
import CityStarvation from './CityStarvation.vue'
import type { I18N } from '../../types/i18n'
import CityStarvationBgFar from './CityStarvationBgFar.vue'
import CityStarvationBg from './CityStarvationBg.vue'
import CityStarvationFront from './CityStarvationFront.vue'

const props = defineProps({
  i18n: {
    type: Object as PropType<I18N>,
    required: true,
  },
  scale: {
    type: Number,
    required: true,
  }
})

const FG_SPEED = 2

const cityWidth = computed(() => 21066 * props.scale)
const cityBgFarWidth = computed(() => 10587 * props.scale)
const cityBgFarScrollDistance = computed(() => (cityWidth.value - cityBgFarWidth.value) / cityBgFarWidth.value)
const cityBgWidth = computed(() => 15714 * props.scale)
const cityBgScrollDistance = computed(() => (cityWidth.value - cityBgWidth.value) / cityBgWidth.value)
const cityFgWidth = computed(() => cityWidth.value * FG_SPEED)
const cityFgScrollDistance = computed(() => (cityFgWidth.value - cityWidth.value) / cityFgWidth.value)
</script>

<template>
  <Chapter
    class="chapter-starvation"
    :cityWidth="cityWidth"
    :localeDir="i18n.dir"
    :style="{
      '--city-bg-far-scroll-distance': `${(cityBgFarScrollDistance * 100).toFixed(0)}%`,
      '--city-bg-scroll-distance': `${(cityBgScrollDistance * 100).toFixed(0)}%`,
      '--city-fg-scroll-distance': `${(cityFgScrollDistance * -100).toFixed(0)}%`,
    }"
  >

    <template #cover>
      <ChapterCover>
        <template #title>
          <h2>{{ i18n.starvation }}</h2>
        </template>
        <template #subtitle>
          <span v-html="i18n.starveDescription" />
        </template>
        <div class="chapter-starvation-cover-article">
          <span v-html="i18n.starveDescriptionName" />
        </div>
        <div class="chapter-starvation-cover-convention">
          <span v-html="i18n.starveDescriptionRole" />
        </div>
      </ChapterCover>
    </template>

    <template #bg-far>
      <CityStarvationBgFar :width="cityBgFarWidth" />
    </template>

    <template #bg>
      <CityStarvationBg :width="cityBgWidth" />
    </template>

    <template #back>
      <PositionedContent :left="(1580 * scale)">
        <Quote
          :name="i18n.starveSiegeName"
          :role="i18n.starveSiegeRole"
          :date="i18n.starveSiegeDate"
          :offsetBottom="`${200 * scale}px`"
        >
          <span v-html="i18n.starveSiegeQuote" />
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(5400 * scale)">
        <Quote
          :name="i18n.starveEnterGazaName"
          :role="i18n.starveEnterGazaRole"
          :date="i18n.starveEnterGazaDate"
          :offsetBottom="`${200 * scale}px`"
        >
          <span v-html="i18n.starveEnterGazaQuote" />
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(10628 * scale)">
        <Quote
          :name="i18n.starveAmalekName"
          :role="i18n.starveAmalekRole"
          :date="i18n.starveAmalekDate"
          :offsetBottom="`${150 * scale}px`"
        >
          <span v-html="i18n.starveAmalekQuote" />
          <template #footer>
            <Narration>
              <p v-html="i18n.starveAmalekDesc" />
            </Narration>
          </template>
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(15550 * scale)">
        <Narration offsetBottom="0">
          <CallAndResponse
            :line="false"
            :isVisible="false"
          >
            <div class="car-call" v-html="i18n.starveAidWorkers" />
            <blockquote class="car-response">
              <p v-html="i18n.starveAidWorkersCount" />
              <cite class="car-response-cite" v-html="i18n.starveAidWorkersCite" />
            </blockquote>
          </CallAndResponse>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(19370 * scale)">
        <Quote
          :name="i18n.starveSucceedName"
          :role="i18n.starveSucceedRole"
          :date="i18n.starveSucceedDate"
          :offsetBottom="`${250 * scale}px`"
        >
          <span v-html="i18n.starveSucceedQuote" />
        </Quote>
      </PositionedContent>
    </template>

    <CityStarvation
      :width="cityWidth"
    />

    <template #front>
      <PositionedContent :left="(3405 * scale)">
        <Narration :offsetBottom="`${150 * scale}px`">
          <p v-html="i18n.starveFamine1" />
          <p v-html="i18n.starveFamine2" />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(6900 * scale)" style="align-items: flex-end">
        <Narration :offsetBottom="`${200 * scale}px`">
          <CallAndResponse
            :isVisible="false"
            :line="false"
          >
            <div class="car-call" v-html="i18n.starveFlour1" />
            <blockquote class="car-response">
              <p v-html="i18n.starveFlour2" />
              <cite class="car-response-cite" v-html="i18n.starveFlour2Cite" />
            </blockquote>
            <div class="car-call" v-html="i18n.starveFlour3" />
            <blockquote class="car-response">
              <p v-html="i18n.starveFlour4" />
              <cite class="car-response-cite" v-html="i18n.starveFlour4Cite" />
            </blockquote>
          </CallAndResponse>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(8980 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${350 * scale}px`"
        >
          <p v-html="i18n.starvePattern" />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(12370 * scale)">
        <Narration
          :offsetBottom="`${200 * scale}px`"
        >
          <p v-html="i18n.starveWck1" />
          <p v-html="i18n.starveWck2" />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(13970 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${250 * scale}px`"
        >
          <p v-html="i18n.starveAidAttacks" />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(17660 * scale)">
        <Narration :offsetBottom="`${150 * scale}px`">
          <p v-html="i18n.starveCampaign" />
          <p v-html="i18n.starveConditions" />
        </Narration>
      </PositionedContent>
    </template>

    <template #city-fg>
      <CityStarvationFront
        :width="cityWidth"
        :speed="FG_SPEED"
      />
    </template>
  </Chapter>
</template>

<style>
.chapter-starvation {
  --color-narration: var(--green-light);
  --color-highlight: var(--green-light);
  --color-title: var(--green-light);
  --color-subtitle-highlight: var(--green-light);
  background: var(--starvation-gradient);
}

.chapter-starvation-cover-article {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.25;
}

.chapter-starvation-cover-convention {
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25;
  text-wrap: balance;
}


@media (--phones-landscape) {
  .chapter-starvation-cover-article {
    font-size: 0.875rem;
  }

  .chapter-starvation-cover-convention {
    font-size: 0.75rem;
  }
}

@media (--laptops-sm) {
  .chapter-starvation-cover-article {
    font-size: 1.5rem;
  }

  .chapter-starvation-cover-convention {
    font-size: 1.125rem;
  }
}
</style>