import React from 'react'
import desktopGridStyles from './DesktopGrid.styles'
import computerExplorerIcon from '../../static/icons/computer-explorer-icon.png'
import recycleBinEmptyIcon from '../../static/icons/recycle-bin-empty-icon.png'
import ieIcon from '../../static/icons/ie-icon.png'
import Icon from '../Icon/Icon'
import { css } from '@emotion/react'
import useApplicationWindow from '../../hooks/useApplicationWindow'

interface DesktopIcon {
  icon: string
  label: string
}

const DesktopGrid: React.FC = () => {
  const { openApplicationWindow } = useApplicationWindow()

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

  const onDoubleClick = (applicationName: string) => {
    // TODO replace with real one
    const dummyContent = (
      <div
        css={css`
          width: 200px;
          height: 100px;
        `}
      />
    )
    openApplicationWindow(applicationName, dummyContent)
  }

  return (
    <div css={desktopGridStyles.desktopGrid}>
      {icons.map((icon) => (
        <button
          key={icon.label}
          css={desktopGridStyles.desktopGridEntry}
          onDoubleClick={() => onDoubleClick(icon.label)}
        >
          <Icon src={icon.icon} alt={icon.label} />
          <span>{icon.label}</span>
        </button>
      ))}
    </div>
  )
}

export default DesktopGrid
