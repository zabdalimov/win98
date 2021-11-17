import { SerializedStyles } from '@emotion/react'
import React from 'react'
import { ButtonStyled } from './Button.styles'

export interface ButtonProps {
  isPushed?: boolean
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void
  // This is needed to emotion can pass override styles, when we use styled(Button)``
  className?: SerializedStyles & string
}

const Button: React.FC<ButtonProps> = ({
  isPushed,
  onClick = () => void 0,
  children,
  className,
}) => {
  return (
    <ButtonStyled isPushed={isPushed} onClick={onClick} className={className}>
      <div>{children}</div>
    </ButtonStyled>
  )
}

export default Button
