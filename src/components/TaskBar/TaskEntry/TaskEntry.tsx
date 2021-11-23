import React from 'react'

import { Application } from '../../../store/application/reducer'
import Icon from '../../Icon/Icon'

import { TaskEntryStyled } from './TaskEntry.styles'

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
