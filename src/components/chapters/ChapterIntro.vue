<script setup lang="ts">
import { onMounted, ref, type PropType } from 'vue'
import Arrow from '../Arrow.vue'
import Chapter from '../Chapter.vue'
import ChapterCover from '../ChapterCover.vue'
import IconScroll from '../IconScroll.vue'
import Narration from '../Narration.vue'
import PositionedContent from '../PositionedContent.vue'
import Quote from '../Quote.vue'
import CityIntro from './CityIntro.vue'
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
    <CityIntro :scale="scale" />
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