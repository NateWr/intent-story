<script setup lang="ts">
import { type PropType } from 'vue';
import type { I18N } from '../types/i18n';

defineProps({
  i18n: {
    type: Object as PropType<I18N>,
    required: true,
  },
})

</script>

<template>
  <div class="about">
    <div class="about-section">
      <div class="about-title">
        {{ i18n.sources }}
      </div>
      <div class="about-details">
        <p v-html="i18n.sourcesDescription" />
      </div>
    </div>
    <div class="about-section">
      <div class="about-title">
        {{ i18n.producedBy }}
      </div>
      <div class="about-details">
        <div class="sr-only">{{ i18n.visualizingPalestine }}</div>
        <a href="https://visualizingpalestine.org" class="vp-link">
          <img class="vp-logo" src="/vp-logo.svg" :alt="i18n.vpLogo">
        </a>
        <div class="vp-socials">
          <a href="https://twitter.com/visualizingpal">
            <span class="sr-only">{{ i18n.vpTwitter }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="currentColor"
                d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/visualizing_palestine">
            <span class="sr-only">{{ i18n.vpInstagram }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="currentColor"
                d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/visualizingpalestine">
            <span class="sr-only">{{ i18n.vpFacebook }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="currentColor"
                d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="about-section">
      <div class="about-title">
        {{ i18n.about }}
      </div>
      <div class="about-details">
        <div v-html="i18n.aboutVP" />
        <div v-html="i18n.aboutVP2" />
      </div>
      <div class="about-date"> {{ i18n.date }}</div>
    </div>
  </div>
</template>

<style>
.about {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.about-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.about-title {
  font-size: 0.875rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.about-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & a {
    font-weight: 700;
    text-decoration: underline;
    text-decoration-thickness: 0.1em;

    &:focus-visible {
      outline: 2px solid;
      outline-offset: 2px;
      text-decoration: none;
    }
  }
}

.vp-logo,
.vp-logo-link {
  width: 100%;
  max-width: 25rem;
  height: auto;
}

.vp-socials {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & svg {
    width: 1.5rem;
    height: auto;
  }
}
</style>