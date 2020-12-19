/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/react'
import React from 'react'
import buttonStyles from './Button.styles'

export interface ButtonProps {
  isPushed?: boolean
  className?: SerializedStyles
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, className = '', onClick = () => void 0 } = props

  return (
    <button css={[buttonStyles.button(props), className]} onClick={onClick}>
      <div>{children}</div>
    </button>
  )
}

export default Button
