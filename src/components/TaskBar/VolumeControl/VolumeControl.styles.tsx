import styled from '@emotion/styled'
import mixins from '../../../styles/mixins.styles'
import sizings from '../../../styles/sizings.styles'
import colors from '../../../styles/colors.styles'
import { SliderStyled } from '../../Slider/Slider.styles'

export const VolumeControlStyled = styled.div`
  ${mixins.standardBorder};
  position: absolute;
  bottom: calc(${sizings.taskbarHeight} - 4px);
  padding: 8px 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.baseGray};
  z-index: 200;

  & > p {
    font-size: 0.7rem;
  }

  & > ${SliderStyled} {
    margin-top: 6px;
  }

  height: 100px;
`
