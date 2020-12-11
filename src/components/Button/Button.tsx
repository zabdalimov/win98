import React from 'react'
import './Button.scss'
import classNames from 'classnames'

interface Props {
  className?: string
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void
}

const Button: React.FC<Props> = ({
  children,
  className,
  onClick = () => void 0,
}) => {
  const btnClass = classNames('Button', className)
  return (
    <button className={btnClass} onClick={onClick}>
      <div className="InnerContainer">{children}</div>
    </button>
  )
}

export default Button
