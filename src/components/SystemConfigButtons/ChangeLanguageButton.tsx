import React, { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '@app/state/hooks'
import { setSystemLanguage } from '@app/state/slices/settings'

import {
    StyledToggleButton,
    StyledToggleButtonGroup,
} from './StyledToggleButtons'

const ChangeLanguageButton = () => {
    const dispatch = useAppDispatch()
    const { language } = useAppSelector((app) => app.settings)

    const handleChangeThemeMode = useCallback(
        (newLanguage: 'enGB' | 'ptBR') => {
            dispatch(setSystemLanguage(newLanguage))
        },
        []
    )

    return (
        <StyledToggleButtonGroup
            value={language}
            exclusive
            top={'medium'}
            onChange={(_, value: 'enGB' | 'ptBR') =>
                handleChangeThemeMode(value)
            }
        >
            <StyledToggleButton value="enGB">en-gb</StyledToggleButton>
            <StyledToggleButton value="ptBR">pt-br</StyledToggleButton>
        </StyledToggleButtonGroup>
    )
}

export default ChangeLanguageButton
