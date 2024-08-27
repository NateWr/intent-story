<script setup lang="ts">
import { type PropType } from 'vue'
import Test from './Test.vue'
import { useI18N } from '../utilities/useI18N'
import type { I18N } from '../types/i18n'

const props = defineProps({
  i18n: {
    type: Object as PropType<I18N>,
    required: true,
  }
})

const { getI18N, setI18N } = useI18N()
setI18N(props.i18n)
const i18n = getI18N()

</script>

<template>
  <main class="main">
    <h1 class="title">{{ i18n.title }}</h1>
    <blockquote class="quote">
      This is a test of the Lora font.
    </blockquote>
    <Test />
  </main>
</template>

<style is:global>
body {
  color: white;
  background: black;
  scroll-behavior: smooth;
}

@media (--laptops-sm) {
  body {
    background: red;
  }
}

.title {
  font-size: 3rem;
  font-weight: 700;
}

.main {

  .quote {
    font-family: var(--font-serif);
    font-size: 1rem;
  }
}

@media (--laptops-sm) {

  .main {

    .quote {
      font-size: 2rem;
    }
  }
}
</style>