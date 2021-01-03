import { Application } from '../../../store/application/reducer'
import Button from '../../Button/Button'
import React from 'react'
import taskEntryStyles from './TaskEntry.styles'

interface Props {
  application: Application
  onClick: (event?: React.MouseEvent<HTMLElement>) => void
}

const TaskEntry: React.FC<Props> = ({ application, onClick }) => {
  return (
    <Button
      key={application.name}
      isPushed={application.isFocused}
      onClick={onClick}
      className={(props) => taskEntryStyles(props.isPushed || false)}
    >
      {application.name}
    </Button>
  )
}

export default TaskEntry
