<script setup lang="ts">
import { computed, onMounted, ref, type PropType } from 'vue'
import debounce from 'debounce'
import ChapterCover from './ChapterCover.vue'
import IconScroll from './IconScroll.vue'
import Narration from './Narration.vue'
import PositionedContent from './PositionedContent.vue'
import Quote from './Quote.vue'
import Intro from './city/Intro.vue'
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

const CITY_WIDTH_ORIGINAL = 12205
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

onMounted(() => {
  setCoverWidth()
  window.addEventListener('resize', debounce(setCoverWidth, 1000))
})
</script>

<template>
  <div
    class="chapter chapter-intro"
    :style="{
      '--color-narration': 'var(--purple)',
      '--color-highlight': 'var(--purple)',
      '--color-title': 'var(--red)',
      '--color-subtitle-highlight': 'var(--green-light)',
      width: `${chapterWidth}px`,
    }"
  >
    <ChapterCover ref="cover">
      <template v-slot:title>
        <h1>{{ i18n.intent }}</h1>
      </template>
      <template v-slot:subtitle>
        Under international law, the crime of genocide requires <strong>acts of genocide</strong> and the <strong>intent</strong> to destroy a group of people, or a part of that group.
      </template>
      <div class="scroll-prompt">
        <IconScroll aria-hidden="true" />
        scroll down
      </div>
    </ChapterCover>
    <div
      class="chapter-content"
      :style="{
        left: `${coverWidth}px`,
      }"
    >
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
      <PositionedContent :left="(7231 * scale)">
        <Quote
          name="Temp Name"
          role="Temp role"
          date="Temp, 2023"
          :offsetBottom="`${200 * scale}px`"
        >
          “Lorem ipsum <strong>dolor</strong> sit amet.”
        </Quote>
      </PositionedContent>
      <PositionedContent :left="(9156 * scale)">
        <Narration
          :offsetBottom="`${350 * scale}px`"
        >
          <p>By ignoring, undermining, or outright attacking the distinction between combatants and civilians, these statements justify the <strong>unrestrained killing</strong> of all Palestinians.</p>
          <p>Each act of incitement tears away at the fabric of international law, which was founded in the aftermath of genocide in order to enforce these restraints.</p>
        </Narration>
      </PositionedContent>
      <PositionedContent :left="(10755 * scale)">
        <Narration
          size="lg"
          :offsetBottom="`${350 * scale}px`"
        >
          <p>The following examples, from a database of more than 400 statements, show how this incitement led to specific <strong>acts of genocide</strong> in Gaza.</p>
        </Narration>
      </PositionedContent>
      <div
        class="chapter-city"
        :style="`transform: scale(${scale})`"
      >
        <Intro />
      </div>
    </div>
  </div>
</template>

<style>
.chapter-intro {
  overflow-x: visible;
  background: linear-gradient(to bottom, rgba(133, 0, 255, 0.2), rgba(133, 0, 255, 0.01));
}

.scroll-prompt {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 0.1em;
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
</style>