import React from 'react'

import { useApplications } from '../../hooks/useApplications'
import { ApplicationType } from '../../store/application/ApplicationType'
import Icon from '../Icon/Icon'

import { DesktopGridEntry, DesktopGridStyled } from './DesktopGrid.styles'

const DESKTOP_APPLICATION_TYPES: ApplicationType[] = [
  ApplicationType.MyComputer,
  ApplicationType.RecycleBin,
  ApplicationType.InternetExplorer,
  ApplicationType.Notepad,
]

const DesktopGrid: React.FC = () => {
  const { openApplication } = useApplications()

  const onDoubleClick = (applicationType: ApplicationType) => {
    openApplication(applicationType)
  }

  return (
    <DesktopGridStyled>
      {DESKTOP_APPLICATION_TYPES.map((at) => (
        <DesktopGridEntry key={at.name} onDoubleClick={() => onDoubleClick(at)}>
          <Icon src={at.iconSrc} alt={at.name} />
          <span>{at.name}</span>
        </DesktopGridEntry>
      ))}
    </DesktopGridStyled>
  )
}

export default DesktopGrid
