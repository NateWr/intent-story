<script setup lang="ts">
import IconShare from './IconShare.vue'
import IconInfo from './IconInfo.vue'

defineEmits(['open-about', 'open-share'])
</script>

<template>
  <div class="credits">
    <div class="credits-list">
      <div class="credits-item credits-item-vp">
        <div class="credits-item-label">
          Made By
        </div>
        <a
          class="credits-item-link"
          href="https://visualizingpalestine.org/"
          target="_blank"
        >
          <img class="credits-vp-logo" src="/vp-logo.svg" alt="Visualizing Palestine Logo">
        </a>
      </div>
      <div class="credits-item credits-item-l4p">
        <div class="credits-item-label">
          Based on<br>
          Research By
        </div>
        <a
          class="credits-item-link"
          href="https://law4palestine.org/"
          target="_blank"
        >
          <img class="credits-l4p-logo" src="/law4palestine-logo.svg" alt="Law for Palestine Logo">
        </a>
      </div>
      <div class="credits-item credits-item-hadeel">
        <div class="credits-item-label">
          Illustrations By
        </div>
        <a
          class="credits-item-link"
          href="https://www.hadeelsaalok.com/"
          target="_blank"
        >
          <img class="credits-hadeel-logo" src="/hadeel-saalok-logo.svg" alt="Hadeel Saalok Logo">
        </a>
      </div>
    </div>
    <div class="credits-next">
      <div class="credits-next-text">
        View the database of
        <a href="https://intent.law4palestine.org" target="_blank">hundreds of genocidal statements</a>
        used in this piece.
      </div>
      <button
        class="credits-next-button"
        @click="$emit('open-share')"
      >
        <IconShare aria-hidden="true" />
        <span>
          Share & <br>
          Take Action
        </span>
      </button>
      <button
        class="credits-next-button"
        @click="$emit('open-about')"
      >
        <IconInfo aria-hidden="true" />
        <span>
          Sources &<br>
          Credits
        </span>
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