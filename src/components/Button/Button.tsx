import React from 'react'
import './Button.css'
import classNames from 'classnames'

interface Props {
  className?: string
}

const Button: React.FC<Props> = ({ children, className }) => {
  const btnClass = classNames('Button', className)
  return <button className={btnClass}>{children}</button>
}

export default Button
