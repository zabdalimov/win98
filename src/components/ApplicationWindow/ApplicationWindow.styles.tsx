import { css } from '@emotion/react'
import mixins from '../../styles/mixins.styles'
import { modalRootZindex } from '../ModalRoot/ModalRoot.styles'
import styled from '@emotion/styled'
import { ButtonStyled } from '../Button/Button.styles'

export const ApplicationWindowStyled = styled.div<{ isFocused: boolean }>`
  ${mixins.standardBorderAlt};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  height: fit-content;
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.baseGray};
  display: flex;
  flex-direction: column;
  ${({ isFocused }) =>
    isFocused
      ? css`
          z-index: ${modalRootZindex + 1};
        `
      : ''};
`

export const ApplicationWindowName = styled.span``

export const ApplicationWindowHeader = styled.div<{ isFocused: boolean }>`
  padding: 2px 3px;
  background-color: ${({ isFocused, theme }) =>
    isFocused ? theme.colors.darkBlue : theme.colors.darkGray};
  display: flex;
  align-items: center;

  > ${ApplicationWindowName} {
    font-size: 13px;
    color: ${({ isFocused, theme }) =>
      isFocused ? theme.colors.white : theme.colors.baseGray};
    margin-left: 3px;
  }

  > ${ButtonStyled}:first-of-type {
    margin-left: auto;
    padding: 2px;
  }
`

export const ApplicationWindowContents = styled.div`
  width: 600px;
  height: 400px;
`
