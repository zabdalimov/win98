import styled from '@emotion/styled'

export const modalRootZindex = 100

export const ModalRootStyled = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: ${modalRootZindex};
  pointer-events: none;

  > * {
    pointer-events: initial;
  }
`
