import React from 'react'
import desktopGridStyles from './DesktopGrid.styles'
import computerExplorerIcon from '../../static/icons/computer-explorer-icon.png'
import recycleBinEmptyIcon from '../../static/icons/recycle-bin-empty-icon.png'
import ieIcon from '../../static/icons/ie-icon.png'
import notepadIcon from '../../static/icons/notepad-icon.png'
import Icon from '../Icon/Icon'
import { css } from '@emotion/react'
import { useDispatch } from 'react-redux'
import { openApplication } from '../../store/application/actions'

interface DesktopIcon {
  icon: string
  label: string
}

const DesktopGrid: React.FC = () => {
  const dispatch = useDispatch()

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
    {
      icon: notepadIcon,
      label: 'New Text Document.txt',
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
    dispatch(
      openApplication({
        name: applicationName,
        contents: dummyContent,
      })
    )
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
