import styled from '@emotion/styled'
import React from 'react'

const BiosInfoEntryStyled = styled.tr`
  > td {
    vertical-align: top;
  }
`

export const BiosInfoEntry: React.FC<{
  label: string
  value: string | number
}> = ({ label, value }) => {
  return (
    <BiosInfoEntryStyled>
      <td>{label}</td>
      <td>:</td>
      <td>{value}</td>
    </BiosInfoEntryStyled>
  )
}
