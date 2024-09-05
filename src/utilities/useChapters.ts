import { ref } from 'vue'
import type { I18N } from '../types/i18n'
import type { Chapter } from '../types/chapter'

export const useChapters = (i18n: I18N) => {

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
      color: 'var(--red)'
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

  return {
    chapters,
    setChapterProgress,
  }
}