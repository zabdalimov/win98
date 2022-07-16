import React from 'react'
import { createRoot } from 'react-dom/client'

import './styles/index.css'
import { App } from './components/App'

const ContainerId = 'root'
const container = document.getElementById(ContainerId)

if (!container) {
  throw new Error(
    `Error while trying to find container element by id ${ContainerId}. React application will not be initialized.`
  )
}

const root = createRoot(container)

root.render(<App />)
