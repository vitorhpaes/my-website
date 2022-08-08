import '@mui/material'
import createPalette from '@mui/material/styles/createPalette'

declare module '@mui/material' {
    interface FontSizeProps {
        small: number
        medium: number
        large: number
        title: number
    }
    export type FontSizeKey = keyof FontSizeProps

    interface FontFamilyProps {
        title: string
        default: string
    }
    export type FontFamilyKey = keyof FontFamilyProps

    interface FontWeightProps {
        '0': string
        '100': string
        '200': string
        '300': string
        '400': string
        '500': string
        '600': string
        '700': string
        '800': string
        '900': string
    }
    export type FontWeightKey = keyof FontWeightProps

    export interface FontProps {
        size: FontSizeProps
        family: FontFamilyProps
        weight: FontWeightProps
    }

    interface SizeProps {
        none: 0
        nano: number
        quarck: number
        small: number
        medium: number
        standard: number
        large: number
        largeX: number
        largeXX: number
        largeXXX: number
        huge: number
        hugeX: number
        hugeXX: number
        hugeXXX: number
        hugeXXXX: number
        auto: 'auto'
    }
    export type SizeKey = keyof SizeProps

    interface PaletteOptions {
        brand?: {
            primary?: {
                main: string
                light: string
                dark: string
            }
            secondary?: {
                main: string
                light: string
                dark: string
            }
        }
    }

    export type ColorMainKey = 'primary' | 'secondary'

    interface CustomTheme {
        size: SizeProps
        font: FontProps
    }

    interface Theme extends CustomTheme {}
    interface ThemeOptions extends CustomTheme {}
}
