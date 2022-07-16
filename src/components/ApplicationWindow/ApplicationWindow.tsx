import React, { useRef } from 'react'

import { useApplications } from '../../hooks/useApplications'
import { useDrag } from '../../hooks/useDrag'
import closeButtonIcon from '../../static/icons/close-button-icon.png'
import { Application } from '../../store/application/reducer'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'

import {
  ApplicationWindowHeader,
  ApplicationWindowName,
  ApplicationWindowStyled,
} from './ApplicationWindow.styles'

interface Props {
  application: Application
  onClose: () => void

  children?: React.ReactNode
}

const ApplicationWindow: React.FC<Props> = ({
  application,
  children,
  onClose,
}) => {
  const { applicationType, isFocused } = application
  const ref = useRef<HTMLDivElement>(null)

  const { focusApplication } = useApplications()
  const { onMouseDown } = useDrag({ ref })

  return (
    <ApplicationWindowStyled
      isFocused={isFocused}
      onMouseDown={() => focusApplication(applicationType.name)}
      ref={ref}
    >
      <ApplicationWindowHeader isFocused={isFocused} onMouseDown={onMouseDown}>
        <Icon src={applicationType.smallIconSrc} alt={applicationType.name} />
        <ApplicationWindowName>{applicationType.name}</ApplicationWindowName>
        <Button onClick={onClose}>
          <Icon src={closeButtonIcon} alt={'Close button'} />
        </Button>
      </ApplicationWindowHeader>
      {children}
    </ApplicationWindowStyled>
  )
}

export default ApplicationWindow
