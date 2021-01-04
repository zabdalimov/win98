import React from 'react'
import modalRootStyles from './ModalRoot.styles'
import { useDispatch, useSelector } from 'react-redux'
import { selectOpenedApplications } from '../../store/application/selectors'
import ApplicationWindow from '../ApplicationWindow/ApplicationWindow'
import { closeApplication } from '../../store/application/actions'

export const ModalRootId = 'modal-root'

const ModalRoot: React.FC = () => {
  const applications = useSelector(selectOpenedApplications)
  const dispatch = useDispatch()
  return (
    <div id={ModalRootId} css={modalRootStyles}>
      {applications.map((a) => (
        <ApplicationWindow
          key={a.applicationType.name}
          applicationName={a.applicationType.name}
          onClose={() => dispatch(closeApplication(a.applicationType.name))}
          isFocused={a.isFocused}
        >
          {a.applicationType.content}
        </ApplicationWindow>
      ))}
    </div>
  )
}

export default ModalRoot
