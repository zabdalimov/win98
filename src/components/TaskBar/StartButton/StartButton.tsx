import React from 'react'
import './StartButton.css'
import logo from '../../../static/icons/w98-icon.png'
import Button from '../../Button/Button'

const StartButton: React.FC = () => {
  return (
    <Button className="StartButton">
      <img src={logo} alt="Windows 98 Icon" />
      <span className="StartButtonText">Start</span>
    </Button>
  )
}

export default StartButton
