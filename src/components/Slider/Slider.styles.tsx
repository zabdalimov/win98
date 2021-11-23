import { css } from '@emotion/react'
import styled from '@emotion/styled'

import mixins from '../../styles/mixins.styles'

import { SliderProps } from './Slider'

const sliderThumbWidth = 8
const sliderThumbHeight = 18

const sliderTrackWidth = 4

type Props = Pick<SliderProps, 'orientation'>

export const SliderStyled = styled.div<Props>`
  position: relative;
  display: flex;

  ${({ orientation }) =>
    orientation === 'horizontal'
      ? css`
          width: 100%;
          align-items: center;
        `
      : css`
          height: 100%;
          flex-direction: column;
          align-items: center;
        `}
`

// TODO border is not visually correct here, probably should use background black + use tricolor mixin
// TODO customize cursor if windows had some
export const SliderTrack = styled.div<Props>`
  position: absolute;
  cursor: pointer;

  ${mixins.standardBorderInvertedAlt};
  padding: 0;

  ${({ orientation }) =>
    orientation === 'horizontal'
      ? css`
          width: 100%;
          height: ${sliderTrackWidth}px;
        `
      : css`
          width: ${sliderTrackWidth}px;
          height: 100%;
        `}
`

// TODO customize cursor if windows had some
export const SliderHandle = styled.div<Props>`
  ${mixins.triColorBorder};
  background-color: ${({ theme }) => theme.colors.baseGray};
  position: absolute;
  cursor: pointer;

  ${({ orientation }) =>
    orientation === 'horizontal'
      ? css`
          top: -${sliderThumbHeight * 0.5}px;
          width: ${sliderThumbWidth}px;
          height: ${sliderThumbHeight}px;
        `
      : css`
          left: -${sliderThumbHeight * 0.5}px;
          width: ${sliderThumbHeight}px;
          height: ${sliderThumbWidth}px;
        `}
`
