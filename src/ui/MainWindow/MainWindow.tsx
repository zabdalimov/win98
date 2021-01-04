import React from 'react'
import mainWindowStyles from './MainWindow.styles'
import TaskBar from '../TaskBar/TaskBar'
import DesktopGrid from '../DesktopGrid/DesktopGrid'
import ModalRoot from '../ModalRoot/ModalRoot'

const MainWindow: React.FC = () => {
  return (
    <div css={mainWindowStyles}>
      <ModalRoot />
      <DesktopGrid />
      <TaskBar />
    </div>
  )
}

export default MainWindow
