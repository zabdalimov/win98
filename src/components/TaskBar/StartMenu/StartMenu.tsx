import React from 'react'

import applicationHourglassIcon from '../../../static/icons/application-hourglass-icon.png'
import dirExecIcon from '../../../static/icons/dir-exec-icon.png'
import helpIcon from '../../../static/icons/help-book-icon.png'
import searchIcon from '../../../static/icons/search-file-icon.png'
import settingsIcon from '../../../static/icons/settings-icon.png'
import shutDownIcon from '../../../static/icons/shut-down-icon.png'
import winKeyIcon from '../../../static/icons/win-key-icon.png'
import winUpdate from '../../../static/icons/win-update.png'
import Icon from '../../Icon/Icon'
import Separator from '../../Separator/Separator'

import {
  StartMenuBlueLine,
  StartMenuEntries,
  StartMenuStyled,
  StartMenuEntry as StartMenuEntryComponent,
} from './StartMenu.styles'

interface StartMenuEntry {
  icon: string
  label: string
}

const StartMenu: React.FC = () => {
  const entries: (StartMenuEntry | 'separator')[] = [
    {
      icon: winUpdate,
      label: 'Windows Update',
    },
    'separator',
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
    <StartMenuStyled>
      <StartMenuBlueLine>
        <span>Windows98</span>
      </StartMenuBlueLine>
      <StartMenuEntries>
        {entries.map((entry, index) =>
          entry === 'separator' ? (
            <Separator key={index} />
          ) : (
            <StartMenuEntryComponent key={entry.label}>
              <Icon src={entry.icon} alt={entry.label} />
              <span>{entry.label}</span>
            </StartMenuEntryComponent>
          )
        )}
      </StartMenuEntries>
    </StartMenuStyled>
  )
}

export default StartMenu
