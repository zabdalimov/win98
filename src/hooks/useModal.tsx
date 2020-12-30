import { ReactElement } from 'react'
import { ModalRootId } from '../components/ModalRoot/ModalRoot'
import ReactDOM from 'react-dom'

interface UseModalProvided {
  openModal: (child: ReactElement) => void
  closeModal: () => void
}

export function useModal(): UseModalProvided {
  const openModal = (child: ReactElement) => {
    const modalRoot = document.getElementById(ModalRootId)

    if (modalRoot) {
      ReactDOM.render(child, modalRoot)
    } else {
      console.error("Modal root element wasn't available when closing modal.")
    }
  }

  const closeModal = () => {
    const modalRoot = document.getElementById(ModalRootId)

    if (!modalRoot) {
      console.error("Modal root element wasn't available when closing modal.")
      return
    }

    const unmounted = ReactDOM.unmountComponentAtNode(modalRoot)
    if (!unmounted) {
      console.error(`Element wasn't unmounted when closing modal.`)
    }
  }

  return {
    openModal,
    closeModal,
  }
}
