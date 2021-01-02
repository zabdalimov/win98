import styles from './ApplicationWindow.styles'
import React, { useRef } from 'react'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import closeButtonIcon from '../../static/icons/close-button-icon.png'
import { useDrag } from '../../hooks/useDrag'

interface Props {
  applicationName: string
  onClose: () => void
}

const ApplicationWindow: React.FC<Props> = ({
  applicationName,
  children,
  onClose,
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const { onMouseDown } = useDrag(ref)

  return (
    <div css={styles.applicationWindow} ref={ref}>
      <div css={styles.applicationWindowHeader} onMouseDown={onMouseDown}>
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
