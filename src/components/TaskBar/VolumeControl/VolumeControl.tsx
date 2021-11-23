import React from 'react'

import { playAudio } from '../../../audio'
import { Slider } from '../../Slider/Slider'

import { VolumeControlStyled } from './VolumeControl.styles'

export const VolumeControl: React.FC = () => {
  const onHandleRelease = (value: number) => {
    playAudio('ding.mp3', value)
  }
  return (
    <VolumeControlStyled>
      <p>Volume</p>
      <Slider
        min={0}
        max={1}
        orientation={'vertical'}
        onHandleRelease={onHandleRelease}
      />
    </VolumeControlStyled>
  )
}
