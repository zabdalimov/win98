import React from 'react'
import { IconStyled } from './Icon.styles'

export interface IconProps {
  src: string
  alt: string
  draggable?: boolean
  onClick?: (event?: React.MouseEvent<HTMLImageElement>) => void
}

const Icon: React.FC<IconProps> = ({
  src,
  alt,
  draggable = false,
  onClick,
}) => {
  return (
    <IconStyled src={src} alt={alt} draggable={draggable} onClick={onClick} />
  )
}

export default Icon
