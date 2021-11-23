import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { closeApplication } from '../../store/application/actions'
import { selectOpenedApplications } from '../../store/application/selectors'
import ApplicationWindow from '../ApplicationWindow/ApplicationWindow'

import { ModalRootStyled } from './ModalRoot.styles'

export const ModalRootId = 'modal-root'

const ModalRoot: React.FC = () => {
  const applications = useSelector(selectOpenedApplications)
  const dispatch = useDispatch()
  return (
    <ModalRootStyled id={ModalRootId}>
      {applications.map((a) => (
        <ApplicationWindow
          key={a.applicationType.name}
          application={a}
          onClose={() => dispatch(closeApplication(a.applicationType.name))}
        >
          {a.applicationType.content}
        </ApplicationWindow>
      ))}
    </ModalRootStyled>
  )
}

export default ModalRoot
