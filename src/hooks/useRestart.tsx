import { useResetState } from './useResetState'
import { useSystemLoading } from './useSystemLoading'

export function useRestart() {
  const { resetState } = useResetState()
  const { setIsSystemLoading } = useSystemLoading()

  const restart = () => {
    setIsSystemLoading(true)
    setTimeout(() => {
      resetState()
    }, 3000)
  }

  return {
    restart,
  }
}
