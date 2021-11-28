import React from 'react'

import { useApplications } from '../../hooks/useApplications'
import ApplicationWindow from '../ApplicationWindow/ApplicationWindow'

import { ModalRootStyled } from './ModalRoot.styles'

export const ModalRootId = 'modal-root'

const ModalRoot: React.FC = () => {
  const { applications } = useApplications()
  const { closeApplication } = useApplications()
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

export default ModalRoot
