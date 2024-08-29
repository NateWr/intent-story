<template>
  <div
    class="
      chapter-cover
      flex flex-col gap-8
    "
  >
    <div
      class="
        text-8xl
        font-black
        uppercase
        tracking-widest
        leading-none
        text-title
        laptops-sm:text-[13rem]
      "
    >
      <slot name="title" />
    </div>
    <div
      class="
        text-xl
        font-serif
        font-bold
        leading-relaxed
      "
    >
      <slot name="subtitle" />
    </div>
    <div
      class="
        flex
        flex-col
        gap-1
      "
    >
      <slot />
    </div>
  </div>
</template>

<style>
.chapter-cover {
  width: 100vw;
  padding: 3rem 1.5rem;
  padding: 20vh 10vw;
  overflow: visible;
}
</style>