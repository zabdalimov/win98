import { css } from '@emotion/react'
import colors from './colors.styles'

const mixins = {
  // Padding is added so box shadow is not overlapping with contents of the element
  standardBorder: css`
    box-shadow: inset 1px 1px ${colors.white}, inset 2px 2px ${colors.lightGray},
      inset -1px -1px ${colors.black}, inset -2px -2px ${colors.darkGray};
    padding: 2px;
  `,
  standardBorderInverted: css`
    box-shadow: inset 1px 1px ${colors.black}, inset 2px 2px ${colors.darkGray},
      inset -1px -1px ${colors.white}, inset -2px -2px ${colors.lightGray};
    padding: 2px;
  `,
  dottedBorderBlack: css`
    outline: 1px dotted ${colors.black};
  `,
  dottedBorderWhite: css`
    border: 1px dotted ${colors.white};
  `,
}

export default mixins
