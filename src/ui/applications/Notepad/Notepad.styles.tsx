import { css } from '@emotion/react'
import colors from '../../../styles/colors.styles'

const notepadStyles = {
  notepad: css`
    height: 100%;
    display: flex;
    flex-direction: column;
  `,
  menuBar: css`
    background-color: ${colors.baseGray};
    margin-top: 5px;

    > span {
      margin-left: 10px;
    }
  `,
  textArea: css`
    height: 100%;
    margin-top: 5px;
    resize: none;
  `,
}

export default notepadStyles
