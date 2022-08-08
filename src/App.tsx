import React from 'react'
import GlobalStylesMUI from './components/Layout/GlobalStyles'

import { Provider as StoreProvider } from 'react-redux'
import { store } from './state/store'

import ConfigProvider from './config/ConfigProvider'
import Router from './routes'

import './index.css'

const App = () => {
    return (
        <StoreProvider store={store}>
            <ConfigProvider>
                <GlobalStylesMUI />
                <Router />
            </ConfigProvider>
        </StoreProvider>
    )
}

export default App
