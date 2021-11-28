import { useMemo } from 'react'

export function useBrowserInfo() {
  return useMemo(
    () => ({
      cores: navigator.hardwareConcurrency,
      // in GiB
      minimalRam: navigator.deviceMemory,
      platform: navigator.platform,
      // in bytes
      storageEstimate: navigator.storage.estimate(),
      userAgent: navigator.userAgent,
      vendor: navigator.vendor,
    }),
    []
  )
}
