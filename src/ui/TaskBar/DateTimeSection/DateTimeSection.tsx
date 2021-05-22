import React from 'react'
import Icon, { IconProps } from '../../Icon/Icon'
import soundIcon from '../../../static/icons/sound-icon.png'
import dateTimeSectionStyles from './DateTimeSection.styles'

interface Props {
  date: Date
}

const DateTimeSection: React.FC<Props> = ({ date }) => {
  const icons: IconProps[] = [{ src: soundIcon, alt: 'Sound' }]

  return (
    <div css={dateTimeSectionStyles.dateTimeSection}>
      {icons.map((i) => (
        <Icon key={i.src} src={i.src} alt={i.alt} />
      ))}
      <div css={dateTimeSectionStyles.time}>
        {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
    </div>
  )
}

export default DateTimeSection
