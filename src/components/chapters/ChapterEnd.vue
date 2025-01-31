<script setup lang="ts">
import { computed, type PropType } from 'vue'
import CallAndResponse from '../CallAndResponse.vue'
import Chapter from '../Chapter.vue'
import Narration from '../Narration.vue'
import PositionedContent from '../PositionedContent.vue'
import Quote from '../Quote.vue'
import CityEnd from './CityEnd.vue'
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
})

const cityWidth = computed(() => 26000 * props.scale)
</script>

<template>
  <Chapter
    class="chapter-end"
    :cityWidth="cityWidth"
    :localeDir="i18n.dir"
  >
    <template #back>
      <PositionedContent :left="(1011 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${150 * scale}px`"
        >
          <p v-html="i18n.endJustify" />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(3153 * scale)">
        <Quote
          :name="i18n.endDarknessName"
          :role="i18n.endDarknessRole"
          :date="i18n.endDarknessDate"
          :offsetBottom="`${200 * scale}px`"
        >
          <span v-html="i18n.endDarknessQuote" />
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(4833 * scale)">
        <Narration :offsetBottom="`${100 * scale}px`">
          <CallAndResponse
            ref="school"
            :line="false"
            :isVisible="false"
          >
            <div class="car-call" v-html="i18n.endScholars1" />
            <blockquote class="car-response">
              <p v-html="i18n.endScholars2" />
              <cite class="car-response-cite" v-html="i18n.endScholars2Cite" />
            </blockquote>
          </CallAndResponse>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(6634 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${150 * scale}px`"
        >
          <p v-html="i18n.endScholarsWarning" />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(8723 * scale)">
        <Narration
          :offsetBottom="`${150 * scale}px`"
        >
          <p v-html="i18n.endICJ1" />
          <p v-html="i18n.endICJ2" />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(10345 * scale)">
        <Quote
          :name="i18n.endICJName"
          :role="i18n.endICJRole"
          :date="i18n.endICJDate"
          :offsetBottom="`${200 * scale}px`"
        >
          <span v-html="i18n.endICJQuote" />
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(11788 * scale)">
        <Narration
          size="lg"
          offsetBottom="0"
        >
          <p v-html="i18n.endContinued1" />
          <p v-html="i18n.endContinued2" />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(13621 * scale)">
        <Quote
          :name="i18n.endUninvolvedName"
          :role="i18n.endUninvolvedRole"
          :date="i18n.endUninvolvedDate"
          :offsetBottom="`${150 * scale}px`"
        >
          <span v-html="i18n.endUninvolvedQuote" />
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(15448 * scale)">
        <Narration
          :offsetBottom="`${200 * scale}px`"
        >
          <p v-html="i18n.endCountDead1" />
          <p v-html="i18n.endCountDead2" />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(17290 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${200 * scale}px`"
        >
          <p v-html="i18n.endConditions" />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(19121 * scale)">
        <Narration
          :offsetBottom="`${100 * scale}px`"
        >
          <p v-html="i18n.endStop1" />
          <p v-html="i18n.endStop2" />
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(23500 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${200 * scale}px`"
        >
          <p v-html="i18n.endStop3" />
        </Narration>
      </PositionedContent>
    </template>

    <CityEnd
      :width="cityWidth"
    />

  </Chapter>
</template>

<style>
.chapter-end {
  --color-narration: var(--slate-light);
  --color-highlight: var(--slate-light);
  --color-title: var(--slate-light);
  --color-subtitle-highlight: var(--slate-light);
  background: var(--end-gradient);
}
</style>