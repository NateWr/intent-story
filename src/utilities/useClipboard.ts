import { ref } from "vue"

export const useClipboard = (success: string, error: string) => {

  const canCopy = ref<boolean>(!!navigator?.clipboard)
  const copyMessage = ref<string>('')

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      copyMessage.value = success
      setTimeout(() => copyMessage.value = '', 1000)
    } catch (err) {
      copyMessage.value = error
    }
  }

  return {
    canCopy,
    copyMessage,
    copyToClipboard
  }
}