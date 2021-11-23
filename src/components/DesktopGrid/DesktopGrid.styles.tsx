import styled from '@emotion/styled'

import mixins from '../../styles/mixins.styles'

export const DesktopGridStyled = styled.div`
  height: calc(100% - ${({ theme }) => theme.sizings.taskbarHeight});
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: start;
`

export const DesktopGridEntry = styled.button`
  width: 70px;
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin: 3px;

  > span {
    position: relative;
    color: ${({ theme }) => theme.colors.white};
    font-size: 12px;
    text-align: center;
    margin-top: 6px;
    padding: 1px;
  }

  :active,
  :focus {
    > img {
      filter: brightness(35%) sepia(100%) hue-rotate(180deg) saturate(300%);
    }

    > span {
      ${mixins.dottedBorderWhite};
      /* border fills this space */
      padding: 0;
      background-color: ${({ theme }) => theme.colors.darkBlue};
    }
  }
`
