import colors from '../../styles/colors.styles'
import { css } from '@emotion/react'
import cursorDefault from '../../static/cursor-default.png'

const mainWindowStyles = css`
  width: 100%;
  height: 100%;
  max-width: 1024px;
  max-height: 768px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${colors.desktopTheme};
  cursor: url(${cursorDefault}), auto;
  font-family: Windows95, serif;
  user-select: none;

  img {
    image-rendering: pixelated;
  }
`

export default mainWindowStyles
