import { SerializedStyles } from '@emotion/react'
import React from 'react'

import { ButtonStyled } from './Button.styles'

export interface ButtonProps {
  isPushed?: boolean
  enableSubmit?: boolean
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void
  // This is needed to emotion can pass override styles, when we use styled(Button)``
  className?: SerializedStyles & string
  // TODO add more options from flex
  alignContent?: 'center'

  children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  isPushed,
  enableSubmit,
  onClick = () => void 0,
  children,
  className,
  alignContent,
}) => {
  return (
    <ButtonStyled
      isPushed={isPushed}
      onClick={onClick}
      className={className}
      alignContent={alignContent}
      // Submit is disabled by default (by adding type 'button')
      type={enableSubmit ? undefined : 'button'}
    >
      <div>{children}</div>
    </ButtonStyled>
  )
}

export default Button
