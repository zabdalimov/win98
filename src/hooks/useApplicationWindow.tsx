import { useModal } from './useModal'
import React, { ReactElement } from 'react'
import ApplicationWindow from '../components/ApplicationWindow/ApplicationWindow'

interface UseApplicationWindowProvided {
  openApplicationWindow: (applicationName: string, child: ReactElement) => void
}

export default function useApplicationWindow(): UseApplicationWindowProvided {
  const { openModal, closeModal } = useModal()

  const openApplicationWindow = (
    applicationName: string,
    child: ReactElement
  ) => {
    openModal(
      <ApplicationWindow applicationName={applicationName} onClose={closeModal}>
        {child}
      </ApplicationWindow>
    )
  }

  return {
    openApplicationWindow,
  }
}
