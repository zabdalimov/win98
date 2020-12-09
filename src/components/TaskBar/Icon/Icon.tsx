import React from 'react'
import './Icon.css'

export interface IconProps {
  src: string
  alt: string
}

const Icon: React.FC<IconProps> = ({ src, alt }) => {
  return <img className="Icon" src={src} alt={alt} />
}

export default Icon
