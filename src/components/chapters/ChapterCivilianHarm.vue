<script setup lang="ts">
import { ref, type PropType } from 'vue'
import CallAndResponse from '../CallAndResponse.vue'
import Chapter from '../Chapter.vue'
import ChapterCover from '../ChapterCover.vue'
import Narration from '../Narration.vue'
import PositionedContent from '../PositionedContent.vue'
import Quote from '../Quote.vue'
import CityCivilianHarm from './CityCivilianHarm.vue'
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

const familyHome1 = ref<HTMLElement | null>(null)
const { isVisible: isFamilyHome1Visible } = useIntersectionObserver(familyHome1)
const familyHome2 = ref<HTMLElement | null>(null)
const { isVisible: isFamilyHome2Visible } = useIntersectionObserver(familyHome2)
const familyHome3 = ref<HTMLElement | null>(null)
const { isVisible: isFamilyHome3Visible } = useIntersectionObserver(familyHome3)
const gunnedDown = ref<HTMLElement | null>(null)
const { isVisible: isGunnedDownVisible } = useIntersectionObserver(gunnedDown)
</script>

<template>
  <Chapter
    class="chapter-civilian-harm"
    :style="{
      '--color-narration': 'var(--watermelon-light)',
      '--color-highlight': 'var(--watermelon-light)',
      '--color-title': 'var(--watermelon)',
      '--color-subtitle-highlight': 'var(--watermelon-light)',
    }"
  >
    <template #cover>
      <ChapterCover ref="cover">
        <template #title>
          <h2>{{ i18n.civilianHarm }}</h2>
        </template>
        <template #subtitle>
          Israeli forces made Gaza the deadliest place in the world to be a child, journalist, health worker, or aid worker. The mass killing was encouraged by Israelis at every level of society.
        </template>
      </ChapterCover>
    </template>
    <template #back>
      <PositionedContent :left="(1750 * scale)">
        <Quote
          name="Isaac Herzog"
          role="Israeli President"
          date="Oct 13, 2023"
          offsetBottom="0"
        >
          “It’s an <strong>entire nation</strong> out there that is responsible.”
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(3300 * scale)">
        <Narration
          :offsetBottom="`${150 * scale}px`"
        >
          <p>In the first few weeks of Israel's bombing campaign, entire Palestinian families, from <strong>great-grandparents to infants</strong>, were killed together.</p>
          <p>Airwars documented hundreds of attacks on Palestinian family homes and residential towers.</p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(4880 * scale)" class="positioned-anchor-bottom">
        <Narration
          ref="familyHome1"
          class="narration-center family-home-one"
          offsetBottom="0"
        >
          <div class="narration-dated">
            <div class="narration-dated-date">
              Oct 14, 2024
            </div>
            <div>
              Israel bombed the Al-Herbawi family's home and adjacent residences, killing 34 civilians, including a 4-month old baby.
            </div>
          </div>
          <div
            class="narration-center-line"
            :class="isFamilyHome1Visible && 'narration-center-line-visible'"
            aria-hidden="true"
          />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(5400 * scale)" class="positioned-anchor-bottom">
        <Narration
          ref="familyHome2"
          class="narration-center family-home-two"
          offsetBottom="0"
        >
          <div class="narration-dated">
            <div class="narration-dated-date">
              Oct 20, 2024
            </div>
            <div>
              Israel bombed the Al-Aqad family’s home, killing 12 family members, including well-known poet Heba Abu Nada.
            </div>
          </div>
          <div
            class="narration-center-line"
            :class="isFamilyHome2Visible && 'narration-center-line-visible'"
            aria-hidden="true"
          />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(5865 * scale)" class="positioned-anchor-bottom">
        <Narration
          ref="familyHome3"
          class="narration-center family-home-three"
          offsetBottom="0"
        >
          <div class="narration-dated">
            <div class="narration-dated-date">
              Oct 22, 2024
            </div>
            <div>
              Israel bombed the Al-Naouq family’s home, killing 21 family members. Nine remained trapped under the rubble.
            </div>
          </div>
          <div
            class="narration-center-line"
            :class="isFamilyHome3Visible && 'narration-center-line-visible'"
            aria-hidden="true"
          />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(7325 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${150 * scale}px`"
        >
          <p>
            There are <strong>hundreds of stories</strong> like these.
          </p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(9070 * scale)">
        <Quote
          name="Israeli Intelligence Officer"
          role=""
          date=""
          :offsetBottom="`${100 * scale}px`"
        >
          “When a 3-year-old girl is killed in a home in Gaza, it’s because someone in the army decided it <strong>wasn’t a big deal</strong> for her to be killed.”
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(10795 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${150 * scale}px`"
        >
          <p>
            Families are also targeted by Israeli ground forces, who set up <strong>free-fire zones</strong> in areas where civilians are sheltering.
          </p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(12529 * scale)" class="positioned-anchor-bottom">
        <Narration :offsetBottom="`${64 * scale}px`">
          <CallAndResponse
            ref="gunnedDown"
            :isVisible="isGunnedDownVisible"
            class="gunned-down"
          >
            <div class="car-call">
              Six members of the Abu Salah family were returning from the cemetery, where they had just buried their teenage nephew, when they were gunned down by Israeli forces.
            </div>
            <div class="car-call">
              Their remains were bulldozed into a pile of rubbish and only discovered after Israeli forces left.
            </div>
            <blockquote class="car-response">
              <p>“There was total freedom of action... It’s permissible to shoot everyone, a young girl, an old woman.”</p>
              <cite class="car-response-cite">Israeli Soldier</cite>
            </blockquote>
          </CallAndResponse>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(14250 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${150 * scale}px`"
        >
          <p>
            Palestinians who <strong>survived</strong> faced the destruction of home and family, injury, disease, and starvation.
          </p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(18380 * scale)">
        <Quote
          name="Nissim Maturin"
          role="Deputy Speaker of Knesset (Likud)"
          date="Nov 13, 2023"
          :offsetBottom="`${100 * scale}px`"
        >
          “A ten-year-old boy [in Gaza] is a <strong>terrorist</strong> in 6 to 7 years.”
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(19720 * scale)">
        <Narration
          :offsetBottom="`${200 * scale}px`"
        >
          <p>
            Dehumanizing statements like this have been translated into civilian harm so irrefutably shocking that some of the world’s largest humanitarian organizations declared “<strong>we have seen nothing like the siege of Gaza</strong>.”
          </p>
        </Narration>
      </PositionedContent>
    </template>
    <CityCivilianHarm :scale="scale" />
    <template #front>
      <PositionedContent :left="(16080 * scale)">
        <Narration
          offsetBottom="0"
          class="civ-punishment-campaigns"
        >
          <CallAndResponse
            :line="false"
            :isVisible="false"
          >
            <div class="car-call">
              The Israeli military carried out "one of the most intense <strong>civilian punishment campaigns</strong> in history," according to military historian Robert Pape.
            </div>
            <div class="car-call">
              UNICEF estimated that 17,000 Palestinian children were <strong>orphaned</strong> or separated from their parents by February 2024.
            </div>
            <blockquote class="car-response">
              <p>“My most fervent dream is simply to stay alive.”</p>
              <cite class="car-response-cite">Ahmad, 14</cite>
            </blockquote>
          </CallAndResponse>
        </Narration>
      </PositionedContent>
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

.gunned-down .car-line {
  margin-top: -7rem;
}

@media ((--phones-landscape) and (not (--tablets-landscape))) {

  .gunned-down .car-line {
    margin-top: -4rem;
  }

  .civ-punishment-campaigns {
    margin-bottom: 2rem;
  }
}
</style>