import { onMounted, ref } from 'vue'


export const usePerformance = () => {

  const start = ref<number>(0)
  const progress = ref<number>(0)
  const frames = ref<number>(0)
  const fps = ref<number>(0)

  const set = () => {
    progress.value = (performance.now() - start.value) / 1000
    frames.value = frames.value + 1
    if (frames.value > 20) {
      fps.value = frames.value / progress.value
      frames.value = 0
      start.value = performance.now()
    }
    requestAnimationFrame(set)
  }

  onMounted(() => {
    start.value = performance.now()
    requestAnimationFrame(set)
  })

  return {
    fps,
  }
}
