import { css } from '@emotion/react'
import colors from '../../styles/colors.styles'
import { SeparatorProps } from './Separator'
import styled from '@emotion/styled'

const verticalStyles = css`
  width: 2px;
  height: 100%;
  border-left: 1px solid ${colors.darkGray};
  border-right: 1px solid ${colors.white};
`

const horizontalStyles = css`
  height: 2px;
  border-top: 1px solid ${colors.darkGray};
  border-bottom: 1px solid ${colors.white};
`

const SeparatorStyled = styled.div<SeparatorProps>`
  ${(props) =>
    props.orientation === 'vertical' ? verticalStyles : horizontalStyles};
`

export default SeparatorStyled
