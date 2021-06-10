import styled from '@emotion/styled'
import { SliderOrientation, SliderProps } from './Slider'
import { css } from '@emotion/react'
import mixins from '../../styles/mixins.styles'
import colors from '../../styles/colors.styles'

const sliderThumbWidth = 8
const sliderThumbHeight = 18

const sliderTrackHeight = 4

type Props = Pick<SliderProps, 'orientation'>

export const SliderStyled = styled.div<Props>`
  position: relative;
  width: 100%;
`

export const SliderTrack = styled.div<Props>`
  position: absolute;
  width: 100%;
  height: ${sliderTrackHeight}px;
  background: red;
`

// TODO customize cursor if windows had some
export const SliderHandle = styled.div<Props>`
  ${mixins.standardBorder};
  background-color: ${colors.baseGray};
  position: absolute;
  top: -${(sliderThumbHeight - sliderTrackHeight) * 0.5}px;
  width: ${sliderThumbWidth}px;
  height: ${sliderThumbHeight}px;
  cursor: pointer;
`
