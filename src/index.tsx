import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import MainWindow from './components/MainWindow/MainWindow'
import { Provider as StoreProvider } from 'react-redux'
import { store } from './store/store'
import { ThemeProvider } from '@emotion/react'
import { theme } from './styles/theme'

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <MainWindow />
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
