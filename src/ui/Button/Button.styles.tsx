import mixins from '../../styles/mixins.styles'
import colors from '../../styles/colors.styles'
import { ButtonProps } from './Button'
import styled from '@emotion/styled'

export const ButtonStyled = styled.button<ButtonProps>`
  ${mixins.standardBorder};
  display: flex;
  align-items: center;
  background-color: ${colors.baseGray};
  border: none;
  cursor: inherit;
  font-family: inherit;

  ${({ isPushed }) => (isPushed ? mixins.standardBorderInverted : '')};

  > div {
    display: flex;
    align-items: center;
  }

  :active {
    ${mixins.standardBorderInverted};
  }

  :focus {
    outline: none;

    > div {
      ${mixins.dottedBorderBlack};
    }
  }
`
