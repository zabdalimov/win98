import colors from '../../styles/colors.styles'
import { css } from '@emotion/react'

const mainWindowStyles = css`
  height: 100%;
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
