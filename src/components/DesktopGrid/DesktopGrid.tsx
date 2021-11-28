import React from 'react'

import { useApplications } from '../../hooks/useApplications'
import { ApplicationType } from '../../store/application/ApplicationType'
import Icon from '../Icon/Icon'

import { DesktopGridEntry, DesktopGridStyled } from './DesktopGrid.styles'

const DesktopGrid: React.FC = () => {
  const { openApplication } = useApplications()

  const applicationTypes = ApplicationType.All

  const onDoubleClick = (applicationType: ApplicationType) => {
    openApplication(applicationType)
  }

  return (
    <DesktopGridStyled>
      {applicationTypes.map((at) => (
        <DesktopGridEntry key={at.name} onDoubleClick={() => onDoubleClick(at)}>
          <Icon src={at.iconSrc} alt={at.name} />
          <span>{at.name}</span>
        </DesktopGridEntry>
      ))}
    </DesktopGridStyled>
  )
}

export default DesktopGrid
