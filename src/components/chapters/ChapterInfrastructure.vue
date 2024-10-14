<script setup lang="ts">
import { ref, type PropType } from 'vue'
import Chapter from '../Chapter.vue'
import ChapterCover from '../ChapterCover.vue'
import Narration from '../Narration.vue'
import PositionedContent from '../PositionedContent.vue'
import Quote from '../Quote.vue'
import CallAndResponse from '../CallAndResponse.vue'
import CityInfrastructure from './CityInfrastructure.vue'
import type { I18N } from '../../types/i18n'
import { useIntersectionObserver } from '../../utilities/useIntersectionObserver'

defineProps({
  i18n: {
    type: Object as PropType<I18N>,
    required: true,
  },
  scale: {
    type: Number,
    required: true,
  },
})

const allSectors = ref<HTMLElement | null>(null)
const { isVisible: isAllSectorsVisible } = useIntersectionObserver(allSectors)
const telecomms = ref<HTMLElement | null>(null)
const { isVisible: isTelecommsVisible } = useIntersectionObserver(telecomms)
const engineerBuilding = ref<HTMLElement | null>(null)
const { isVisible: isEngineerBuildingVisible } = useIntersectionObserver(engineerBuilding)
const flattened = ref<HTMLElement | null>(null)
const { isVisible: isFlattenedVisible } = useIntersectionObserver(flattened)
const shifaSiege = ref<HTMLElement | null>(null)
const { isVisible: isShifaSiegeVisible } = useIntersectionObserver(shifaSiege)
const shifaDestroyed = ref<HTMLElement | null>(null)
const { isVisible: isShifaDestroyedVisible } = useIntersectionObserver(shifaDestroyed)
</script>

<template>
  <Chapter
    class="chapter-infrastructure"
    :style="{
      '--color-narration': 'var(--blue)',
      '--color-highlight': 'var(--blue)',
      '--color-title': 'var(--blue)',
      '--color-subtitle-highlight': 'var(--blue)',
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
    <template #back>
      <PositionedContent :left="(1620 * scale)">
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
      <PositionedContent :left="(7168 * scale)">
        <Quote
          name="Nissim Vaturi"
          role="Deputy Speaker of Knesset (Likud)"
          date="Nov 17, 2023"
          offsetBottom="0px"
        >
          “All the preoccupation with whether or not there is internet in Gaza…We are too humane. <strong>Burn Gaza now</strong> no less!”
        </Quote>
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
      <PositionedContent :left="(12512 * scale)" class="positioned-anchor-bottom">
        <Narration offsetBottom="60px">
          <CallAndResponse
            ref="engineerBuilding"
            :isVisible="isEngineerBuildingVisible"
            class="engineer-building"
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
      <PositionedContent :left="(14292 * scale)" class="positioned-anchor-bottom">
        <Narration offsetBottom="30px">
          <CallAndResponse
            ref="flattened"
            :isVisible="isFlattenedVisible"
            class="flattened-infrastructure"
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
      <PositionedContent :left="(17962 * scale)">
        <Quote
          name="Ehud Barak"
          role="Former Israeli Prime Minister"
          date="Oct 20, 2023"
          offsetBottom="0"
        >
          “We are determined to destroy [Al-Shifa Hospital].”
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(19688 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${150 & scale}px`"
        >
          <p>
            Shortly after Barak’s statement, Israeli forces surrounded Gaza’s largest hospital, Al-Shifa, and held it <strong>under siege</strong> for two weeks.
          </p>
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
      <PositionedContent :left="(26649 * scale)">
        <Quote
          name="Bezalel Smotrich"
          role="Israeli Minister of Finance"
          date="Apr 29, 2024"
          offsetBottom="0"
        >
          “We must destroy Rafah, Nuseirat, and Deir al-Balah… There's no half- measure… <strong>absolute destruction</strong>.”
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

    <CityInfrastructure :scale="scale" />

    <template #front>
      <PositionedContent :left="(5357 * scale)" class="positioned-anchor-bottom">
        <Narration
          class="narration-center"
          offsetBottom="0px"
        >
          <p>
            Israeli forces didn’t spare a single life-sustaining sector in Gaza. Its housing, education, health, transportation, telecommunication, cultural, agricultural, and environmental systems <strong>all lie in rubble</strong>, the realization of genocidal intent.
          </p>
          <div
            ref="allSectors"
            class="narration-center-line"
            :class="isAllSectorsVisible && 'narration-center-line-visible'"
            aria-hidden="true"
          />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(9500 * scale)" class="positioned-anchor-bottom">
        <Narration
          class="narration-center"
          offsetBottom="0px"
        >
          <p>
            On October 31st, Israel imposed a <strong>total blackout</strong> on Gaza, cutting all telecommunication and internet services.
          </p>
          <div
            ref="telecomms"
            class="narration-center-line"
            :class="isTelecommsVisible && 'narration-center-line-visible'"
            aria-hidden="true"
          />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(21547 * scale)" class="positioned-anchor-bottom">
        <Narration offsetBottom="90px">
          <CallAndResponse
            ref="shifaSiege"
            :isVisible="isShifaSiegeVisible"
            class="shifa-siege"
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
      <PositionedContent :left="(23204 * scale)" class="positioned-anchor-bottom">
        <Narration offsetBottom="40px">
          <CallAndResponse
            ref="shifaDestroyed"
            :isVisible="isShifaDestroyedVisible"
            class="shifa-destroyed"
          >
            <div class="car-call">
              Israel eventually invaded Al-Shifa, destroying much of its life-saving equipment and leaving large sections in ruins.
            </div>
            <div class="car-call">
              After Palestinians got the facility partially up and running, Israel invaded again the following year.
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
    </template>
  </Chapter>
</template>

<style>
.chapter-infrastructure {
  background: var(--infrastructure-gradient);
}

.engineer-building .car-line {
  margin-top: 0;
}

.flattened-infrastructure .car-line {
  margin-top: -8rem;
  height: 40vh;
}

.shifa-siege .car-line {
  margin-top: -5.5rem;
}

.shifa-destroyed .car-line {
  margin-top: -6.5rem;
  height: 35vh;
}
</style>