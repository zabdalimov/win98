import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'

import { useDrag } from '../../hooks/useDrag'
import closeButtonIcon from '../../static/icons/close-button-icon.png'
import { changeApplicationFocus } from '../../store/application/actions'
import { Application } from '../../store/application/reducer'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'

import {
  ApplicationWindowContents,
  ApplicationWindowHeader,
  ApplicationWindowName,
  ApplicationWindowStyled,
} from './ApplicationWindow.styles'

interface Props {
  application: Application
  onClose: () => void
}

const ApplicationWindow: React.FC<Props> = ({
  application,
  children,
  onClose,
}) => {
  const { applicationType, isFocused } = application
  const ref = useRef<HTMLDivElement>(null)

  const dispatch = useDispatch()
  const focus = () =>
    dispatch(changeApplicationFocus(applicationType.name, true))

  const { onMouseDown } = useDrag({ ref })

  return (
    <ApplicationWindowStyled
      isFocused={isFocused}
      onMouseDown={focus}
      ref={ref}
    >
      <ApplicationWindowHeader isFocused={isFocused} onMouseDown={onMouseDown}>
        <Icon src={applicationType.smallIconSrc} alt={applicationType.name} />
        <ApplicationWindowName>{applicationType.name}</ApplicationWindowName>
        <Button onClick={onClose}>
          <Icon src={closeButtonIcon} alt={'Close button'} />
        </Button>
      </ApplicationWindowHeader>
      <ApplicationWindowContents>{children}</ApplicationWindowContents>
    </ApplicationWindowStyled>
  )
}

export default ApplicationWindow
