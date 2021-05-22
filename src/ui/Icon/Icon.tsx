import React from 'react'
import { IconStyled } from './Icon.styles'

export interface IconProps {
  src: string
  alt: string
}

const Icon: React.FC<IconProps> = ({ src, alt }) => {
  return <IconStyled src={src} alt={alt} draggable={false} />
}

export default Icon
