<script setup lang="ts">
import { onMounted, ref, type PropType } from 'vue'
import debounce from 'debounce'
import ChapterCover from './ChapterCover.vue'
import CityLabel from './CityLabel.vue'
import Narration from './Narration.vue'
import PositionedContent from './PositionedContent.vue'
import Quote from './Quote.vue'
import Starvation1 from './city/Starvation1.vue'
import type { I18N } from '../types/i18n'

defineProps({
  i18n: {
    type: Object as PropType<I18N>,
    required: true,
  }
})

const scale = ref<Number>(0.5)

const setScale = () => {
  if (window.innerWidth >= 1280) {
    scale.value = 0.75
  } else {
    scale.value = 0.5
  }
}
onMounted(() => {
  setScale()
  window.addEventListener('resize', debounce(setScale, 1000))
})
</script>

<template>
  <div
    class="chapter chapter-starvation"
    :style="{
      '--color-highlight': 'var(--green-light)',
      '--color-title': 'var(--green-lighter)',
    }"
  >
    <ChapterCover>
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
        "
      >
        Convention on the Prevention and Punishment of the Crime of Genocide
      </div>
    </ChapterCover>
    <div class="chapter-content">
      <PositionedContent :left="(650 * scale)" :top="20">
        <Quote
          name="Yoav Gallant"
          role="Israeli Defense Minister"
          date="Oct 9, 2023"
        >
          “I have ordered a <strong>complete siege</strong> on the Gaza Strip. There will be no electricity, no food, no fuel, everything is closed.”
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(1700 * scale)" :top="10">
        <Narration>
          <p>Nine months after Gallant’s promise to control the flow of life-saving essentials, UN experts declared a <strong>state of famine</strong> across all of Gaza.</p>
          <p>During this campaign of starvation, Israeli occupation forces (IOF) burned food stocks, destroyed agricultural land, bombed flour mills, greenhouses, bakeries, and fisheries, allowed Israeli settlers to destroy aid bound for Gaza, and carried out targeted attacks on both aid seekers and aid workers.</p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(2750 * scale)" :top="20">
        <Quote
          name="Itamar Ben Gvir"
          role="Israeli Minister of National Security"
          date="Oct 17, 2023"
        >
          “The only thing that needs to enter Gaza is hundreds of tons of explosives by the Air Force, and <strong>not an ounce of humanitarian aid.</strong>”
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(4190 * scale)" :top="10">
        <Narration class="flour-massacre">
          <div class="flour-massacre-text">
            <p>On February 29, 2024, a crowd of starving Palestinians gathered on Al-Rashid St. to meet an incoming aid convoy.</p>
            <div class="narration-quote">
              <p>“There was a sense of hope and even joy that we would get flour to take back to our families.”</p>
              <p class="narration-quote-cite">Abdel Jalil Al-Fayoumi, 22</p>
            </div>
            <p>Then, Israeli forces opened fire on the crowd, massacring 112 people and injuring 760. The attack is remembered as the <strong>flour massacre.</strong></p>
            <div class="narration-quote">
              <p>“My 13-year-old cousin, Nidal, was shot dead while attempting to get a bag of flour from a truck.”</p>
              <p class="narration-quote-cite">Salameh Rafiq Obeid, 22</p>
            </div>
          </div>
          <div class="flour-massacre-line" aria-hidden="true" />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(5160 * scale)" :top="30">
        <Narration size="lg">
          <p>The flour massacre represents a <strong>pattern of incidents</strong> of Israeli forces targeting desperate aid seekers in Gaza.</p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(6280 * scale)" :top="20">
        <Quote
          name="Boaz Bismuth"
          role="Member of the Israeli Knesset (Likud)"
          date="Oct 16, 2023"
        >
          “There is no place for any humanitarian gestures – we must <strong>erase the memory of Amalek.</strong>”
          <template v-slot:footer>
            <Narration>
              <p>In the Torah, the ancient Israelites were said to be commanded by God to commit genocide against the people of “Amalek”.</p>
            </Narration>
          </template>
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(7777 * scale)" :top="30" class="wck-massacre">
        <Narration>
          <p>On April 1, 2024,  a series of brutally precise Israeli strikes on a World Central Kitchen aid convoy killed 7 aid workers.</p>
          <p>The attack forced the largest aid organizations to suspend their operations in Gaza at a point when 1.1 million people––or half the population of Gaza––were experiencing <strong>catastrophic levels of hunger</strong> and at least 28 children had died of starvation.</p>
        </Narration>
        <div class="wck-massacre-line" aria-hidden="true" />
      </PositionedContent>
      <PositionedContent :left="(8885 * scale)" :top="30">
        <Narration size="lg">
          <p>
            The attack on the World Central Kitchen convoy is part of a <strong>documented pattern</strong> of the IOF knowingly targeting aid convoys and facilities.
          </p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(9831 * scale)" :top="40">
        <Narration class="flour-massacre">
          <div class="flour-massacre-text">
            <p>
              These attacks, combined with indiscriminate aerial bombardment, made Gaza the <strong>deadliest place in the world</strong> to be an aid worker. 
            </p>
            <div class="narration-quote">
              <p>At least 278 aid workers killed between Oct 7 and July 24, 2024.</p>
              <p class="narration-quote-cite">UN OCHA</p>
            </div>
          </div>
          <div class="flour-massacre-line" aria-hidden="true" />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(10670 * scale)" :top="20">
        <Narration>
          <p>
            Children under five, pregnant or breastfeeding women, the elderly, and people with disabilities suffer the most from Israel’s <strong>campaign of starvation</strong>.
          </p>
          <p>
            Israeli officials said they would weaponize food and they did, causing serious bodily and mental harm to Palestinians in Gaza and inflicting on them <strong>conditions of life</strong> intended to bring about their destruction as a group.
          </p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(11785 * scale)" :top="20">
        <Quote
          name="Revital Gotliv"
          role="Member of the Israeli Knesset (Likud)"
          date="Oct 23, 2023"
        >
          “Without <strong>hunger and thirst</strong> among the Gazan population, we will not succeed…”
        </Quote>
      </PositionedContent>
      <div
        class="chapter-city"
        :style="`transform: scale(${scale})`"
      >
        <Starvation1 />
      </div>
      <PositionedContent :left="(1860 * scale)">
        <CityLabel
          :scale="scale"
          :lineHeight="128"
          :bottom="188"
        >
          Bakeries
        </CityLabel>
      </PositionedContent>
      <PositionedContent :left="(2130 * scale)">
        <CityLabel
          :scale="scale"
          :lineHeight="128"
          :bottom="234"
        >
          Flour Mills
        </CityLabel>
      </PositionedContent>
    </div>
  </div>
