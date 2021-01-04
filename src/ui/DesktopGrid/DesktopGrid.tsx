import React from 'react'
import desktopGridStyles from './DesktopGrid.styles'
import Icon from '../Icon/Icon'
import { useDispatch } from 'react-redux'
import { openApplication } from '../../store/application/actions'
import { ApplicationType } from '../../store/application/ApplicationType'

const DesktopGrid: React.FC = () => {
  const dispatch = useDispatch()

  const applicationTypes = ApplicationType.All

  const onDoubleClick = (applicationType: ApplicationType) => {
    dispatch(openApplication(applicationType))
  }

  return (
    <div css={desktopGridStyles.desktopGrid}>
      {applicationTypes.map((at) => (
        <button
          key={at.name}
          css={desktopGridStyles.desktopGridEntry}
          onDoubleClick={() => onDoubleClick(at)}
        >
          <Icon src={at.iconSrc} alt={at.name} />
          <span>{at.name}</span>
        </button>
      ))}
    </div>
  )
}

export default DesktopGrid
