import React from 'react'

import { useApplications } from '../../../hooks/useApplications'
import applicationHourglassIcon from '../../../static/icons/application-hourglass-icon.png'
import dirExecIcon from '../../../static/icons/dir-exec-icon.png'
import helpIcon from '../../../static/icons/help-book-icon.png'
import searchIcon from '../../../static/icons/search-file-icon.png'
import settingsIcon from '../../../static/icons/settings-icon.png'
import shutDownIcon from '../../../static/icons/shut-down-icon.png'
import winKeyIcon from '../../../static/icons/win-key-icon.png'
import winUpdate from '../../../static/icons/win-update.png'
import { ApplicationType } from '../../../store/application/ApplicationType'
import Icon from '../../Icon/Icon'
import { Separator } from '../../Separator/Separator'

import {
  StartMenuBlueLine,
  StartMenuEntries,
  StartMenuStyled,
  StartMenuEntry as StartMenuEntryComponent,
} from './StartMenu.styles'

interface Props {
  closeMenu: () => void
}

interface StartMenuEntry {
  icon: string
  label: string
  disabled?: boolean
  onClick?: () => void
}

const StartMenu: React.FC<Props> = ({ closeMenu }) => {
  const { openApplication } = useApplications()

  const entries: (StartMenuEntry | 'separator')[] = [
    {
      icon: winUpdate,
      label: 'Windows Update',
      disabled: true,
    },
    'separator',
    {
      icon: dirExecIcon,
      label: 'Programs',
      disabled: true,
    },
    {
      icon: settingsIcon,
      label: 'Settings',
      disabled: true,
    },
    {
      icon: searchIcon,
      label: 'Find',
      disabled: true,
    },
    {
      icon: applicationHourglassIcon,
      label: 'Run',
      disabled: true,
    },
    {
      icon: helpIcon,
      label: 'About',
      onClick: () => openApplication(ApplicationType.About),
    },
    'separator',
    {
      icon: winKeyIcon,
      label: 'Log Off...',
      disabled: true,
    },
    {
      icon: shutDownIcon,
      label: 'Shut Down...',
      disabled: true,
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
            <StartMenuEntryComponent
              key={entry.label}
              onClick={() => entry.onClick?.() && closeMenu()}
              disabled={entry.disabled}
            >
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
