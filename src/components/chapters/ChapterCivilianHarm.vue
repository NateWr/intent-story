<script setup lang="ts">
import { computed, ref, type PropType } from 'vue'
import CallAndResponse from '../CallAndResponse.vue'
import Chapter from '../Chapter.vue'
import ChapterCover from '../ChapterCover.vue'
import Narration from '../Narration.vue'
import PositionedContent from '../PositionedContent.vue'
import Quote from '../Quote.vue'
import CityCivilianHarm from './CityCivilianHarm.vue'
import type { I18N } from '../../types/i18n'
import { useIntersectionObserver } from '../../utilities/useIntersectionObserver'
import CityCivilianHarmBg from './CityCivilianHarmBg.vue'
import CityCivilianHarmBgFar from './CityCivilianHarmBgFar.vue'
import CityCivilianHarmFront from './CityCivilianHarmFront.vue'

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

const FG_SPEED = 2;

const cityWidth = computed(() => 21063 * props.scale)
const cityBgFarWidth = computed(() => 9322 * props.scale)
const cityBgFarScrollDistance = computed(() => (cityWidth.value - cityBgFarWidth.value) / cityBgFarWidth.value)
const cityBgWidth = computed(() => 14717 * props.scale)
const cityBgScrollDistance = computed(() => (cityWidth.value - cityBgWidth.value) / cityBgWidth.value)
const cityFgWidth = computed(() => cityWidth.value * FG_SPEED)
const cityFgScrollDistance = computed(() => (cityFgWidth.value - cityWidth.value) / cityFgWidth.value)

const familyHome1 = ref<HTMLElement | null>(null)
const { isVisible: isFamilyHome1Visible } = useIntersectionObserver(familyHome1)
const familyHome2 = ref<HTMLElement | null>(null)
const { isVisible: isFamilyHome2Visible } = useIntersectionObserver(familyHome2)
const familyHome3 = ref<HTMLElement | null>(null)
const { isVisible: isFamilyHome3Visible } = useIntersectionObserver(familyHome3)
const orphans = ref<HTMLElement | null>(null)
const { isVisible: isOrphansVisible } = useIntersectionObserver(orphans)
</script>

