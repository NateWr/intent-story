<script setup lang="ts">
import { computed, onMounted, ref, type PropType } from 'vue'
import debounce from 'debounce'
import ChapterCover from './ChapterCover.vue'
import CityLabel from './CityLabel.vue'
import CallAndResponse from './CallAndResponse.vue'
import Narration from './Narration.vue'
import PositionedContent from './PositionedContent.vue'
import Quote from './Quote.vue'
import Starvation1 from './city/Starvation1.vue'
import { useIntersectionObserver } from '../utilities/useIntersectionObserver'
import type { I18N } from '../types/i18n'

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

const CITY_WIDTH_ORIGINAL = 13400
const cityWidth = computed(() => CITY_WIDTH_ORIGINAL * props.scale)
const coverWidth = ref<number>(0)
const cover = ref<InstanceType<typeof ChapterCover>>()
const chapterWidth = computed(() => (coverWidth.value * 2) + cityWidth.value)

const setCoverWidth = () => {
  if (!cover.value) {
    coverWidth.value = 0
    return
  }
  coverWidth.value = cover.value.$el.clientWidth
}

const bakeries = ref<typeof CityLabel | null>(null)
const { isVisible: isBakeriesVisible } = useIntersectionObserver(bakeries, {threshold: 0.5})
const mills = ref<typeof CityLabel | null>(null)
const { isVisible: isMillsVisible } = useIntersectionObserver(mills, {threshold: 0.5})
const flourMassacre = ref<typeof CallAndResponse | null>(null)
const { isVisible: isFlourMassacreVisible } = useIntersectionObserver(flourMassacre, {threshold: 0.1})
const wckMassacre = ref<HTMLElement | null>(null)
const { isVisible: isWckMassacreVisible } = useIntersectionObserver(wckMassacre)
const deadlyAidWork = ref<HTMLElement | null>(null)
const { isVisible: isDeadlyAidWorkVisible } = useIntersectionObserver(deadlyAidWork, {threshold: 0.1})

onMounted(() => {
  setCoverWidth()
  window.addEventListener('resize', debounce(setCoverWidth, 1000))
})
</script>

