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
import { useIntersectionProgress } from '../../utilities/useIntersectionProgress'
import type { I18N } from '../../types/i18n'

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

type CityIntroType = InstanceType<typeof CityIntro>
const city = ref<CityIntroType | null>(null)
const { progress: cityProgress } = useIntersectionProgress(city);

const cityWidth = computed(() => 13427 * props.scale)
const cityBgFarWidth = computed(() => 7007 * props.scale)
const cityBgFarScrollDistance = computed(() => (cityWidth.value - cityBgFarWidth.value) / cityBgFarWidth.value)
const cityBgWidth = computed(() => 8724 * props.scale)
const cityBgScrollDistance = computed(() => (cityWidth.value - cityBgWidth.value) / cityBgWidth.value)

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
      '--color-narration': 'var(--purple)',
      '--color-highlight': 'var(--purple)',
      '--color-title': 'var(--red)',
      '--color-subtitle-highlight': 'var(--green-light)',
      '--city-progress': cityProgress,
      '--city-bg-far-scroll-distance': `${(cityBgFarScrollDistance * 100).toFixed(4)}%`,
      '--city-bg-scroll-distance': `${(cityBgScrollDistance * 100).toFixed(4)}%`,
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
    <template #back>
      <svg
        class="city-bg-far"
        :style="{
          width: `${(cityBgFarWidth).toFixed()}px`,
          height: 'auto',
        }"
        xmlns="http://www.w3.org/2000/svg"
        width="7007"
        height="671"
        fill="none"
        viewBox="0 0 7007 671"
      >
        <g>
          <image id="city-bg-4" href="city-bg-4.png" width="340" height="350" x="2738" y="203" />
          <image id="city-bg-1" href="city-bg-1.png" width="465" height="482" x="2029" y="81" />
          <image id="city-bg-2" href="city-bg-2.png" width="487" height="569" x="1387" />
          <image id="city-bg-3" href="city-bg-3.png" width="361" height="463" x="2571" y="119" />
          <image id="city-bg-3" href="city-bg-3.png" width="434" height="556" x="4858" y="9" />
          <image id="city-bg-1" href="city-bg-1.png" width="417" height="432" x="4668" y="170" />
          <image id="city-bg-3" href="city-bg-3.png" width="281" height="360" x="4260" y="222" />
          <image id="city-bg-4" href="city-bg-4.png" width="233" height="224" x="3851" y="329" />
          <image id="city-bg-2" href="city-bg-2.png" width="487" height="569" x="3914" y="29" />
          <image id="city-bg-1" href="city-bg-1.png" width="417" height="432" x="3293" y="140" />
          <image id="city-bg-5" href="city-bg-5.png" width="326" height="503" x="3176" y="97" />
          <image id="city-bg-4" href="city-bg-4.png" width="233" height="224" x="5904" y="329" />
          <image id="city-bg-3" href="city-bg-3.png" width="306" height="392" x="5789" y="208" />
          <image id="city-bg-2" href="city-bg-2.png" width="363" height="424" x="5454" y="178" />
          <image id="city-bg-3" href="city-bg-3.png" width="288" height="369" x="6509" y="213" />
          <image id="city-bg-5" href="city-bg-5.png" width="326" height="503" x="6249" y="97" />
          <image id="city-bg-2" href="city-bg-2.png" width="363" height="424" x="6644" y="179" />
        </g>
      </svg>
      <svg
        class="city-bg"
        :style="{
          width: `${(cityBgWidth).toFixed()}px`,
          height: 'auto',
        }"
        xmlns="http://www.w3.org/2000/svg"
        width="8724"
        height="512"
        fill="none"
        viewBox="0 0 8724 512"
      >
        <g>
          <image id="city-bg-8" href="city-bg-8.png" width="132" height="233" x="1503" y="141" />
          <image id="city-bg-9" href="city-bg-9.png" width="209" height="210" x="1332" y="185" />
          <image id="city-bg-7" href="city-bg-7.png" width="527" height="364" x="2212" y="60" />
          <image id="city-bg-6" href="city-bg-6.png" width="410" height="364" x="2819" y="75" />
          <image id="city-bg-9" href="city-bg-9.png" width="294" height="295" x="4513" y="117" />
          <image id="city-bg-7" href="city-bg-7.png" width="527" height="364" x="3765" y="60" />
          <image id="city-bg-7" href="city-bg-7.png" width="527" height="364" x="8197" y="60" />
          <image id="city-bg-10" href="city-bg-10.png" width="311" height="385" x="3568" y="49" />
          <image id="city-bg-6" href="city-bg-6.png" width="410" height="364" x="4688" y="75" />
          <image id="city-bg-6" href="city-bg-6.png" width="363" height="322" x="7240" y="117" />
          <image id="city-bg-8" href="city-bg-8.png" width="186" height="327" x="5330" y="82" />
          <image id="city-bg-10" href="city-bg-10.png" width="311" height="385" x="5464" y="49" />
          <image id="city-bg-9" href="city-bg-9.png" width="353" height="354" x="6521" y="49" />
          <image id="city-bg-7" href="city-bg-7.png" width="527" height="364" x="6123" y="60" />
          <image id="city-bg-10" href="city-bg-10.png" width="350" height="433" x="7481" y="1" />
          <image id="city-bg-8" href="city-bg-8.png" width="240" height="422" x="8089" />
        </g>
      </svg>
      <PositionedContent :left="(1723 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${350 * scale}px`"
        >
          <p>Israeli leaders have made and continue to make <strong>clear statements</strong> of their intent to commit genocide.</p>
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
          <p>This sentiment has been <strong>adopted and amplified</strong> by hundreds of individual soldiers, journalists and public figures across Israeli society.</p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(6300 * scale)">
        <Arrow offsetTop="0" :layer="3" />
      </PositionedContent>
      <PositionedContent :left="(6600 * scale)">
        <Arrow offsetTop="-40" :layer="3" />
      </PositionedContent>
      <PositionedContent :left="(6700 * scale)">
        <Arrow offsetTop="-15" :layer="2" />
      </PositionedContent>
      <PositionedContent :left="(6740 * scale)">
        <Arrow offsetTop="0" :layer="3" />
      </PositionedContent>
      <PositionedContent :left="(6810 * scale)">
        <Arrow offsetTop="-20" :layer="3" />
      </PositionedContent>
      <PositionedContent :left="(7120 * scale)">
        <Arrow offsetTop="-5" :layer="3" />
      </PositionedContent>
      <PositionedContent :left="(7150 * scale)">
        <Arrow offsetTop="-30" :layer="3" />
      </PositionedContent>
      <PositionedContent :left="(7350 * scale)">
        <Arrow offsetTop="15" :layer="3" />
      </PositionedContent>
      <PositionedContent :left="(7390 * scale)">
        <Arrow offsetTop="28" :layer="3" />
      </PositionedContent>
      <PositionedContent :left="(7480 * scale)">
        <Arrow offsetTop="-60" :layer="3" />
      </PositionedContent>
      <PositionedContent :left="(7510 * scale)">
        <Arrow offsetTop="60" :layer="3" />
      </PositionedContent>
      <PositionedContent :left="(7670 * scale)">
        <Arrow offsetTop="37" :layer="2" />
      </PositionedContent>
      <PositionedContent :left="(7800 * scale)">
        <Arrow offsetTop="-20" :layer="3" />
      </PositionedContent>
      <PositionedContent :left="(7830 * scale)">
        <Arrow offsetTop="20" :layer="3" />
      </PositionedContent>
      <PositionedContent :left="(7940 * scale)">
        <Arrow offsetTop="0" :layer="3" />
      </PositionedContent>
      <PositionedContent :left="(7960 * scale)">
        <Arrow offsetTop="7" :layer="3" />
      </PositionedContent>
      <PositionedContent :left="(8100 * scale)">
        <Arrow offsetTop="0" :layer="2" />
      </PositionedContent>
      <PositionedContent :left="(8155 * scale)">
        <Arrow offsetTop="-20" :layer="3" />
      </PositionedContent>
      <PositionedContent :left="(8300 * scale)">
        <Arrow offsetTop="25" :layer="3" />
      </PositionedContent>
      <PositionedContent :left="(8350 * scale)">
        <Arrow offsetTop="-60" :layer="3" />
      </PositionedContent>
      <PositionedContent :left="(8385 * scale)">
        <Arrow offsetTop="25" :layer="2" />
      </PositionedContent>
      <PositionedContent :left="(8460 * scale)">
        <Arrow offsetTop="-30" :layer="3" />
      </PositionedContent>
      <PositionedContent :left="(8550 * scale)">
        <Arrow offsetTop="-10" :layer="3" />
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
          <p>These statements attempt to justify the unrestrained killing of all Palestinians as a <strong>group of people</strong>.</p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(10930 * scale)">
        <Narration
          :offsetBottom="`${350 * scale}px`"
        >
          <p>The crime of genocide can be committed by killing or harming members of a group, as well as inflicting on it <strong>conditions of life</strong> that will bring about its destruction.</p>
          <p>Israel has starved the people of Gaza, destroyed life-sustaining infrastructure, and forcibly displaced and killed residents at a shocking rate, leading dozens of experts to conclude that Israel is committing genocide in Gaza.</p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(12750 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${350 * scale}px`"
        >
          <p>The following examples of incitement, from a database of more than 400 statements, show that israel <strong>intended to commit genocide</strong> in Gaza.</p>
        </Narration>
      </PositionedContent>
    </template>

    <CityIntro
      ref="city"
      :width="cityWidth"
    />
  </Chapter>
</template>

<style>
.chapter-intro {
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