import styles from './ApplicationWindow.styles'
import React from 'react'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import closeButtonIcon from '../../static/icons/close-button-icon.png'

interface Props {
  applicationName: string
}

const ApplicationWindow: React.FC<Props> = ({ applicationName, children }) => {
  return (
    <div css={styles.applicationWindow}>
      <div css={styles.applicationWindowHeader}>
        <span>{applicationName}</span>
        <Button>
          <Icon src={closeButtonIcon} alt={'Close button'} />
        </Button>
      </div>
      <div css={styles.applicationWindowContents}>{children}</div>
    </div>
  )
}

export default ApplicationWindow
