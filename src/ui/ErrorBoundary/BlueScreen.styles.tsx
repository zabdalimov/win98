import styled from '@emotion/styled'
import colors from '../../styles/colors.styles'

// TODO there is a different font here
export const BlueScreenStyled = styled.div`
  width: 100%;
  height: 100%;

  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${colors.blue};
`

export const BlueScreenHeading = styled.p`
  color: ${colors.blue};
  background-color: ${colors.baseGray};
  padding: 0.25rem;
  margin-bottom: 0.5rem;
`

export const BlueScreenText = styled.span`
  color: ${colors.white};
`
