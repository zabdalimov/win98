import React, { useEffect, useRef, useState } from 'react'

export interface ClickOutsideWrapperProps {
  isOpen: boolean
  toggleIsOpen: () => void
  wrapperRef: React.RefObject<any>
}

export function clickOutsideWrapper<P>(
  Component: React.FC<P & ClickOutsideWrapperProps>
): React.FC<P> {
  return function WrappedComponent(props) {
    const ref = useRef<HTMLElement>(null)
    const [isOpen, setIsOpen] = useState(false)
    const toggleIsOpen = () => setIsOpen((prevState) => !prevState)

    useEffect(() => {
      const handleClick = (e: MouseEvent) => {
        if (!ref.current?.contains(e.target as Node)) {
          setIsOpen(false)
        }
      }
      document.addEventListener('click', handleClick)
      return () => document.removeEventListener('click', handleClick)
    }, [])

    return (
      <Component
        {...props}
        wrapperRef={ref}
        isOpen={isOpen}
        toggleIsOpen={toggleIsOpen}
      />
    )
  }
}
