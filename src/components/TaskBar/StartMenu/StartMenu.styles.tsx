import { css } from '@emotion/react'
import mixins from '../../../styles/mixins.styles'
import sizings from '../../../styles/sizings.styles'
import colors from '../../../styles/colors.styles'

const startMenuStyles = {
  startMenu: css`
    ${mixins.standardBorder};
    height: 100px;
    width: 100px;
    position: absolute;
    bottom: ${sizings.taskbarHeight};
    background-color: ${colors.baseGray};
  `,
}

export default startMenuStyles
