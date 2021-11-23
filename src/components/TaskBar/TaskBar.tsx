import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import useCurrentDate from '../../hooks/useCurrentDate'
import { changeApplicationFocus } from '../../store/application/actions'
import { Application } from '../../store/application/reducer'
import { selectOpenedApplications } from '../../store/application/selectors'
import Separator from '../Separator/Separator'

import DateTimeSection from './NotificationArea/NotificationArea'
import StartButton from './StartButton/StartButton'
import { TaskBarStyled } from './TaskBar.styles'
import TaskEntry from './TaskEntry/TaskEntry'

const TaskBar: React.FC = () => {
  const applications = useSelector(selectOpenedApplications)

  const dispatch = useDispatch()
  const onClick = (a: Application) =>
    dispatch(changeApplicationFocus(a.applicationType.name, !a.isFocused))

  const currentDate = useCurrentDate()

  return (
    <TaskBarStyled>
      <StartButton />
      <Separator orientation={'vertical'} />
      {applications.map((a) => (
        <TaskEntry
          key={a.applicationType.name}
          application={a}
          onClick={() => onClick(a)}
        />
      ))}
      <Separator orientation={'vertical'} />
      <DateTimeSection date={currentDate} />
    </TaskBarStyled>
  )
}

export default TaskBar
