import { css } from '@emotion/react'
import mixins from '../../../styles/mixins.styles'
import sizings from '../../../styles/sizings.styles'
import colors from '../../../styles/colors.styles'

const startMenuStyles = {
  startMenu: css`
    ${mixins.standardBorder};
    width: 176px;
    position: absolute;
    bottom: calc(${sizings.taskbarHeight} - 4px);
    padding: 3px 5px 3px 3px;
    display: flex;
    background-color: ${colors.baseGray};
    z-index: 200;
  `,
  // TODO add pixelated gradient here
  windowsBlueLine: css`
    display: flex;
    align-items: center;
    width: 20px;
    padding: 4px 0 0 0;
    color: ${colors.white};
    background-color: ${colors.darkBlue};
    writing-mode: vertical-lr;
    transform: rotate(180deg);
  `,
  startMenuEntries: css`
    display: flex;
    flex-direction: column;
    width: 100%;

    > [class*='separator'] {
      margin: 3px 0 3px 2px;
    }
  `,
  startMenuEntry: css`
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

    :hover {
      background-color: ${colors.darkBlue};
      color: ${colors.white};
    }
  `,
}

export default startMenuStyles
