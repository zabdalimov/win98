import React from 'react'

import { useBiosLoading } from '../../hooks/useBiosLoading'
import { useShutDown } from '../../hooks/useShutDown'
import { useWindowsLoading } from '../../hooks/useWindowsLoading'
import { BiosStartupScreen } from '../BiosStartupScreen/BiosStartupScreen'
import DesktopGrid from '../DesktopGrid/DesktopGrid'
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary'
import { ModalRoot } from '../ModalRoot/ModalRoot'
import { ShutDownScreen } from '../ShutDownScreen/ShutDownScreen'
import TaskBar from '../TaskBar/TaskBar'
import { WindowsStartupScreen } from '../WindowsStartupScreen/WindowsStartupScreen'

import { MainWindowStyled } from './MainWindow.styles'

const MainWindow: React.FC = () => {
  const { isWindowsLoaded } = useWindowsLoading()
  const { isBiosLoaded } = useBiosLoading()
  const { isShutDown } = useShutDown()

  return (
    <MainWindowStyled>
      <ErrorBoundary>
        {!isBiosLoaded ? (
          <BiosStartupScreen />
        ) : !isWindowsLoaded ? (
          <WindowsStartupScreen />
        ) : isShutDown ? (
          <ShutDownScreen />
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
