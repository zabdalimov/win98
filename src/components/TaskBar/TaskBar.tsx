import React from 'react'
import './TaskBar.scss'
import StartButton from './StartButton/StartButton'
import Separator from './Separator/Separator'
import Timer from './Timer/Timer'
import useCurrentDate from '../../hooks/useCurrentDate'

const TaskBar: React.FC = () => {
  const currentDate = useCurrentDate()

  return (
    <div className="TaskBar">
      <StartButton />
      <Separator />
      <Separator />
      <Timer date={currentDate} />
    </div>
  )
}

export default TaskBar
