import React from 'react'
import mainWindowStyles from './MainWindow.styles'
import TaskBar from '../TaskBar/TaskBar'
import DesktopGrid from '../DesktopGrid/DesktopGrid'
import ModalRoot from '../ModalRoot/ModalRoot'
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary'

const MainWindow: React.FC = () => {
  return (
    <div css={mainWindowStyles}>
      <ErrorBoundary>
        <ModalRoot />
        <DesktopGrid />
        <TaskBar />
      </ErrorBoundary>
    </div>
  )
}

export default MainWindow
