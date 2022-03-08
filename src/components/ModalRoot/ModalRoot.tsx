import styled from '@emotion/styled'
import React from 'react'

import { useApplications } from '../../hooks/useApplications'
import ApplicationWindow from '../ApplicationWindow/ApplicationWindow'

export const ModalRootId = 'modal-root'

export const modalRootZindex = 100

const ModalRootStyled = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: ${modalRootZindex};
  pointer-events: none;

  > * {
    pointer-events: initial;
  }
`

export const ModalRoot: React.FC = () => {
  const { applications, closeApplication } = useApplications()

  return (
    <ModalRootStyled id={ModalRootId}>
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
