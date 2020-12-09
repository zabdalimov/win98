import React from 'react'
import './MainWindow.scss'
import TaskBar from '../TaskBar/TaskBar'

const MainWindow: React.FC = () => {
  return (
    <div className="MainWindow">
      <TaskBar />
    </div>
  )
}

export default MainWindow
