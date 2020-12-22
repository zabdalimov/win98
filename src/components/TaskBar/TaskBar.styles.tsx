import { css } from '@emotion/react'
import sizings from '../../styles/sizings.styles'
import colors from '../../styles/colors.styles'

const taskBarStyles = {
  taskBar: css`
    height: ${sizings.taskbarHeight};
    display: flex;
    align-items: center;
    margin-top: auto;
    padding: 4px 2px 2px 2px;
    background-color: ${colors.baseGray};
    box-shadow: inset 0 1px ${colors.lightGray}, inset 0 2px ${colors.white};

    > [class*='separatorStyles'] {
      margin-left: 2px;

      :nth-last-of-type(2) {
        margin-left: auto;
      }
    }
    // TODO inconsistent naming
    > [class*='timerSection'] {
      margin-left: 2px;
    }
  `,
}

export default taskBarStyles
