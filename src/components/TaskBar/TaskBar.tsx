import React from 'react'

import { useApplications } from '../../hooks/useApplications'
import useCurrentDate from '../../hooks/useCurrentDate'
import { Application } from '../../store/application/reducer'
import Separator from '../Separator/Separator'

import DateTimeSection from './NotificationArea/NotificationArea'
import StartButton from './StartButton/StartButton'
import { TaskBarStyled } from './TaskBar.styles'
import TaskEntry from './TaskEntry/TaskEntry'

const TaskBar: React.FC = () => {
  const { applications } = useApplications()

  const { changeApplicationFocus } = useApplications()
  const onClick = (a: Application) =>
    changeApplicationFocus(a.applicationType.name, !a.isFocused)

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
