import React, { useEffect } from 'react'

import { playAudio } from '../../audio'
import useStartup from '../../hooks/useStartup'
import { useWindowsLoading } from '../../hooks/useWindowsLoading'

import {
  WindowsStartupScreenLoading,
  WindowsStartupScreenStyled,
} from './WindowsStartupScreen.styles'

export const WindowsStartupScreen: React.FC = () => {
  // TODO mb add skip button
  const { setWindowsIsLoaded } = useWindowsLoading()
  const { isLoading } = useStartup(5000, 5000)

  useEffect(() => {
    if (!isLoading) {
      playAudio('startup.mp3')
      // We need to close startup in the middle of a sound for more natural feel
      setTimeout(() => setWindowsIsLoaded(), 4500)
    }
  }, [isLoading, setWindowsIsLoaded])

  return (
    <WindowsStartupScreenStyled>
      {isLoading && <WindowsStartupScreenLoading />}
    </WindowsStartupScreenStyled>
  )
}
