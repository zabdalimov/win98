import styled from '@emotion/styled'
import React from 'react'

import { useBiosLoading } from '../../hooks/useBiosLoading'
import { useShutDown } from '../../hooks/useShutDown'
import { useWindowsLoading } from '../../hooks/useWindowsLoading'
import cursorDefault from '../../static/cursor-default.png'
import { BiosStartupScreen } from '../BiosStartupScreen/BiosStartupScreen'
import DesktopGrid from '../DesktopGrid/DesktopGrid'
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary'
import { ModalRoot } from '../ModalRoot/ModalRoot'
import { ShutDownScreen } from '../ShutDownScreen/ShutDownScreen'
import TaskBar from '../TaskBar/TaskBar'
import { WindowsStartupScreen } from '../WindowsStartupScreen/WindowsStartupScreen'

const MainWindowStyled = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1024px;
  max-height: 768px;
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: url(${cursorDefault}), auto;
  font-family: ${({ theme }) => theme.fontFamilies.windows95};
  user-select: none;

  img {
    image-rendering: pixelated;
  }
`
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
