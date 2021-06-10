import React from 'react'
import { SliderHandle, SliderStyled, SliderTrack } from './Slider.styles'

export type SliderOrientation = 'horizontal' | 'vertical'

export interface SliderProps {
  min: number
  max: number
  orientation?: SliderOrientation
  onChange?: (event?: React.ChangeEvent<HTMLElement>) => void
}

export const Slider: React.FC<SliderProps> = ({
  min,
  max,
  orientation = 'horizontal',
  onChange,
}) => {
  return (
    <SliderStyled orientation={orientation}>
      <SliderTrack orientation={orientation} />
      <SliderHandle orientation={orientation} />
    </SliderStyled>
  )
}
