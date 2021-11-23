import React from 'react'

import { MenuBarEntryStyled } from './MenuBarEntry.styles'

interface MenuBarEntryProps {
  label: string
}

const MenuBarEntry: React.FC<MenuBarEntryProps> = ({ label }) => {
  return <MenuBarEntryStyled>{label}</MenuBarEntryStyled>
}

export default MenuBarEntry
