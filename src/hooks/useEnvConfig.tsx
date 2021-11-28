import { useMemo } from 'react'

import { getEnvConfig } from '../utils/env'

export function useEnvConfig() {
  return useMemo(() => getEnvConfig(), [])
}
