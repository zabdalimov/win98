import { css } from '@emotion/react'
import styled from '@emotion/styled'

import mixins from '../../../styles/mixins.styles'
import SeparatorStyled from '../../Separator/Separator.styles'

export const StartMenuStyled = styled.div`
  ${mixins.standardBorder};
  width: 176px;
  position: absolute;
  bottom: calc(${({ theme }) => theme.sizings.taskbarHeight} - 4px);
  padding: 3px 5px 3px 3px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.baseGray};
  z-index: 200;
`

// TODO add pixelated gradient here
export const StartMenuBlueLine = styled.div`
  display: flex;
  align-items: center;
  width: 20px;
  padding: 4px 0 0 0;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.darkBlue};
  writing-mode: vertical-lr;
  transform: rotate(180deg);
`

export const StartMenuEntries = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > ${SeparatorStyled} {
    margin: 3px 0 3px 2px;
  }
`

export const StartMenuEntry = styled.div<{ disabled?: boolean }>`
  font-size: 12px;
  display: flex;
  align-items: center;
  height: 30px;

  > img {
    margin-left: 3px;
  }

  > span {
    margin-left: 13px;
  }

  ${({ disabled = false, theme }) =>
    disabled
      ? css`
          // TODO move this somewhere, this is reusable
          color: ${theme.colors.darkGray};
          text-shadow: 1px 1px ${theme.colors.white};
        `
      : css`
          :hover {
            background-color: ${theme.colors.darkBlue};
            color: ${theme.colors.white};
          }
        `}
`
