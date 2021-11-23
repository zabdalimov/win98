import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { theme } from '../../styles/theme'

import { SeparatorProps } from './Separator'

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

const SeparatorStyled = styled.div<SeparatorProps>`
  ${(props) =>
    props.orientation === 'vertical' ? verticalStyles : horizontalStyles};
`

export default SeparatorStyled
