import styled from '@emotion/styled'

import cursorDefault from '../../static/cursor-default.png'

export const MainWindowStyled = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1024px;
  max-height: 768px;
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: url(${cursorDefault}), auto;
  font-family: ${({ theme }) => theme.fontFamilies.windows95};
  user-select: none;

  img {
    image-rendering: pixelated;
  }
`
