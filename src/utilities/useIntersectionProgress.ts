import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'


export const useIntersectionProgress = (el: Ref<any | null>) => {

  const progress = ref<number>(0)

  const getCoords = () => {
    return typeof el?.value?.getBoundingClientRect !== 'undefined'
      ? el.value.getBoundingClientReat()
      : el?.value?.$el?.getBoundingClientRect()
  }

  const setProgress = () => {
    const coords = getCoords();

    if (!coords) {
      return
    }

    let scrollProgress = (window.innerWidth - coords.left)
    if (scrollProgress <= 0) {
      progress.value = 0
      return
    }

    let scrollEnd = coords.width + window.innerWidth
    progress.value = Math.min(1, scrollProgress / scrollEnd)
  }

  onMounted(() => {
    if (el.value) {
      setProgress()
      window.addEventListener('scroll', setProgress)
    }
  })

  return {
    progress,
  }
}
