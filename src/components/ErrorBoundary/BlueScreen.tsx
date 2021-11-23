import React from 'react'

import {
  BlueScreenHeading,
  BlueScreenStyled,
  BlueScreenText,
} from './BlueScreen.styles'

interface Props {
  headingText?: string
  body: React.ReactNode
}

export const BlueScreen: React.FC<Props> = ({
  headingText = 'System',
  body,
}) => {
  return (
    <BlueScreenStyled>
      <BlueScreenHeading>{headingText}</BlueScreenHeading>
      <BlueScreenText>{body}</BlueScreenText>
    </BlueScreenStyled>
  )
}
