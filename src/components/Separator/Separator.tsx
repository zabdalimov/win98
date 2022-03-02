import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'

import { theme } from '../../styles/theme'

export interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical'
}

const verticalStyles = css`
  width: 2px;
  height: 100%;
  border-left: 1px solid ${theme.colors.darkGray};
  border-right: 1px solid ${theme.colors.white};
`

const horizontalStyles = css`
  height: 2px;
  border-top: 1px solid ${theme.colors.darkGray};
  border-bottom: 1px solid ${theme.colors.white};
`

export const SeparatorStyled = styled.div<SeparatorProps>`
  ${(props) =>
    props.orientation === 'vertical' ? verticalStyles : horizontalStyles};
`

export const Separator: React.FC<SeparatorProps> = ({
  orientation = 'horizontal',
}) => {
  return <SeparatorStyled orientation={orientation} />
}
