import styles from './ApplicationWindow.styles'
import React, { useRef } from 'react'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import closeButtonIcon from '../../static/icons/close-button-icon.png'
import { useDrag } from '../../hooks/useDrag'
import { useDispatch } from 'react-redux'
import { changeFocusApplication } from '../../store/application/actions'

interface Props {
  applicationName: string
  onClose: () => void
  isFocused: boolean
}

const ApplicationWindow: React.FC<Props> = ({
  applicationName,
  children,
  onClose,
  isFocused,
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const dispatch = useDispatch()
  const focus = () => dispatch(changeFocusApplication(applicationName, true))

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
        <span>{applicationName}</span>
        <Button onClick={onClose}>
          <Icon src={closeButtonIcon} alt={'Close button'} />
        </Button>
      </div>
      <div css={styles.applicationWindowContents}>{children}</div>
    </div>
  )
}

export default ApplicationWindow
