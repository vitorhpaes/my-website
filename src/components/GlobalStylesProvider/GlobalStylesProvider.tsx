import React from 'react'
import { GlobalStyles, useTheme } from '@mui/material'

const GlobalStylesMUI = () => {
    const theme = useTheme()

    return (
        <GlobalStyles
            styles={{
                '*, *::before, *::after': {
                    boxSizing: 'border-box',
                    color: theme.palette.text.primary,
                    fontFamily: 'Comfortaa, cursive',
                    WebkitFontSmoothing: 'antialised',
                    MozOsxFontSmoothing: 'grayscale',
                    transition: '.4s',
                },
                html: {
                    margin: 0,
                    padding: 0,
                },
                body: {
                    margin: 0,
                    padding: 0,
                    height: '100%',
                    width: '100%',
                    backgroundColor: theme.palette.background.default,
                },
                '#root': {
                    height: '100vh',
                    width: '100%',
                },
            }}
        />
    )
}

export default GlobalStylesMUI
