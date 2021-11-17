import { SerializedStyles } from '@emotion/react'
import React from 'react'
import { ButtonStyled } from './Button.styles'

export interface ButtonProps {
  isPushed?: boolean
  className?: (props: ButtonProps) => SerializedStyles
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void
}

const Button: React.FC<ButtonProps> = ({
  isPushed,
  className = () => '',
  onClick = () => void 0,
  children,
}) => {
  return (
    <ButtonStyled
      isPushed={isPushed}
      css={className({ isPushed })}
      onClick={onClick}
    >
      <div>{children}</div>
    </ButtonStyled>
  )
}

export default Button
