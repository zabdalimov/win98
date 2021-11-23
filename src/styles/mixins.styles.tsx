import { css } from '@emotion/react'

import { theme } from './theme'

// TODO names could be better here
// TODO mb rework this as panel component with different options
const mixins = {
  // Padding is added so box shadow is not overlapping with contents of the element
  // white, dark gray
  thinBorder: css`
    box-shadow: inset 1px 1px ${theme.colors.white},
      inset -1px -1px ${theme.colors.darkGray};
    padding: 2px;
  `,
  // dark gray, white
  thinBorderInverted: css`
    box-shadow: inset 1px 1px ${theme.colors.darkGray},
      inset -1px -1px ${theme.colors.white};
    padding: 2px;
  `,
  // white, gray, dark gray, black
  standardBorder: css`
    box-shadow: inset 1px 1px ${theme.colors.white},
      inset 2px 2px ${theme.colors.lightGray},
      inset -1px -1px ${theme.colors.black},
      inset -2px -2px ${theme.colors.darkGray};
    padding: 4px;
  `,
  // gray, white, dark gray, black
  standardBorderAlt: css`
    box-shadow: inset 1px 1px ${theme.colors.lightGray},
      inset 2px 2px ${theme.colors.white}, inset -1px -1px ${theme.colors.black},
      inset -2px -2px ${theme.colors.darkGray};
    padding: 4px;
  `,
  // black, dark gray, gray, white
  standardBorderInverted: css`
    box-shadow: inset 1px 1px ${theme.colors.black},
      inset 2px 2px ${theme.colors.darkGray},
      inset -1px -1px ${theme.colors.white},
      inset -2px -2px ${theme.colors.lightGray};
    padding: 4px;
  `,
  // dark gray, black, gray, white
  standardBorderInvertedAlt: css`
    box-shadow: inset 1px 1px ${theme.colors.darkGray},
      inset 2px 2px ${theme.colors.black}, inset -1px -1px ${theme.colors.white},
      inset -2px -2px ${theme.colors.lightGray};
    padding: 4px;
  `,
  // white, dark gray, black
  triColorBorder: css`
    box-shadow: inset 1px 1px ${theme.colors.white},
      inset -1px -1px ${theme.colors.black},
      inset -2px -2px ${theme.colors.darkGray};
    padding: 4px;
  `,
  dottedBorderBlack: css`
    outline: 1px dotted ${theme.colors.black};
  `,
  dottedBorderWhite: css`
    border: 1px dotted ${theme.colors.white};
  `,
}

export default mixins
