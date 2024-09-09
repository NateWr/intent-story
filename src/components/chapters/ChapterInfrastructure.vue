<script setup lang="ts">
import { type PropType } from 'vue'
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
          <h1>{{ i18n.infrastructure }}</h1>
        </template>
        <template #subtitle>
          Lorem ipsum <strong>dolor sit amet</strong>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </template>
      </ChapterCover>
    </template>
    <template #back>
      <PositionedContent :left="(2000 * scale)">
        <Quote
          name="Pulvinar Ullamcorper"
          role="Ex Accumsan Nunc"
          date="Oct 13, 2023"
          :offsetBottom="`${300 * scale}px`"
        >
          “Dolor torquent lacinia class <strong>litora pulvinar</strong> velit fusce tristique.”
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(3500 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${150 * scale}px`"
        >
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(5000 * scale)">
        <Narration
          :offsetBottom="`${0 * scale}px`"
        >
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Montes pellentesque praesent pellentesque rutrum ut. Ornare dolor vitae eu torquent natoque taciti enim vivamus. Commodo natoque sollicitudin posuere vehicula taciti taciti primis vehicula.</p>
        </Narration>
      </PositionedContent>
    </template>
    <CityIntro :scale="scale" />
  </Chapter>
</template>

<style>
.chapter-infrastructure {
  background: var(--infrastructure-gradient);
}
</style>