import React from 'react'
import './TaskBar.css'
import StartButton from './StartButton/StartButton'

const TaskBar: React.FC = () => {
  return (
    <div className="TaskBar">
      <StartButton />
    </div>
  )
}

export default TaskBar
