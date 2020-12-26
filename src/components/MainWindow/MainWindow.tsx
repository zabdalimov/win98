import React from 'react'
import mainWindowStyles from './MainWindow.styles'
import TaskBar from '../TaskBar/TaskBar'
import DesktopGrid from '../DesktopGrid/DesktopGrid'

const MainWindow: React.FC = () => {
  return (
    <div css={mainWindowStyles}>
      <DesktopGrid />
      <TaskBar />
    </div>
  )
}

export default MainWindow
