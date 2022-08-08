import { useAppDispatch, useAppSelector } from '@app/state/hooks'
import { setSystemThemeMode } from '@app/state/slices/settings'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import React, { useCallback } from 'react'

export default function ChangeThemeButton() {
    const dispatch = useAppDispatch()
    const { themeMode, language } = useAppSelector(app => app.settings)
    
    const handleChangeThemeMode = useCallback((newThemeMode: 'light' | 'dark') => {
        dispatch(setSystemThemeMode(newThemeMode))
    }, [])

  return (
      <ToggleButtonGroup
          value={themeMode}
          exclusive
          onChange={(event, value: 'light' | 'dark') =>
              handleChangeThemeMode(value)
          }
      >
          <ToggleButton value="dark">dark</ToggleButton>
          <ToggleButton value="light">light</ToggleButton>
      </ToggleButtonGroup>
  )
}
