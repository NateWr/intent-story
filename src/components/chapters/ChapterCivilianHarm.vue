<script setup lang="ts">
import { type PropType } from 'vue'
import CallAndResponse from '../CallAndResponse.vue'
import Chapter from '../Chapter.vue'
import ChapterCover from '../ChapterCover.vue'
import Narration from '../Narration.vue'
import PositionedContent from '../PositionedContent.vue'
import Quote from '../Quote.vue'
import CityIntro from './CityIntro.vue'
import type { I18N } from '../../types/i18n'

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
</script>

<template>
  <Chapter
    class="chapter-civilian-harm"
    :style="{
      '--color-narration': 'var(--red-light)',
      '--color-highlight': 'var(--red-light)',
      '--color-title': 'var(--red)',
      '--color-subtitle-highlight': 'var(--red-light)',
    }"
  >
    <template #cover>
      <ChapterCover ref="cover">
        <template #title>
          <h1>{{ i18n.civilianHarm }}</h1>
        </template>
        <template #subtitle>
          Lorem ipsum <strong>dolor sit amet</strong>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </template>
      </ChapterCover>
    </template>
    <template #back>
      <PositionedContent :left="(2000 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${150 * scale}px`"
        >
          <p>
            Within ten weeks of October 7, 2023, Israeli forces made Gaza the deadliest place in the world to be a child, journalist, health worker, or aid worker.
          </p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(3500 * scale)">
        <Narration
          :offsetBottom="`${0 * scale}px`"
        >
          <CallAndResponse>
            <blockquote class="car-response">
              <p>Gaza is one of the most intense civilian punishment campaigns in history.</p>
              <cite class="car-response-cite">Robert Pape, military historian</cite>
            </blockquote>
          </CallAndResponse>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(5000 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${350 * scale}px`"
        >
          <p>When he said this in January 2023, the assault was <strong>just beginning</strong>.</p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(6500 * scale)">
        <Quote
          name="Isaac Herzog"
          role="Israeli President"
          date="Oct 13, 2023"
          :offsetBottom="`${300 * scale}px`"
        >
          “It’s an <strong>entire nation</strong> out there that is responsible.”
        </Quote>
      </PositionedContent>
    </template>
    <CityIntro :scale="scale" />
  </Chapter>
</template>

<style>
.chapter-civilian-harm {
  background: var(--civilian-harm-gradient);
}
</style>