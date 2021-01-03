import { css } from '@emotion/react'
import colors from '../../styles/colors.styles'
import mixins from '../../styles/mixins.styles'

const applicationWindowStyles = {
  applicationWindow: css`
    ${mixins.standardBorder};
    padding: 3px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    height: fit-content;
    width: fit-content;
    background-color: ${colors.baseGray};
    display: flex;
    flex-direction: column;
  `,
  // TODO the font is pretty bad here
  applicationWindowHeader: css`
    padding: 2px 3px;
    background-color: ${colors.darkBlue};
    display: flex;
    align-items: center;

    > span {
      font-size: 11px;
      color: ${colors.white};
    }

    > button:first-of-type {
      margin-left: auto;
    }
  `,
  applicationWindowContents: css``,
}

export default applicationWindowStyles
