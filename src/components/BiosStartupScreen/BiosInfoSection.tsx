import styled from '@emotion/styled'
import React from 'react'

export const BiosInfoSectionStyled = styled.table``

export const BiosInfoSection: React.FC = ({ children }) => {
  return (
    <BiosInfoSectionStyled>
      <tbody>{children}</tbody>
    </BiosInfoSectionStyled>
  )
}
