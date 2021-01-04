import { css } from '@emotion/react'

export const modalRootZindex = 100

const modalRootStyles = css`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: ${modalRootZindex};
  pointer-events: none;

  > * {
    pointer-events: initial;
  }
`

export default modalRootStyles
