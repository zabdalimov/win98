import React, { useEffect, useState } from 'react'
import './TaskBar.css'
import StartButton from './StartButton/StartButton'
import Separator from './Separator/Separator'
import Timer from './Timer/Timer'

const TaskBar: React.FC = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    setTimeout(() => setDate(new Date()), 1000)
  }, [date])

  return (
    <div className="TaskBar">
      <StartButton />
      <Separator />
      <Timer date={date} />
    </div>
  )
}

export default TaskBar
