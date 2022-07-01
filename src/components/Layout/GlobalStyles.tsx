import React from 'react'
import { GlobalStyles, useTheme } from '@mui/material'

const GlobalStylesMUI = () => {
    const theme = useTheme()
        
    return (<GlobalStyles
        styles={{
            '*, *::before, *::after': {
                boxSizing: 'border-box',
                color: theme.palette.text.primary
            },
            html: {
                margin: 0,
                padding: 0,
                '-webkit-font-smoothing': 'antialiased',
                '-moz-osx-font-smoothing': 'grayscale',
            },
            body: {
                margin: 0,
                padding: 0,
                height: '100%',
                width: '100%',
            },
            '#root': {
                height: '100vh',
                width: '100%',
            },
        }}
    />)
}

export default GlobalStylesMUI
