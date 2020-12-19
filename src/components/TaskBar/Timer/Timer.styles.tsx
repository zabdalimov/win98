import { css } from '@emotion/react'
import colors from '../../../styles/colors.styles'

const timerStyles = {
  timer: css`
    height: 100%;
    display: flex;
    align-items: center;
    padding: 2px;
    border-top: 1px solid ${colors.darkGray};
    border-left: 1px solid ${colors.darkGray};
    border-right: 1px solid ${colors.white};
    border-bottom: 1px solid ${colors.white};

    [class*='Icon']:not(:first-of-type) {
      margin-left: 1px;
    }
  `,
  time: css`
    margin-left: 11px;
    font-size: 12px;
  `,
}

export default timerStyles
