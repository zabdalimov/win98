import React from 'react'

import {
  clickOutsideWrapper,
  ClickOutsideWrapperProps,
} from '../../../hocs/clickOutsideWrapper'
import soundIcon from '../../../static/icons/sound-icon.png'
import Icon, { IconProps } from '../../Icon/Icon'
import { VolumeControl } from '../VolumeControl/VolumeControl'

import {
  NotificationAreaIconSection,
  NotificationAreaStyled,
  NotificationAreaTime,
} from './NotificationArea.styles'

interface Props {
  date: Date
}

const NotificationArea: React.FC<Props & ClickOutsideWrapperProps> = ({
  date,
  isOpen,
  toggleIsOpen,
  wrapperRef,
}) => {
  const icons: IconProps[] = [
    {
      src: soundIcon,
      alt: 'Sound',
      onClick: toggleIsOpen,
    },
  ]

  return (
    <NotificationAreaStyled>
      <NotificationAreaIconSection ref={wrapperRef}>
        {isOpen && <VolumeControl />}
        {icons.map((ip) => (
          <Icon key={ip.src} {...ip} />
        ))}
      </NotificationAreaIconSection>
      <NotificationAreaTime>
        {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </NotificationAreaTime>
    </NotificationAreaStyled>
  )
}

export default clickOutsideWrapper(NotificationArea)
