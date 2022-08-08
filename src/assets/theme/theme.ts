import { createTheme, SizeProps } from '@mui/material'

const size: SizeProps = {
    none: 0,
    quarck: 2,
    nano: 4,
    small: 8,
    medium: 16,
    standard: 20,
    large: 32,
    largeX: 48,
    largeXX: 56,
    largeXXX: 64,
    huge: 80,
    hugeX: 120,
    hugeXX: 160,
    hugeXXX: 240,
    hugeXXXX: 320,
    auto: 'auto',
}

const brandColors = {
    primary: {
        main: '#eee',
        light: '#eee',
        dark: '#eee',
    },
    secondary: {
        main: '#eee',
        light: '#eee',
        dark: '#eee',
    },
}

const backgroundColors = (mode: 'dark' | 'light') =>
    mode === 'dark' && {
        default: '#1E152A',
        paper: '#02040F',
    }

export const createSiteTheme = (mode: 'light' | 'dark') =>
    createTheme({
        palette: {
            mode,
            brand: brandColors,
            background: backgroundColors(mode),
        },
        size,
        typography: {
            fontFamily: 'Comfortaa',
            fontSize: 14,
        },
        font: {
            size: {
                small: 12,
                medium: 14,
                large: 16,
                title: 28,
            },
            family: {
                title: 'Comfortaa',
                default: 'Comfortaa',
            },
            weight: {
                0: '0',
                100: '100',
                200: '200',
                300: '300',
                400: '400',
                500: '500',
                600: '600',
                700: '700',
                800: '800',
                900: '900',
            },
        },
    })