</template>

<style>
.chapter-starvation {
  width: 7000px;
  overflow-x: visible;

  & .chapter-content {
    left: 40rem;
  }
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

.city-highlight {
  fill: var(--green-light);
  stroke: var(--green-light);
}

.flour-massacre {
  margin-left: -2rem;
  width: 20rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.flour-massacre-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  & p {
    max-width: 16rem;
  }

  & .narration-quote {
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    font-family: var(--font-serif);
    text-align: end;
    color: white;
  }

  & .narration-quote-cite {
    font-size: 0.875rem;
    font-family: var(--font-sans);
    font-weight: 700;
  }
}

.flour-massacre-line {
  margin-left: 2rem;
  margin-top: -7rem;
  margin-bottom: 2rem;
  width: 2px;
  height: 100%;
  background: var(--green-light);
  transform: translateX(-50%);
}

.wck-massacre {
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  gap: 1.5rem;
}

.wck-massacre-line {
  width: 2px;
  height: 100%;
  background: var(--green-light);
  margin-bottom: 2rem;
  transform: translateX(-50%);
}

@media (--laptops-sm) {
  .chapter-starvation {
    width: 12000px;

    & .chapter-content {
      left: 100rem;
    }
  }

  .flour-massacre-line {
    margin-bottom: 3rem;
  }

  .wck-massacre-line {
    margin-bottom: 3rem;
  }
}
</style>