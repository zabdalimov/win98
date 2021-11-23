import React, { Ref, useEffect, useRef, useState } from 'react'

export interface ClickOutsideWrapperProps {
  isOpen: boolean
  toggleIsOpen: () => void
  // TODO need more generic type, HTMLElement doesn't work here for some reason
  wrapperRef: Ref<HTMLDivElement>
}

export function clickOutsideWrapper<Props>(
  Component: React.FC<Props & ClickOutsideWrapperProps>
): React.FC<Props> {
  return function WrappedComponent(props) {
    const ref = useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = useState(false)
    const toggleIsOpen = () => setIsOpen((prevState) => !prevState)

    useEffect(() => {
      const handleClick = (e: MouseEvent) => {
        if (!ref.current?.contains(e.target as Node)) {
          setIsOpen(false)
        }
      }
      document.addEventListener('mousedown', handleClick)
      return () => document.removeEventListener('mousedown', handleClick)
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
