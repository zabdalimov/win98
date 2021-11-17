import colors from '../../../styles/colors.styles'
import { IconStyled } from '../../Icon/Icon.styles'
import { VolumeControlStyled } from '../VolumeControl/VolumeControl.styles'
import styled from '@emotion/styled'

// TODO extract border styles this as mixin or component
export const NotificationAreaStyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 2px;
  border-top: 1px solid ${colors.darkGray};
  border-left: 1px solid ${colors.darkGray};
  border-right: 1px solid ${colors.white};
  border-bottom: 1px solid ${colors.white};

  ${VolumeControlStyled} {
    right: 50px;
  }
`

export const NotificationAreaIconSection = styled.div`
  height: 100%;
  display: flex;
  > ${IconStyled} {
    margin-left: 1px;

    &:first-of-type {
      margin-left: 0;
    }
  }
`

export const NotificationAreaTime = styled.div`
  margin-left: 11px;
  font-size: 12px;
`
