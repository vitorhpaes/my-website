import React, { useCallback } from 'react'

import { useAppDispatch, useAppSelector } from '@app/state/hooks'

import { setSystemThemeMode } from '@app/state/slices/settings'

import {
    StyledToggleButtonGroup,
    StyledToggleButton,
} from './StyledToggleButtons'

export default function ChangeThemeButton() {
    const dispatch = useAppDispatch()
    const { themeMode } = useAppSelector((app) => app.settings)

    const handleChangeThemeMode = useCallback(
        (newThemeMode: 'light' | 'dark') => {
            dispatch(setSystemThemeMode(newThemeMode))
        },
        []
    )

    return (
        <StyledToggleButtonGroup
            value={themeMode}
            exclusive
            onChange={(_, value: 'light' | 'dark') =>
                handleChangeThemeMode(value)
            }
        >
            <StyledToggleButton value="dark">dark</StyledToggleButton>
            <StyledToggleButton value="light">light</StyledToggleButton>
        </StyledToggleButtonGroup>
    )
}
