import React from 'react'
import './Timer.css'

interface Props {
  date: Date
}

const Timer: React.FC<Props> = ({ date }) => {
  return (
    <div className="TimerContainer">
      <div className="Time">
        {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
    </div>
  )
}

export default Timer
