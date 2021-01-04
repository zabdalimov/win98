import { Application } from '../../../store/application/reducer'
import Button from '../../Button/Button'
import React from 'react'
import taskEntryStyles from './TaskEntry.styles'
import Icon from '../../Icon/Icon'

interface Props {
  application: Application
  onClick: (event?: React.MouseEvent<HTMLElement>) => void
}

const TaskEntry: React.FC<Props> = ({ application, onClick }) => {
  return (
    <Button
      key={application.applicationType.name}
      isPushed={application.isFocused}
      onClick={onClick}
      className={(props) => taskEntryStyles(props.isPushed || false)}
    >
      <Icon
        src={application.applicationType.smallIconSrc}
        alt={application.applicationType.name}
      />
      <span>{application.applicationType.name}</span>
    </Button>
  )
}

export default TaskEntry
