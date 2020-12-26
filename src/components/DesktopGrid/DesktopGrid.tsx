import React from 'react'
import desktopGridStyles from './DesktopGrid.styles'
import computerExplorerIcon from '../../static/icons/computer-explorer-icon.png'
import recycleBinEmptyIcon from '../../static/icons/recycle-bin-empty-icon.png'
import Icon from '../Icon/Icon'

interface DesktopIcon {
  icon: string
  label: string
}

const DesktopGrid: React.FC = () => {
  const icons: DesktopIcon[] = [
    {
      icon: computerExplorerIcon,
      label: 'My Computer',
    },
    {
      icon: recycleBinEmptyIcon,
      label: 'Recycle Bin',
    },
  ]
  return (
    <div css={desktopGridStyles.desktopGrid}>
      {icons.map((icon) => (
        <div key={icon.label} css={desktopGridStyles.desktopGridEntry}>
          <Icon src={icon.icon} alt={icon.label} />
          <span>{icon.label}</span>
        </div>
      ))}
    </div>
  )
}

export default DesktopGrid
