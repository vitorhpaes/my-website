import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface SettingsState {
    language: 'ptBR' | 'enGB'
    themeMode: 'light' | 'dark'
}

const initialState: SettingsState = {
    language: 'enGB',
    themeMode: 'dark',
}

export const settingsSlice = createSlice({
    name: 'settings',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
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

export const { setSystemLanguage, setSystemThemeMode } = settingsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.settings

export default settingsSlice.reducer
