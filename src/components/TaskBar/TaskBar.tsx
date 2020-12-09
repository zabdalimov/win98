import React from 'react'
import './TaskBar.css'
import StartButton from './StartButton/StartButton'
import Separator from './Separator/Separator'
import Timer from './Timer/Timer'
import useCurrentDate from '../../hooks/useCurrentDate'

const TaskBar: React.FC = () => {
  const date = useCurrentDate()

  return (
    <div className="TaskBar">
      <StartButton />
      <Separator />
      <Timer date={date} />
    </div>
  )
}

export default TaskBar