<template>
  <div
    class="chapter chapter-starvation"
    :style="{
      '--color-narration': 'var(--green-light)',
      '--color-highlight': 'var(--green-light)',
      '--color-title': 'var(--green-lighter)',
      width: `${chapterWidth}px`,
    }"
  >
    <ChapterCover ref="cover">
      <template v-slot:title>
        <h1>{{ i18n.starvation }}</h1>
      </template>
      <template v-slot:subtitle>
        “deliberately inflicting on the group conditions of life calculated to bring about its physical destruction in whole or in part.”
      </template>
      <div
        class="
          text-xl
          font-bold
          phones-landscape:text-sm
          laptops-sm:text-2xl
        "
      >
        Article II (c)
      </div>
      <div
        class="
          text-sm
          font-medium
          leading-5
          text-balance
          phones-landscape:text-xs
          laptops-sm:text-lg
        "
      >
        Convention on the Prevention and Punishment of the Crime of Genocide
      </div>
    </ChapterCover>
    <div
      class="chapter-content"
      :style="{
        left: `${coverWidth}px`,
      }"
    >
      <PositionedContent :left="(1862 * scale)">
        <Quote
          name="Yoav Gallant"
          role="Israeli Defense Minister"
          date="Oct 9, 2023"
          :offsetBottom="`${300 * scale}px`"
        >
          “I have ordered a <strong>complete siege</strong> on the Gaza Strip. There will be no electricity, no food, no fuel, everything is closed.”
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(2910 * scale)">
        <Narration :offsetBottom="`${350 * scale}px`">
          <p>Nine months after Gallant’s promise to control the flow of life-saving essentials, UN experts declared a <strong>state of famine</strong> across all of Gaza.</p>
          <p>During this campaign of starvation, Israeli occupation forces (IOF) burned food stocks, destroyed agricultural land, bombed flour mills, greenhouses, bakeries, and fisheries, allowed Israeli settlers to destroy aid bound for Gaza, and carried out targeted attacks on both aid seekers and aid workers.</p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(3950 * scale)">
        <Quote
          name="Itamar Ben Gvir"
          role="Israeli Minister of National Security"
          date="Oct 17, 2023"
          :offsetBottom="`${200 * scale}px`"
        >
          “The only thing that needs to enter Gaza is hundreds of tons of explosives by the Air Force, and <strong>not an ounce of humanitarian aid.</strong>”
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(7410 * scale)">
        <Quote
          name="Boaz Bismuth"
          role="Member of the Israeli Knesset (Likud)"
          date="Oct 16, 2023"
          :offsetBottom="`${300 * scale}px`"
        >
          “There is no place for any humanitarian gestures – we must <strong>erase the memory of Amalek.</strong>”
          <template v-slot:footer>
            <Narration>
              <p>In the Torah, the ancient Israelites were said to be commanded by God to commit genocide against the people of “Amalek”.</p>
            </Narration>
          </template>
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(8894 * scale)" style="align-items: flex-end">
        <Narration
          class="wck-massacre"
          :offsetBottom="`${64 * scale}px`"
        >
          <p>On April 1, 2024,  a series of brutally precise Israeli strikes on a World Central Kitchen aid convoy killed 7 aid workers.</p>
          <p>The attack forced the largest aid organizations to suspend their operations in Gaza at a point when 1.1 million people––or half the population of Gaza––were experiencing <strong>catastrophic levels of hunger</strong> and at least 28 children had died of starvation.</p>
          <div
            ref="wckMassacre"
            class="wck-massacre-line"
            :class="isWckMassacreVisible && 'wck-massacre-line-visible'"
            aria-hidden="true"
          />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(10950 * scale)" style="align-items: flex-end">
        <Narration offsetBottom="0">
          <CallAndResponse
            ref="deadlyAidWork"
            class="starvation-aid-workers-killed"
            :isVisible="isDeadlyAidWorkVisible"
          >
            <div class="car-call">
              These attacks, combined with indiscriminate aerial bombardment, made Gaza the <strong>deadliest place in the world</strong> to be an aid worker. 
            </div>
            <blockquote class="car-response">
              <p>At least 278 aid workers killed between Oct 7 and July 24, 2024.</p>
              <cite class="car-response-cite">UN OCHA</cite>
            </blockquote>
          </CallAndResponse>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(12937 * scale)">
        <Quote
          name="Revital Gotliv"
          role="Member of the Israeli Knesset (Likud)"
          date="Oct 23, 2023"
          :offsetBottom="`${250 * scale}px`"
        >
          “Without <strong>hunger and thirst</strong> among the Gazan population, we will not succeed…”
        </Quote>
      </PositionedContent>
      <div
        class="chapter-city"
        :style="`transform: scale(${scale})`"
      >
        <Starvation1
          :showBakeries="isBakeriesVisible"
          :showMills="isMillsVisible"
          :showFlourMassacre="isFlourMassacreVisible"
          :showWckMassacre="isWckMassacreVisible"
          :showDeadlyAidWork="isDeadlyAidWorkVisible"
        />
      </div>
      <PositionedContent :left="(2980 * scale)">
        <CityLabel
          ref="bakeries"
          :lineHeight="`${128 * scale}px`"
          :bottom="`${188 * scale}px`"
          :isVisible="isBakeriesVisible"
        >
          Bakeries
        </CityLabel>
      </PositionedContent>
      <PositionedContent :left="(3250 * scale)">
        <CityLabel
          ref="mills"
          :lineHeight="`${128 * scale}px`"
          :bottom="`${234 * scale}px`"
          :isVisible="isMillsVisible"
        >
          Flour Mills
        </CityLabel>
      </PositionedContent>
      <PositionedContent :left="(5307 * scale)" style="align-items: flex-end">
        <Narration :offsetBottom="`${64 * scale}px`">
          <CallAndResponse
            ref="flourMassacre"
            class="flour-massacre"
            :isVisible="isFlourMassacreVisible"
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
      <PositionedContent :left="(6274 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${350 * scale}px`"
        >
          <p>The flour massacre represents a <strong>pattern of incidents</strong> of Israeli forces targeting desperate aid seekers in Gaza.</p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(10000 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${250 * scale}px`"
        >
          <p>
            The attack on the World Central Kitchen convoy is part of a <strong>documented pattern</strong> of the IOF knowingly targeting aid convoys and facilities.
          </p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(11795 * scale)">
        <Narration :offsetBottom="`${150 * scale}px`">
          <p>
            Children under five, pregnant or breastfeeding women, the elderly, and people with disabilities suffer the most from Israel’s <strong>campaign of starvation</strong>.
          </p>
          <p>
            Israeli officials said they would weaponize food and they did, causing serious bodily and mental harm to Palestinians in Gaza and inflicting on them <strong>conditions of life</strong> intended to bring about their destruction as a group.
          </p>
        </Narration>
      </PositionedContent>
    </div>
  </div>
</template>

<style>
.chapter-starvation {
  overflow-x: visible;
}

.chapter {
  position: relative;
  background: linear-gradient(to bottom, #112C00, #120000);
}

.chapter-content {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.chapter-city {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  transform-origin: bottom left;
}

.chapter-city-building {
  position: absolute;
  bottom: 0;
  left: 0;
}

.chapter-city-building-highlight {
  z-index: 9999;
}

.flour-massacre .car-line {
  height: 30vh;
  margin-top: -7rem;
}

.starvation-aid-workers-killed .car-line {
  height: 50vh;
  margin-top: -5rem;
}

.wck-massacre {
  transform: translateX(-50%);
  align-items: center;
}

.wck-massacre-line {
  width: 2px;
  height: 25vh;
  background: var(--color-highlight);
  opacity: 0;
  transform: scaleY(0) translateX(-50%);
  transform-origin: bottom center;
  transition: all 0.5s 0.3s;
}

.wck-massacre-line-visible {
  opacity: 1;
  transform: scaleY(1) translateX(-50%);
}

@media ((--phones-landscape) and (not (--tablets-landscape))) {
  .flour-massacre .car-line {
    margin-top: -5rem;
    height: 25vh;
  }

  .starvation-aid-workers-killed {
    max-width: 24rem;
  }

  .starvation-aid-workers-killed .car-line {
    height: 65vh;
  }
}

@media (orientation: portrait) and (--laptops-lg) {
  .flour-massacre .car-line {
    margin-top: -9rem;
  }

  .wck-massacre-line {
    height: 50vh;
  }

  .starvation-aid-workers-killed .car-line {
    height: 45vh;
  }
}
</style>