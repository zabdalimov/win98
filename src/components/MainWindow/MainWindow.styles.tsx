import colors from '../../styles/colors.styles'
import { css } from '@emotion/react'

const mainWindowStyles = css`
  width: 100%;
  height: 100%;
  max-width: 1024px;
  max-height: 768px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${colors.desktopTheme};
  cursor: url(../../static/cursor-default.png), auto;
  font-family: Windows95, serif;
  user-select: none;

  div {
    box-sizing: border-box;
  }

  img {
    image-rendering: pixelated;
  }
`

export default mainWindowStyles
