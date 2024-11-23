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
          “Never in post-war history had a population been made to go hungry so quickly and so completely as was the case for the 2.3 million Palestinians living in Gaza.”
        </template>
        <div class="chapter-starvation-cover-article">
          Michael Fakhri
        </div>
        <div class="chapter-starvation-cover-convention">
          UN Special Rapporteur on the Right to Food
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
          name="Yoav Gallant"
          role="Israeli Defense Minister"
          date="Oct 9, 2023"
          :offsetBottom="`${200 * scale}px`"
        >
          “I have ordered a <strong>complete siege</strong> on the Gaza Strip. There will be no electricity, no food, no fuel, everything is closed.”
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(5400 * scale)">
        <Quote
          name="Itamar Ben Gvir"
          role="Israeli Minister of National Security"
          date="Oct 17, 2023"
          :offsetBottom="`${200 * scale}px`"
        >
          “The only thing that needs to enter Gaza is hundreds of tons of explosives by the Air Force, and <strong>not an ounce of humanitarian aid.</strong>”
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(10628 * scale)">
        <Quote
          name="Boaz Bismuth"
          role="Member of the Israeli Knesset (Likud)"
          date="Oct 16, 2023"
          :offsetBottom="`${150 * scale}px`"
        >
          “There is no place for any humanitarian gestures — we must <strong>erase the memory of Amalek.</strong>”
          <template #footer>
            <Narration>
              <p>In the Torah, the ancient Israelites were said to be commanded by God to destroy the people of “Amalek”.</p>
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
            <div class="car-call">
              These attacks, combined with indiscriminate aerial bombardment, made Gaza the <strong>deadliest place in the world</strong> to be an aid worker. 
            </div>
            <blockquote class="car-response">
              <p>At least 326 aid workers killed between Oct 7, 2023 and Nov 12, 2024.</p>
              <cite class="car-response-cite">UN OCHA</cite>
            </blockquote>
          </CallAndResponse>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(19370 * scale)">
        <Quote
          name="Revital Gotliv"
          role="Member of the Israeli Knesset (Likud)"
          date="Oct 23, 2023"
          :offsetBottom="`${250 * scale}px`"
        >
          “Without <strong>hunger and thirst</strong> among the Gazan population, we will not succeed…”
        </Quote>
      </PositionedContent>
    </template>

    <CityStarvation
      :width="cityWidth"
    />

    <template #front>
      <PositionedContent :left="(3405 * scale)">
        <Narration :offsetBottom="`${150 * scale}px`">
          <p>Nine months after Gallant’s promise to cease the flow of life-saving essentials, UN experts declared a <strong>state of famine</strong> across all of Gaza.</p>
          <p>During this campaign of starvation, Israeli occupation forces (IOF) burned food stocks, destroyed agricultural land, bombed flour mills, greenhouses, bakeries, and fisheries, allowed Israeli settlers to destroy aid bound for Gaza, and carried out targeted attacks on both aid seekers and aid workers.</p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(6900 * scale)" style="align-items: flex-end">
        <Narration :offsetBottom="`${200 * scale}px`">
          <CallAndResponse
            :isVisible="false"
            :line="false"
          >
            <div class="car-call">
              On February 29, 2024, a crowd of starving Palestinians gathered on Al-Rashid St. to meet an incoming aid convoy.
            </div>
            <blockquote class="car-response">
              <p>“There was a sense of hope and even joy that we would get flour to take back to our families.”</p>
              <cite class="car-response-cite">Abdel Jalil Al-Fayoumi, 22</cite>
            </blockquote>
            <div class="car-call">
              Then, Israeli forces opened fire on the crowd, massacring 112 people and injuring 760. The attack is remembered as the <strong>flour massacre.</strong>
            </div>
            <blockquote class="car-response">
              <p>“My 13-year-old cousin, Nidal, was shot dead while attempting to get a bag of flour from a truck.”</p>
              <cite class="car-response-cite">Salameh Rafiq Obeid, 22</cite>
            </blockquote>
          </CallAndResponse>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(8980 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${350 * scale}px`"
        >
          <p>The flour massacre represents a <strong>pattern of incidents</strong> of Israeli forces targeting desperate aid seekers in Gaza.</p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(12370 * scale)">
        <Narration
          :offsetBottom="`${200 * scale}px`"
        >
          <p>On April 1, 2024,  a series of Israeli strikes targeted a World Central Kitchen aid convoy, killing 7 aid workers.</p>
          <p>The attack forced the largest aid organizations to suspend their operations in Gaza at a point when 1.1 million people — or half the population of Gaza — were experiencing <strong>catastrophic levels of hunger</strong> and at least 28 children had died of starvation.</p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(13970 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${250 * scale}px`"
        >
          <p>
            The Israeli military has repeatedly attacked aid convoys and facilities, even when aid agencies shared their locations with the Israeli military.
          </p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(17660 * scale)">
        <Narration :offsetBottom="`${150 * scale}px`">
          <p>
            Children under five, pregnant or breastfeeding women, the elderly, and people with disabilities suffer the most from Israel’s <strong>campaign of starvation</strong>.
          </p>
          <p>
            Israeli officials said they would weaponize food and they did, causing serious bodily and mental harm to Palestinians in Gaza and inflicting on them <strong>conditions of life</strong> intended to bring about their destruction as a group.
          </p>
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