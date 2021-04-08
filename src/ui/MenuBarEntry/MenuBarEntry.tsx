import React from 'react'
import menuBarEntryStyles from './MenuBarEntry.styles'

interface MenuBarEntryProps {
  label: string
}

const MenuBarEntry: React.FC<MenuBarEntryProps> = ({ label }) => {
  return <button css={menuBarEntryStyles.menuBarEntry}>{label}</button>
}

export default MenuBarEntry
