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
          In five months, Israeli forces destroyed an estimated 70% of all civilian infrastructure in Gaza in one of the most destructive bombing campaigns in history.
        </template>
      </ChapterCover>
    </template>

    <template #bg>
      <CityInfrastructureBg :width="cityBgWidth" />
    </template>

    <template #back>
      <PositionedContent :left="(2100 * scale)">
        <Quote
          name="Daniel Hagari"
          role="IDF spokesperson"
          date="Oct 10, 2023"
          :offsetBottom="`${200 * scale}px`"
        >
          “Right now we’re focused on what causes <strong>maximum damage</strong>.”
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(3570 * scale)">
        <Narration
          :offsetBottom="`${150 * scale}px`"
        >
          <p>
            Three months after Israeli officials, legislators, and public figures called to “flatten,” “erase,” “burn,” and “destroy” Gaza, Israeli forces had carried out one of the <strong>most destructive bombing campaigns in history</strong>, according to military historians.
          </p>
          <p>
            And it was just beginning.
          </p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(5100 * scale)">
        <Narration
          :offsetBottom="`${100 * scale}px`"
        >
          <p>
            Israeli forces didn’t spare a single life-sustaining sector in Gaza. Its housing, education, health, transportation, telecommunication, cultural, agricultural, and environmental systems <strong>all lie in rubble</strong>.
          </p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(7000 * scale)">
        <Quote
          name="Nissim Vaturi"
          role="Deputy Speaker of Knesset (Likud)"
          date="Nov 17, 2023"
          offsetBottom="0px"
        >
          “All the preoccupation with whether or not there is internet in Gaza…We are too humane. <strong>Burn Gaza now</strong> no less!”
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(9170 * scale)">
        <Narration
          :offsetBottom="`${200 * scale}px`"
        >
          <p>
            On October 31, 2023 Israel imposed a <strong>total blackout</strong> on Gaza, cutting all telecommunication and internet services.
          </p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(10927 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${50 * scale}px`"
        >
          <p>
            Over the next 34 hours, Israeli forces carried out a series of <strong>deadly massacres</strong>, killing more than 1,000 Palestinians and leaving large swaths of Gaza in ruins.
          </p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(12320 * scale)">
        <Narration>
          <CallAndResponse
            :line="false"
            :isVisible="false"
          >
            <div class="car-call">
              In one attack, Israeli airstrikes brought down a six-story residential building in central Gaza, killing at least 136 residents, including 54 children.
            </div>
            <div class="car-call">
              Hatem Abdo’s 13-year-old son and two nephews, who were playing football in the street at the time, were among those killed.
            </div>
          </CallAndResponse>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(14000 * scale)">
        <Narration>
          <CallAndResponse
            :line="false"
            :isVisible="false"
          >
            <div class="car-call">
              During the blackout, Israel bombed high-rise blocks, public buildings, and critical infrastructure across Gaza, from Jabalia in the north to Rafah in the south.
            </div>
            <blockquote class="car-response">
              <p>“Don't know how to describe the damage... It's flattened, totally flattened to the ground. Nothing is the same, nothing is standing.”</p>
              <cite class="car-response-cite">Anas Baba, Palestinian Journalist</cite>
            </blockquote>
          </CallAndResponse>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(16041 * scale)">
        <Narration
          size="lg"
          offsetBottom="0"
        >
          <p>
            Israel's destruction of housing is part of a campaign to dismantle the <strong>conditions of life</strong> in Gaza.
          </p>
          <p>
            Nowhere is this clearer than in its persistent attacks on health facilities, which sustain not only present life, but also future life.
          </p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(17940 * scale)">
        <Quote
          name="Ehud Barak"
          role="Former Israeli Prime Minister"
          date="Oct 20, 2023"
          offsetBottom="0"
        >
          “We are determined to destroy [Al-Shifa Hospital].”
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(19488 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${150 * scale}px`"
        >
          <p>
            Shortly after Barak’s statement, Israeli forces surrounded Gaza’s largest hospital, Al-Shifa, and held it <strong>under siege</strong> for two weeks.
          </p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(21300 * scale)">
        <Narration offsetBottom="0px">
          <CallAndResponse
            :line="false"
            :isVisible="false"
          >
            <div class="car-call">
              Hundreds of staff, 1500 displaced people, and 600 patients, including 39 premature babies, were trapped inside.
            </div>
            <div class="car-call">
              The hospital went days without power.
            </div>
            <blockquote class="car-response">
              <p>
                “We lost the life of one baby today. Yesterday we lost two.”
              </p>
              <cite class="car-response-cite">
                Dr. Marwan Abu Sada, Al-Shifa Hospital
              </cite>
            </blockquote>
          </CallAndResponse>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(23000 * scale)">
        <Narration offsetBottom="0px">
          <CallAndResponse
            :line="false"
            :isVisible="false"
          >
            <div class="car-call">
              Israel eventually invaded Al-Shifa, destroying much of its life-saving equipment and leaving large sections in ruins.
            </div>
            <div class="car-call">
              After Palestinians got the facility partially up and running, Israel invaded again a few months later.
            </div>
            <blockquote class="car-response">
              <p>
                “[Al-Shifa hospital] is now an empty shell with human graves.”
              </p>
              <cite class="car-response-cite">
                Director-General, World Health Organization
              </cite>
            </blockquote>
          </CallAndResponse>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(24910 * scale)">
        <Narration
          :offsetBottom="`${150 & scale}px`"
        >
          <p>
            Israel has repeatedly killed, maimed, and arrested health workers in more than 500 separate attacks on sites of care.
          </p>
          <p>
            By June 1, 2024, 84% of health facilities in Gaza were damaged or destroyed. Less than half of all hospitals were partially functional, preventing Palestinians from accessing care amid bombardment, starvation, and disease.
          </p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(26449 * scale)">
        <Quote
          name="Bezalel Smotrich"
          role="Israeli Minister of Finance"
          date="Apr 29, 2024"
          offsetBottom="0"
        >
          “We must destroy Rafah, Nuseirat, and Deir al-Balah… There's no half-measure… <strong>absolute destruction</strong>.”
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(28653 * scale)">
        <Narration
          size="lg"
          offsetBottom="0px"
        >
          <p>
            Israel's campaign of mass destruction embodies the crime of genocide.
          </p>
          <p>
            By striking at the very foundations of Palestinian society, it undermines their existence on the land and their ability to return home in the future.
          </p>
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