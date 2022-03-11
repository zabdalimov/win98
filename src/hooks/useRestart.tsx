import { useAudio } from './useAudio'
import { useResetState } from './useResetState'
import { useSystemLoading } from './useSystemLoading'

export function useRestart() {
  const { resetState } = useResetState()
  const { setIsSystemLoading } = useSystemLoading()

  const { playAudio } = useAudio()

  const restart = () => {
    setIsSystemLoading(true)
    playAudio('shutdown.mp3')
    setTimeout(() => {
      resetState()
    }, 4500)
  }

  return {
    restart,
  }
}
