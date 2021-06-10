import React from 'react'
import { VolumeControlStyled } from './VolumeControl.styles'
import { Slider } from '../../Slider/Slider'

export const VolumeControl: React.FC = () => {
  return (
    <VolumeControlStyled>
      <div>Volume</div>
      <Slider min={1} max={100} orientation={'vertical'} />
    </VolumeControlStyled>
  )
}
