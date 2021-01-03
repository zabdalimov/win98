import { css } from '@emotion/react'

const modalRootStyles = css`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
  pointer-events: none;

  > * {
    pointer-events: initial;
  }
`

export default modalRootStyles
