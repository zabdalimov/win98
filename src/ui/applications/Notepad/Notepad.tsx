import React from 'react'
import notepadStyles from './Notepad.styles'
import MenuBarEntry from '../../MenuBarEntry/MenuBarEntry'

const Notepad: React.FC = ({}) => {
  const menus = ['File', 'Edit', 'Search', 'Help']
  return (
    <div css={notepadStyles.notepad}>
      <div css={notepadStyles.menuBar}>
        {menus.map((m) => (
          <MenuBarEntry key={m} label={m} />
        ))}
      </div>
      <textarea css={notepadStyles.textArea} />
    </div>
  )
}

export default Notepad
