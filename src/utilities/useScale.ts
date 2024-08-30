import { onMounted, ref } from 'vue'
import debounce from 'debounce'

export const useScale = () => {

  const scale = ref<Number>(0.5)

  const setScale = () => {
    const isPortrait = window.innerWidth <= window.innerHeight
    if (window.innerWidth >= 1920 && isPortrait) {
      scale.value = 1.5
    } else if (window.innerWidth >= 1500) {
      scale.value = 1
    } else if (window.innerWidth >= 1280 && isPortrait) {
      scale.value = 1
    } else if (window.innerWidth >= 1280) {
      scale.value = 0.75
    } else if (window.innerWidth >= 1024 && !isPortrait) {
      scale.value = 0.75
    } else if (window.innerWidth >= 720 && isPortrait) {
      scale.value = 1
    } else {
      scale.value = 0.5
    }
  }

  onMounted(() => {
    setScale()
    window.addEventListener('resize', debounce(setScale, 1000))
  })

  return {
    scale,
  }
}