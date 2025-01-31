<script setup lang="ts">
import { type PropType } from 'vue'
import IconShare from './IconShare.vue'
import IconInfo from './IconInfo.vue'
import type { I18N } from '../types/i18n'

defineEmits(['open-about', 'open-share'])

defineProps({
  i18n: {
    type: Object as PropType<I18N>,
    required: true,
  },
})
</script>

<template>
  <div class="credits">
    <div class="credits-list">
      <div class="credits-item credits-item-vp">
        <div class="credits-item-label">
          {{ i18n.madeBy }}
        </div>
        <a
          class="credits-item-link"
          href="https://visualizingpalestine.org/"
          target="_blank"
        >
          <img class="credits-vp-logo" src="/vp-logo.svg" :alt="i18n.vpLogo">
        </a>
      </div>
      <div class="credits-item credits-item-l4p">
        <div class="credits-item-label" v-html="i18n.researchBy" />
        <a
          class="credits-item-link"
          href="https://law4palestine.org/"
          target="_blank"
        >
          <img class="credits-l4p-logo" src="/law4palestine-logo.svg" :alt="i18n.l4pLogo">
        </a>
      </div>
      <div class="credits-item credits-item-hadeel">
        <div class="credits-item-label">
          {{ i18n.illustrationsBy }}
        </div>
        <a
          class="credits-item-link"
          href="https://www.hadeelsaalok.com/"
          target="_blank"
        >
          <img class="credits-hadeel-logo" src="/hadeel-saalok-logo.svg" :alt="i18n.hadeelLogo">
        </a>
      </div>
    </div>
    <div class="credits-next">
      <div class="credits-next-text" v-html="i18n.viewDatabase" />
      <button
        class="credits-next-button"
        @click="$emit('open-share')"
      >
        <IconShare aria-hidden="true" />
        <span v-html="i18n.shareAndTakeAction" />
      </button>
      <button
        class="credits-next-button"
        @click="$emit('open-about')"
      >
        <IconInfo aria-hidden="true" />
        <span v-html="i18n.viewSources" />
      </button>
    </div>
  </div>
</template>

<style>
.credits {
  position: relative;
  display: flex;
  align-items: center;
  gap: 100vw;
  padding-top: 15vh;
  background: black;
  width: auto;
  padding-right: 50vw;
  margin-right: -100vw;

  & a,
  & .credits-next-button {

    &:focus-visible {
      outline: 2px solid white;
      outline-offset: 0.125em;
      text-decoration: none;
    }
  }
}

.credits-list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15vh;
  width: 120rem;
}

.credits-item {
  display: flex;
  align-items: flex-end;
  gap: 1rem;
}

.credits-item-l4p {
  align-self: center;
}

.credits-item-hadeel {
  align-self: flex-end;
}

.credits-item-label {
  position: relative;
  top: 0.25em;
  font-weight: 900;
  line-height: 1.25;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: right;
  white-space: nowrap;
}

.credits-item-link {
  display: block;
  flex-shrink: 0;
}

.credits-vp-logo,
.credits-hadeel-logo {
  width: auto;
  height: 3rem;
}

.credits-l4p-logo {
  width: auto;
  height: 6rem;
}

.credits-next {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100vw;
  padding: 1.5rem;
  max-width: 24rem;
}

.credits-next-text {
  font-weight: 500;

  & a {
    font-weight: 800;
    text-decoration: underline;
  }
}

.credits-next-button {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 2rem;
  font-size: 0.875rem;
  font-weight: 900;
  line-height: 1.25;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: left;
  white-space: nowrap;

  & svg {
    width: 2rem;
    height: 2rem;
  }
}
</style>