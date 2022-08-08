import React, { useMemo, useState } from 'react'
import { ThemeProvider } from '@mui/material'
import GlobalStylesMUI from './components/Layout/GlobalStyles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createSiteTheme } from '@app/assets/theme/theme'

import { Provider as StoreProvider } from 'react-redux'

import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage'

import './index.css'
import { store } from './state/store'
import { useAppSelector } from './state/hooks'


const App = () => {
    const {themeMode} = useAppSelector(app => app.settings)
    const theme = useMemo(() => createSiteTheme(themeMode), [themeMode])

    return (
        <StoreProvider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStylesMUI />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<HomePage />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </StoreProvider>
    )
}

export default App
