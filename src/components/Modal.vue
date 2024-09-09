<script setup lang="ts">
import IconClose from './IconClose.vue';

defineEmits(['close'])
</script>

<template>
  <div class="modal">
    <div class="modal-content">
      <button class="modal-close" @click="$emit('close')">
        <span class="sr-only">Close</span>
        <IconClose aria-hidden="true" />
      </button>
      <slot />
    </div>
  </div>
</template>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  opacity: 1;
  transition: opacity 0.25s;
  z-index: 99999;
}

.modal-content {
  width: 90vw;
  max-width: 40rem;
  background: black;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  padding: 1.5rem;
  opacity: 1;
  transform: translateY(0);
  transition: all 0.25s 0.25s;
}

.modal.v-enter-from,
.modal.v-leave-to {
  opacity: 0;

  & .modal-content {
    opacity: 0;
    transform: translateY(-2rem);
  }
}

.modal.v-leave-to {
  transition-delay: 0.25s;

  & .modal-content {
    transform: translateY(2rem);
    transition-delay: 0s;
  }
}

.modal-close {
  position: absolute;
  top: 0;
  right: 0;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  & svg {
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>