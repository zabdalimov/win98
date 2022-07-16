import styled from '@emotion/styled'
import React from 'react'

interface Props {
  children?: React.ReactNode
}

export const BiosInfoSectionStyled = styled.table``

export const BiosInfoSection: React.FC<Props> = ({ children }) => {
  return (
    <BiosInfoSectionStyled>
      <tbody>{children}</tbody>
    </BiosInfoSectionStyled>
  )
}
