import React, { useEffect, useMemo, useState } from 'react'
import { ThemeProvider } from '@mui/material'
import GlobalStylesMUI from './components/Layout/GlobalStyles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createSiteTheme } from '@app/assets/theme/theme'

import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage'

import './index.css'

const App = () => {
    const [themeMode] = useState<'light' | 'dark'>('dark')
    const theme = useMemo(() => createSiteTheme(themeMode), [themeMode])

    return (
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
    )
}

export default App
