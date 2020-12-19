/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'
import Icon, { IconProps } from '../../Icon/Icon'
import soundIcon from '../../../static/icons/sound-icon.png'
import timerStyles from './Timer.styles'

interface Props {
  date: Date
}

const TimerSection: React.FC<Props> = ({ date }) => {
  const icons: IconProps[] = [{ src: soundIcon, alt: 'Sound' }]

  return (
    <div css={timerStyles.timer}>
      {icons.map((i) => (
        <Icon key={i.src} src={i.src} alt={i.alt} />
      ))}
      <div css={timerStyles.time}>
        {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
    </div>
  )
}

export default TimerSection
