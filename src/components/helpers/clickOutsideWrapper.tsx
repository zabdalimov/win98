import React, { useEffect, useRef, useState } from 'react'

export interface ClickOutsideWrapperProps {
  isOpen: boolean
  toggleIsOpen: () => void
  wrapperRef: React.RefObject<any>
}

// TODO add return type when these are fixed
// TODO https://github.com/emotion-js/emotion/issues/2169
// TODO https://github.com/emotion-js/emotion/pull/2181
export function clickOutsideWrapper<Props>(
  Component: React.FC<Props & ClickOutsideWrapperProps>
): React.FC<any> {
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
