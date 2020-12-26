import { css } from '@emotion/react'
import colors from '../../../styles/colors.styles'
import { SeparatorProps } from './Separator'

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

const separatorStyles = ({ orientation = 'vertical' }: SeparatorProps) => css`
  ${orientation == 'vertical' ? verticalStyles : horizontalStyles}
`

export default separatorStyles
