import { css } from '@emotion/react'
import mixins from '../../../styles/mixins.styles'

const notepadStyles = {
  notepad: css`
    height: 100%;
    display: flex;
    flex-direction: column;
  `,
  menuBar: css`
    display: flex;
  `,
  textArea: css`
    height: 100%;
    resize: none;
    ${mixins.standardBorderInvertedAlt}
  `,
}

export default notepadStyles
