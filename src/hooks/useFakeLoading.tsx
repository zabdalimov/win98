import { useEffect, useState } from 'react'

import { randomIntFromInterval } from '../utils/math'

export function useFakeLoading(minTimeMs: number, maxTimeMs: number) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(
      () => setIsLoading(false),
      randomIntFromInterval(minTimeMs, maxTimeMs)
    )
  }, [maxTimeMs, minTimeMs])

  return {
    isLoading,
  }
}
