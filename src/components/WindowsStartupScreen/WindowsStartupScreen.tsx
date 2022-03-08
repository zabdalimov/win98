import React, { useEffect } from 'react'

import { useAudio } from '../../hooks/useAudio'
import { useFakeLoading } from '../../hooks/useFakeLoading'
import { useVolume } from '../../hooks/useVolume'
import { useWindowsLoading } from '../../hooks/useWindowsLoading'

import {
  WindowsStartupScreenLoading,
  WindowsStartupScreenStyled,
} from './WindowsStartupScreen.styles'

export const WindowsStartupScreen: React.FC = () => {
  // TODO mb add skip button
  const { playAudio } = useAudio()
  const { volume } = useVolume()
  const { setIsWindowsLoaded } = useWindowsLoading()
  const { isLoading } = useFakeLoading(5000, 5000)

  useEffect(() => {
    if (!isLoading) {
      playAudio('startup.mp3')
      if (volume !== 0) {
        // We need to close startup in the middle of a sound for more natural feel
        setTimeout(() => setIsWindowsLoaded(true), 4500)
      } else {
        setIsWindowsLoaded(true)
      }
    }
  }, [isLoading, playAudio, setIsWindowsLoaded, volume])

  return (
    <WindowsStartupScreenStyled>
      {isLoading && <WindowsStartupScreenLoading />}
    </WindowsStartupScreenStyled>
  )
}
