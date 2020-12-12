import React from 'react'
import './StartButton.scss'
import logo from '../../../static/icons/w98-icon.png'
import Button from '../../Button/Button'
import Icon from '../../Icon/Icon'
import StartMenu from '../StartMenu/StartMenu'
import {
  clickOutsideWrapper,
  ClickOutsideWrapperProps,
} from '../../helpers/clickOutsideWrapper'

const StartButton: React.FC<ClickOutsideWrapperProps> = ({
  isOpen,
  toggleIsOpen,
  wrapperRef,
}) => {
  return (
    <div ref={wrapperRef}>
      {isOpen && <StartMenu />}
      <Button className="StartButton" onClick={toggleIsOpen}>
        <Icon src={logo} alt="Windows 98 Icon" />
        <span className="StartButtonText">Start</span>
      </Button>
    </div>
  )
}

export default clickOutsideWrapper(StartButton)
