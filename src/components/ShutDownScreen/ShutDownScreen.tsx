import styled from '@emotion/styled'
import React from 'react'

const ShutDownScreenStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
`

export const ShutDownScreen: React.FC = () => {
  return <ShutDownScreenStyled />
}
