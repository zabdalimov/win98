import React from 'react'
import { IconStyled } from './Icon.styles'

export interface IconProps {
  src: string
  alt: string
  draggable?: boolean
}

const Icon: React.FC<IconProps> = ({ src, alt, draggable = false }) => {
  return <IconStyled src={src} alt={alt} draggable={draggable} />
}

export default Icon
