import React from 'react'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'

import theme from './assets/styles/theme'
import Layout from './components/Layout/Layout'
import GlobalStylesMUI from './components/Layout/GlobalStyles'

const App = () => {
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
