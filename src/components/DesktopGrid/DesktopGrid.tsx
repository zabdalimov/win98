import React from 'react'
import { useDispatch } from 'react-redux'

import { openApplication } from '../../store/application/actions'
import { ApplicationType } from '../../store/application/ApplicationType'
import Icon from '../Icon/Icon'

import { DesktopGridEntry, DesktopGridStyled } from './DesktopGrid.styles'

const DesktopGrid: React.FC = () => {
  const dispatch = useDispatch()

  const applicationTypes = ApplicationType.All

  const onDoubleClick = (applicationType: ApplicationType) => {
    dispatch(openApplication(applicationType))
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
