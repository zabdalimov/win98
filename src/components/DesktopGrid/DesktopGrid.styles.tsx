import { css } from '@emotion/react'
import colors from '../../styles/colors.styles'
import sizings from '../../styles/sizings.styles'

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
      color: ${colors.white};
      font-size: 12px;
      text-align: center;
      margin-top: 6px;
    }
  `,
}

export default desktopGridStyles
