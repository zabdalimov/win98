import styles from './ApplicationWindow.styles'
import React, { useRef } from 'react'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import closeButtonIcon from '../../static/icons/close-button-icon.png'
import { useDrag } from '../../hooks/useDrag'
import { useDispatch } from 'react-redux'
import { changeApplicationFocus } from '../../store/application/actions'
import { Application } from '../../store/application/reducer'

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
    <div
      css={styles.applicationWindow(isFocused)}
      onMouseDown={focus}
      ref={ref}
    >
      <div
        css={styles.applicationWindowHeader(isFocused)}
        onMouseDown={onMouseDown}
      >
        <span>{applicationType.name}</span>
        <Button onClick={onClose}>
          <Icon src={closeButtonIcon} alt={'Close button'} />
        </Button>
      </div>
      <div css={styles.applicationWindowContents}>{children}</div>
    </div>
  )
}

export default ApplicationWindow
