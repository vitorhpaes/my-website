import React from 'react'
import { styled } from '@mui/material'
import ChangeLanguageButton from '../SystemConfigButtons/ChangeLanguageButton'
import ChangeThemeButton from '../SystemConfigButtons/ChangeThemeButton'

const StyledHeader = styled('div')`
    display: flex;
    width: 100vw;
    flex-direction: column;
    gap: ${({ theme }) => theme.size.small}px;

    align-items: center;

    position: absolute;
    top: ${({ theme }) => theme.size.large}px;
`

const SettingsHeader: React.FC = () => {
    return (
        <StyledHeader>
            <ChangeThemeButton />
            <ChangeLanguageButton />
        </StyledHeader>
    )
}

export default SettingsHeader
