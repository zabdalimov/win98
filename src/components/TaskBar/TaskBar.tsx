import React from 'react'
import StartButton from './StartButton/StartButton'
import Separator from '../Separator/Separator'
import DateTimeSection from './DateTimeSection/DateTimeSection'
import useCurrentDate from '../../hooks/useCurrentDate'
import { useDispatch, useSelector } from 'react-redux'
import { selectOpenedApplications } from '../../store/application/selectors'
import { changeApplicationFocus } from '../../store/application/actions'
import TaskEntry from './TaskEntry/TaskEntry'
import { Application } from '../../store/application/reducer'
import { TaskBarStyled } from './TaskBar.styles'

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
