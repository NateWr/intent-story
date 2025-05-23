import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'

type IntersectionObserverOptions = {
  root?: Element | Document,
  rootMargin?: string,
  threshold?: number | [number],
}

export const useIntersectionObserver = (el: Ref<any | null>, options?: IntersectionObserverOptions) => {

  const isVisible = ref<boolean>(false)

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      isVisible.value = entry.isIntersecting
    })
  }

  onMounted(() => {
    if (el.value) {
      const ob = new IntersectionObserver(callback, options ?? {})
      ob.observe(el.value?.$el || el.value)
    }
  })

  return {
    isVisible
  }
}