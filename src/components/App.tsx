import { ThemeProvider } from '@emotion/react'
import React from 'react'
import { Provider as StoreProvider } from 'react-redux'

import { store } from '../store/store'
import { theme } from '../styles/theme'

import MainWindow from './MainWindow/MainWindow'

export const App: React.FC = () => {
  return (
    <React.StrictMode>
      <StoreProvider store={store}>
        <ThemeProvider theme={theme}>
          <MainWindow />
        </ThemeProvider>
      </StoreProvider>
    </React.StrictMode>
  )
}