<template>
  <Chapter
    class="chapter-civilian-harm"
    :cityWidth="cityWidth"
    :localeDir="i18n.dir"
    :style="{
      '--color-narration': 'var(--watermelon)',
      '--color-highlight': 'var(--watermelon)',
      '--color-title': 'var(--watermelon)',
      '--color-subtitle-highlight': 'var(--watermelon)',
      '--city-bg-far-scroll-distance': `${(cityBgFarScrollDistance * 100).toFixed(0)}%`,
      '--city-bg-scroll-distance': `${(cityBgScrollDistance * 100).toFixed(0)}%`,
      '--city-fg-scroll-distance': `${(cityFgScrollDistance * -100).toFixed(0)}%`,
    }"
  >
    <template #cover>
      <ChapterCover ref="cover">
        <template #title>
          <h2>{{ i18n.civilianHarm }}</h2>
        </template>
        <template #subtitle>
          {{ i18n.civHarmDescription }}
        </template>
      </ChapterCover>
    </template>

    <template #bg-far>
      <CityCivilianHarmBgFar :width="cityBgFarWidth" />
    </template>

    <template #bg>
      <CityCivilianHarmBg :width="cityBgWidth" />
    </template>

    <template #back>
      <div
        ref="tree"
        class="civharm-tree-scroll"
        :style="{
          position: 'absolute',
          left: `${(scale * 11314).toFixed(0)}px`,
          width: `${(scale * 1551).toFixed(0)}px`,
          bottom: `50%`,
          height: '20px',
        }"
      />
      <PositionedContent :left="(1900 * scale)">
        <Quote
          :name="i18n.civHarmNationName"
          :role="i18n.civHarmNationRole"
          :date="i18n.civHarmNationDate"
          offsetBottom="0"
        >
          <span v-html="i18n.civHarmNationQuote" />
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(3400 * scale)">
        <Narration
          :offsetBottom="`${150 * scale}px`"
        >
          <p v-html="i18n.civHarmFamilies" />
          <p v-html="i18n.civHarmAirwars" />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(4910 * scale)" class="positioned-anchor-bottom">
        <Narration
          ref="familyHome1"
          class="narration-center family-home-one"
          offsetBottom="0"
        >
          <div class="narration-dated">
            <div class="narration-dated-date">
              {{ i18n.civHarmHerbawiDate }}
            </div>
            <div>
              {{ i18n.civHarmHerbawi }}
            </div>
          </div>
          <div
            class="narration-center-line"
            :class="isFamilyHome1Visible && 'narration-center-line-visible'"
            aria-hidden="true"
          />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(5420 * scale)" class="positioned-anchor-bottom">
        <Narration
          ref="familyHome2"
          class="narration-center family-home-two"
          offsetBottom="0"
        >
          <div class="narration-dated">
            <div class="narration-dated-date">
              {{ i18n.civHarmAqadDate }}
            </div>
            <div>
              {{ i18n.civHarmAqad }}
            </div>
          </div>
          <div
            class="narration-center-line"
            :class="isFamilyHome2Visible && 'narration-center-line-visible'"
            aria-hidden="true"
          />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(5900 * scale)" class="positioned-anchor-bottom">
        <Narration
          ref="familyHome3"
          class="narration-center family-home-three"
          offsetBottom="0"
        >
          <div class="narration-dated">
            <div class="narration-dated-date">
              {{ i18n.civHarmNaouqDate }}
            </div>
            <div>
              {{ i18n.civHarmNaouq }}
            </div>
          </div>
          <div
            class="narration-center-line"
            :class="isFamilyHome3Visible && 'narration-center-line-visible'"
            aria-hidden="true"
          />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(7250 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${150 * scale}px`"
        >
          <p v-html="i18n.civHarmThousands" />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(9315 * scale)">
        <Quote
          :name="i18n.civHarmNoBigDealName"
          role=""
          date=""
          :offsetBottom="`${100 * scale}px`"
        >
          <span v-html="i18n.civHarmNoBigDealQuote" />
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(10895 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${150 * scale}px`"
        >
          <p v-html="i18n.civHarmFreeFire" />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(12650 * scale)" class="positioned-anchor-bottom">
        <Narration :offsetBottom="`${210 * scale}px`">
          <CallAndResponse
            :line="false"
            :isVisible="false"
          >
            <div class="car-call">
              {{ i18n.civHarmAbuSalah1 }}
            </div>
            <div class="car-call">
              {{ i18n.civHarmAbuSalah2 }}
            </div>
            <blockquote class="car-response">
              <p>{{ i18n.civHarmAbuSalahQuote }}</p>
              <cite class="car-response-cite">{{ i18n.civHarmAbuSalahQuoteRole }}</cite>
            </blockquote>
          </CallAndResponse>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(14450 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${150 * scale}px`"
        >
          <p v-html="i18n.civHarmSurvivors" />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(18000 * scale)">
        <Quote
          :name="i18n.civHarmBoyInGazaName"
          :role="i18n.civHarmBoyInGazaRole"
          :date="i18n.civHarmBoyInGazaDate"
          :offsetBottom="`${100 * scale}px`"
        >
          <span v-html="i18n.civHarmBoyInGazaQuote" />
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(19720 * scale)">
        <Narration
          :offsetBottom="`${200 * scale}px`"
        >
          <p v-html="i18n.civHarmNothingLikeIt" />
        </Narration>
      </PositionedContent>
    </template>

    <CityCivilianHarm
      :width="cityWidth"
    />

    <template #front>
      <PositionedContent :left="(16240 * scale)" class="positioned-anchor-bottom">
        <Narration
          class="civ-punishment-campaigns"
          :offsetBottom="`${230 * scale}px`"
        >
          <CallAndResponse
            ref="orphans"
            :isVisible="isOrphansVisible"
          >
            <div class="car-call" v-html="i18n.civHarmCampaign1" />
            <div class="car-call" v-html="i18n.civHarmCampaign2" />
            <blockquote class="car-response">
              <p>{{ i18n.civHarmCampaignQuote }}</p>
              <cite class="car-response-cite">{{ i18n.civHarmCampaignQuoteCite }}</cite>
            </blockquote>
          </CallAndResponse>
        </Narration>
      </PositionedContent>
    </template>

  <template #city-fg>
    <CityCivilianHarmFront
      :width="cityWidth"
      :speed="FG_SPEED"
    />
  </template>
  </Chapter>
</template>

<style>
.chapter-civilian-harm {
  background: var(--civilian-harm-gradient);
}

.family-home-one {

  .narration-center-line {
    height: 55vh;
  }
}

.family-home-two {

  .narration-center-line {
    height: 25vh;
  }
}

.family-home-three {

  .narration-center-line {
    height: 45vh;
  }
}

.chapter-civilian-harm #civharm-tree {
  --width: calc(3000px * var(--scale));
  transform: translateX(calc(var(--width) - calc(calc(var(--width) * var(--scale)) * var(--tree-scroll-progress))));
}

@media ((--phones-landscape) and (not (--tablets-landscape))) {

  .gunned-down .car-line {
    margin-top: -4rem;
  }
}

@media (--tablets) {

  .family-home-two {
    margin-bottom: 5vh;
  }
}

@media (--tablets-landscape) {

  .family-home-two {
    margin-bottom: 7vh;
  }
}
</style>