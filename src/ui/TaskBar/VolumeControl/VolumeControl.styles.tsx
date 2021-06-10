import styled from '@emotion/styled'
import mixins from '../../../styles/mixins.styles'
import sizings from '../../../styles/sizings.styles'
import colors from '../../../styles/colors.styles'

export const VolumeControlStyled = styled.div`
  ${mixins.standardBorder};
  position: absolute;
  bottom: calc(${sizings.taskbarHeight} - 4px);
  padding: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.baseGray};
  z-index: 200;

  /* TODO delete this */
  right: 500px;
  height: 200px;
`
