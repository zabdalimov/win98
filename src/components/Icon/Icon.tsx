/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'
import { iconStyles } from './Icon.styles'

export interface IconProps {
  src: string
  alt: string
}

const Icon: React.FC<IconProps> = ({ src, alt }) => {
  return <img css={iconStyles} src={src} alt={alt} draggable={false} />
}

export default Icon
