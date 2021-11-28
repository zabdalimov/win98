import React from 'react'

import { useSystem } from '../../hooks/useSystem'
import { BiosStartupScreen } from '../BiosStartupScreen/BiosStartupScreen'
import DesktopGrid from '../DesktopGrid/DesktopGrid'
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary'
import ModalRoot from '../ModalRoot/ModalRoot'
import TaskBar from '../TaskBar/TaskBar'
import { WindowsStartupScreen } from '../WindowsStartupScreen/WindowsStartupScreen'

import { MainWindowStyled } from './MainWindow.styles'

const MainWindow: React.FC = () => {
  const { isBiosLoaded, isWindowsLoaded } = useSystem()

  return (
    <MainWindowStyled>
      <ErrorBoundary>
        {!isBiosLoaded ? (
          <BiosStartupScreen />
        ) : !isWindowsLoaded ? (
          <WindowsStartupScreen />
        ) : (
          <React.Fragment>
            <ModalRoot />
            <DesktopGrid />
            <TaskBar />
          </React.Fragment>
        )}
      </ErrorBoundary>
    </MainWindowStyled>
  )
}

export default MainWindow
