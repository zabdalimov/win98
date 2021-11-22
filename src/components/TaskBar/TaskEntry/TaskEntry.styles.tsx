import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ButtonStyled } from '../../Button/Button.styles'
import { theme } from '../../../styles/theme'

export const TaskEntryStyled = styled(ButtonStyled)`
  font-size: 11px;
  min-width: 160px;
  height: 100%;
  margin-left: 2px;
  ${({ isPushed }) =>
    isPushed
      ? css`
          font-weight: bold;
          background-color: ${theme.colors.lightGray};
        `
      : ''};

  span {
    margin-left: 3px;
  }

  :focus {
    > div {
      outline: none;
    }
  }
`
