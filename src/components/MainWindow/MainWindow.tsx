/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'
import mainWindowStyles from './MainWindow.styles'
import TaskBar from '../TaskBar/TaskBar'

const MainWindow: React.FC = () => {
  return (
    <div css={mainWindowStyles}>
      <TaskBar />
    </div>
  )
}

export default MainWindow
