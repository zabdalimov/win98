import React, { useEffect } from 'react'

import { useAudio } from '../../hooks/useAudio'
import { useFakeLoading } from '../../hooks/useFakeLoading'
import { useSystemLoading } from '../../hooks/useSystemLoading'
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
  const { setIsSystemLoading } = useSystemLoading()
  const { isLoading } = useFakeLoading(5000, 5000)

  useEffect(() => {
    if (!isLoading) {
      playAudio('startup.mp3')
      // We need to close startup in the middle of a sound for more natural feel
      setTimeout(
        () => {
          setIsWindowsLoaded(true)
          setIsSystemLoading(false)
        },
        volume !== 0 ? 4500 : 0
      )
    }
  }, [isLoading, playAudio, setIsSystemLoading, setIsWindowsLoaded, volume])

  return (
    <WindowsStartupScreenStyled>
      {isLoading && <WindowsStartupScreenLoading />}
    </WindowsStartupScreenStyled>
  )
}
