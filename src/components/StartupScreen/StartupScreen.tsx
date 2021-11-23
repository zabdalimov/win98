import React from 'react'

import {
  StartupScreenLoading,
  StartupScreenStyled,
} from './StartupScreen.styles'

interface Props {
  isLoading: boolean
}

export const StartupScreen: React.FC<Props> = ({ isLoading }) => {
  return (
    <StartupScreenStyled>
      {isLoading && <StartupScreenLoading />}
    </StartupScreenStyled>
  )
}
