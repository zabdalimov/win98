import styled from '@emotion/styled'
import startupImage from '../../static/images/startup-image.jpeg'
import colors from '../../styles/colors.styles'

export const StartupScreenStyled = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column-reverse;

  background: no-repeat center url(${startupImage});
  background-size: cover;
`

export const StartupScreenLoading = styled.div`
  width: 100%;
  height: 16px;
  background: linear-gradient(
    0.25turn,
    transparent,
    ${colors.lightBlue} 45% 55%,
    transparent
  );

  animation: loading steps(16) 2s infinite;

  @keyframes loading {
    0% {
      background-position-x: -512px;
    }

    100% {
      background-position-x: 512px;
    }
  }
`
