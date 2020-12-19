import { css } from '@emotion/react'
import colors from './colors.styles'

// TODO type this out
const mixins = {
  standardBorder: css`
    box-shadow: inset 1px 1px ${colors.white}, inset 2px 2px ${colors.lightGray},
      inset -1px -1px ${colors.black}, inset -2px -2px ${colors.darkGray};
  `,
  standardBorderInverted: css`
    box-shadow: inset 1px 1px ${colors.black}, inset 2px 2px ${colors.darkGray},
      inset -1px -1px ${colors.white}, inset -2px -2px ${colors.lightGray};
  `,
}

export default mixins
