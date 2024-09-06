<script setup lang="ts">
import { onMounted, ref, type PropType } from 'vue'
import Arrow from './Arrow.vue'
import Chapter from './Chapter.vue'
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
  },
  scrollStarted: {
    type: Boolean,
    required: true,
  }
})

const scrollPrompt = ref<boolean>(false)

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
    :style="{
      '--color-narration': 'var(--purple)',
      '--color-highlight': 'var(--purple)',
      '--color-title': 'var(--red)',
      '--color-subtitle-highlight': 'var(--green-light)',
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
        <Arrow offsetTop="30" :layer="3" />
      </PositionedContent>
      <PositionedContent :left="(6600 * scale)">
        <Arrow offsetTop="-10" :layer="3" />
      </PositionedContent>
      <PositionedContent :left="(6700 * scale)">
        <Arrow offsetTop="0" :layer="2" />
      </PositionedContent>
      <PositionedContent :left="(6740 * scale)">
        <Arrow offsetTop="25" :layer="3" />
      </PositionedContent>
      <PositionedContent :left="(6810 * scale)">
        <Arrow offsetTop="15" :layer="3" />
      </PositionedContent>
      <PositionedContent :left="(7120 * scale)">
        <Arrow offsetTop="10" :layer="3" />
      </PositionedContent>
      <PositionedContent :left="(7150 * scale)">
        <Arrow offsetTop="40" :layer="3" />
      </PositionedContent>
      <PositionedContent :left="(7350 * scale)">
        <Arrow offsetTop="43" :layer="3" />
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
      <PositionedContent :left="(7650 * scale)">
        <Arrow offsetTop="45" :layer="2" />
      </PositionedContent>
      <PositionedContent :left="(7800 * scale)">
        <Arrow offsetTop="0" :layer="3" />
      </PositionedContent>
      <PositionedContent :left="(7830 * scale)">
        <Arrow offsetTop="20" :layer="3" />
      </PositionedContent>
      <PositionedContent :left="(7940 * scale)">
        <Arrow offsetTop="38" :layer="3" />
      </PositionedContent>
      <PositionedContent :left="(7960 * scale)">
        <Arrow offsetTop="27" :layer="3" />
      </PositionedContent>
      <PositionedContent :left="(8100 * scale)">
        <Arrow offsetTop="0" :layer="2" />
      </PositionedContent>
      <PositionedContent :left="(8155 * scale)">
        <Arrow offsetTop="0" :layer="3" />
      </PositionedContent>
      <PositionedContent :left="(8300 * scale)">
        <Arrow offsetTop="25" :layer="3" />
      </PositionedContent>
      <PositionedContent :left="(8365 * scale)">
        <Arrow offsetTop="40" :layer="3" />
      </PositionedContent>
      <PositionedContent :left="(8385 * scale)">
        <Arrow offsetTop="20" :layer="2" />
      </PositionedContent>
      <PositionedContent :left="(8460 * scale)">
        <Arrow offsetTop="10" :layer="3" />
      </PositionedContent>
      <PositionedContent :left="(8600 * scale)">
        <Arrow offsetTop="60" :layer="3" />
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
    </template>
    <Intro :scale="scale" />
  </Chapter>
</template>

<style>
.chapter-intro {
  background: linear-gradient(to bottom, rgba(133, 0, 255, 0.2), rgba(133, 0, 255, 0.01));
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