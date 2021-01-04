import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import MainWindow from './ui/MainWindow/MainWindow'
import { Provider as StoreProvider } from 'react-redux'
import { store } from './store/store'

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <MainWindow />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
