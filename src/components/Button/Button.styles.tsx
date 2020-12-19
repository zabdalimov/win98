import { css } from '@emotion/react'
import mixins from '../../styles/mixins.styles'
import colors from '../../styles/colors.styles'

const buttonStyles = {
  button: css`
    ${mixins.standardBorder};
    background-color: ${colors.baseGray};
    border: none;
    cursor: inherit;
    font-family: inherit;

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
        outline: 1px dotted ${colors.black};
      }
    }
  `,
}

export default buttonStyles
