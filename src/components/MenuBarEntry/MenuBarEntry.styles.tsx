import colors from '../../styles/colors.styles'
import mixins from '../../styles/mixins.styles'
import styled from '@emotion/styled'

export const MenuBarEntryStyled = styled.button`
  background-color: ${colors.baseGray};
  margin: 3px 0 3px 6px;
  padding: 2px;

  :hover {
    ${mixins.thinBorder}
  }

  :active {
    ${mixins.thinBorderInverted}
  }
`
