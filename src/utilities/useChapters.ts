import { onMounted, ref, type Ref } from 'vue'
import type { I18N } from '../types/i18n'
import type { Chapter } from '../types/chapter'

export const useChapters = (i18n: I18N, chapterRefs: {id: string, ref: Ref<any | null>}[]) => {

  const chapters = ref<Chapter[]>([
    {
      id: 'intro',
      title: i18n.intro,
      progress: 0,
      color: 'var(--purple)'
    },
    {
      id: 'starvation',
      title: i18n.starvation,
      progress: 0,
      color: 'var(--green-light)'
    },
    {
      id: 'infrastructure',
      title: i18n.infrastructure,
      progress: 0,
      color: 'var(--red-light)'
    },
    {
      id: 'displacement',
      title: i18n.displacement,
      progress: 0,
      color: 'var(--blue)'
    },
    {
      id: 'civilianHarm',
      title: i18n.civilianHarm,
      progress: 0,
      color: 'var(--orange)'
    },
    {
      id: 'end',
      title: i18n.end,
      progress: 0,
      color: 'var(--slate)'
    },
  ])

  const setChapterProgress = (chapterId: string, progress: number) => {
    const i = chapters.value.findIndex(c => c.id === chapterId)
    if (i < 0) {
      return
    }
    chapters.value[i].progress = progress
  }

  onMounted(() => {
    chapterRefs.forEach(chapterRef => {
      document.addEventListener('scroll', () => {
        if (!chapterRef.ref.value) {
          return
        }
        const bounds = chapterRef.ref.value.$el.getBoundingClientRect()
        const start = window.innerWidth * 0.5
        const end = bounds.width - start
        if (bounds.x >= start) {
          chapterRef.ref.value = 0
        } else if (-bounds.x >= end) {
          chapterRef.ref.value = 1
        } else {
          if (bounds.x <= 0) {
            chapterRef.ref.value = -(bounds.x - start) / (end + start)
          } else {
            chapterRef.ref.value = (-bounds.x + start) / end
          }
        }
        setChapterProgress(chapterRef.id, chapterRef.ref.value)
      })
    })
  })

  return {
    chapters,
  }
}