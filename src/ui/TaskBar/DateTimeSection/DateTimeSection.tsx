import React from 'react'
import Icon, { IconProps } from '../../Icon/Icon'
import soundIcon from '../../../static/icons/sound-icon.png'
import dateTimeSectionStyles from './DateTimeSection.styles'
import { playAudio } from '../../../audio'

interface Props {
  date: Date
}

const DateTimeSection: React.FC<Props> = ({ date }) => {
  const icons: IconProps[] = [
    {
      src: soundIcon,
      alt: 'Sound',
      onClick: () => playAudio('ding.mp3'),
    },
  ]

  return (
    <div css={dateTimeSectionStyles.dateTimeSection}>
      {icons.map((ip) => (
        <Icon key={ip.src} {...ip} />
      ))}
      <div css={dateTimeSectionStyles.time}>
        {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
    </div>
  )
}

export default DateTimeSection
