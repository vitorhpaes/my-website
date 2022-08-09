import React from 'react'
import { styled } from '@mui/material'
import ChangeLanguageButton from '../SystemConfigButtons/ChangeLanguageButton'
import ChangeThemeButton from '../SystemConfigButtons/ChangeThemeButton'

const StyledHeader = styled('div')`
    display: flex;
    width: 100vw;
    gap: ${({ theme }) => theme.size.large}px;

    justify-content: center;

    position: absolute;
    top: ${({ theme }) => theme.size.large}px;
`

const SettingsHeader: React.FC = () => {
    return (
        <StyledHeader>
            <ChangeLanguageButton />
            <ChangeThemeButton />
        </StyledHeader>
    )
}

export default SettingsHeader
