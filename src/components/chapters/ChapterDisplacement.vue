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
          More than <strong>four out of five</strong> Palestinians in Gaza were driven from their homes by Israeli forces in the first two months. Israeli leaders and public figures have called for their permanent exile.
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
          name="Benny Gantz"
          role="War Cabinet Member, Former Israeli Deputy Prime Minister and Minister of Defense"
          date="Nov 29, 2023"
          :offsetBottom="`${100 * scale}px`"
        >
          “The fighting will continue and expand to any place necessary in the Gaza Strip. There will be <strong>no sanctuary</strong> cities.”
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(3550 * scale)">
        <Narration
          :offsetBottom="`${150 * scale}px`"
        >
          <p>
            Two months after the Israeli military issued the first of dozens of mass displacement orders to residents of Gaza, 85% of the population had been <strong>driven from their homes</strong>, many being forced to move repeatedly.
          </p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(5488 * scale)" class="positioned-anchor-bottom">
        <Narration
          class="narration-center"
          offsetBottom="0"
        >
          <p>
            Those who were <strong>unable or unwilling to leave</strong> north Gaza, or who tried to return to their homes, were labeled “accomplices in a terrorist organization” by the Israeli military and subjected to denial of aid, execution-style killings, and mass arbitrary arrests.
          </p>
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
            <div class="car-call">
              They sought shelter at the UN-run Al-Fakhoura school, but Israeli forces bombed it within weeks, killing two members of his family.
            </div>
            <blockquote class="car-response">
              <p>“Nowhere is safe in Gaza, not even our schools.”</p>
              <cite class="car-response-cite">Tamara Alrifai, UNRWA</cite>
            </blockquote>
            <div class="car-call">
              The Al-Absi family fled again, this time making the perilous journey south.
            </div>
          </CallAndResponse>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(10866 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${150 * scale}px`"
        >
          <p>
            Salah Al-Din road, one of two routes from north to south Gaza, became known to Palestinians as a “<strong>death corridor</strong>”.
          </p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(12450 * scale)" class="positioned-anchor-bottom">
        <Narration :offsetBottom="`${64 * scale}px`">
          <CallAndResponse
            ref="road"
            :isVisible="isRoadVisible"
            class="road-car"
          >
            <div class="car-call">
              Palestinians evacuating south along the road have been arrested, shot at, and killed by Israeli forces, even though the army declared it a safe route.
            </div>
            <blockquote class="car-response">
              <p>“You can follow the orders so that you aren’t exposed to danger, but the danger will still reach you wherever you are.”</p>
              <cite class="car-response-cite">Raji Al-Ajrami</cite>
            </blockquote>
          </CallAndResponse>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(14160 * scale)">
        <Quote
          name="Ayelet Shaked"
          role="Former Israeli Minister of Interior"
          date="Nov 22, 2023"
          :offsetBottom="`${100 * scale}px`"
        >
          “We need <strong>all 2 million to leave</strong>. That's the solution for Gaza.”
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(15946 * scale)">
        <Narration
          :offsetBottom="`${200 * scale}px`"
        >
          <p>
            Mohammad Al-Absi made it south with the surviving members of his family. They settled in a warehouse in Rafah before moving to a tent camp closer to a United Nations base.
          </p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(17950 * scale)">
        <Narration :offsetBottom="`${100 * scale}px`">
          <CallAndResponse
            :isVisible="false"
            :line="false"
            class="tent-massacre"
          >
            <div class="car-call">
              Days after they arrived at Tal al-Sultan camp, Israel bombed it, killing 45 Palestinians in what became known as the “<strong>tent massacre</strong>.”
            </div>
            <div class="car-call">
              Many were burned alive in their tents.
            </div>
            <blockquote class="car-response">
              <p>“All the children started screaming... The sound was terrifying.”</p>
              <cite class="car-response-cite">Umm Mohamed Al-Attar</cite>
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
            <div class="car-call">
              The family could not afford transportation, so they settled in another camp nearby.
            </div>
            <div class="car-call">
              Two days later, on May 28, 2024, Israel bombed that camp, too, killing 15 members of the Al-Absi family.
            </div>
            <blockquote class="car-response">
              <p>“I felt helpless watching my family dying and not able to help them.”</p>
              <cite class="car-response-cite">Mohammad Al-Absi</cite>
            </blockquote>
          </CallAndResponse>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(21430 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${100 * scale}px`"
        >
          <p>
            Mohammad and his brother are the <strong>only surviving members</strong> of their family.
          </p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(23140 * scale)">
        <Narration offsetBottom="0">
          <CallAndResponse
            :line="false"
            :isVisible="false"
          >
            <div class="car-call">
              The Israeli military has attacked displaced people in tents, hospitals, schools, mosques, churches, UN shelters, along evacuation routes, and in designated “safe” areas.
            </div>
            <blockquote class="car-response">
              <p>
                “Have you ever felt like a toy, being played with left and right, east and west, pushed from one place to another – south to Khan Younis, out of Rafah, back to Khan Younis, then to Nuseirat, only to be driven out again?”
              </p>
              <cite class="car-response-cite">Maram Humaid</cite>
            </blockquote>
          </CallAndResponse>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(24795 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${100 * scale}px`"
        >
          <p>
            Israelis continue to demand that Palestinians be sent into <strong>permanent exile</strong>, continuing the Nakba.
          </p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(26570 * scale)">
        <Quote
          name="Itzik Cohen"
          role="Brigadier General, Israeli Army"
          date="Nov 5, 2024"
          :offsetBottom="`${100 * scale}px`"
        >
          “There is <strong>no return</strong> to the north [of Gaza], and there will not be.”
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
          <p>
            In October 2023, Mohammad Al-Absi fled with his family from their home in Jabalia refugee camp.
          </p>
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