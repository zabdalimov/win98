/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'
import logo from '../../../static/icons/w98-icon.png'
import Button from '../../Button/Button'
import Icon from '../../Icon/Icon'
import StartMenu from '../StartMenu/StartMenu'
import {
  clickOutsideWrapper,
  ClickOutsideWrapperProps,
} from '../../helpers/clickOutsideWrapper'
import startButtonStyles from './StartButton.styles'

const StartButton: React.FC<ClickOutsideWrapperProps> = ({
  isOpen,
  toggleIsOpen,
  wrapperRef,
}) => {
  return (
    <div ref={wrapperRef}>
      {isOpen && <StartMenu />}
      <Button
        className={startButtonStyles.startButton}
        isPushed={isOpen}
        onClick={toggleIsOpen}
      >
        <Icon src={logo} alt="Windows 98 Icon" />
        <span css={startButtonStyles.startButtonText}>Start</span>
      </Button>
    </div>
  )
}

export default clickOutsideWrapper(StartButton)
