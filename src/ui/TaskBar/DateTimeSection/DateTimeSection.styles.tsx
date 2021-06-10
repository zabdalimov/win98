import { css } from '@emotion/react'
import colors from '../../../styles/colors.styles'
import { IconStyled } from '../../Icon/Icon.styles'

// TODO extract border styles this as mixin or component
const dateTimeSectionStyles = {
  iconSection: css`
    height: 100%;
    display: flex;
    > ${IconStyled} {
      margin-left: 1px;

      &:first-of-type {
        margin-left: 0;
      }
    }
  `,
  dateTimeSection: css`
    height: 100%;
    display: flex;
    align-items: center;
    padding: 2px;
    border-top: 1px solid ${colors.darkGray};
    border-left: 1px solid ${colors.darkGray};
    border-right: 1px solid ${colors.white};
    border-bottom: 1px solid ${colors.white};
  `,
  time: css`
    margin-left: 11px;
    font-size: 12px;
  `,
}

export default dateTimeSectionStyles
