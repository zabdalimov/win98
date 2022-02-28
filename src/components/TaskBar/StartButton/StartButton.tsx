import React from 'react'

import {
  clickOutsideWrapper,
  ClickOutsideWrapperProps,
} from '../../../hocs/clickOutsideWrapper'
import logo from '../../../static/icons/w98-icon.png'
import Icon from '../../Icon/Icon'
import StartMenu from '../StartMenu/StartMenu'

import {
  StartButtonContainer,
  StartButtonStyled,
  StartButtonText,
} from './StartButton.styles'

const StartButton: React.FC<ClickOutsideWrapperProps> = ({
  isOpen,
  toggleIsOpen,
  wrapperRef,
}) => {
  return (
    <StartButtonContainer ref={wrapperRef}>
      {isOpen && <StartMenu closeMenu={toggleIsOpen} />}
      <StartButtonStyled isPushed={isOpen} onClick={toggleIsOpen}>
        <Icon src={logo} alt="Windows 98 Icon" />
        <StartButtonText>Start</StartButtonText>
      </StartButtonStyled>
    </StartButtonContainer>
  )
}

export default clickOutsideWrapper(StartButton)
