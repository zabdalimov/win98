import { Application } from '../../../store/application/reducer'
import React from 'react'
import { TaskEntryStyled } from './TaskEntry.styles'
import Icon from '../../Icon/Icon'

interface Props {
  application: Application
  onClick: (event?: React.MouseEvent<HTMLElement>) => void
}

const TaskEntry: React.FC<Props> = ({ application, onClick }) => {
  return (
    <TaskEntryStyled
      key={application.applicationType.name}
      isPushed={application.isFocused}
      onClick={onClick}
    >
      <Icon
        src={application.applicationType.smallIconSrc}
        alt={application.applicationType.name}
      />
      <span>{application.applicationType.name}</span>
    </TaskEntryStyled>
  )
}

export default TaskEntry
