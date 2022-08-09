import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface SettingsState {
    language: 'ptBR' | 'enGB'
    themeMode: 'light' | 'dark'
    showMenuButton: boolean
}

const initialState: SettingsState = {
    language: 'enGB',
    themeMode: 'dark',
    showMenuButton: true,
}

export const settingsSlice = createSlice({
    name: 'settings',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setShowMenuButton: (state, action: PayloadAction<boolean>) => {
            state.showMenuButton = !!action.payload
        },
        setSystemLanguage: (state, action: PayloadAction<'ptBR' | 'enGB'>) => {
            if (!action.payload) return
            state.language = action.payload
        },
        setSystemThemeMode: (
            state,
            action: PayloadAction<'dark' | 'light'>
        ) => {
            if (!action.payload) return
            state.themeMode = action.payload
        },
    },
})

export const { setSystemLanguage, setSystemThemeMode, setShowMenuButton } =
    settingsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.settings

export default settingsSlice.reducer
