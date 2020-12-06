import React from 'react'
import './StartButton.css'
import logo from '../../../static/w98-icon.png'

const StartButton: React.FC = () => {
  return (
    <button className="StartButton">
      <img src={logo} alt="Windows 98 Icon" />
      <span className="StartButtonText">Start</span>
    </button>
  )
}

export default StartButton
