/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/react'
import React from 'react'
import buttonStyles from './Button.styles'

interface Props {
  className?: SerializedStyles
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void
}

const Button: React.FC<Props> = ({
  children,
  className = '',
  onClick = () => void 0,
}) => {
  return (
    <button css={[buttonStyles.button, className]} onClick={onClick}>
      <div>{children}</div>
    </button>
  )
}

export default Button
