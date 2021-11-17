import React from 'react'
import SeparatorStyled from './Separator.styles'

export interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical'
}

const Separator: React.FC<SeparatorProps> = ({
  orientation = 'horizontal',
}) => {
  return <SeparatorStyled orientation={orientation} />
}

export default Separator
