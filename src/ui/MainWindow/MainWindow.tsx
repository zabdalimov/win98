import React from 'react'
import mainWindowStyles from './MainWindow.styles'
import TaskBar from '../TaskBar/TaskBar'
import DesktopGrid from '../DesktopGrid/DesktopGrid'
import ModalRoot from '../ModalRoot/ModalRoot'
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary'
import { StartupScreen } from '../StartupScreen/StartupScreen'
import useStartup from '../../hooks/useStartup'
import { useEnvConfig } from '../../hooks/useEnvConfig'

const MainWindow: React.FC = () => {
  const { isDevelopment } = useEnvConfig()
  const { isLoading } = useStartup(4000, 8000)

  // TODO add startup sound after loading (note: it's blocked if user didn't interact with page)

  return (
    <div css={mainWindowStyles}>
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
    </div>
  )
}

export default MainWindow
