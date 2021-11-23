import styled from '@emotion/styled'

import mixins from '../../styles/mixins.styles'

export const MenuBarEntryStyled = styled.button`
  background-color: ${({ theme }) => theme.colors.baseGray};
  margin: 3px 0 3px 6px;
  padding: 2px;

  :hover {
    ${mixins.thinBorder}
  }

  :active {
    ${mixins.thinBorderInverted}
  }
`
