import React from 'react'
import StartButton from './StartButton/StartButton'
import Separator from '../Separator/Separator'
import TimerSection from './Timer/TimerSection'
import useCurrentDate from '../../hooks/useCurrentDate'
import taskBarStyles from './TaskBar.styles'

const TaskBar: React.FC = () => {
  const currentDate = useCurrentDate()

  return (
    <div css={taskBarStyles.taskBar}>
      <StartButton />
      <Separator />
      <Separator />
      <TimerSection date={currentDate} />
    </div>
  )
}

export default TaskBar
