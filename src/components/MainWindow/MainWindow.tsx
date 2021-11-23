import React from 'react'

import { useEnvConfig } from '../../hooks/useEnvConfig'
import useStartup from '../../hooks/useStartup'
import DesktopGrid from '../DesktopGrid/DesktopGrid'
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary'
import ModalRoot from '../ModalRoot/ModalRoot'
import { StartupScreen } from '../StartupScreen/StartupScreen'
import TaskBar from '../TaskBar/TaskBar'

import { MainWindowStyled } from './MainWindow.styles'

const MainWindow: React.FC = () => {
  const { isDevelopment } = useEnvConfig()
  const { isLoading } = useStartup(4000, 6000)

  // TODO add startup sound after loading (note: it's blocked if user didn't interact with page)

  return (
    <MainWindowStyled>
      <ErrorBoundary>
        {!isDevelopment && isLoading ? (
          <StartupScreen isLoading={isLoading} />
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
