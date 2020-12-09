import React from 'react'
import './Icon.scss'

export interface IconProps {
  src: string
  alt: string
}

const Icon: React.FC<IconProps> = ({ src, alt }) => {
  return <img className="Icon" src={src} alt={alt} draggable={false} />
}

export default Icon
