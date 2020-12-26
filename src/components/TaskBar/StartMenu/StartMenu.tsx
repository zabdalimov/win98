import React from 'react'
import startMenuStyles from './StartMenu.styles'
import Icon from '../../Icon/Icon'
import dirExecIcon from '../../../static/icons/dir-exec-icon.png'
import settingsIcon from '../../../static/icons/settings-icon.png'
import searchIcon from '../../../static/icons/search-file-icon.png'
import helpIcon from '../../../static/icons/help-book-icon.png'
import applicationHourglassIcon from '../../../static/icons/application-hourglass-icon.png'
import winKeyIcon from '../../../static/icons/win-key-icon.png'
import shutDownIcon from '../../../static/icons/shut-down-icon.png'
import Separator from '../Separator/Separator'

interface StartMenuEntry {
  icon: string
  label: string
}

const StartMenu: React.FC = () => {
  const entries: (StartMenuEntry | 'separator')[] = [
    {
      icon: dirExecIcon,
      label: 'Programs',
    },
    {
      icon: settingsIcon,
      label: 'Settings',
    },
    {
      icon: searchIcon,
      label: 'Find',
    },
    {
      icon: helpIcon,
      label: 'Help',
    },
    {
      icon: applicationHourglassIcon,
      label: 'Run',
    },
    'separator',
    {
      icon: winKeyIcon,
      label: 'Log Off...',
    },
    {
      icon: shutDownIcon,
      label: 'Shut Down...',
    },
  ]
  return (
    <div css={startMenuStyles.startMenu}>
      <div css={startMenuStyles.windowsBlueLine}>
        <span>Windows98</span>
      </div>
      <div css={startMenuStyles.startMenuEntries}>
        {entries.map((entry, index) =>
          entry === 'separator' ? (
            <Separator key={index} orientation={'horizontal'} />
          ) : (
            <div key={entry.label} css={startMenuStyles.startMenuEntry}>
              <Icon src={entry.icon} alt={entry.label} />
              <span>{entry.label}</span>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default StartMenu
