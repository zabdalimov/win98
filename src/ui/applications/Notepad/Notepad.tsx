import React from 'react'
import { NotepadMenu, NotepadStyled, NotepadTextArea } from './Notepad.styles'
import MenuBarEntry from '../../MenuBarEntry/MenuBarEntry'

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
