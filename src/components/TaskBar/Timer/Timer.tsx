import React from 'react'
import './Timer.scss'
import Icon, { IconProps } from '../../Icon/Icon'
import soundIcon from '../../../static/icons/sound-icon.png'

interface Props {
  date: Date
}

const Timer: React.FC<Props> = ({ date }) => {
  const icons: IconProps[] = [{ src: soundIcon, alt: 'Sound' }]

  return (
    <div className="Timer">
      {icons.map((i) => (
        <Icon key={i.src} src={i.src} alt={i.alt} />
      ))}
      <div className="Time">
        {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
    </div>
  )
}

export default Timer
