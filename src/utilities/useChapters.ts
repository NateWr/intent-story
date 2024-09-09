import { nextTick, onMounted, ref, type Ref } from 'vue'
import { useI18N } from '../utilities/useI18N'
import type { Chapter } from '../types/chapter'

export const useChapters = (chapterRefs: {id: string, ref: Ref<any | null>}[]) => {

  const { getI18N } = useI18N()
  const i18n = getI18N()

  const chapters = ref<Chapter[]>([
    {
      id: 'intro',
      title: i18n.value.intro,
      progress: 0,
      color: 'var(--purple)'
    },
    {
      id: 'civilianHarm',
      title: i18n.value.civilianHarm,
      progress: 0,
      color: 'var(--red-light)'
    },
    {
      id: 'starvation',
      title: i18n.value.starvation,
      progress: 0,
      color: 'var(--green-light)'
    },
    {
      id: 'infrastructure',
      title: i18n.value.infrastructure,
      progress: 0,
      color: 'var(--blue)'
    },
    {
      id: 'displacement',
      title: i18n.value.displacement,
      progress: 0,
      color: 'var(--orange-light)'
    },
    {
      id: 'end',
      title: i18n.value.end,
      progress: 0,
      color: 'var(--slate-light)'
    },
  ])

  const setChapterProgress = (chapterId: string, progress: number) => {
    const i = chapters.value.findIndex(c => c.id === chapterId)
    if (i < 0) {
      return
    }
    chapters.value[i].progress = progress
  }

  const getChapterRef = (id: string) => {
    return chapterRefs.find(c => c.id === id)?.ref
  }

  const setAllChaptersProgress = () => {
    chapterRefs.forEach(chapterRef => {
      if (!chapterRef.ref.value) {
        return
      }
      let progress = 0
      const bounds = chapterRef.ref.value.$el.getBoundingClientRect()
      const start = window.innerWidth * 0.5
      const end = bounds.width - start
      if (bounds.x >= start) {
        progress = 0
      } else if (-bounds.x >= end) {
        progress = 1
      } else {
        if (bounds.x <= 0) {
          progress = -(bounds.x - start) / (end + start)
        } else {
          progress = (-bounds.x + start) / end
        }
      }
      setChapterProgress(chapterRef.id, progress)
    })
  }

  onMounted(() => {
    document.addEventListener('scroll', setAllChaptersProgress)
    nextTick(() => {
      nextTick(() => {
        nextTick(() => setAllChaptersProgress())
      })
    })
  })

  return {
    chapters,
    getChapterRef,
  }
}