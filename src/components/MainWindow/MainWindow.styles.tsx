import colors from '../../styles/colors.styles'
import cursorDefault from '../../static/cursor-default.png'
import styled from '@emotion/styled'

export const MainWindowStyled = styled.div`
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
