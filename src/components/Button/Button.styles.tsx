import { css } from '@emotion/react'
import mixins from '../../styles/mixins.styles'
import colors from '../../styles/colors.styles'
import { ButtonProps } from './Button'

const buttonStyles = {
  button: (props: ButtonProps) => css`
    ${mixins.standardBorder};
    background-color: ${colors.baseGray};
    border: none;
    cursor: inherit;
    font-family: inherit;

    ${props.isPushed ? mixins.standardBorderInverted : ''};

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
  `,
}

export default buttonStyles
