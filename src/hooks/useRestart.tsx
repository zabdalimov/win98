import { useResetState } from './useResetState'

export function useRestart() {
  const { resetState } = useResetState()

  const restart = () => {
    resetState()
  }

  return {
    restart,
  }
}
