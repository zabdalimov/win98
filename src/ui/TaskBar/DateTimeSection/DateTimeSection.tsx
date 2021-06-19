import React from 'react'
import Icon, { IconProps } from '../../Icon/Icon'
import soundIcon from '../../../static/icons/sound-icon.png'
import dateTimeSectionStyles from './DateTimeSection.styles'
import {
  clickOutsideWrapper,
  ClickOutsideWrapperProps,
} from '../../helpers/clickOutsideWrapper'
import { VolumeControl } from '../VolumeControl/VolumeControl'

interface Props {
  date: Date
}

// TODO this is not DateTimeSection because of icons, come up with better name
const DateTimeSection: React.FC<Props & ClickOutsideWrapperProps> = ({
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
    <div css={dateTimeSectionStyles.dateTimeSection}>
      <div ref={wrapperRef} css={dateTimeSectionStyles.iconSection}>
        {isOpen && <VolumeControl />}
        {icons.map((ip) => (
          <Icon key={ip.src} {...ip} />
        ))}
      </div>
      <div css={dateTimeSectionStyles.time}>
        {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
    </div>
  )
}

export default clickOutsideWrapper(DateTimeSection)
