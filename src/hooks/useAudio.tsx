import { playAudio } from '../audio'

import { useVolume } from './useVolume'

export function useAudio() {
  const { volume: systemVolume } = useVolume()

  return {
    playAudio: (fileName: string, volume = systemVolume) => {
      return playAudio(fileName, volume)
    },
  }
}
