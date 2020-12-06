import React from 'react'
import './TaskBar.css'
import StartButton from './StartButton/StartButton'
import Separator from './Separator/Separator'

const TaskBar: React.FC = () => {
  return (
    <div className="TaskBar">
      <StartButton />
      <Separator />
    </div>
  )
}

export default TaskBar
