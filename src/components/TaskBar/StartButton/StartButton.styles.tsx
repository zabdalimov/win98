import styled from '@emotion/styled'
import Button from '../../Button/Button'

// When trying to style component from the outside, use this instead of StartButtonStyled
export const StartButtonContainer = styled.div`
  height: 100%;
`

export const StartButtonStyled = styled(Button)`
  height: 100%;
  font-weight: bold;
  letter-spacing: 0.5px;
`

export const StartButtonText = styled.span`
  margin-left: 1px;
`
