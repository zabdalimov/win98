import React from 'react'
import separatorStyles from './Separator.styles'

export interface SeparatorProps {
  orientation?: 'vertical' | 'horizontal'
}

const Separator: React.FC<SeparatorProps> = (props) => {
  return <div css={separatorStyles(props)} />
}

export default Separator
