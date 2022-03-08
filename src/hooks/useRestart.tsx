import { useBiosLoading } from './useBiosLoading'
import { useWindowsLoading } from './useWindowsLoading'

export function useRestart() {
  const { setIsBiosLoaded } = useBiosLoading()
  const { setIsWindowsLoaded } = useWindowsLoading()

  const restart = () => {
    setIsBiosLoaded(false)
    setIsWindowsLoaded(false)
  }

  return {
    restart,
  }
}
