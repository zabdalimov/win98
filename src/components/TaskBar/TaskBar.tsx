import React from 'react'
import StartButton from './StartButton/StartButton'
import Separator from '../Separator/Separator'
import TimerSection from './Timer/TimerSection'
import useCurrentDate from '../../hooks/useCurrentDate'
import taskBarStyles from './TaskBar.styles'
import { useDispatch, useSelector } from 'react-redux'
import { selectOpenedApplications } from '../../store/application/selectors'
import { focusApplication } from '../../store/application/actions'
import TaskEntry from './TaskEntry/TaskEntry'

const TaskBar: React.FC = () => {
  const applications = useSelector(selectOpenedApplications)

  const dispatch = useDispatch()

  const currentDate = useCurrentDate()

  return (
    <div css={taskBarStyles.taskBar}>
      <StartButton />
      <Separator />
      {applications.map((a) => (
        <TaskEntry
          key={a.name}
          application={a}
          onClick={() => dispatch(focusApplication(a.name))}
        />
      ))}
      <Separator />
      <TimerSection date={currentDate} />
    </div>
  )
}

export default TaskBar
