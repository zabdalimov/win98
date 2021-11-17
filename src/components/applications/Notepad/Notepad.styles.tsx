import mixins from '../../../styles/mixins.styles'
import styled from '@emotion/styled'

export const NotepadStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const NotepadMenu = styled.div`
  display: flex;
`

export const NotepadTextArea = styled.textarea`
  height: 100%;
  resize: none;
  ${mixins.standardBorderInvertedAlt}
`
