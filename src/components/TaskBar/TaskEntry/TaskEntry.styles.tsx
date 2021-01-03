import { css } from '@emotion/react'
import colors from '../../../styles/colors.styles'

const taskEntryStyles = (isPushed: boolean) => css`
  font-size: 11px;
  min-width: 160px;
  height: 100%;
  margin-left: 2px;
  ${isPushed
    ? css`
        font-weight: bold;
        background-color: ${colors.lightGray};
      `
    : ''};
`

export default taskEntryStyles
