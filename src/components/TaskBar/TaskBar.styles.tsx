import styled from '@emotion/styled'

import SeparatorStyled from '../Separator/Separator.styles'

import { NotificationAreaStyled } from './NotificationArea/NotificationArea.styles'

export const TaskBarStyled = styled.div`
  height: ${({ theme }) => theme.sizings.taskbarHeight};
  display: flex;
  align-items: center;
  margin-top: auto;
  padding: 4px 2px 2px 2px;
  background-color: ${({ theme }) => theme.colors.baseGray};
  box-shadow: inset 0 1px ${({ theme }) => theme.colors.lightGray},
    inset 0 2px ${({ theme }) => theme.colors.white};

  > ${SeparatorStyled} {
    margin-left: 2px;

    &:nth-last-of-type(2) {
      margin-left: auto;
    }
  }

  > ${NotificationAreaStyled} {
    margin-left: 2px;
  }
`
