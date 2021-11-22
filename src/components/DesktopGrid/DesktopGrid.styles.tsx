import { css } from '@emotion/react'
import sizings from '../../styles/sizings.styles'
import mixins from '../../styles/mixins.styles'
import { theme } from '../../styles/theme'

const desktopGridStyles = {
  desktopGrid: css`
    height: calc(100% - ${sizings.taskbarHeight});
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: start;
  `,
  desktopGridEntry: css`
    width: 70px;
    height: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    margin: 3px;

    > span {
      position: relative;
      color: ${theme.colors.white};
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
        background-color: ${theme.colors.darkBlue};
      }
    }
  `,
}

export default desktopGridStyles
