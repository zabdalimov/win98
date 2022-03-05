import React from 'react'

import { useAudio } from '../../../hooks/useAudio'
import { useVolume } from '../../../hooks/useVolume'
import { Slider } from '../../Slider/Slider'

import { VolumeControlStyled } from './VolumeControl.styles'

export const VolumeControl: React.FC = () => {
  const { volume, setVolume } = useVolume()
  const { playAudio } = useAudio()

  const onHandleRelease = (value: number) => {
    setVolume(value)
    // volume is not set instantly, so we need to pass it here as a workaround
    playAudio('ding.mp3', value)
  }

  return (
    <VolumeControlStyled>
      <p>Volume</p>
      <Slider
        min={0}
        max={1}
        value={volume}
        orientation={'vertical'}
        onHandleRelease={onHandleRelease}
      />
    </VolumeControlStyled>
  )
}
