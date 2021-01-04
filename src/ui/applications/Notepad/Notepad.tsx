import React from 'react'
import notepadStyles from './Notepad.styles'

const Notepad: React.FC = ({}) => {
  const menus = ['File', 'Edit', 'Search', 'Help']
  return (
    <div css={notepadStyles.notepad}>
      <div css={notepadStyles.menuBar}>
        {menus.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
      <textarea css={notepadStyles.textArea} />
    </div>
  )
}

export default Notepad
