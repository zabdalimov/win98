import styled from '@emotion/styled'
import React from 'react'

import mixins from '../../../styles/mixins.styles'
import MenuBarEntry from '../../MenuBarEntry/MenuBarEntry'

const NotepadStyled = styled.div`
  width: 600px;
  height: 400px;

  display: flex;
  flex-direction: column;
`

const NotepadMenu = styled.div`
  display: flex;
`

const NotepadTextArea = styled.textarea`
  height: 100%;
  resize: none;
  ${mixins.standardBorderInvertedAlt}
`

const Notepad: React.FC = ({}) => {
  const menus = ['File', 'Edit', 'Search', 'Help']
  return (
    <NotepadStyled>
      <NotepadMenu>
        {menus.map((m) => (
          <MenuBarEntry key={m} label={m} />
        ))}
      </NotepadMenu>
      <NotepadTextArea />
    </NotepadStyled>
  )
}

export default Notepad
