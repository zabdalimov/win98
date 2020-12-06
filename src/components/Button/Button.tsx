import React from 'react'
import './Button.css'

interface Props {
  className?: string
}

const Button: React.FC<Props> = ({ children, className }) => {
  // TODO figure out how to pass arrays instead (mb emotion or styled components)
  return (
    <button className={`Button${className ? ' ' + className : ''}`}>
      {children}
    </button>
  )
}

export default Button
