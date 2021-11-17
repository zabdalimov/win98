import sizings from '../../styles/sizings.styles'
import colors from '../../styles/colors.styles'
import SeparatorStyled from '../Separator/Separator.styles'
import styled from '@emotion/styled'

export const TaskBarStyled = styled.div`
  height: ${sizings.taskbarHeight};
  display: flex;
  align-items: center;
  margin-top: auto;
  padding: 4px 2px 2px 2px;
  background-color: ${colors.baseGray};
  box-shadow: inset 0 1px ${colors.lightGray}, inset 0 2px ${colors.white};

  > ${SeparatorStyled} {
    margin-left: 2px;

    &:nth-last-of-type(2) {
      margin-left: auto;
    }
  }

  // TODO use DateTimeSection after it's rewritten to styled
  > div:last-of-type {
    margin-left: 2px;
  }
`
