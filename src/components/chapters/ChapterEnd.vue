<script setup lang="ts">
import { type PropType } from 'vue'
import Chapter from '../Chapter.vue'
import Narration from '../Narration.vue'
import PositionedContent from '../PositionedContent.vue'
import Quote from '../Quote.vue'
import CityEnd from './CityEnd.vue'
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
    class="chapter-end"
    :style="{
      '--color-narration': 'var(--slate-light)',
      '--color-highlight': 'var(--slate-light)',
      '--color-title': 'var(--slate-light)',
      '--color-subtitle-highlight': 'var(--slate-light)',
    }"
  >
    <template #back>
      <PositionedContent :left="(1011 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${150 * scale}px`"
        >
          <p>
            Israeli leaders revealed their genocidal intent through colonial tropes, racialized language, and the use of dehumanizing terms to describe <strong>Palestinians as a whole</strong>.
          </p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(3053 * scale)">
        <Quote
          name="Benjamin Netanyahu"
          role="Israeli Prime Minister"
          date="Oct 25, 2023"
          :offsetBottom="`${200 * scale}px`"
        >
          “We are the people of the light, they are the <strong>people of darkness</strong>.”
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(4833 * scale)">
        <Narration :offsetBottom="`${100 * scale}px`">
          <CallAndResponse
            ref="school"
            :line="false"
            :isVisible="false"
          >
            <div class="car-call">
              Their rhetoric was so alarming that 800 scholars of genocide studies and international law immediately spoke out.
            </div>
            <blockquote class="car-response">
              <p>
                “Language used... appears to reproduce rhetoric and tropes associated with genocide and incitement to genocide.”
              </p>
              <cite class="car-response-cite">15 Oct 2023</cite>
            </blockquote>
          </CallAndResponse>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(6634 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${150 * scale}px`"
        >
          <p>
            Their warning was <strong>born out</strong> in the months of bombing, invasion, starvation, and mass displacement unleashed by Israel.
          </p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(8723 * scale)">
        <Narration
          :offsetBottom="`${150 * scale}px`"
        >
          <p>
            On January 26th, the International Court of Justice ordered “<strong>immediate and effective measures</strong>” to protect Palestinians in Gaza from the risk of genocide.
          </p>
          <p>
            Israeli leaders ignored the demand and <strong>belittled the court</strong>.
          </p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(10295 * scale)">
        <Quote
          name="Yoav Gallant"
          role="Minister of Defense"
          date="Jan 26, 2024"
          :offsetBottom="`${200 * scale}px`"
        >
          “Whoever is looking for justice, will not find it on the leather chairs in The Hague.”
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(11788 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${150 * scale}px`"
        >
          <p>
            A month later, human rights groups confirmed what everyone knew: <strong>Israel was defying the court.</strong>
          </p>
          <p>
            It continued to obstruct aid, commit war crimes, and use starvation as a weapon of war.
          </p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(13621 * scale)">
        <Quote
          name="Rami Igra"
          role="Former Head, Mossad Hostages and MIA Unit"
          date="Feb 14, 2024"
          :offsetBottom="`${150 * scale}px`"
        >
          “There are no uninvolved people in Gaza... <strong>everyone is involved</strong>.”
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(15448 * scale)">
        <Narration
          :offsetBottom="`${100 * scale}px`"
        >
          <p>
            As Israel's genocide drags on, it has become increasingly difficult to count the dead.
          </p>
          <p>
            Gaza's Ministry of Health reported 40,861 fatalities as of September 4, 2024, but experts project the direct and indirect death toll will be many times higher.
          </p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(17290 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${200 * scale}px`"
        >
          <p>
            In the last year, Israel has shown the intent, capacity and determination to permanently extinguish the <strong>conditions of life</strong> in Gaza.
          </p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(19121 * scale)">
        <Narration
          :offsetBottom="`${100 * scale}px`"
        >
          <p>
            They will not stop without a broad campaign of boycotts, divestment and sanctions that inhibit their ability to continue this genocide.
          </p>
          <p>
            Yet the United States, Germany, and other allies continue to provide Israel's genocide with military, political and diplomatic protection. In doing so, they defy their own treaty obligations to prevent another genocide.
          </p>
        </Narration>
      </PositionedContent>
    </template>

    <CityEnd :scale="scale" />

  </Chapter>
</template>

<style>
.chapter-end {
  background: var(--end-gradient);
}
</style>