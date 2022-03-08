import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'

import { useApplications } from '../../hooks/useApplications'
import ApplicationWindow from '../ApplicationWindow/ApplicationWindow'

export const ModalRootId = 'modal-root'

export const modalRootZindex = 100

const ModalRootStyled = styled.div<{ isBackdropShown?: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: ${modalRootZindex};
  pointer-events: none;

  ${({ isBackdropShown = false }) =>
    isBackdropShown &&
    css`
      background-image: linear-gradient(45deg, #000 25%, transparent 25%),
        linear-gradient(-45deg, #000 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #000 75%),
        linear-gradient(-45deg, transparent 75%, #000 75%);
      background-size: 2px 2px;
      background-position: 0 0, 0 1px, 1px -1px, -1px 0;

      transition: background-image 1s linear;

      pointer-events: initial;
    `}

  > * {
    pointer-events: initial;
  }
`

export const ModalRoot: React.FC = () => {
  const { applications, isBackdropShown, closeApplication } = useApplications()

  return (
    <ModalRootStyled id={ModalRootId} isBackdropShown={isBackdropShown}>
      {applications.map((a) => (
        <ApplicationWindow
          key={a.applicationType.name}
          application={a}
          onClose={() => closeApplication(a.applicationType.name)}
        >
          {a.applicationType.content}
        </ApplicationWindow>
      ))}
    </ModalRootStyled>
  )
}
