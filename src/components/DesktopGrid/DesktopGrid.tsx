import React from 'react'
import desktopGridStyles from './DesktopGrid.styles'
import computerExplorerIcon from '../../static/icons/computer-explorer-icon.png'
import recycleBinEmptyIcon from '../../static/icons/recycle-bin-empty-icon.png'
import ieIcon from '../../static/icons/ie-icon.png'
import Icon from '../Icon/Icon'

interface DesktopIcon {
  icon: string
  label: string
}

const DesktopGrid: React.FC = () => {
  // TODO adjust margins on these
  const icons: DesktopIcon[] = [
    {
      icon: computerExplorerIcon,
      label: 'My Computer',
    },
    {
      icon: recycleBinEmptyIcon,
      label: 'Recycle Bin',
    },
    {
      icon: ieIcon,
      label: 'Internet Explorer',
    },
  ]
  return (
    <div css={desktopGridStyles.desktopGrid}>
      {icons.map((icon) => (
        <button key={icon.label} css={desktopGridStyles.desktopGridEntry}>
          <Icon src={icon.icon} alt={icon.label} />
          <span>{icon.label}</span>
        </button>
      ))}
    </div>
  )
}

export default DesktopGrid
