import { css } from '@emotion/react'
import colors from './colors.styles'

// TODO names could be better here
const mixins = {
  // Padding is added so box shadow is not overlapping with contents of the element
  // white, dark gray
  thinBorder: css`
    box-shadow: inset 1px 1px ${colors.white},
      inset -1px -1px ${colors.darkGray};
    padding: 2px;
  `,
  // dark gray, white
  thinBorderInverted: css`
    box-shadow: inset 1px 1px ${colors.darkGray},
      inset -1px -1px ${colors.white};
    padding: 2px;
  `,
  // white, gray, dark gray, black
  standardBorder: css`
    box-shadow: inset 1px 1px ${colors.white}, inset 2px 2px ${colors.lightGray},
      inset -1px -1px ${colors.black}, inset -2px -2px ${colors.darkGray};
    padding: 4px;
  `,
  // gray, white, dark gray, black
  standardBorderAlt: css`
    box-shadow: inset 1px 1px ${colors.lightGray}, inset 2px 2px ${colors.white},
      inset -1px -1px ${colors.black}, inset -2px -2px ${colors.darkGray};
    padding: 4px;
  `,
  // black, dark gray, gray, white
  standardBorderInverted: css`
    box-shadow: inset 1px 1px ${colors.black}, inset 2px 2px ${colors.darkGray},
      inset -1px -1px ${colors.white}, inset -2px -2px ${colors.lightGray};
    padding: 4px;
  `,
  // dark gray, black, gray, white
  standardBorderInvertedAlt: css`
    box-shadow: inset 1px 1px ${colors.darkGray}, inset 2px 2px ${colors.black},
      inset -1px -1px ${colors.white}, inset -2px -2px ${colors.lightGray};
    padding: 4px;
  `,
  dottedBorderBlack: css`
    outline: 1px dotted ${colors.black};
  `,
  dottedBorderWhite: css`
    border: 1px dotted ${colors.white};
  `,
}

export default mixins
