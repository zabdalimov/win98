import React from 'react'
import { VolumeControlStyled } from './VolumeControl.styles'
import { Slider } from '../../Slider/Slider'
import { playAudio } from '../../../audio'

export const VolumeControl: React.FC = () => {
  const onChange = (value: number) => {
    playAudio('ding.mp3', value)
  }
  return (
    <VolumeControlStyled>
      <p>Volume</p>
      <Slider min={0} max={1} orientation={'vertical'} onChange={onChange} />
    </VolumeControlStyled>
  )
}
