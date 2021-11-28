import { useEffect } from 'react'

export function useOnKeyDownOnce(key: string, onKeyDown: () => void) {
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.key === key) {
        onKeyDown()
      }
    }
    window.addEventListener('keydown', listener)
    return () => window.removeEventListener('keydown', listener)
  }, [key, onKeyDown])
}
